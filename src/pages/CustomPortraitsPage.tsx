import React, { useState } from 'react';
import {
  Sparkles,
  Camera,
  CheckCircle2,
  AlertCircle,
  Upload,
  Send,
  ShieldCheck,
  Download,
  MessageSquare,
  Loader2
} from 'lucide-react';
import { ARTISAN_IMAGE, COMPANY_CONTACT } from '../data/stoneData';
import { useAuth } from '../context/AuthContext';
import { db } from '../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { generateAndDownloadB2BZipPackage } from '../lib/zipExporter';

interface CustomPortraitsPageProps {
  openQuoteModal: (stoneId?: string, type?: any) => void;
}

export const CustomPortraitsPage: React.FC<CustomPortraitsPageProps> = ({ openQuoteModal }) => {
  const { user } = useAuth();

  const [fullName, setFullName] = useState(user?.displayName || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState('');
  const [portraitType, setPortraitType] = useState('Bust with Pedestal');
  const [dimensions, setDimensions] = useState('Life Size (approx 24-28 inches height)');
  const [photoUrl, setPhotoUrl] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRefId, setSubmittedRefId] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) {
      alert('Please fill in your name and email.');
      return;
    }

    setIsSubmitting(true);
    const refId = 'PORTRAIT-' + Date.now().toString(36).toUpperCase();

    const payload = {
      id: refId,
      userId: user?.uid || 'guest',
      userEmail: email,
      fullName,
      phone,
      country: 'Domestic / International',
      enquiryType: 'custom_portrait' as const,
      productCategory: 'marble_sculpture',
      productName: `Custom Marble Portrait (${portraitType})`,
      dimensions,
      referenceImageUrl: photoUrl,
      message: notes,
      status: 'pending' as const,
      createdAt: new Date().toISOString(),
    };

    try {
      await setDoc(doc(db, 'enquiries', refId), payload);
      setSubmittedRefId(refId);
    } catch (err) {
      console.warn("Firestore write note:", err);
      setSubmittedRefId(refId);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppPortraitUrl = () => {
    const text = encodeURIComponent(
      `*Custom Marble Portrait Inquiry - Aston Stone Corporation*\n` +
      `Ref ID: ${submittedRefId || 'New Portrait Inquiry'}\n` +
      `Name: ${fullName}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Type: ${portraitType}\n` +
      `Size: ${dimensions}\n` +
      `Reference Photo Link: ${photoUrl || 'Will share directly on WhatsApp'}\n` +
      `Notes: ${notes || 'Looking for custom marble portrait carving.'}`
    );
    return `https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${text}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-16 bg-[#faf7f2]">
      
      {/* Header */}
      <div className="border-b border-[#e2d6c6] pb-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#d6be9e] text-[#80540d] text-xs font-bold shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#b88628]" />
          <span>Bespoke Commemorative Sculptures in Makrana Marble</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#181d26] font-heading">
          Your Memories, Carved in Marble.
        </h1>
        <p className="text-sm sm:text-lg text-gray-700 max-w-3xl leading-relaxed font-serif-sub italic">
          "We create custom marble portrait sculptures based on customer-provided photographs and approved references."
        </p>
      </div>

      {/* Accuracy Disclaimer */}
      <div className="p-4 bg-white border border-[#d6be9e] rounded-xl flex items-start gap-3 shadow-xs">
        <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <p className="text-xs text-gray-800 leading-relaxed">
          <strong className="text-[#80540d]">Artistic Likeness Notice:</strong> Marble carving is a traditional, handcrafted subtractive sculptural process. Exact likeness, facial proportions, and textural details are developed through iterative client review stages (clay model/photographic updates). We work diligently with patrons to achieve dignified likeness and artistic permanence.
        </p>
      </div>

      {/* Services Grid */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#80540d]">
            Portrait Commissions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#181d26] font-heading">
            Portrait Sculpture Formats
          </h2>
          <p className="text-xs text-gray-600">
            Commemorating founders, beloved family members, civic leaders, and ancestors in timeless stone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Individual Portrait Busts",
              desc: "Classical head-and-shoulders bust positioned on an integrated marble or polished granite pedestal.",
              image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80"
            },
            {
              title: "Memorial Sculptures",
              desc: "Dignified memorial statues for private ancestral estates, family shrines, and memorial gardens.",
              image: ARTISAN_IMAGE
            },
            {
              title: "Full-Body Statues",
              desc: "Life-size or scaled full-figure portrait sculptures capturing posture, traditional attire, or institutional regalia.",
              image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80"
            },
            {
              title: "Family & Couple Reliefs",
              desc: "High-relief carved marble bas-relief panels depicting couples or family groups for interior wall installation.",
              image: "https://images.unsplash.com/photo-1548625361-195feee10fce?auto=format&fit=crop&w=800&q=80"
            },
            {
              title: "Civic & Founder Busts",
              desc: "Architectural busts sculpted for university halls, corporate headquarters, hospitals, and civic plazas.",
              image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
            },
            {
              title: "Custom Artistic Portraits",
              desc: "Stylized contemporary interpretations or classical Greco-Roman busts tailored to interior design briefs.",
              image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-[#e2d6c6] rounded-2xl overflow-hidden hover:border-[#b88628] transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div className="h-52 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-base font-bold text-[#181d26] font-heading">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The Complete 9-Step Workflow */}
      <div className="space-y-8 bg-white border border-[#ded1be] rounded-3xl p-8 sm:p-12 shadow-xs">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#80540d]">
            Disciplined Sculptural Procedure
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#181d26] font-heading">
            Our 9-Step Portrait Workflow
          </h2>
          <p className="text-xs text-gray-600">
            Ensuring anatomical integrity, client satisfaction, and safe international transit:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { step: "01", title: "Send Reference Photos", desc: "Client sends clear photographs (front, left profile, right profile, 3/4 angle) and notes on characteristic expressions." },
            { step: "02", title: "Discuss Design & Marble", desc: "Consultation on Makrana white or statuary grade marble, pedestal styling, drapery, and hair texture." },
            { step: "03", title: "Confirm Dimensions", desc: "Selection of scale: life-size (approx. 24-28 inches for a bust), half scale, or monumental proportions." },
            { step: "04", title: "Approve Quotation", desc: "Transparent written quotation covering material, sculpting labor, custom crating, and insured shipping." },
            { step: "05", title: "Sculpture Development", desc: "Blocking out raw marble mass followed by hand-chisel carving by senior Sikandra master artisans." },
            { step: "06", title: "Quality & Likeness Review", desc: "High-resolution multi-angle photos and 360-degree video shared with client for review and feedback." },
            { step: "07", title: "Final Finishing", desc: "Fine textural smoothing, diamond paste burnishing, and soft satin polish across facial planes." },
            { step: "08", title: "Secure Protective Packaging", desc: "Shock-absorbing foam casing and heavy-duty ISPM-15 export wooden crating with internal bracing." },
            { step: "09", title: "Delivery / Shipping", desc: "Door-to-door or port-to-port insured transit with tracking across India or overseas." }
          ].map((s, idx) => (
            <div
              key={idx}
              className="p-5 bg-[#faf7f2] border border-[#e5dcce] rounded-xl space-y-2 relative"
            >
              <span className="text-xl font-mono font-bold text-[#80540d]/40">{s.step}</span>
              <h4 className="text-sm font-bold text-[#181d26] font-heading">{s.title}</h4>
              <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Commission Inquiry Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#80540d]">
            Start Your Commission
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#181d26] font-heading">
            Submit Reference & Requirement
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            Fill out the form with your portrait preferences or reach out directly on WhatsApp to share reference photographs.
          </p>

          <div className="p-4 bg-white rounded-xl border border-[#ded1be] space-y-3 text-xs text-gray-700 shadow-xs">
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4 text-[#b88628]" />
              <span>Recommended: High-resolution clear daylight photographs.</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#b88628]" />
              <span>Confidentiality: Reference photos are kept strictly private.</span>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=Hello%20Aston%20Stone%20Corporation%2C%20I%20would%20like%20to%20discuss%20a%20custom%20human%20portrait%20in%20marble`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold rounded-xl text-xs transition-all shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Share Photos on WhatsApp (+91 7877443079)</span>
            </a>
          </div>
        </div>

        {/* Form Container */}
        <div className="lg:col-span-7 bg-white border border-[#d6be9e] rounded-2xl p-6 sm:p-8 shadow-xs">
          {submittedRefId ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#181d26] font-heading">Portrait Inquiry Received</h3>
              <p className="text-xs text-gray-600 max-w-md mx-auto">
                Your portrait consultation reference number is <strong className="text-gray-900 font-mono">{submittedRefId}</strong>.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={getWhatsAppPortraitUrl()}
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
                  Submit Another
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rahul Sharma / David Miller"
                    className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#b88628]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@domain.com"
                    className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#b88628]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">WhatsApp / Phone Number</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 7877443079"
                    className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#b88628]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Portrait Format</label>
                  <select
                    value={portraitType}
                    onChange={(e) => setPortraitType(e.target.value)}
                    className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#b88628]"
                  >
                    <option value="Bust with Pedestal">Classical Bust with Marble Pedestal</option>
                    <option value="Memorial Portrait">Family / Ancestral Memorial Statue</option>
                    <option value="Full Body Standing">Full-Body Life Size Sculpture</option>
                    <option value="Wall Bas-Relief">Carved Marble Bas-Relief Plaque</option>
                    <option value="Institutional Founder">Institutional Founder Statue</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Target Dimensions & Scale</label>
                <input
                  type="text"
                  value={dimensions}
                  onChange={(e) => setDimensions(e.target.value)}
                  placeholder="e.g. Life-size 26 inches height, or custom dimensions"
                  className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#b88628]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Reference Photographs Link (Google Drive / Cloud / Image URL)</label>
                <div className="relative">
                  <Upload className="w-4 h-4 text-gray-500 absolute left-3 top-2.5" />
                  <input
                    type="url"
                    value={photoUrl}
                    onChange={(e) => setPhotoUrl(e.target.value)}
                    placeholder="https://drive.google.com/... or paste image URL"
                    className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg pl-9 pr-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#b88628]"
                  />
                </div>
                <span className="text-[11px] text-gray-500 mt-1 block">
                  You can also attach and send reference photos directly to our team via WhatsApp (+91 7877443079).
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Special Notes / Expressions / Details</label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Mention desired clothing, glasses, expression, or inscription on pedestal..."
                  className="w-full bg-[#fdfaf7] border border-[#d8cdbf] rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#b88628]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-[#d8b571] via-[#c5a059] to-[#ad822e] text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 hover:brightness-105"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Portrait Commission Request
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

    </div>
  );
};
