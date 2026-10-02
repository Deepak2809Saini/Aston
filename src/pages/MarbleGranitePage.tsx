import React from 'react';
import { ArrowRight, Check, Download, Layers, ShieldCheck, MessageSquare } from 'lucide-react';
import { STONE_PRODUCTS, COMPANY_CONTACT } from '../data/stoneData';
import { StoneProduct } from '../types';
import { generateAndDownloadB2BZipPackage } from '../lib/zipExporter';

interface MarbleGranitePageProps {
  onSelectProduct: (product: StoneProduct) => void;
  openQuoteModal: (stoneId?: string) => void;
}

export const MarbleGranitePage: React.FC<MarbleGranitePageProps> = ({
  onSelectProduct,
  openQuoteModal,
}) => {
  const marbleAndGranite = STONE_PRODUCTS.filter(p => p.category === 'marble' || p.category === 'granite');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-16 bg-[#faf7f2]">
      
      {/* Header */}
      <div className="border-b border-[#e2d6c6] pb-8 space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#80540d]">
          Architectural Luxury & Structural Toughness
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-[#181d26] font-heading">
          Rajasthan Marble & Granite
        </h1>
        <p className="text-sm sm:text-base text-gray-700 max-w-3xl leading-relaxed font-serif-sub italic">
          From luminous Makrana crystalline white marble to heavy-duty Jalore black and Lakha red granites: calibrated for international projects and luxury residences.
        </p>
      </div>

      {/* Intro Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-white border border-[#d6be9e] rounded-2xl space-y-4 shadow-xs">
          <span className="text-xs uppercase tracking-widest text-[#80540d] font-bold block">
            Rajasthan Marble Collection
          </span>
          <h2 className="text-2xl font-bold text-[#181d26] font-heading">
            Pure Calcite Brilliance & Depth
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            Rajasthan's marble reserves are celebrated for exceptionally high calcium carbonate (calcite) content—frequently exceeding 98% in pure Makrana deposits. This crystalline matrix creates a translucent depth, high polish retention, and remarkable resistance to moisture penetration.
          </p>
          <div className="pt-2 flex flex-wrap gap-2 text-xs">
            <span className="px-2.5 py-1 bg-[#f7efe4] rounded text-gray-800 font-medium">Gangsaw Slabs</span>
            <span className="px-2.5 py-1 bg-[#f7efe4] rounded text-gray-800 font-medium">Bookmatched Panels</span>
            <span className="px-2.5 py-1 bg-[#f7efe4] rounded text-gray-800 font-medium">Cut-to-Size Flooring</span>
            <span className="px-2.5 py-1 bg-[#f7efe4] rounded text-gray-800 font-medium">Temple Carvings</span>
          </div>
        </div>

        <div className="p-8 bg-white border border-[#ded1be] rounded-2xl space-y-4 shadow-xs">
          <span className="text-xs uppercase tracking-widest text-[#80540d] font-bold block">
            Rajasthan Granite Collection
          </span>
          <h2 className="text-2xl font-bold text-[#181d26] font-heading">
            Igneous Durability for High-Wear Spaces
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            Formed through the deep crystallization of molten magma, Rajasthan granite provides superior compressive strength, low water absorption, and high scratch resistance (Mohs hardness 6-7). Ideal for airport terminals, commercial corporate lobbies, and exterior civic walkways.
          </p>
          <div className="pt-2 flex flex-wrap gap-2 text-xs">
            <span className="px-2.5 py-1 bg-[#f7efe4] rounded text-gray-800 font-medium">Flamed Thermal Pavers</span>
            <span className="px-2.5 py-1 bg-[#f7efe4] rounded text-gray-800 font-medium">Mirror Polish Counters</span>
            <span className="px-2.5 py-1 bg-[#f7efe4] rounded text-gray-800 font-medium">Bush-Hammered Treads</span>
            <span className="px-2.5 py-1 bg-[#f7efe4] rounded text-gray-800 font-medium">Monolithic Kerbs</span>
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-[#181d26] font-heading">
          Featured Marble & Granite Varieties
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marbleAndGranite.map((prod) => (
            <div
              key={prod.id}
              className="group bg-white border border-[#e2d6c6] hover:border-[#b88628] rounded-2xl overflow-hidden transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div
                onClick={() => onSelectProduct(prod)}
                className="h-56 overflow-hidden relative cursor-pointer"
              >
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-white/90 text-[#181d26] rounded shadow-xs">
                  {prod.category.toUpperCase()}
                </span>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] text-[#80540d] font-bold block">{prod.origin}</span>
                  <h4
                    onClick={() => onSelectProduct(prod)}
                    className="text-lg font-bold text-[#181d26] font-heading mt-0.5 cursor-pointer group-hover:text-[#b88628] transition-colors"
                  >
                    {prod.name}
                  </h4>
                  <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                    {prod.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#ede4d7] text-xs space-y-1 text-gray-700">
                    <div><strong>Thicknesses:</strong> {prod.standardThickness}</div>
                    <div><strong>Finishes:</strong> {prod.finishes.join(', ')}</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#ede4d7] flex items-center justify-between">
                  <button
                    onClick={() => onSelectProduct(prod)}
                    className="text-xs font-bold text-[#80540d] hover:text-[#b88628] flex items-center gap-1"
                  >
                    View Specs &rarr;
                  </button>
                  <button
                    onClick={() => openQuoteModal(prod.id)}
                    className="px-3 py-1.5 bg-[#f5ede0] hover:bg-[#b88628] hover:text-white text-gray-900 text-xs font-bold rounded-lg transition-colors"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Need a Specific Size CTA */}
      <div className="p-8 sm:p-10 bg-gradient-to-r from-[#fbf8f2] to-[#f4ebe0] border border-[#d6be9e] rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xs">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#80540d] font-bold">
            Custom Fabrication & Gangsaw Slabs
          </span>
          <h3 className="text-2xl font-bold text-[#181d26] font-heading">
            Need a Specific Size, Thickness, or Finish?
          </h3>
          <p className="text-xs text-gray-700 max-w-xl">
            We cut custom slab dimensions, calibrated tiles, step risers, and bookmatched sets to match your exact architectural drawings.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            onClick={() => openQuoteModal()}
            className="px-6 py-3 bg-gradient-to-r from-[#d8b571] via-[#c5a059] to-[#ad822e] text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow-sm hover:brightness-105"
          >
            Send Your Requirement
          </button>
          <a
            href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=Hello%20Aston%20Stone%2C%20I%20need%20custom%20marble%20or%20granite%20sizes`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 bg-[#25D366] text-black font-semibold rounded-xl text-xs flex items-center gap-1.5 shadow-xs"
          >
            <MessageSquare className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </div>

    </div>
  );
};
