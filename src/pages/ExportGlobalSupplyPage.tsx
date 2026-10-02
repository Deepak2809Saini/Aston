import React, { useState } from 'react';
import {
  Globe2,
  Ship,
  ShieldCheck,
  CheckCircle2,
  Download,
  Send,
  MessageSquare,
  AlertCircle,
  FileText,
  Loader2,
  Box
} from 'lucide-react';
import { COMPANY_CONTACT, STONE_PRODUCTS } from '../data/stoneData';
import { useAuth } from '../context/AuthContext';
import { db } from '../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { generateAndDownloadB2BZipPackage } from '../lib/zipExporter';
import { BrandLogo } from '../components/BrandLogo';

interface ExportGlobalSupplyPageProps {
  openQuoteModal: (stoneId?: string, type?: any) => void;
}

export const ExportGlobalSupplyPage: React.FC<ExportGlobalSupplyPageProps> = ({ openQuoteModal }) => {
  const { user } = useAuth();

  const [fullName, setFullName] = useState(user?.displayName || '');
  const [companyName, setCompanyName] = useState('');
  const [country, setCountry] = useState('United States');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState(user?.email || '');
  const [productName, setProductName] = useState('Makrana Pure White Marble');
  const [quantity, setQuantity] = useState('');
  const [dimensions, setDimensions] = useState('');
  const [finish, setFinish] = useState('Mirror Polished');
  const [application, setApplication] = useState('Commercial / Hospitality Facade');
  const [destinationPort, setDestinationPort] = useState('');
  const [referenceImageUrl, setReferenceImageUrl] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRefId, setSubmittedRefId] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !country) {
      alert('Please fill in required fields: Name, Email, and Country.');
      return;
    }

    setIsSubmitting(true);
    const exportId = 'EXP-' + Date.now().toString(36).toUpperCase();

    const payload = {
      id: exportId,
      userId: user?.uid || 'guest',
      userEmail: email,
      fullName,
      companyName,
      country,
      phone,
      enquiryType: 'export' as const,
      productCategory: 'export_stone',
      productName,
      quantity,
      dimensions,
      finish,
      projectType: application,
      destinationPort,
      referenceImageUrl,
      message,
      status: 'pending' as const,
      createdAt: new Date().toISOString(),
    };

    try {
      await setDoc(doc(db, 'enquiries', exportId), payload);
      setSubmittedRefId(exportId);
    } catch (err) {
      console.warn("Export write note:", err);
      setSubmittedRefId(exportId);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppExportUrl = () => {
    const text = encodeURIComponent(
      `*International Export Inquiry - Aston Stone Corporation*\n` +
      `Ref ID: ${submittedRefId || 'New Export RFQ'}\n` +
      `Name: ${fullName}\n` +
      `Company: ${companyName}\n` +
      `Country: ${country}\n` +
      `Dest Port: ${destinationPort}\n` +
      `Product: ${productName} (${finish})\n` +
      `Quantity: ${quantity}\n` +
      `Dimensions: ${dimensions}\n` +
      `Message: ${message || 'Please provide export CIF/FOB quotation.'}`
    );
    return `https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${text}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-16 bg-[#faf7f2]">
      
      {/* Header */}
      <div className="border-b border-[#e2d6c6] pb-8 space-y-4">
        <BrandLogo variant="horizontal" size="md" />
        <span className="text-xs font-bold uppercase tracking-widest text-[#80540d] block">
          International Sourcing & Seaport Logistics
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-[#181d26] font-heading">
          Supplying Rajasthan Stone to Global Markets
        </h1>
        <p className="text-sm sm:text-base text-gray-700 max-w-3xl leading-relaxed font-serif-sub italic">
          Aston Stone Corporation is developing a dependable international B2B natural stone supply and export network connecting Rajasthan quarries with projects worldwide.
        </p>
      </div>

      {/* Target Buyer Categories */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#80540d]">
            Who We Serve Globally
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#181d26] font-heading">
            Our International B2B Partners
          </h2>
          <p className="text-xs text-gray-600">
            Tailored supply coordination for commercial, architectural, and wholesale entities:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-xs">
          {[
            "Importers & Distributors",
            "Stone Wholesalers & Yards",
            "Commercial Architects",
            "Building Contractors",
            "Real-Estate Developers",
            "Hospitality Groups",
            "Landscaping Contractors",
            "Monument & Memorial Companies",
            "Sculpture & Art Buyers",
            "Interior Design Firms",
            "Civic Public Works Agencies",
            "International Sourcing Agencies"
          ].map((client, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border border-[#ded1be] rounded-xl flex items-center gap-2.5 shadow-xs"
            >
              <div className="w-2 h-2 rounded-full bg-[#b88628]" />
              <span className="text-gray-800 font-semibold">{client}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 7-Step International Enquiry Process */}
      <div className="bg-white border border-[#ded1be] rounded-3xl p-8 sm:p-12 space-y-8 shadow-xs">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#80540d]">
            Transparent Sourcing Protocol
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#181d26] font-heading">
            7-Step International Sourcing Process
          </h2>
          <p className="text-xs text-gray-600">
            A step-by-step workflow designed to protect project schedules and guarantee quality:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "Step 1", title: "Send Product Requirement", desc: "Submit your stone variety, dimensions, finish, quantity, and target delivery timeframe." },
            { step: "Step 2", title: "Technical Review", desc: "Discuss stone properties, edge details, cut-to-size tolerances, and container payload weight limits." },
            { step: "Step 3", title: "Sample Approval", desc: "Review high-definition dry-lay videos, material test sheets, and physical courier sample boxes." },
            { step: "Step 4", title: "Formal Quotation", desc: "Receive transparent FOB (Mundra / Nhava Sheva) or CIF destination port quotation with terms." },
            { step: "Step 5", title: "Order Confirmation", desc: "Confirmation of purchase contract, production schedules, and stone selection benchmarks." },
            { step: "Step 6", title: "Inspection & Crating", desc: "Pre-crating dimensional audits, photo reports, and ISPM-15 fumigated wooden box packaging." },
            { step: "Step 7", title: "Shipping Coordination", desc: "Container lashing, ocean bill of lading, Certificate of Origin, and customs clearing documentation." }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-5 bg-[#faf7f2] border border-[#e5dcce] rounded-xl space-y-2 relative"
            >
              <span className="text-xs font-mono font-bold text-[#80540d] block uppercase tracking-wider">
                {item.step}
              </span>
              <h4 className="text-sm font-bold text-[#181d26] font-heading">
                {item.title}
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

          {/* Quick Info Box in 8th slot */}
          <div className="p-5 bg-[#f7efe4] border border-[#d8be9d] rounded-xl space-y-2 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#80540d] block uppercase">Direct Export Desk</span>
              <p className="text-xs text-gray-700 mt-1">
                Have an urgent seaport tender or container requirement?
              </p>
            </div>
            <a
              href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=Hello%20Aston%20Stone%2C%20I%20have%20an%20urgent%20international%20export%20inquiry`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#20ba59] font-bold hover:underline flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp +91 7877443079</span>
            </a>
          </div>
        </div>
      </div>

      {/* SEAPORT LOGISTICS, CONTAINER SPECS & CRATING BREAKDOWN */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#80540d]">
            Technical Shipping Specifications
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#181d26] font-heading">
            Seaports, Container Capacities & Export Crating
          </h2>
          <p className="text-xs text-gray-600">
            Engineered packaging and maritime transit protocols ensuring pristine stone delivery worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Container Capacities */}
          <div className="bg-white border border-[#ded1be] rounded-2xl p-6 space-y-4 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#80540d]">
              <Ship className="w-4 h-4 text-[#b88628]" />
              <span>20ft Heavy Duty Containers</span>
            </div>
            <h3 className="text-lg font-bold text-[#181d26] font-heading">
              Payload & Surface Area Limits
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              We pack standard 20ft ocean containers up to the maximum permissible gross road/port weight (typically 27 to 28 Metric Tons for GCC/Europe and 19.9 MT for USA road limits):
            </p>
            <div className="space-y-2 text-xs text-gray-700">
              <div className="p-2.5 bg-[#faf7f2] rounded-lg border border-[#ede3d4] flex justify-between">
                <span>18mm Calibrated Slabs:</span>
                <strong className="text-gray-900">~420 – 450 m²</strong>
              </div>
              <div className="p-2.5 bg-[#faf7f2] rounded-lg border border-[#ede3d4] flex justify-between">
                <span>20mm Polished Marble/Granite:</span>
                <strong className="text-gray-900">~380 – 400 m²</strong>
              </div>
              <div className="p-2.5 bg-[#faf7f2] rounded-lg border border-[#ede3d4] flex justify-between">
                <span>30mm Cut-to-Size Pavers:</span>
                <strong className="text-gray-900">~250 – 270 m²</strong>
              </div>
              <div className="p-2.5 bg-[#faf7f2] rounded-lg border border-[#ede3d4] flex justify-between">
                <span>CNC 3D Panels & Jali:</span>
                <strong className="text-gray-900">Project-specific A-frames</strong>
              </div>
            </div>
          </div>

          {/* Card 2: Seaports & Gateways */}
          <div className="bg-white border border-[#ded1be] rounded-2xl p-6 space-y-4 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#80540d]">
              <Globe2 className="w-4 h-4 text-[#b88628]" />
              <span>Primary Seaport Gateways</span>
            </div>
            <h3 className="text-lg font-bold text-[#181d26] font-heading">
              Rajasthan to Ocean Seaports
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Export cargo is loaded directly at our factory in Sikandra, Dausa or dispatched via dedicated inland container depots:
            </p>
            <ul className="space-y-2 text-xs text-gray-700">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#b88628] mt-1.5 shrink-0" />
                <div>
                  <strong className="text-gray-900 block">Mundra Port (Gujarat):</strong>
                  <span className="text-[11px] text-gray-500">Primary deep-water container terminal with weekly sailings to USA, Europe & Jebel Ali.</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#b88628] mt-1.5 shrink-0" />
                <div>
                  <strong className="text-gray-900 block">Kandla / Deendayal Port:</strong>
                  <span className="text-[11px] text-gray-500">Cost-effective break-bulk and container shipping for Middle East and GCC ports.</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#b88628] mt-1.5 shrink-0" />
                <div>
                  <strong className="text-gray-900 block">ICD Kanakpura / Jaipur:</strong>
                  <span className="text-[11px] text-gray-500">Direct customs sealing and rail freight connection straight to seaport terminals.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Card 3: Packaging & Crating */}
          <div className="bg-white border border-[#ded1be] rounded-2xl p-6 space-y-4 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#80540d]">
              <Box className="w-4 h-4 text-[#b88628]" />
              <span>ISPM-15 Certified Crating</span>
            </div>
            <h3 className="text-lg font-bold text-[#181d26] font-heading">
              Seaworthy Protective Packaging
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Zero tolerance for shipping damage. Every shipment is prepared strictly to international phytosanitary rules:
            </p>
            <div className="space-y-2 text-xs text-gray-700">
              <div className="p-2 bg-[#faf7f2] rounded-lg border border-[#ede3d4]">
                <strong className="text-gray-900 block">Heat-Treated Pine Wood:</strong>
                <span className="text-[11px] text-gray-600">ISPM-15 stamped wooden crates with heavy reinforcement.</span>
              </div>
              <div className="p-2 bg-[#faf7f2] rounded-lg border border-[#ede3d4]">
                <strong className="text-gray-900 block">Moisture & Scratch Barrier:</strong>
                <span className="text-[11px] text-gray-600">Polystyrene foam liners, plastic sheets, and silica gel packets.</span>
              </div>
              <div className="p-2 bg-[#faf7f2] rounded-lg border border-[#ede3d4]">
                <strong className="text-gray-900 block">High-Tensile Strapping:</strong>
                <span className="text-[11px] text-gray-600">Heavy gauge steel strapping and internal container wood chocking.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tell Us What You Need Form */}
      <div className="bg-white border border-[#d6be9e] rounded-3xl p-8 sm:p-12 space-y-8 shadow-xs">
        <div className="border-b border-[#ebdccb] pb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#80540d]">
            International Request for Quotation
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#181d26] font-heading mt-1">
            Tell Us What You Need
          </h2>
          <p className="text-xs text-gray-600 mt-1">
            Please provide your project specifications below. Our export desk in Rajasthan will reply with a CIF/FOB quote within 24 hours.
          </p>
        </div>

        {submittedRefId ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-[#181d26] font-heading">Export RFQ Registered</h3>
            <p className="text-xs text-gray-700 max-w-lg mx-auto">
              Your inquiry has been logged with Reference ID: <strong className="text-gray-900 font-mono">{submittedRefId}</strong>.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={getWhatsAppExportUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#25D366] text-black font-semibold rounded-lg text-xs flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                Chat with Export Team on WhatsApp
              </a>
              <button
                onClick={() => setSubmittedRefId(null)}
                className="px-4 py-3 bg-[#f5ede0] text-gray-800 font-medium rounded-lg text-xs"
              >
                Submit Another Specification
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Contact Name *</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Michael Smith"
                  className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#b88628]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Company / Organization Name</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Apex Stone Importers Inc."
                  className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#b88628]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Destination Country *</label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#b88628]"
                >
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="procurement@company.com"
                  className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#b88628]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">WhatsApp / Phone Number</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000 or country code"
                  className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#b88628]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Product Required</label>
                <select
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#b88628]"
                >
                  {STONE_PRODUCTS.map((p) => (
                    <option key={p.id} value={p.name}>{p.name}</option>
                  ))}
                  <option value="CNC Machine Stone Cut">CNC Machine Precision Stone Cut</option>
                  <option value="Custom Cut Sandstone">Custom Cut Sandstone</option>
                  <option value="Custom Marble Sculpture">Custom Marble Statue / Sculpture</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Estimated Quantity</label>
                <input
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="e.g. 1 x 20ft Container / 5,000 sq ft"
                  className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#b88628]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Dimensions & Thickness</label>
                <input
                  type="text"
                  value={dimensions}
                  onChange={(e) => setDimensions(e.target.value)}
                  placeholder="e.g. 600x600x20mm / 22mm calibrated"
                  className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#b88628]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Surface Finish</label>
                <select
                  value={finish}
                  onChange={(e) => setFinish(e.target.value)}
                  className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#b88628]"
                >
                  <option value="Mirror Polished">Mirror Polished</option>
                  <option value="Honed / Satin Matte">Honed / Satin Matte</option>
                  <option value="Natural Split">Natural Split</option>
                  <option value="Flamed Thermal">Flamed Thermal (Anti-Slip)</option>
                  <option value="Sandblasted">Sandblasted</option>
                  <option value="Bush-Hammered">Bush-Hammered</option>
                  <option value="5-Axis CNC Milled">5-Axis CNC Milled</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Project Application</label>
                <input
                  type="text"
                  value={application}
                  onChange={(e) => setApplication(e.target.value)}
                  placeholder="e.g. Hotel Foyer / Exterior Facade"
                  className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#b88628]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Destination Seaport / City *</label>
                <input
                  type="text"
                  required
                  value={destinationPort}
                  onChange={(e) => setDestinationPort(e.target.value)}
                  placeholder="e.g. Jebel Ali / Felixstowe / New York"
                  className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#b88628]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Reference Image / Drawing URL (Optional)</label>
              <input
                type="url"
                value={referenceImageUrl}
                onChange={(e) => setReferenceImageUrl(e.target.value)}
                placeholder="https://drive.google.com/... or architectural link"
                className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#b88628]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Detailed Technical Message / Schedule</label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Specify edge profiles, packing constraints, ASTM/EN testing requests, or delivery milestones..."
                className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#b88628]"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[11px] text-gray-600">
                Direct factory export desk: <strong className="text-gray-900">astonstone26@gmail.com</strong>
              </span>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-[#d8b571] via-[#c5a059] to-[#ad822e] text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 hover:brightness-105"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Calculating...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Request Export Quote (FOB / CIF)
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>

    </div>
  );
};
