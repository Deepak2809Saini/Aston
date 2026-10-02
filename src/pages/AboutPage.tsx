import React from 'react';
import {
  ShieldCheck,
  CheckCircle,
  Eye,
  Target,
  Download,
  MapPin
} from 'lucide-react';
import { ARTISAN_IMAGE, COMPANY_CONTACT, EDITABLE_PLACEHOLDERS } from '../data/stoneData';
import { generateAndDownloadB2BZipPackage } from '../lib/zipExporter';

interface AboutPageProps {
  navigate: (page: string) => void;
  openQuoteModal: (stoneId?: string, type?: any) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate, openQuoteModal }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-16 bg-[#faf7f2]">
      
      {/* Header Banner */}
      <div className="border-b border-[#e2d6c6] pb-8 space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#80540d]">
          Heritage &bull; CNC Machine Precision &bull; Global Export
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-[#181d26] font-heading">
          About Aston Stone Corporation
        </h1>
        <p className="text-sm sm:text-base text-gray-700 max-w-3xl leading-relaxed font-serif-sub italic">
          "Rajasthan's Natural Stone. Crafted for the World."
        </p>
      </div>

      {/* 1. Who We Are */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#80540d]">
              Our Identity & Workshop Location
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#181d26] font-heading">
              Who We Are
            </h2>
          </div>

          <p className="text-sm text-gray-800 leading-relaxed">
            Aston Stone Corporation is a Rajasthan-based natural stone, CNC machine stone cut, and marble craftsmanship business focused on supplying quality stone products and developing long-term B2B relationships in India and international markets.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed">
            Headquartered in Sikandra, Girdharpura, Dausa, Rajasthan—a region with centuries of renowned stone craftsmanship—we specialize in Rajasthani natural stones, marble, granite, sandstone, red sandstone, limestone, 5-axis CNC architectural carving, and handcrafted marble statues.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed">
            We work directly with builders, architects, real estate developers, contractors, interior designers, and international stone importers across the globe. Our objective is to bridge Rajasthan's authentic natural wealth with contemporary technical standards, CNC precision, disciplined packaging, and dependable B2B supply.
          </p>

          <div className="p-4 bg-white rounded-xl border border-[#ded1be] flex items-start gap-3 shadow-xs">
            <MapPin className="w-5 h-5 text-[#b88628] shrink-0 mt-0.5" />
            <div className="text-xs text-gray-800">
              <strong className="text-[#181d26] block mb-0.5">Corporate & Workshop Address:</strong>
              {COMPANY_CONTACT.address}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-2xl overflow-hidden border border-[#d6be9e] shadow-xl">
            <img
              src={ARTISAN_IMAGE}
              alt="Aston Stone Master Artisan"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 rounded-xl border border-[#e2d5c3] text-xs shadow-md">
              <span className="text-[#80540d] font-bold block mb-1">Authentic Stone Artisans & Modern CNC</span>
              <p className="text-gray-700">
                Working in marble, red sandstone, and architectural stone using traditional chisels and 5-axis CNC machinery.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Vision & Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Vision */}
        <div className="p-8 bg-white border border-[#d6be9e] rounded-2xl space-y-4 shadow-xs">
          <div className="w-12 h-12 rounded-xl bg-[#f7efe4] border border-[#d8be9d] flex items-center justify-center text-[#80540d]">
            <Eye className="w-6 h-6" />
          </div>
          <span className="text-xs uppercase tracking-widest text-[#80540d] font-bold block">
            Our Vision
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#181d26] font-heading">
            Connecting Rajasthan's Heritage with the World
          </h3>
          <p className="text-sm text-gray-800 leading-relaxed font-serif-sub italic">
            "To connect Rajasthan's natural stone heritage and craftsmanship with architecture and construction markets across the world."
          </p>
          <p className="text-xs text-gray-600 leading-relaxed">
            We envision building Aston Stone Corporation into a trusted, internationally recognized natural stone supplier and exporter from Rajasthan, celebrated for quality, precision, and respectful client partnerships.
          </p>
        </div>

        {/* Mission */}
        <div className="p-8 bg-white border border-[#ded1be] rounded-2xl space-y-4 shadow-xs">
          <div className="w-12 h-12 rounded-xl bg-[#f7efe4] border border-[#d8be9d] flex items-center justify-center text-[#80540d]">
            <Target className="w-6 h-6" />
          </div>
          <span className="text-xs uppercase tracking-widest text-[#80540d] font-bold block">
            Our Mission
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#181d26] font-heading">
            Seven Pillars of Our Daily Practice
          </h3>
          <ul className="space-y-2 text-xs text-gray-700">
            {[
              "Supply quality natural stone tailored to project specifications.",
              "Provide responsive, reliable customer service and technical guidance.",
              "Support customized architectural requirements, CNC cutting, and cut-to-size orders.",
              "Maintain clear, transparent, professional commercial communication.",
              "Develop enduring, multi-year B2B relationships with domestic & global clients.",
              "Build an export-oriented business upholding international packaging standards.",
              "Dignify and represent Rajasthan's stone craftsmanship globally."
            ].map((m, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#b88628] shrink-0 mt-0.5" />
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* 3. Our Values */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#80540d]">
            The Foundation of Our Business
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#181d26] font-heading">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Quality", desc: "Selecting sound raw blocks and adhering to calibrated thickness and edge tolerances." },
            { title: "Reliability", desc: "Honoring commitments on specifications, container packing standards, and shipping schedules." },
            { title: "Transparency", desc: "Clear explanations of natural stone properties, porosity, and test reports without exaggeration." },
            { title: "Craftsmanship & CNC", desc: "Harmonizing traditional Sikandra hand carving with state-of-the-art CNC machine precision." },
            { title: "Professionalism", desc: "Detailed packing lists, prompt email correspondence, and international trade compliance." },
            { title: "Customer Focus", desc: "Understanding the unique needs of architects, builders, and international stone distributors." },
            { title: "Long-Term Relationships", desc: "Prioritizing repeat trust and collaboration over one-time transactional gains." },
            { title: "Ethical Integrity", desc: "Fair trade with local artisans, safe workshop conditions, and honest representations." }
          ].map((v, idx) => (
            <div
              key={idx}
              className="p-5 bg-white border border-[#ded1be] rounded-xl space-y-2 hover:border-[#b88628] transition-all shadow-xs"
            >
              <div className="w-8 h-8 rounded-lg bg-[#f7efe4] text-[#80540d] flex items-center justify-center font-bold text-xs">
                0{idx + 1}
              </div>
              <h4 className="text-sm font-bold text-[#181d26] font-heading">{v.title}</h4>
              <p className="text-xs text-gray-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Transparent Placeholders Section */}
      <div className="p-6 bg-white border border-[#ded1be] rounded-2xl space-y-4 shadow-xs">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider text-[#80540d] font-bold">
            Corporate Benchmarks & Placeholders
          </span>
          <span className="text-[11px] text-gray-600 bg-[#f7f2ea] px-2 py-0.5 rounded border border-[#e2d5c3]">
            Editable on verification
          </span>
        </div>
        <p className="text-xs text-gray-600 leading-relaxed">
          Aston Stone Corporation adheres to strict commercial veracity. We do not display unverified claims of being "No. 1" or "World's largest exporter". The following operational metrics are updated based on project verification:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-3 bg-[#faf7f2] rounded-lg border border-[#e8ded0]">
            <span className="text-gray-500 block text-[11px]">Certifications:</span>
            <span className="text-gray-800 font-semibold">{EDITABLE_PLACEHOLDERS.certifications}</span>
          </div>
          <div className="p-3 bg-[#faf7f2] rounded-lg border border-[#e8ded0]">
            <span className="text-gray-500 block text-[11px]">Production Capacity:</span>
            <span className="text-gray-800 font-semibold">{EDITABLE_PLACEHOLDERS.productionCapacity}</span>
          </div>
          <div className="p-3 bg-[#faf7f2] rounded-lg border border-[#e8ded0]">
            <span className="text-gray-500 block text-[11px]">Experience / Roots:</span>
            <span className="text-gray-800 font-semibold">{EDITABLE_PLACEHOLDERS.yearsExperience}</span>
          </div>
        </div>
      </div>

      {/* 5. Call to Action */}
      <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[#e2d6c6]">
        <div>
          <h4 className="text-base font-bold text-[#181d26] font-heading">
            Partner with Aston Stone Corporation
          </h4>
          <p className="text-xs text-gray-600">
            Let's discuss how Rajasthan natural stone and CNC precision cutting can elevate your next project.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => openQuoteModal()}
            className="px-6 py-3 bg-gradient-to-r from-[#d8b571] via-[#c5a059] to-[#ad822e] text-white font-bold rounded-lg text-xs tracking-wider uppercase transition-all shadow-sm hover:brightness-105"
          >
            Request a Quote
          </button>
          <button
            onClick={() => generateAndDownloadB2BZipPackage()}
            className="px-4 py-3 bg-white hover:bg-[#faf6f0] border border-[#cfbeab] text-[#80540d] font-bold rounded-lg text-xs flex items-center gap-2 shadow-xs"
          >
            <Download className="w-4 h-4" />
            <span>Download B2B Kit (.zip)</span>
          </button>
        </div>
      </div>

    </div>
  );
};
