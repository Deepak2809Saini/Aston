import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Layers,
  Sparkles,
  Download,
  Truck,
  Box,
  Sliders,
  Maximize2,
  FileCheck,
  Cpu
} from 'lucide-react';
import { EDITABLE_PLACEHOLDERS, COMPANY_CONTACT } from '../data/stoneData';
import { generateAndDownloadB2BZipPackage } from '../lib/zipExporter';

interface QualityManufacturingPageProps {
  openQuoteModal: (stoneId?: string, type?: any) => void;
}

export const QualityManufacturingPage: React.FC<QualityManufacturingPageProps> = ({ openQuoteModal }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-16 bg-[#faf7f2]">
      
      {/* Header */}
      <div className="border-b border-[#e2d6c6] pb-8 space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#80540d]">
          Rigorous B2B Process Control & CNC Technology
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-[#181d26] font-heading">
          Quality from Selection to Delivery
        </h1>
        <p className="text-sm sm:text-base text-gray-700 max-w-3xl leading-relaxed font-serif-sub italic">
          A disciplined 6-stage manufacturing protocol combining 5-axis CNC machine precision with master hand-carving to ensure every slab, tile, and custom carving complies with approved architectural drawings and international export standards.
        </p>
      </div>

      {/* 1. The 6-Step Manufacturing Process */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#80540d]">
            Standard Operating Procedure
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#181d26] font-heading">
            Our 6-Step Production Workflow
          </h2>
          <p className="text-xs text-gray-600">
            Documented quality checkpoints from raw quarry block to destination container receipt:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              num: "01",
              title: "Stone Selection",
              icon: Layers,
              summary: "Selection according to color, texture, intended use, and customer requirements.",
              details: [
                "Inspection of raw block soundness and absence of hairline fissures.",
                "Matching mineral tone and grain direction across adjacent blocks.",
                "Review of physical test data (compressive strength, absorption)."
              ]
            },
            {
              num: "02",
              title: "Processing & 5-Axis CNC",
              icon: Cpu,
              summary: "Cutting, multi-wire slicing, and 5-axis CNC routing according to agreed dimensions.",
              details: [
                "Multi-wire diamond sawing for smooth slab face parallelity.",
                "Laser-guided bridge cutting for strict rectangular 90° squareness.",
                "5-axis CNC stone profiling for complex 3D contours and reliefs."
              ]
            },
            {
              num: "03",
              title: "Finishing & Hand Detailing",
              icon: Sparkles,
              summary: "Polishing, honing, or other available finishes according to project requirements.",
              details: [
                "Automated 12-head diamond polishing for deep gloss clarity.",
                "Satin honing, thermal flaming, or sandblasting for anti-slip safety.",
                "Hand-carved architectural relief detailing by senior stone artisans."
              ]
            },
            {
              num: "04",
              title: "Quality Inspection",
              icon: FileCheck,
              summary: "Visual and dimensional inspection based on agreed specifications.",
              details: [
                "Diagonal measurement verification to prevent installation drift.",
                "Dry-lay layout review with high-definition client video updates.",
                "Surface finish texture uniformity and edge bevel inspection."
              ]
            },
            {
              num: "05",
              title: "Protective Packaging",
              icon: Box,
              summary: "Professional protective packaging appropriate for transportation.",
              details: [
                "ISPM-15 heat-treated fumigated seaworthy wooden crates.",
                "Polyethylene vapor barrier lining and foam spacers between slabs.",
                "Reinforced steel corner strapping to resist container shifting."
              ]
            },
            {
              num: "06",
              title: "Dispatch & Ocean Logistics",
              icon: Truck,
              summary: "Coordination for domestic or international delivery.",
              details: [
                "Container payload weight management matched to destination port limits.",
                "Heavy-duty timber dunnage and industrial lashing in 20ft ocean boxes.",
                "Complete documentation: Packing list, invoice, Certificate of Origin, BL."
              ]
            }
          ].map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-white border border-[#e2d6c6] hover:border-[#b88628] rounded-2xl transition-all space-y-4 relative shadow-xs hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#f7efe4] border border-[#d8be9d] text-[#80540d] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-black font-mono text-[#80540d]/30">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#181d26] font-heading">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-700 italic">
                  "{step.summary}"
                </p>

                <ul className="space-y-1.5 text-xs text-gray-600 pt-2 border-t border-[#ede4d7]">
                  {step.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#b88628] font-bold">&bull;</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Educational Section: The Manufacturing Value of Rajasthan Stone */}
      <div className="bg-white border border-[#ded1be] rounded-3xl p-8 sm:p-12 space-y-8 shadow-xs">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#80540d]">
            Educational Insight
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#181d26] font-heading">
            The Manufacturing Value of Rajasthan Stone
          </h2>
          <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-serif-sub italic text-base">
            Rajasthan's commercial value comes not only from the raw natural stone itself, but from the dense, specialized industrial and artisanal ecosystem developed around it.
          </p>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            In global stone procurement, raw material without processing discipline is of little use to high-tolerance construction. Rajasthan provides a complete unbroken continuum: from primary block quarrying to heavy gangsaw slicing, 5-axis CNC machining, specialized surface texturing, master hand carving, protective seaworthy crating, and seaport container logistics.
          </p>
        </div>

        {/* Infographic Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-xs">
          {[
            { title: "Stone Extraction", desc: "Scientific bench quarrying preserving structural rock integrity." },
            { title: "Primary Slicing", desc: "High-capacity gangsaw and multi-wire cutting to parallel faces." },
            { title: "CNC Machine Cut", desc: "5-axis computer routing for 3D panels, waterjet inlays, and jali." },
            { title: "Thickness Calibration", desc: "Mechanical planing to ±1mm for mortarless and adhesive fixes." },
            { title: "Mechanical Texturing", desc: "Thermal flaming, diamond brush, and sandblasting lines." },
            { title: "Artisan Hand Carving", desc: "Generational Sikandra sculptors executing complex sacred statuary." },
            { title: "Packaging Engineering", desc: "ISPM-15 treated fumigated timber with moisture barriers." },
            { title: "Seaport Container Lashing", desc: "Coordination with shipping lines for direct port clearance." }
          ].map((val, idx) => (
            <div key={idx} className="p-4 bg-[#faf7f2] border border-[#e5dcce] rounded-xl space-y-1.5">
              <span className="text-[#80540d] font-bold block text-sm">{val.title}</span>
              <p className="text-gray-600 text-[11px] leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Editable Placeholders */}
      <div className="p-6 bg-white border border-[#ded1be] rounded-2xl space-y-4 shadow-xs">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider text-[#80540d] font-bold">
            Laboratory Testing & Factory Benchmarks
          </span>
          <span className="text-[11px] text-gray-600 bg-[#f7f2ea] px-2 py-0.5 rounded border border-[#e2d5c3]">
            Project Specific Test Reports
          </span>
        </div>
        <p className="text-xs text-gray-600 leading-relaxed">
          ASTM, EN, and Bureau of Indian Standards (BIS) test certifications (Compressive Strength, Water Absorption, Density, Flexural Modulus) are issued per production batch upon client request.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-3 bg-[#faf7f2] rounded-lg border border-[#e5dcce]">
            <span className="text-gray-500 block text-[11px]">Factory Output / Capacity:</span>
            <span className="text-gray-800 font-semibold">{EDITABLE_PLACEHOLDERS.productionCapacity}</span>
          </div>
          <div className="p-3 bg-[#faf7f2] rounded-lg border border-[#e5dcce]">
            <span className="text-gray-500 block text-[11px]">Factory Audits & Certifications:</span>
            <span className="text-gray-800 font-semibold">{EDITABLE_PLACEHOLDERS.certifications}</span>
          </div>
          <div className="p-3 bg-[#faf7f2] rounded-lg border border-[#e5dcce]">
            <span className="text-gray-500 block text-[11px]">Operational Heritage:</span>
            <span className="text-gray-800 font-semibold">{EDITABLE_PLACEHOLDERS.yearsExperience}</span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="p-8 bg-[#f5efe4] border border-[#d6be9e] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
        <div>
          <h3 className="text-xl font-bold text-[#181d26] font-heading">
            Need Batch Inspection Reports or Lab Certificates?
          </h3>
          <p className="text-xs text-gray-700 mt-1">
            Our engineering team provides full batch test reports prior to container stuffing.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => openQuoteModal()}
            className="px-6 py-3 bg-gradient-to-r from-[#d8b571] via-[#c5a059] to-[#ad822e] text-white font-bold rounded-lg text-xs uppercase tracking-wider shadow-sm hover:brightness-105"
          >
            Request Technical Quote
          </button>
          <button
            onClick={() => generateAndDownloadB2BZipPackage()}
            className="px-4 py-3 bg-white hover:bg-[#faf6f0] border border-[#cfbeab] text-[#80540d] font-bold rounded-lg text-xs flex items-center gap-1.5 shadow-xs"
          >
            <Download className="w-4 h-4" />
            <span>Download B2B Kit (.zip)</span>
          </button>
        </div>
      </div>

    </div>
  );
};
