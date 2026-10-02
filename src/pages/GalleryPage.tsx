import React, { useState } from 'react';
import { X, Layers, MapPin, Download, ArrowRight, Eye } from 'lucide-react';
import { GALLERY_PROJECTS, COMPANY_CONTACT } from '../data/stoneData';
import { ProjectGalleryItem } from '../types';
import { generateAndDownloadB2BZipPackage } from '../lib/zipExporter';

interface GalleryPageProps {
  openQuoteModal: (stoneId?: string, type?: any) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ openQuoteModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectGalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'architecture', label: 'Architecture & Facades' },
    { id: 'interiors', label: 'Interiors & Flooring' },
    { id: 'red_sandstone', label: 'Red Sandstone' },
    { id: 'sculptures', label: 'Marble Statues & Busts' },
    { id: 'landscaping', label: 'Landscaping Paving' },
    { id: 'granite', label: 'Commercial Granite' },
  ];

  const filtered = GALLERY_PROJECTS.filter((p) => {
    return activeCategory === 'all' || p.category === activeCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-16 bg-[#faf7f2]">
      
      {/* Header */}
      <div className="border-b border-[#e2d6c6] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#80540d]">
            Architectural Portfolio & Craftsmanship
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#181d26] font-heading">
            Projects & Craftsmanship Gallery
          </h1>
          <p className="text-sm sm:text-base text-gray-700 max-w-2xl leading-relaxed font-serif-sub italic">
            Representative applications of Rajasthan marble, granite, red sandstone, CNC precision profiling, and bespoke sculpture commissions.
          </p>
        </div>

        <button
          onClick={() => openQuoteModal()}
          className="px-6 py-3 bg-gradient-to-r from-[#d8b571] via-[#c5a059] to-[#ad822e] text-white font-bold rounded-xl text-xs uppercase tracking-wider shrink-0 transition-all shadow-sm hover:brightness-105"
        >
          Discuss Your Project
        </button>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveCategory(c.id)}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeCategory === c.id
                ? 'bg-gradient-to-r from-[#d8b571] via-[#c5a059] to-[#ad822e] text-white shadow-xs'
                : 'bg-white text-gray-700 hover:text-black hover:bg-[#ede3d4] border border-[#e5dcce]'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((proj) => (
          <div
            key={proj.id}
            onClick={() => setSelectedProject(proj)}
            className="group bg-white border border-[#e2d6c6] hover:border-[#b88628] rounded-2xl overflow-hidden cursor-pointer transition-all flex flex-col justify-between shadow-xs hover:shadow-lg"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              <div className="absolute top-3 right-3 p-2 bg-white/80 rounded-full text-gray-800 shadow-xs group-hover:bg-white transition-colors">
                <Eye className="w-4 h-4" />
              </div>
              <span className="absolute bottom-3 left-3 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-white/90 text-[#80540d] rounded border border-[#decab0] shadow-xs">
                {proj.stoneUsed}
              </span>
            </div>

            <div className="p-6 space-y-3">
              <h3 className="text-lg font-bold text-[#181d26] font-heading group-hover:text-[#b88628] transition-colors">
                {proj.title}
              </h3>
              <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                {proj.description}
              </p>

              <div className="pt-3 border-t border-[#ede4d7] text-xs text-gray-600 space-y-1">
                <div className="flex items-center gap-1.5 text-gray-800 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#b88628]" />
                  <span>{proj.location}</span>
                </div>
                <div><strong>Application:</strong> {proj.application}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl bg-white border border-[#d6be9e] rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 text-gray-800 hover:text-black rounded-full shadow transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[60vh] bg-black">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-contain max-h-[60vh]"
              />
            </div>

            <div className="p-6 md:p-8 space-y-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#80540d] font-bold">
                  {selectedProject.stoneUsed}
                </span>
                <h2 className="text-2xl font-bold text-[#181d26] font-heading mt-1">
                  {selectedProject.title}
                </h2>
                <p className="text-xs text-gray-500 mt-0.5">{selectedProject.location}</p>
              </div>

              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="p-3 bg-[#faf7f2] rounded-lg border border-[#e5dcce] text-xs text-gray-800">
                <strong>Application Type:</strong> {selectedProject.application}
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-gray-500">
                  Want a similar natural stone or sculpture execution for your project?
                </span>
                <button
                  onClick={() => {
                    openQuoteModal(undefined, 'quote');
                    setSelectedProject(null);
                  }}
                  className="px-6 py-2.5 bg-gradient-to-r from-[#d8b571] via-[#c5a059] to-[#ad822e] text-white font-bold rounded-lg text-xs uppercase tracking-wider shadow-sm"
                >
                  Request Similar Project Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Placeholders note */}
      <div className="p-4 bg-white rounded-xl border border-[#ded1be] text-xs text-gray-600 shadow-xs">
        <strong>Notice:</strong> Project showcase represents application possibilities, CNC cutting scope, and craftsmanship capabilities in Sikandra, Dausa. We respect client non-disclosure agreements (NDAs) and do not publish private estate photography without client consent.
      </div>

    </div>
  );
};
