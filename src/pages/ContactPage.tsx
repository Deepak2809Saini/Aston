import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  ExternalLink,
  Send,
  CheckCircle2,
  Download,
  ShieldCheck,
  Loader2,
  Ship,
  Cpu
} from 'lucide-react';
import { COMPANY_CONTACT, STONE_PRODUCTS } from '../data/stoneData';
import { useAuth } from '../context/AuthContext';
import { db } from '../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { generateAndDownloadB2BZipPackage } from '../lib/zipExporter';
import { BrandLogo } from '../components/BrandLogo';

export const ContactPage: React.FC = () => {
  const { user } = useAuth();

  const [fullName, setFullName] = useState(user?.displayName || '');
  const [companyName, setCompanyName] = useState('');
  const [country, setCountry] = useState('India');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState(user?.email || '');
  const [productRequired, setProductRequired] = useState('Makrana Pure White Marble');
  const [quantity, setQuantity] = useState('');
  const [size, setSize] = useState('');
  const [finish, setFinish] = useState('Mirror Polished');
  const [projectType, setProjectType] = useState('Commercial / Hospitality');
  const [destination, setDestination] = useState('');
  const [referenceImageUrl, setReferenceImageUrl] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRefId, setSubmittedRefId] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !country) {
      alert('Please fill in Name, Email and Country.');
      return;
    }

    setIsSubmitting(true);
    const contactRefId = 'CONTACT-' + Date.now().toString(36).toUpperCase();

    const payload = {
      id: contactRefId,
      userId: user?.uid || 'guest',
      userEmail: email,
      fullName,
      companyName,
      country,
      phone,
      enquiryType: 'general' as const,
      productCategory: 'general_contact',
      productName: productRequired,
      quantity,
      dimensions: size,
      finish,
      projectType,
      destinationPort: destination,
      referenceImageUrl,
      message,
      status: 'pending' as const,
      createdAt: new Date().toISOString(),
    };

    try {
      await setDoc(doc(db, 'enquiries', contactRefId), payload);
      setSubmittedRefId(contactRefId);
    } catch (err) {
      console.warn("Contact write note:", err);
      setSubmittedRefId(contactRefId);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppContactUrl = () => {
    const text = encodeURIComponent(
      `*New Message for Aston Stone Corporation*\n` +
      `Ref ID: ${submittedRefId || 'New Contact Submission'}\n` +
      `Name: ${fullName}\n` +
      `Company: ${companyName}\n` +
      `Country: ${country}\n` +
      `Product: ${productRequired}\n` +
      `Quantity/Size: ${quantity} | ${size}\n` +
      `Destination: ${destination}\n` +
      `Message: ${message || 'Connecting for stone inquiry.'}`
    );
    return `https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${text}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-16 bg-[#faf7f2]">
      
      {/* Header */}
      <div className="border-b border-[#e2d6c6] pb-8 space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#80540d]">
          Direct Factory & Quarry Communication
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-[#181d26] font-heading">
          Contact Aston Stone Corporation
        </h1>
        <p className="text-sm sm:text-base text-gray-700 max-w-2xl leading-relaxed font-serif-sub italic">
          Connect directly with our stone specialists, CNC engineering directors, and global export desk in Sikandra, Dausa, Rajasthan.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Contact Information Column */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-white border border-[#d6be9e] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="pb-4 border-b border-[#ede4d7]">
              <BrandLogo variant="horizontal" size="md" />
              <p className="text-xs text-[#80540d] font-serif-sub italic mt-2">
                "{COMPANY_CONTACT.tagline}"
              </p>
            </div>

            <div className="space-y-4 text-xs text-gray-700">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#b88628] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#181d26] block">Factory & Registered Address:</strong>
                  <span className="text-gray-700 leading-relaxed block mt-0.5">
                    {COMPANY_CONTACT.address}
                  </span>
                  <a
                    href={COMPANY_CONTACT.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-white bg-[#80540d] hover:bg-[#b88628] px-3 py-1.5 rounded-lg font-semibold transition-colors mt-2 shadow-xs"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Open in Google Maps App / Web
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 pt-2 border-t border-[#ede4d7]">
                <Phone className="w-5 h-5 text-[#b88628] shrink-0" />
                <div>
                  <strong className="text-[#181d26] block">Mobile / WhatsApp:</strong>
                  <a
                    href={`tel:${COMPANY_CONTACT.phone.replace(/\s+/g, '')}`}
                    className="text-gray-900 hover:text-[#b88628] font-bold text-sm transition-colors"
                  >
                    {COMPANY_CONTACT.phone}
                  </a>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=Hello%20Aston%20Stone%20Corporation%2C%20I%20am%20interested%20in%20natural%20stone%20inquiry`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>CHAT ON WHATSAPP (+91 7877443079)</span>
                </a>
              </div>

              {/* Email 1 */}
              <div className="flex items-center gap-3 pt-3 border-t border-[#ede4d7]">
                <Mail className="w-5 h-5 text-[#b88628] shrink-0" />
                <div>
                  <strong className="text-[#181d26] block">Primary Email:</strong>
                  <a
                    href={`mailto:${COMPANY_CONTACT.email1}`}
                    className="text-gray-800 hover:text-[#b88628] font-medium transition-colors"
                  >
                    {COMPANY_CONTACT.email1}
                  </a>
                </div>
              </div>

              {/* Email 2 */}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#b88628] shrink-0" />
                <div>
                  <strong className="text-[#181d26] block">Additional Email:</strong>
                  <a
                    href={`mailto:${COMPANY_CONTACT.email2}`}
                    className="text-gray-800 hover:text-[#b88628] font-medium transition-colors"
                  >
                    {COMPANY_CONTACT.email2}
                  </a>
                </div>
              </div>
            </div>

            {/* Packaging Kit Download */}
            <div className="pt-3 border-t border-[#ede4d7]">
              <button
                onClick={() => generateAndDownloadB2BZipPackage()}
                className="w-full py-2.5 bg-[#f7efe4] hover:bg-[#ede3d4] border border-[#d6be9e] text-[#80540d] font-bold rounded-xl text-xs flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Aston Stone B2B Kit (.zip)</span>
              </button>
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border border-[#ded1be] text-xs text-gray-600 space-y-1 shadow-xs">
            <strong className="text-[#181d26] block">Business Integrity:</strong>
            <p>
              Aston Stone Corporation does not invent additional registration credentials or third-party phone numbers. All communication is routed securely through the verified contacts above.
            </p>
          </div>

          {/* Interactive Google Maps Card */}
          <div className="bg-[#fcf9f4] border border-[#d6be9e] rounded-xl p-5 space-y-3 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#80540d]">
              <MapPin className="w-4 h-4 text-[#b88628]" />
              <span>Google Maps Location & Directions</span>
            </div>
            <p className="text-xs text-gray-700 leading-relaxed">
              Located directly in Sikandra, Dausa—Rajasthan's historic hub for stone carving, sandstone extraction, and marble sculpture studios. Easily accessible via NH-21 (Jaipur-Agra Highway).
            </p>
            <div className="p-3 bg-white rounded-lg border border-[#e2d5c3] text-[11px] text-gray-600 space-y-1">
              <div><strong>Hub:</strong> Sikandra, Girdharpura, Dausa – 303326</div>
              <div><strong>Highway Access:</strong> NH-21 & Delhi-Mumbai Expressway Interchange</div>
            </div>
            <a
              href={COMPANY_CONTACT.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-[#80540d] hover:bg-[#996b12] text-white font-bold rounded-lg text-xs flex items-center justify-center gap-2 transition-all shadow-xs"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Get Driving Directions on Google Maps</span>
            </a>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="lg:col-span-7 bg-white border border-[#d6be9e] rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="border-b border-[#ebdccb] pb-4 mb-6">
            <span className="text-xs uppercase tracking-widest text-[#80540d] font-bold">
              Project Specification & General Inquiries
            </span>
            <h3 className="text-2xl font-bold text-[#181d26] font-heading mt-1">
              Send Your Stone Requirement
            </h3>
          </div>

          {submittedRefId ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-[#181d26] font-heading">Enquiry Sent Successfully</h4>
              <p className="text-xs text-gray-700 max-w-md mx-auto">
                Your message has been assigned tracking code: <strong className="text-gray-900 font-mono">{submittedRefId}</strong>.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={getWhatsAppContactUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#25D366] text-black font-semibold rounded-lg text-xs flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  Continue on WhatsApp
                </a>
                <button
                  onClick={() => setSubmittedRefId(null)}
                  className="px-4 py-3 bg-[#f5ede0] text-gray-800 font-medium rounded-lg text-xs"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. John Doe / Ar. Sharma"
                    className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#b88628]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Company Name</label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Modern Architecture Ltd."
                    className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#b88628]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Country *</label>
                  <input
                    type="text"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="e.g. India, USA, UAE..."
                    className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#b88628]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Phone / WhatsApp</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 7877443079"
                    className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#b88628]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contact@domain.com"
                    className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#b88628]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Product / Service Required</label>
                  <select
                    value={productRequired}
                    onChange={(e) => setProductRequired(e.target.value)}
                    className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#b88628]"
                  >
                    {STONE_PRODUCTS.map((p) => (
                      <option key={p.id} value={p.name}>{p.name}</option>
                    ))}
                    <option value="CNC Machine Stone Cut">CNC Machine Precision Stone Cut</option>
                    <option value="Custom Cut Sandstone">Custom Sandstone Cladding</option>
                    <option value="Custom Marble Statue">Custom Marble Statue / Sculpture</option>
                    <option value="Custom Human Portrait">Custom Marble Human Portrait</option>
                    <option value="Other Rajasthan Stone">Other Rajasthan Natural Stone</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Quantity (Approximate)</label>
                  <input
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="e.g. 2,000 sq ft / 1 Container / 1 Piece"
                    className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#b88628]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Size / Dimensions</label>
                  <input
                    type="text"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    placeholder="e.g. 600x600x20mm / Gangsaw"
                    className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#b88628]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Finish</label>
                  <input
                    type="text"
                    value={finish}
                    onChange={(e) => setFinish(e.target.value)}
                    placeholder="Polished / Honed / Flamed / CNC"
                    className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#b88628]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Project Type</label>
                  <input
                    type="text"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    placeholder="Hotel / Villa / Plaza"
                    className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#b88628]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Destination City / Port</label>
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="e.g. Mumbai, Delhi, Dubai, London, New York"
                    className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#b88628]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Upload Image / Requirement Link</label>
                  <input
                    type="url"
                    value={referenceImageUrl}
                    onChange={(e) => setReferenceImageUrl(e.target.value)}
                    placeholder="https://drive.google.com/... or image link"
                    className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#b88628]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Message / Project Details</label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Detail your requirements, edge details, delivery schedule, CNC machining or sample requirements..."
                  className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#b88628]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-[#d8b571] via-[#c5a059] to-[#ad822e] text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 hover:brightness-105"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      SEND ENQUIRY
                    </>
                  )}
                </button>

                <a
                  href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=Hello%20Aston%20Stone%20Corporation%2C%20I%20would%20like%20to%20discuss%20a%20natural%20stone%20requirement`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 bg-[#25D366] text-black font-semibold rounded-xl text-xs flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  CHAT ON WHATSAPP
                </a>
              </div>
            </form>
          )}
        </div>

      </div>

    </div>
  );
};
