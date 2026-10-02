import React from 'react';
import { Sparkles, Check, ArrowRight, ShieldCheck, Download, MessageSquare, Cpu } from 'lucide-react';
import { MARBLE_SCULPTURES, ARTISAN_IMAGE, COMPANY_CONTACT } from '../data/stoneData';
import { generateAndDownloadB2BZipPackage } from '../lib/zipExporter';
import { BrandLogo } from '../components/BrandLogo';

interface SculpturesPageProps {
  navigate: (page: string) => void;
  openQuoteModal: (stoneId?: string, type?: any) => void;
}

export const SculpturesPage: React.FC<SculpturesPageProps> = ({
  navigate,
  openQuoteModal,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-16 bg-[#faf7f2]">
      
      {/* Header */}
      <div className="border-b border-[#e2d6c6] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <BrandLogo variant="horizontal" size="md" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#80540d] block">
            Generational Artisanal Mastery &bull; Sikandra, Dausa
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#181d26] font-heading">
            Marble Statues & Sculptures
          </h1>
          <p className="text-sm sm:text-base text-gray-700 max-w-2xl leading-relaxed font-serif-sub italic">
            From reverent sacred deities and temple architecture to classical European figurative art and bespoke human portrait busts: carved in authentic Makrana white marble.
          </p>
        </div>

        <button
          onClick={() => openQuoteModal(undefined, 'sculpture')}
          className="px-6 py-3 bg-gradient-to-r from-[#d8b571] via-[#c5a059] to-[#ad822e] text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow-sm hover:brightness-105 shrink-0"
        >
          Commission a Sculpture
        </button>
      </div>

      {/* Featured Artisan Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white border border-[#d6be9e] rounded-2xl p-6 sm:p-10 shadow-xs">
        <div className="lg:col-span-6 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#80540d]">
            Handcrafted in Rajasthan
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#181d26] font-heading">
            The Living Art of Stone Carving
          </h2>
          <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
            In Sikandra and Dausa, the craft of marble carving is not an automated assembly line; it is a sacred discipline cultivated over centuries. Our sculptors work with pure Makrana white marble—renowned for its microcrystalline density and translucent brilliance that catches natural ambient light.
          </p>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            Whether sculpting complex multi-figure temple sanctuaries, Roman/Greek classical reproductions, monumental garden water fountains, or custom figurative commissions, we maintain exacting anatomical and iconographic proportions.
          </p>

          <div className="pt-2 flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1 bg-[#f7efe4] text-gray-800 font-medium rounded border border-[#ded1be]">Temple Deities</span>
            <span className="px-3 py-1 bg-[#f7efe4] text-gray-800 font-medium rounded border border-[#ded1be]">Custom Human Portraits</span>
            <span className="px-3 py-1 bg-[#f7efe4] text-gray-800 font-medium rounded border border-[#ded1be]">Classical Figurative Art</span>
            <span className="px-3 py-1 bg-[#f7efe4] text-gray-800 font-medium rounded border border-[#ded1be]">Garden Fountains</span>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-xl overflow-hidden border border-[#d6be9e] shadow-lg relative">
            <img
              src={ARTISAN_IMAGE}
              alt="Sculptor delicately detailing marble"
              className="w-full h-80 sm:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 rounded-lg text-xs text-gray-800 shadow-md">
              <strong className="text-[#181d26] block">Fine Hand Finishing</strong>
              Chisel, mallet, and wet diamond smoothing create an everlasting natural stone luster without artificial lacquers.
            </div>
          </div>
        </div>
      </div>

      {/* Sculpture Categories Grid */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-[#181d26] font-heading">
          Our Sculpture Portfolio
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MARBLE_SCULPTURES.map((sculp) => (
            <div
              key={sculp.id}
              className="group bg-white border border-[#e2d6c6] hover:border-[#b88628] rounded-2xl overflow-hidden transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={sculp.image}
                  alt={sculp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-white/90 text-[#181d26] rounded shadow-xs">
                  {sculp.category.toUpperCase()}
                </span>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold text-[#181d26] font-heading group-hover:text-[#b88628] transition-colors">
                    {sculp.title}
                  </h4>
                  <p className="text-xs text-gray-600 mt-2 line-clamp-3 leading-relaxed">
                    {sculp.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#ede4d7] text-xs space-y-1 text-gray-700">
                    <div><strong className="text-gray-500">Material:</strong> {sculp.material}</div>
                    <div><strong className="text-gray-500">Dimensions:</strong> {sculp.heightPlaceholder}</div>
                    <div><strong className="text-gray-500">Finish:</strong> {sculp.finish}</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#ede4d7] flex items-center justify-between">
                  <button
                    onClick={() => openQuoteModal(undefined, 'sculpture')}
                    className="text-xs font-bold text-[#80540d] hover:text-[#b88628] flex items-center gap-1"
                  >
                    Commission Piece &rarr;
                  </button>
                  <a
                    href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=Hello%20Aston%20Stone%2C%20I%20am%20interested%20in%20commissioning%20a%20marble%20sculpture`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#20ba59] font-bold hover:underline"
                  >
                    WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How Custom Commissions Work */}
      <div className="p-8 bg-white border border-[#ded1be] rounded-2xl space-y-6 shadow-xs">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#80540d]">
            Commissioning Protocol
          </span>
          <h3 className="text-2xl font-bold text-[#181d26] font-heading">
            How to Commission a Custom Sculpture
          </h3>
          <p className="text-xs text-gray-600">
            We collaborate closely with clients, patrons, and architects through every stage:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-gray-700">
          <div className="p-4 bg-[#faf7f2] rounded-xl border border-[#e5dcce] space-y-1.5">
            <span className="text-sm font-bold text-[#80540d]">1. Design & References</span>
            <p className="text-gray-600">Share design sketches, iconographic specifications, or photographs of the desired sculpture.</p>
          </div>
          <div className="p-4 bg-[#faf7f2] rounded-xl border border-[#e5dcce] space-y-1.5">
            <span className="text-sm font-bold text-[#80540d]">2. Stone & Proportions</span>
            <p className="text-gray-600">Selection of Makrana Super White or statuary marble block, height scaling, and pedestal specs.</p>
          </div>
          <div className="p-4 bg-[#faf7f2] rounded-xl border border-[#e5dcce] space-y-1.5">
            <span className="text-sm font-bold text-[#80540d]">3. Work in Progress Reviews</span>
            <p className="text-gray-600">Receive progressive high-resolution photos and video updates during rough blocking and fine facial detailing.</p>
          </div>
          <div className="p-4 bg-[#faf7f2] rounded-xl border border-[#e5dcce] space-y-1.5">
            <span className="text-sm font-bold text-[#80540d]">4. Shockproof Crating & Delivery</span>
            <p className="text-gray-600">Custom foam-cushioned wooden skeletal framework designed to protect fine extremities during transit.</p>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#ede4d7]">
          <div>
            <span className="text-xs font-bold text-[#181d26]">Looking for human portrait sculptures carved from photos?</span>
            <p className="text-[11px] text-gray-600">We have a specialized portrait carving division for commemorative busts.</p>
          </div>
          <button
            onClick={() => navigate('custom-portraits')}
            className="px-5 py-2.5 bg-[#f7efe4] hover:bg-[#ede3d4] border border-[#d6be9e] text-[#80540d] rounded-lg text-xs font-bold flex items-center gap-2"
          >
            <span>Explore Custom Portraits</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </div>
  );
};
