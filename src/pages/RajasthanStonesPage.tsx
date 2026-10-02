import React from 'react';
import {
  Layers,
  Sparkles,
  Maximize,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Download,
  Filter,
  Truck,
  ShieldCheck,
  Compass,
  Cpu
} from 'lucide-react';
import { HERO_IMAGE, RED_SANDSTONE_IMAGE, STONE_PRODUCTS } from '../data/stoneData';
import { StoneProduct } from '../types';
import { generateAndDownloadB2BZipPackage } from '../lib/zipExporter';

interface RajasthanStonesPageProps {
  navigate: (page: string) => void;
  openQuoteModal: (stoneId?: string, type?: any) => void;
  onSelectProduct: (product: StoneProduct) => void;
}

export const RajasthanStonesPage: React.FC<RajasthanStonesPageProps> = ({
  navigate,
  openQuoteModal,
  onSelectProduct,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-16 bg-[#faf7f2]">
      
      {/* Header */}
      <div className="border-b border-[#e2d6c6] pb-8 space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#80540d]">
          Geological Riches, CNC Processing & Global Export
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-[#181d26] font-heading">
          Rajasthan — A Land of Natural Stone
        </h1>
        <p className="text-sm sm:text-base text-gray-700 max-w-3xl leading-relaxed font-serif-sub italic">
          Exploring India's premier geological belt: where metamorphic marbles, igneous granites, and sedimentary quartz sandstones meet generational craftsmanship and 5-axis CNC machining.
        </p>
      </div>

      {/* Mandatory Natural Stone Variation Disclaimer */}
      <div className="p-5 bg-white border border-[#d6be9e] rounded-xl flex items-start gap-4 shadow-xs">
        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="text-xs text-gray-800 space-y-1">
          <strong className="text-[#80540d] block text-sm">
            Important Natural Stone Characteristic & Selection Disclaimer
          </strong>
          <p className="leading-relaxed">
            "Natural stone is a natural product. Color, texture, veining, grain and other characteristics can vary from piece to piece. Final selection should be based on approved samples and project requirements."
          </p>
        </div>
      </div>

      {/* 1. Geological Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#181d26] font-heading">
            The Geological Diversity of Rajasthan
          </h2>
          <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
            Rajasthan possesses one of the world's most concentrated and diverse natural stone ecosystems. Geologically anchored by the ancient Aravalli mountain range—one of the oldest fold mountains on Earth—the state contains enormous reserves of crystalline marble, tough granites, quartzite sandstones, and dense limestones.
          </p>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            Centuries ago, these stones built India's grandest palaces, temples, and UNESCO World Heritage sites. Today, modern industrial extraction and CNC sawing work in tandem with skilled stone masons to bring these authentic materials to modern architectural towers, international resorts, luxury residences, and public plazas.
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
            <div className="p-3 bg-white rounded-lg border border-[#e2d5c3] shadow-xs">
              <span className="text-[#80540d] font-bold block">Makrana & Rajsamand</span>
              <span className="text-gray-600">Pure Calcite White, Green & Pink Marbles</span>
            </div>
            <div className="p-3 bg-white rounded-lg border border-[#e2d5c3] shadow-xs">
              <span className="text-[#80540d] font-bold block">Dholpur, Karauli & Dausa</span>
              <span className="text-gray-600">Beige, Cream & Historic Red Sandstones</span>
            </div>
            <div className="p-3 bg-white rounded-lg border border-[#e2d5c3] shadow-xs">
              <span className="text-[#80540d] font-bold block">Jalore & Barmer</span>
              <span className="text-gray-600">High-Density Igneous Granites</span>
            </div>
            <div className="p-3 bg-white rounded-lg border border-[#e2d5c3] shadow-xs">
              <span className="text-[#80540d] font-bold block">Kota & Ramganj Mandi</span>
              <span className="text-gray-600">Resilient Blue-Grey & Brown Limestones</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden border border-[#d6be9e] shadow-xl relative">
            <img
              src={HERO_IMAGE}
              alt="Rajasthan Natural Stone Architecture"
              className="w-full h-80 sm:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-sm rounded-xl border border-[#e2d5c3] text-xs shadow-md">
              <span className="text-[#80540d] font-bold block mb-1">Architectural Sandstone & Marble</span>
              <p className="text-gray-700">
                Naturally reflective, thermally stabilizing, and gracefully aging with time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Visual Section: The 6-Step Stone Lifecycle Flow */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#80540d]">
            Industrial Discipline
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#181d26] font-heading">
            Stone Production & Delivery Lifecycle
          </h2>
          <p className="text-xs text-gray-600">
            Stone &rarr; Processing &rarr; Finishing &rarr; Quality Inspection &rarr; Packaging &rarr; Delivery
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              step: "01",
              title: "Raw Stone Selection",
              desc: "Inspection of raw quarry blocks for structural soundness, grain cohesion, color uniformity, and absence of detrimental fissures."
            },
            {
              step: "02",
              title: "Precision Processing & CNC",
              desc: "Gangsaw slab sawing, multi-wire slicing, automated bridge cutting, and 5-axis CNC routing for 3D reliefs."
            },
            {
              step: "03",
              title: "Surface Finishing",
              desc: "Application of diamond polishing, satin honing, thermal flaming, sandblasting, or traditional hand split texture per specification."
            },
            {
              step: "04",
              title: "Quality Inspection",
              desc: "Meticulous verification of diagonal squareness, calibrated thickness (±1mm tolerance), surface texture, and dry-lay color matching."
            },
            {
              step: "05",
              title: "Protective Packaging",
              desc: "Placement into ISPM-15 heat-treated fumigated wooden crates with moisture-barrier polyethylene film and corner edge cushions."
            },
            {
              step: "06",
              title: "Dispatch & Ocean Logistics",
              desc: "Container dunnage lashing for ocean transit or secure flatbed trailer dispatch across all Indian commercial centers."
            }
          ].map((flow, i) => (
            <div
              key={i}
              className="p-6 bg-white border border-[#ded1be] rounded-xl space-y-3 hover:border-[#b88628] transition-all relative overflow-hidden shadow-xs"
            >
              <div className="text-2xl font-black font-mono text-[#80540d]/30">
                {flow.step}
              </div>
              <h3 className="text-base font-bold text-[#181d26] font-heading">
                {flow.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {flow.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Stones Showcase Cards */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#80540d]">
              Catalogue Overview
            </span>
            <h3 className="text-2xl font-bold text-[#181d26] font-heading">
              Key Rajasthan Stone Varieties
            </h3>
          </div>
          <button
            onClick={() => navigate('products')}
            className="text-xs font-bold text-[#80540d] hover:text-[#b88628] flex items-center gap-1.5 self-start sm:self-auto"
          >
            Explore Complete Product Catalogue &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STONE_PRODUCTS.slice(0, 8).map((prod) => (
            <div
              key={prod.id}
              onClick={() => onSelectProduct(prod)}
              className="group cursor-pointer bg-white border border-[#e2d6c6] hover:border-[#b88628] rounded-xl overflow-hidden transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div className="h-44 overflow-hidden relative">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-white/90 text-[#181d26] rounded shadow-xs">
                  {prod.category.replace('_', ' ')}
                </span>
              </div>
              <div className="p-4 space-y-2">
                <h4 className="text-sm font-bold text-[#181d26] font-heading group-hover:text-[#b88628] transition-colors">
                  {prod.name}
                </h4>
                <p className="text-[11px] text-gray-600 line-clamp-2">
                  {prod.description}
                </p>
                <div className="pt-2 border-t border-[#ede4d7] flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#80540d] font-bold">View Specs</span>
                  <span className="text-gray-500 text-[10px]">{prod.finishes[0]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Bar */}
      <div className="p-8 bg-[#f5efe4] border border-[#d6be9e] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
        <div>
          <h3 className="text-xl font-bold text-[#181d26] font-heading">
            Need Stone Samples for Architectural Approval?
          </h3>
          <p className="text-xs text-gray-700 mt-1">
            We provide physical sample boxes of Rajasthan marble, granite, and sandstone for project teams worldwide.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => openQuoteModal(undefined, 'sample')}
            className="px-6 py-3 bg-gradient-to-r from-[#d8b571] via-[#c5a059] to-[#ad822e] text-white font-bold rounded-lg text-xs uppercase tracking-wider shadow-sm hover:brightness-105"
          >
            Request Sample Box
          </button>
          <button
            onClick={() => generateAndDownloadB2BZipPackage()}
            className="px-4 py-3 bg-white hover:bg-[#faf6f0] border border-[#cfbeab] text-[#80540d] font-bold rounded-lg text-xs flex items-center gap-1.5 shadow-xs"
          >
            <Download className="w-4 h-4" />
            <span>Spec Kit (.zip)</span>
          </button>
        </div>
      </div>

    </div>
  );
};
