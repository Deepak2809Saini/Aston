import React from 'react';
import {
  Home,
  Sparkles,
  Building2,
  Briefcase,
  Store,
  UtensilsCrossed,
  Landmark,
  Shield,
  Award,
  Trees,
  Layers,
  Grid,
  LayoutGrid,
  TrendingUp,
  Maximize,
  Compass,
  Filter,
  Crown,
  User,
  ArrowRight,
  Download,
  Cpu
} from 'lucide-react';
import { STONE_APPLICATIONS, HERO_IMAGE, RED_SANDSTONE_IMAGE, COMPANY_CONTACT } from '../data/stoneData';
import { generateAndDownloadB2BZipPackage } from '../lib/zipExporter';

interface ApplicationsPageProps {
  navigate: (page: string) => void;
  openQuoteModal: (stoneId?: string, type?: any) => void;
}

export const ApplicationsPage: React.FC<ApplicationsPageProps> = ({ navigate, openQuoteModal }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-16 bg-[#faf7f2]">
      
      {/* Header */}
      <div className="border-b border-[#e2d6c6] pb-8 space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#80540d]">
          Versatility in Built Environments
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-[#181d26] font-heading">
          Natural Stone Applications
        </h1>
        <p className="text-sm sm:text-base text-gray-700 max-w-3xl leading-relaxed font-serif-sub italic">
          From luxury private estates and high-traffic commercial atriums to sacred temple sanctums, 5-axis CNC facades, and climate-resilient exterior paving.
        </p>
      </div>

      {/* Main Visual Feature */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white border border-[#d6be9e] rounded-2xl p-6 sm:p-10 shadow-xs">
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#80540d] font-bold">
            Tailored Engineering, CNC & Finishes
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#181d26] font-heading">
            Matching Stone Properties to Spatial Function
          </h2>
          <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
            Successful architectural stone integration requires selecting the exact material properties for each micro-climate and wear condition. Our technical team works alongside architects to pair appropriate slip resistance (R-ratings), compressive load allowances, and thermal expansion properties.
          </p>
          <div className="pt-2 flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1 bg-[#f7efe4] rounded text-gray-800 font-medium border border-[#ded1be]">Non-Slip Paving</span>
            <span className="px-3 py-1 bg-[#f7efe4] rounded text-gray-800 font-medium border border-[#ded1be]">Ventilated Rainscreens</span>
            <span className="px-3 py-1 bg-[#f7efe4] rounded text-gray-800 font-medium border border-[#ded1be]">5-Axis CNC Facades</span>
            <span className="px-3 py-1 bg-[#f7efe4] rounded text-gray-800 font-medium border border-[#ded1be]">Bookmatched Marble</span>
            <span className="px-3 py-1 bg-[#f7efe4] rounded text-gray-800 font-medium border border-[#ded1be]">Pierced Jali Screens</span>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden border border-[#ded1be] shadow-lg relative">
          <img
            src={HERO_IMAGE}
            alt="Natural Stone Applications Showcase"
            className="w-full h-80 sm:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 rounded-xl border border-[#e2d5c3] text-xs text-gray-800 shadow-md">
            <strong className="text-[#181d26] block mb-0.5">Heritage Facade & Arcade</strong>
            Sandstone ashlar masonry integrated with carved pierced jali ventilation panels.
          </div>
        </div>
      </div>

      {/* Complete Applications Grid */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h3 className="text-2xl font-bold text-[#181d26] font-heading">
            20+ Architectural Applications
          </h3>
          <button
            onClick={() => generateAndDownloadB2BZipPackage()}
            className="text-xs font-bold text-[#80540d] hover:text-[#b88628] flex items-center gap-1.5 self-start sm:self-auto"
          >
            <Download className="w-3.5 h-3.5" />
            Download Architectural Spec Kit (.zip)
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STONE_APPLICATIONS.map((app, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-[#e2d6c6] hover:border-[#b88628] rounded-2xl transition-all space-y-3 shadow-xs hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-lg bg-[#f7efe4] text-[#80540d] flex items-center justify-center text-xs font-bold font-mono">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">
                  Aston Stone Spec
                </span>
              </div>
              <h4 className="text-base font-bold text-[#181d26] font-heading">
                {app.name}
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                {app.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Banner */}
      <div className="p-8 bg-[#f5efe4] border border-[#d6be9e] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
        <div>
          <h3 className="text-xl font-bold text-[#181d26] font-heading">
            Have an Architectural Drawing or Project Schedule?
          </h3>
          <p className="text-xs text-gray-700 mt-1">
            Send us your bill of quantities (BOQ) or architectural drawings for precision take-offs and containerized freight estimates.
          </p>
        </div>

        <button
          onClick={() => openQuoteModal()}
          className="px-6 py-3 bg-gradient-to-r from-[#d8b571] via-[#c5a059] to-[#ad822e] text-white font-bold rounded-xl text-xs uppercase tracking-wider shrink-0 transition-all shadow-sm hover:brightness-105"
        >
          Submit Architectural BOQ
        </button>
      </div>

    </div>
  );
};
