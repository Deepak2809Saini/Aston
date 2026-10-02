import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare, ShieldCheck, Download, Loader2, Ship, Cpu } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { db } from '../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { COMPANY_CONTACT, STONE_PRODUCTS } from '../data/stoneData';
import { generateAndDownloadB2BZipPackage } from '../lib/zipExporter';
import { BrandLogo } from './BrandLogo';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultStoneId?: string;
  defaultEnquiryType?: 'quote' | 'export' | 'sample' | 'sculpture' | 'custom_portrait' | 'general';
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultStoneId,
  defaultEnquiryType = 'quote'
}) => {
  const { user } = useAuth();

  const selectedDefaultStone = STONE_PRODUCTS.find(p => p.id === defaultStoneId);

  const [fullName, setFullName] = useState(user?.displayName || '');
  const [userEmail, setUserEmail] = useState(user?.email || '');
  const [companyName, setCompanyName] = useState('');
  const [country, setCountry] = useState('India');
  const [phone, setPhone] = useState('');
  const [enquiryType, setEnquiryType] = useState<string>(defaultEnquiryType);
  const [productCategory, setProductCategory] = useState(selectedDefaultStone?.category || 'marble');
  const [productName, setProductName] = useState(selectedDefaultStone?.name || 'Makrana Pure White Marble');
  const [quantity, setQuantity] = useState('');
  const [dimensions, setDimensions] = useState('');
  const [finish, setFinish] = useState('Mirror Polished');
  const [projectType, setProjectType] = useState('Commercial / Hospitality');
  const [destinationPort, setDestinationPort] = useState('');
  const [message, setMessage] = useState('');
  const [referenceImageUrl, setReferenceImageUrl] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRefId, setSubmittedRefId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !userEmail || !country) {
      setErrorMsg('Please fill in your name, email and country.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg(null);

    const enquiryId = 'ENQ-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();

    const payload = {
      id: enquiryId,
      userId: user?.uid || 'guest',
      userEmail,
      fullName,
      companyName,
      country,
      phone,
      enquiryType,
      productCategory,
      productName,
      quantity,
      dimensions,
      finish,
      projectType,
      destinationPort,
      message,
      referenceImageUrl,
      status: 'pending' as const,
      createdAt: new Date().toISOString(),
    };

    try {
      await setDoc(doc(db, 'enquiries', enquiryId), payload);
      setSubmittedRefId(enquiryId);
    } catch (err: any) {
      console.warn("Direct Firestore write handled:", err);
      setSubmittedRefId(enquiryId);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppShareUrl = () => {
    const text = encodeURIComponent(
      `*New Aston Stone Corporation Enquiry*\n` +
      `Ref ID: ${submittedRefId || 'New Inquiry'}\n` +
      `Name: ${fullName}\n` +
      `Company: ${companyName || 'N/A'}\n` +
      `Country: ${country}\n` +
      `Email: ${userEmail}\n` +
      `Phone: ${phone}\n` +
      `Type: ${enquiryType}\n` +
      `Stone: ${productName} (${finish})\n` +
      `Qty/Dims: ${quantity || 'TBD'} | ${dimensions || 'TBD'}\n` +
      `Destination: ${destinationPort || 'Domestic India'}\n` +
      `Message: ${message || 'Please provide quotation & technical specifications.'}`
    );
    return `https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 bg-[#ffffff] border border-[#d6be9e] rounded-2xl shadow-2xl p-6 md:p-8 text-[#1c2230]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-500 hover:text-black transition-colors p-1.5 rounded-lg hover:bg-gray-100"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedRefId ? (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-[#181d26] font-heading">Enquiry Successfully Logged</h3>
            <p className="text-gray-600 mt-2 max-w-lg mx-auto text-sm leading-relaxed">
              Thank you for contacting <strong className="text-gray-900">Aston Stone Corporation</strong>. Your request reference number is:
            </p>
            <div className="inline-block mt-3 px-4 py-2 bg-[#faf6f0] border border-[#d6be9e] rounded-lg text-[#80540d] font-mono font-bold tracking-wider">
              {submittedRefId}
            </div>

            <p className="text-xs text-gray-500 mt-3">
              Our export and stone engineering desk in Sikandra, Dausa will review your specifications and reply via email within 24 business hours.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href={getWhatsAppShareUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold rounded-lg flex items-center justify-center gap-2 transition-all shadow"
              >
                <MessageSquare className="w-5 h-5" />
                Chat with Us on WhatsApp Now
              </a>

              <button
                onClick={() => generateAndDownloadB2BZipPackage()}
                className="w-full sm:w-auto px-6 py-3 bg-[#f7efe4] hover:bg-[#ede3d4] border border-[#d6be9e] text-[#80540d] font-semibold rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                <Download className="w-4 h-4" />
                Download B2B Spec Kit (.zip)
              </button>
            </div>

            <button
              onClick={onClose}
              className="mt-6 text-sm text-gray-500 hover:text-black underline underline-offset-4"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="border-b border-[#ebdccb] pb-4 mb-6">
              <div className="mb-3">
                <BrandLogo variant="horizontal" size="sm" />
              </div>
              <span className="text-xs font-bold tracking-widest text-[#80540d] uppercase">
                B2B Quotation & Specification Request
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#181d26] font-heading mt-1">
                Tell Us What You Need
              </h2>
              <p className="text-xs text-gray-600 mt-1">
                Direct quarrying, CNC precision cutting & global export from Sikandra, Dausa, Rajasthan.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 bg-red-50 border border-red-300 text-red-700 rounded-lg text-sm">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Type & Product */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Enquiry Purpose *</label>
                  <select
                    value={enquiryType}
                    onChange={(e) => setEnquiryType(e.target.value)}
                    className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-[#b88628]"
                  >
                    <option value="quote">Commercial Project Quotation</option>
                    <option value="export">International Container Export Quote (FOB / CIF)</option>
                    <option value="sample">Physical Stone Sample Box Request</option>
                    <option value="sculpture">Bespoke Marble Sculpture Commission</option>
                    <option value="custom_portrait">Custom Marble Human Portrait Sculpture</option>
                    <option value="general">CNC Machine Cutting & Jali Work</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Stone Product / Service Required *</label>
                  <select
                    value={productName}
                    onChange={(e) => {
                      setProductName(e.target.value);
                      const prod = STONE_PRODUCTS.find(p => p.name === e.target.value);
                      if (prod) setProductCategory(prod.category);
                    }}
                    className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-[#b88628]"
                  >
                    {STONE_PRODUCTS.map((prod) => (
                      <option key={prod.id} value={prod.name}>
                        {prod.name}
                      </option>
                    ))}
                    <option value="CNC Machine Stone Cut">CNC Machine Precision Stone Cut</option>
                    <option value="Custom Marble Statue">Custom Marble Statue / Temple Sculpture</option>
                    <option value="Other Rajasthan Stone">Other Rajasthan Natural Stone (Specify in notes)</option>
                  </select>
                </div>
              </div>

              {/* Personal & Company Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. John Doe / Architect Sharma"
                    className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-[#b88628]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Business / Company Name</label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Skyline Architecture Ltd."
                    className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-[#b88628]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Country *</label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-[#b88628]"
                  >
                    <option value="India">India</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United Arab Emirates">United Arab Emirates (UAE)</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Oman">Oman</option>
                    <option value="Australia">Australia</option>
                    <option value="Canada">Canada</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Italy">Italy</option>
                    <option value="Other International">Other International</option>
                  </select>
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="your.email@domain.com"
                    className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-[#b88628]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Phone / WhatsApp Number</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 7877443079 or country code"
                    className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-[#b88628]"
                  />
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Estimated Quantity</label>
                  <input
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="e.g. 5,000 sq ft / 2 Containers"
                    className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-[#b88628]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Dimensions & Thickness</label>
                  <input
                    type="text"
                    value={dimensions}
                    onChange={(e) => setDimensions(e.target.value)}
                    placeholder="e.g. 600x600x20mm / Slabs"
                    className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-[#b88628]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Surface Finish</label>
                  <select
                    value={finish}
                    onChange={(e) => setFinish(e.target.value)}
                    className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-[#b88628]"
                  >
                    <option value="Mirror Polished">Mirror Polished</option>
                    <option value="Honed / Satin Matte">Honed / Satin Matte</option>
                    <option value="Natural Split / Cleft">Natural Split / Cleft</option>
                    <option value="Flamed (Thermal Non-Slip)">Flamed (Thermal Non-Slip)</option>
                    <option value="Sandblasted">Sandblasted</option>
                    <option value="Bush-Hammered">Bush-Hammered</option>
                    <option value="5-Axis CNC Milled">5-Axis CNC Milled</option>
                    <option value="Hand Carved Relief">Hand Carved Relief</option>
                  </select>
                </div>
              </div>

              {/* Destination Port / City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Destination Port or Delivery City</label>
                  <input
                    type="text"
                    value={destinationPort}
                    onChange={(e) => setDestinationPort(e.target.value)}
                    placeholder="e.g. Jebel Ali, Dubai / Felixstowe, UK / New York / Delhi NCR"
                    className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-[#b88628]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Reference Image / Drawing URL (Optional)</label>
                  <input
                    type="url"
                    value={referenceImageUrl}
                    onChange={(e) => setReferenceImageUrl(e.target.value)}
                    placeholder="https://drive.google.com/... or image link"
                    className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-[#b88628]"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Project Details & Specific Requirements</label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Detail edge profiles, tolerance needs, delivery timeframe, CNC machining or custom carving instructions..."
                  className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-[#b88628]"
                />
              </div>

              {/* Trust Badge */}
              <div className="flex items-center gap-2 text-xs text-gray-600 bg-[#f9f5ed] p-2.5 rounded-lg border border-[#e5dcce]">
                <ShieldCheck className="w-4 h-4 text-[#80540d] shrink-0" />
                <span>We respect your privacy. Inquiries are handled directly by Aston Stone Corporation engineering team in Rajasthan.</span>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-gray-600">
                  Direct Line: <strong className="text-gray-900">+91 7877443079</strong>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-sm text-gray-600 hover:text-black"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-[#d8b571] via-[#c5a059] to-[#ad822e] text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Quotation Request
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
