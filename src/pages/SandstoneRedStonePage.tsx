import React from 'react';
import { Layers, ShieldCheck, CheckCircle2, Download, ArrowRight, AlertCircle, Compass } from 'lucide-react';
import { RED_SANDSTONE_IMAGE, HERO_IMAGE, STONE_PRODUCTS, COMPANY_CONTACT } from '../data/stoneData';
import { StoneProduct } from '../types';
import { generateAndDownloadB2BZipPackage } from '../lib/zipExporter';

interface SandstoneRedStonePageProps {
  onSelectProduct: (product: StoneProduct) => void;
  openQuoteModal: (stoneId?: string, type?: any) => void;
}

export const SandstoneRedStonePage: React.FC<SandstoneRedStonePageProps> = ({
  onSelectProduct,
  openQuoteModal,
}) => {
  const sandstones = STONE_PRODUCTS.filter(p => p.category === 'sandstone' || p.category === 'red_sandstone');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-16 bg-[#faf7f2]">
      
      {/* Header */}
      <div className="border-b border-[#e2d6c6] pb-8 space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#80540d]">
          The Soul of Rajasthan Architecture
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-[#181d26] font-heading">
          Rajasthan Sandstone & Red Stone
        </h1>
        <p className="text-sm sm:text-base text-gray-700 max-w-3xl leading-relaxed font-serif-sub italic">
          From the iconic red sandstone of monumental Indian forts to warm cream Dholpur and frost-tested Kandla grey paving: natural quartz stone built for generations.
        </p>
      </div>

      {/* Technical Suitability Disclaimer */}
      <div className="p-4 bg-white border border-[#d6be9e] rounded-xl flex items-start gap-3 shadow-xs">
        <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <p className="text-xs text-gray-800 leading-relaxed">
          <strong className="text-[#80540d]">Architectural Note:</strong> Natural sandstone varies in porosity, quartz cementing matrix, and compressive strength. Suitability for specific climatic environments (such as severe freeze-thaw cycles or chemical saltwater exposures) should be confirmed through project-specific laboratory test data and approved samples.
        </p>
      </div>

      {/* Heritage Visual Storytelling */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#80540d]">
            Architectural Heritage
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#181d26] font-heading">
            The Monumental Legacy of Red Sandstone
          </h2>
          <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
            Drawn from the quarry beds of Dholpur, Karauli, and the Sikandra-Dausa stone corridor, Rajasthan red sandstone is celebrated across centuries of monumental architecture. It forms the core fabric of India's world-renowned UNESCO forts, civic gateways, and palatial courtyards.
          </p>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            Today, leading international architects combine this heritage stone with minimalist glass curtain walls, ventilated rainscreen facades, and precision-sawn ashlar masonry. Its high silica matrix provides superior resistance to urban pollution, acid rain, and weathering.
          </p>

          <div className="space-y-2 pt-2 text-xs text-gray-800 font-medium">
            {[
              "High Silica Cohesion & Enduring Structural Hardness",
              "Natural Thermal Insulation: Keeps interiors cool in direct sun",
              "Non-Slip Texture even when wet around water bodies",
              "Calibrated Sawn Panels for Ventilated Facade Systems",
              "Hand-Chiseled Ashlar & Pierced Lattice (Jali) Work"
            ].map((pt, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#b88628] shrink-0" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-2xl overflow-hidden border border-[#d6be9e] shadow-xl relative">
            <img
              src={RED_SANDSTONE_IMAGE}
              alt="Rajasthan Red Sandstone Colonnade"
              className="w-full h-80 sm:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 rounded-xl border border-[#e2d5c3] text-xs shadow-md">
              <span className="text-[#80540d] font-bold block mb-1">Authentic Dholpur / Agra Red Sandstone</span>
              <p className="text-gray-700">
                Precision calibrated panels, decorative pillars, and hand-carved cornices ready for export.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sandstone Varieties Showcase */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#80540d]">
              Stone Varieties
            </span>
            <h3 className="text-2xl font-bold text-[#181d26] font-heading">
              Our Sandstone Catalogue
            </h3>
          </div>
          <button
            onClick={() => openQuoteModal(undefined, 'sample')}
            className="text-xs font-bold text-[#80540d] hover:text-[#b88628] flex items-center gap-1.5 self-start sm:self-auto"
          >
            Request Sandstone Sample Box &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sandstones.map((prod) => (
            <div
              key={prod.id}
              className="group bg-white border border-[#e2d6c6] hover:border-[#b88628] rounded-2xl overflow-hidden transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div
                onClick={() => onSelectProduct(prod)}
                className="h-48 overflow-hidden relative cursor-pointer"
              >
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-white/90 text-[#181d26] rounded shadow-xs">
                  {prod.category.replace('_', ' ')}
                </span>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] text-[#80540d] font-bold block">{prod.origin}</span>
                  <h4
                    onClick={() => onSelectProduct(prod)}
                    className="text-base font-bold text-[#181d26] font-heading mt-0.5 cursor-pointer group-hover:text-[#b88628] transition-colors"
                  >
                    {prod.name}
                  </h4>
                  <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                    {prod.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#ede4d7] flex items-center justify-between">
                  <button
                    onClick={() => onSelectProduct(prod)}
                    className="text-xs font-bold text-[#80540d] hover:text-[#b88628]"
                  >
                    View Specs
                  </button>
                  <button
                    onClick={() => openQuoteModal(prod.id)}
                    className="px-3 py-1 bg-[#f5ede0] hover:bg-[#b88628] hover:text-white text-gray-900 text-xs font-bold rounded-lg transition-colors"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sandstone Applications Banner */}
      <div className="p-8 bg-white border border-[#ded1be] rounded-2xl space-y-6 shadow-xs">
        <h3 className="text-xl font-bold text-[#181d26] font-heading">
          Key Architectural Applications of Rajasthan Sandstone
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div className="p-4 bg-[#faf7f2] rounded-xl border border-[#e5dcce]">
            <strong className="text-[#181d26] block mb-1">Exterior Facades</strong>
            <p className="text-gray-600">Rainscreen curtain walls, rusticated ashlar, and carved cornice moldings.</p>
          </div>
          <div className="p-4 bg-[#faf7f2] rounded-xl border border-[#e5dcce]">
            <strong className="text-[#181d26] block mb-1">Landscape Patios</strong>
            <p className="text-gray-600">Natural split flagstones, calibrated 22mm paving slabs, and cobblestone driveways.</p>
          </div>
          <div className="p-4 bg-[#faf7f2] rounded-xl border border-[#e5dcce]">
            <strong className="text-[#181d26] block mb-1">Pool Copings</strong>
            <p className="text-gray-600">Bullnosed edges that stay cool in sunlight and maintain non-slip grip when wet.</p>
          </div>
          <div className="p-4 bg-[#faf7f2] rounded-xl border border-[#e5dcce]">
            <strong className="text-[#181d26] block mb-1">Carved Jali Screens</strong>
            <p className="text-gray-600">Pierced stone privacy panels providing natural shade and ambient airflow.</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#ede4d7]">
          <span className="text-xs text-gray-600">
            Available in Calibrated 20mm, 25mm, 30mm, 40mm, and Custom Carved Blocks.
          </span>
          <button
            onClick={() => openQuoteModal()}
            className="px-6 py-2.5 bg-gradient-to-r from-[#d8b571] via-[#c5a059] to-[#ad822e] text-white font-bold rounded-lg text-xs uppercase tracking-wider shadow-sm hover:brightness-105"
          >
            Request Sandstone Quote
          </button>
        </div>
      </div>

    </div>
  );
};
