import React, { useState } from 'react';
import { Search, Filter, Layers, Download, ArrowRight, MessageSquare, Cpu, Sparkles } from 'lucide-react';
import { STONE_PRODUCTS, COMPANY_CONTACT } from '../data/stoneData';
import { StoneProduct } from '../types';
import { generateAndDownloadB2BZipPackage } from '../lib/zipExporter';

interface ProductsPageProps {
  onSelectProduct: (product: StoneProduct) => void;
  openQuoteModal: (stoneId?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onSelectProduct,
  openQuoteModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Rajasthan Stones' },
    { id: 'marble', label: 'Marble' },
    { id: 'granite', label: 'Granite' },
    { id: 'sandstone', label: 'Sandstone' },
    { id: 'red_sandstone', label: 'Red Sandstone' },
    { id: 'limestone', label: 'Kota Limestone' },
    { id: 'custom_stone', label: 'CNC Machine Stone Cut & Jali' },
  ];

  const filteredProducts = STONE_PRODUCTS.filter((prod) => {
    const matchesCategory = activeCategory === 'all' || prod.category === activeCategory;
    const matchesSearch =
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.recommendedApplications.some(app => app.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-12 bg-[#faf7f2]">
      
      {/* Page Header */}
      <div className="border-b border-[#e2d6c6] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#80540d]">
            Architectural & Commercial Grade &bull; CNC Precision
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#181d26] font-heading">
            Natural Stone Product Catalogue
          </h1>
          <p className="text-xs sm:text-sm text-gray-700 max-w-2xl leading-relaxed">
            Sourced and processed in Rajasthan, India. Available in gangsaw slabs, calibrated floor tiles, 5-axis CNC cut panels, carved jali screens, and custom dimensional blocks.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => generateAndDownloadB2BZipPackage()}
            className="px-4 py-2.5 bg-white hover:bg-[#faf6f0] border border-[#cfbeab] text-[#80540d] font-bold rounded-lg text-xs flex items-center gap-2 transition-all shadow-xs"
          >
            <Download className="w-4 h-4" />
            <span>Download Full Catalog (.zip)</span>
          </button>
          <button
            onClick={() => openQuoteModal()}
            className="px-5 py-2.5 bg-gradient-to-r from-[#d8b571] via-[#c5a059] to-[#ad822e] text-white font-bold rounded-lg text-xs uppercase tracking-wider transition-all shadow-sm hover:brightness-105"
          >
            Get a Quote
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-xl border border-[#ded1be] shadow-xs">
        {/* Categories Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#d8b571] via-[#c5a059] to-[#ad822e] text-white shadow-xs'
                  : 'bg-[#faf7f2] text-gray-700 hover:text-black hover:bg-[#ede3d4]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by stone, color, or use..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#faf7f2] border border-[#d6be9e] rounded-lg pl-9 pr-4 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#b88628]"
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((prod) => (
          <div
            key={prod.id}
            className="group bg-white border border-[#e2d6c6] hover:border-[#b88628] rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between hover:shadow-lg"
          >
            <div
              onClick={() => onSelectProduct(prod)}
              className="relative h-60 overflow-hidden cursor-pointer"
            >
              <img
                src={prod.image}
                alt={prod.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-md rounded-md text-[11px] font-bold text-[#181d26] border border-[#d6c7b2] uppercase shadow-xs">
                {prod.category.replace('_', ' ')}
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="text-[11px] text-[#80540d] font-bold tracking-wide">
                  {prod.origin}
                </div>
                <h3
                  onClick={() => onSelectProduct(prod)}
                  className="text-xl font-bold text-[#181d26] font-heading cursor-pointer group-hover:text-[#b88628] transition-colors"
                >
                  {prod.name}
                </h3>
                <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                  {prod.description}
                </p>

                <div className="pt-2 text-xs space-y-1 text-gray-700">
                  <div>
                    <span className="text-gray-500">Color:</span> {prod.color}
                  </div>
                  <div>
                    <span className="text-gray-500">Thickness:</span> {prod.standardThickness}
                  </div>
                </div>

                {/* Available Finishes Chips */}
                <div className="pt-2 flex flex-wrap gap-1">
                  {prod.finishes.slice(0, 3).map((f, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 bg-[#f7efe4] border border-[#ded1be] text-gray-800 rounded font-medium"
                    >
                      {f}
                    </span>
                  ))}
                  {prod.finishes.length > 3 && (
                    <span className="text-[10px] px-1.5 py-0.5 text-gray-500">
                      +{prod.finishes.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-[#ede4d7] flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectProduct(prod)}
                  className="text-xs font-bold text-[#80540d] hover:text-[#b88628] flex items-center gap-1 transition-colors"
                >
                  <span>Specs & Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => openQuoteModal(prod.id)}
                  className="px-3.5 py-1.5 bg-[#f5ede0] hover:bg-[#b88628] hover:text-white text-gray-900 rounded-lg text-xs font-bold transition-colors"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-[#ded1be]">
          <p className="text-gray-700 text-sm font-semibold">No natural stones match your active filter.</p>
          <button
            onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
            className="mt-3 px-4 py-2 bg-[#b88628] text-white text-xs font-bold rounded-lg"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* CNC Machine Stone Cut & Custom Sizing Banner */}
      <div className="p-8 bg-gradient-to-r from-[#fbf8f2] to-[#f4ebe0] border-2 border-[#d6be9e] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#80540d]">
            <Cpu className="w-4 h-4 text-[#b88628]" />
            <span>5-Axis CNC Precision Stone Cutting & Inlays</span>
          </div>
          <h3 className="text-xl font-bold text-[#181d26] font-heading">
            Need High-Precision CNC Machine Stone Cut or Custom Profiling?
          </h3>
          <p className="text-xs text-gray-700 max-w-xl">
            We program 5-axis CNC cutters to manufacture intricate 3D architectural reliefs, parametric building facade screens, waterjet floor medallions, and interlocking stonework directly from your CAD files.
          </p>
        </div>

        <button
          onClick={() => openQuoteModal('cnc-machine-stone-cutting')}
          className="px-6 py-3 bg-gradient-to-r from-[#d8b571] via-[#c5a059] to-[#ad822e] text-white font-bold rounded-xl text-xs uppercase tracking-wider shrink-0 transition-all shadow-sm hover:brightness-105"
        >
          Send CAD / CNC Requirement
        </button>
      </div>

    </div>
  );
};
