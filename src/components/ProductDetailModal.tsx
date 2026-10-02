import React from 'react';
import { X, Check, Shield, Layers, Compass, ArrowRight, Download, MessageSquare } from 'lucide-react';
import { StoneProduct } from '../types';
import { COMPANY_CONTACT } from '../data/stoneData';
import { generateAndDownloadB2BZipPackage } from '../lib/zipExporter';

interface ProductDetailModalProps {
  product: StoneProduct | null;
  onClose: () => void;
  openQuoteModal: (stoneId: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  openQuoteModal,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl my-8 bg-white border border-[#d6be9e] rounded-2xl shadow-2xl overflow-hidden text-[#1c2230]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-700 hover:text-black bg-white/80 p-2 rounded-full hover:bg-white shadow transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Stone Image Showcase */}
          <div className="relative min-h-[300px] md:min-h-full bg-[#f5ede2]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />
            
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-sm rounded-xl border border-[#e2d5c3] shadow-md">
              <span className="text-[11px] uppercase tracking-widest text-[#80540d] font-bold">
                Origin Region
              </span>
              <p className="text-sm font-bold text-[#181d26] mt-0.5">{product.origin}</p>
              <div className="flex items-center gap-2 mt-2 text-xs text-gray-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Direct Factory & Quarry Processing Ecosystem</span>
              </div>
            </div>
          </div>

          {/* Details Content */}
          <div className="p-6 md:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="px-2.5 py-1 rounded bg-[#f5ede0] text-[#80540d] text-xs font-bold uppercase tracking-wider border border-[#decab0]">
                  {product.category.replace('_', ' ')}
                </span>
                <span className="text-xs text-gray-500">Aston Stone Corporation</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-[#181d26] font-heading">
                {product.name}
              </h2>

              <p className="text-xs text-gray-700 mt-3 leading-relaxed">
                {product.description}
              </p>

              {/* Natural Attributes Grid */}
              <div className="grid grid-cols-2 gap-3 my-5 text-xs">
                <div className="p-3 bg-[#faf7f2] rounded-lg border border-[#e8ded0]">
                  <span className="text-gray-500 block text-[11px]">Color & Tone</span>
                  <span className="text-[#181d26] font-semibold">{product.color}</span>
                </div>
                <div className="p-3 bg-[#faf7f2] rounded-lg border border-[#e8ded0]">
                  <span className="text-gray-500 block text-[11px]">Vein / Pattern</span>
                  <span className="text-[#181d26] font-semibold">{product.pattern}</span>
                </div>
                <div className="p-3 bg-[#faf7f2] rounded-lg border border-[#e8ded0]">
                  <span className="text-gray-500 block text-[11px]">Standard Thickness</span>
                  <span className="text-[#181d26] font-semibold">{product.standardThickness}</span>
                </div>
                <div className="p-3 bg-[#faf7f2] rounded-lg border border-[#e8ded0]">
                  <span className="text-gray-500 block text-[11px]">Texture Feel</span>
                  <span className="text-[#181d26] font-semibold">{product.surfaceTexture}</span>
                </div>
              </div>

              {/* Finishes */}
              <div className="mb-5">
                <h4 className="text-xs uppercase tracking-wider text-[#80540d] font-bold mb-2">
                  Available Surface Finishes
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {product.finishes.map((f, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-[#fbf8f4] text-gray-800 border border-[#e5dcce] rounded text-xs font-medium"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recommended Applications */}
              <div className="mb-5">
                <h4 className="text-xs uppercase tracking-wider text-[#80540d] font-bold mb-2">
                  Architectural Applications
                </h4>
                <ul className="space-y-1.5 text-xs text-gray-700">
                  {product.recommendedApplications.map((app, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#b88628] shrink-0" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Benchmarks Placeholder */}
              {product.technicalSpecsPlaceholder && (
                <div className="p-3 bg-[#f7efe4] border border-[#e2d5c3] rounded-lg text-[11px] text-gray-700 mb-5">
                  <span className="text-[#80540d] font-bold block mb-1">
                    Technical Specifications Placeholder
                  </span>
                  {product.technicalSpecsPlaceholder.density && (
                    <p>&bull; Bulk Density: {product.technicalSpecsPlaceholder.density}</p>
                  )}
                  {product.technicalSpecsPlaceholder.waterAbsorption && (
                    <p>&bull; Water Absorption: {product.technicalSpecsPlaceholder.waterAbsorption}</p>
                  )}
                  {product.technicalSpecsPlaceholder.compressiveStrength && (
                    <p>&bull; Compressive Strength: {product.technicalSpecsPlaceholder.compressiveStrength}</p>
                  )}
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-[#ede4d7] space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => {
                    openQuoteModal(product.id);
                    onClose();
                  }}
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-[#d8b571] via-[#c5a059] to-[#ad822e] hover:brightness-105 text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Request Project Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=Hello%20Aston%20Stone%2C%20I%20want%20to%20enquire%20about%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold rounded-xl text-xs flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="flex items-center justify-between text-xs text-gray-500 pt-1">
                <span>Natural variation applies. Physical samples available.</span>
                <button
                  onClick={() => generateAndDownloadB2BZipPackage()}
                  className="text-[#80540d] font-semibold hover:underline flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download B2B Kit (.zip)
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
