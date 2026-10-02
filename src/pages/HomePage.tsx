import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Download,
  MessageSquare,
  Globe2,
  Building,
  Layers,
  Sparkles,
  Compass,
  Hammer,
  Truck,
  Maximize2,
  Cpu,
  Ship,
  Box,
  ExternalLink
} from 'lucide-react';
import {
  HERO_IMAGE,
  ARTISAN_IMAGE,
  RED_SANDSTONE_IMAGE,
  COMPANY_CONTACT,
  STONE_PRODUCTS,
  STONE_APPLICATIONS,
  EDITABLE_PLACEHOLDERS
} from '../data/stoneData';
import { StoneProduct } from '../types';
import { generateAndDownloadB2BZipPackage } from '../lib/zipExporter';
import { BrandLogo } from '../components/BrandLogo';

interface HomePageProps {
  navigate: (page: string) => void;
  openQuoteModal: (stoneId?: string, type?: any) => void;
  onSelectProduct: (product: StoneProduct) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  navigate,
  openQuoteModal,
  onSelectProduct,
}) => {
  return (
    <div className="space-y-24 pb-20 bg-[#faf7f2]">
      
      {/* 1. CINEMATIC HERO SECTION (Warm Stone Architectural Lighting) */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Warm Ivory & Cinematic Stone Gradient */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Rajasthan Natural Stone Architecture"
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000"
          />
          {/* Warm Sandstone & Ivory Dual Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#faf7f2]/95 via-[#faf7f2]/85 to-[#faf7f2]/70 sm:from-[#faf7f2]/95 sm:via-[#faf7f2]/80 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#faf7f2] via-transparent to-white/40" />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 py-20 sm:py-28 z-10 w-full">
          <div className="max-w-3xl space-y-6">
            
            {/* Prominent Logo & Location Badge */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="p-2 bg-white/90 backdrop-blur-md rounded-xl border border-[#d6be9e] shadow-xs">
                <BrandLogo variant="horizontal" size="sm" />
              </div>
              <a
                href={COMPANY_CONTACT.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-[#d6be9e] shadow-sm backdrop-blur-md hover:bg-white text-xs font-bold uppercase tracking-widest text-[#80540d] transition-all"
                title="View on Google Maps"
              >
                <span className="w-2 h-2 rounded-full bg-[#b88628] animate-pulse"></span>
                <span>Sikandra &bull; Dausa &bull; Rajasthan (Google Maps)</span>
              </a>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#161c26] font-heading leading-[1.1]">
              RAJASTHAN'S <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#946914] via-[#b88628] to-[#6d4d0b]">
                NATURAL STONE.
              </span> <br />
              CRAFTED FOR THE WORLD.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl font-medium text-[#2d3748] font-serif-sub leading-snug">
              Premium Marble, Granite, Sandstone, Red Sandstone, CNC Precision Cutting & Marble Statues from Rajasthan, India.
            </p>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-gray-700 max-w-2xl leading-relaxed">
              From Rajasthan's rich stone heritage to modern architecture across India and global markets, Aston Stone Corporation connects natural stone, 5-axis CNC machining, master craftsmanship and dependable export supply.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate('products')}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#d8b571] via-[#c5a059] to-[#ad822e] hover:from-[#e2c182] hover:to-[#966d1f] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>Explore Our Stones & CNC</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => openQuoteModal(undefined, 'export')}
                className="px-7 py-3.5 rounded-xl bg-white hover:bg-[#f7f2ea] text-[#1c2230] border border-[#cfbeab] font-bold text-xs tracking-wider uppercase transition-all shadow-sm flex items-center gap-1.5"
              >
                <Ship className="w-4 h-4 text-[#b88628]" />
                <span>Export RFQ</span>
              </button>

              <a
                href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=Hello%20Aston%20Stone%20Corporation%2C%20I%20am%20interested%20in%20natural%20stone%20procurement`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-xs tracking-wide transition-all flex items-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Talk on WhatsApp</span>
              </a>

              <button
                onClick={() => generateAndDownloadB2BZipPackage()}
                className="px-4 py-3.5 rounded-xl bg-[#f0e5d4] hover:bg-[#e7d8c3] border border-[#d6be9e] text-[#80540d] text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm"
                title="Download Technical B2B Kit (.zip)"
              >
                <Download className="w-4 h-4" />
                <span>B2B Kit (.zip)</span>
              </button>
            </div>

            {/* Quick Pillars */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-[#e2d5c3] text-xs text-gray-700">
              <div className="p-2 bg-white/70 rounded-lg border border-[#e8ded0]">
                <span className="text-[#80540d] font-bold block text-sm">Rajasthan Stones</span>
                <span className="text-gray-600">Marble, Sandstone & Granite</span>
              </div>
              <div className="p-2 bg-white/70 rounded-lg border border-[#e8ded0]">
                <span className="text-[#80540d] font-bold block text-sm">CNC Stone Cutting</span>
                <span className="text-gray-600">Precision 3D Jali & Inlays</span>
              </div>
              <div className="p-2 bg-white/70 rounded-lg border border-[#e8ded0]">
                <span className="text-[#80540d] font-bold block text-sm">Marble Statues</span>
                <span className="text-gray-600">Sacred Deities & Busts</span>
              </div>
              <div className="p-2 bg-white/70 rounded-lg border border-[#e8ded0]">
                <span className="text-[#80540d] font-bold block text-sm">We Export Stone</span>
                <span className="text-gray-600">USA, UK, Europe, UAE, GCC</span>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* WE EXPORT STONE HIGHLIGHT BANNER (Requested by User) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-r from-[#fbf8f2] via-[#f7f1e5] to-[#f4ebe0] border border-[#d6be9e] rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#80540d]">
                <Ship className="w-4 h-4 text-[#b88628]" />
                <span>Global Sourcing & Ocean Freight Logistics</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold text-[#181d26] font-heading leading-tight">
                We Export Rajasthan Natural Stone Worldwide
              </h2>

              <p className="text-sm text-gray-700 leading-relaxed font-serif-sub italic">
                From Makrana white marble to calibrated Dholpur sandstone pavers and CNC carved facades: we ship direct 20ft ocean containers worldwide.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
                <div className="p-3 bg-white rounded-xl border border-[#e2d5c3] shadow-xs">
                  <span className="font-bold text-[#80540d] block">USA & Canada</span>
                  <span className="text-gray-600 text-[11px]">20-Ton payload limit compliance</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#e2d5c3] shadow-xs">
                  <span className="font-bold text-[#80540d] block">UK & Europe</span>
                  <span className="text-gray-600 text-[11px]">EN 12058 frost-tested paving</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#e2d5c3] shadow-xs">
                  <span className="font-bold text-[#80540d] block">UAE, Saudi & GCC</span>
                  <span className="text-gray-600 text-[11px]">Heavy-duty 27-Ton containers</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#e2d5c3] shadow-xs">
                  <span className="font-bold text-[#80540d] block">Australia & Pacific</span>
                  <span className="text-gray-600 text-[11px]">ISPM-15 treated bio-clean crates</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={() => navigate('export')}
                className="w-full py-3.5 px-6 bg-gradient-to-r from-[#d8b571] via-[#c5a059] to-[#ad822e] text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 hover:brightness-105"
              >
                <span>View Full Export Details & Ports</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => openQuoteModal(undefined, 'export')}
                className="w-full py-3 px-6 bg-white hover:bg-[#faf6f0] border border-[#cfbeab] text-[#1c2230] font-bold rounded-xl text-xs uppercase tracking-wider shadow-xs"
              >
                Request FOB / CIF Export Quote
              </button>
            </div>

          </div>
        </div>
      </section>


      {/* 2. ABOUT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#80540d]">
              <span className="w-6 h-[1.5px] bg-[#80540d]"></span>
              About Aston Stone Corporation
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#181d26] font-heading leading-tight">
              From Rajasthan's Stone Heritage to Global Markets
            </h2>

            <p className="text-sm text-gray-800 leading-relaxed font-serif-sub italic text-base">
              Rajasthan is celebrated worldwide for its vast natural stone reserves and generations of master stone craftsmanship.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed">
              At Aston Stone Corporation, we unite this remarkable geological heritage with modern processing, 5-axis CNC precision cutting, meticulous specification adherence, and dependable B2B commercial supply. Headquartered in Sikandra, Dausa—a historic cradle of Indian architectural stone carving—we cater to builders, architects, interior designers, and international importers who value authenticity, precision, and reliable coordination.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Rajasthan's Natural Stone Resources",
                "Traditional Artisanal Craftsmanship",
                "5-Axis CNC Precision Machine Cutting",
                "Quality-Focused Raw Material Selection",
                "Custom Architectural Marble Statues",
                "Professional B2B Domestic Supply",
                "Export-Oriented Packing & Logistics",
                "Long-Term B2B Client Partnerships"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-gray-800 font-medium">
                  <CheckCircle className="w-4 h-4 text-[#b88628] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => navigate('about')}
                className="px-6 py-3 rounded-lg bg-white hover:bg-[#f6f0e6] text-[#1c2230] border border-[#cfbeab] text-xs font-bold tracking-wider uppercase transition-all shadow-sm"
              >
                Learn More About Us &rarr;
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#d6be9e] shadow-xl">
              <img
                src={ARTISAN_IMAGE}
                alt="Master Stone Craftsman Carving Marble"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/95 backdrop-blur-md rounded-xl border border-[#e2d5c3] shadow-md">
                <span className="text-xs uppercase tracking-widest text-[#80540d] font-bold">
                  Sikandra, Dausa Craftsmanship & CNC
                </span>
                <p className="text-sm font-bold text-[#181d26] mt-1">
                  Generational Mastery & Modern CNC Machine Accuracy
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Every marble statue, column, and carved jali lattice is crafted by artisans whose families have practiced stone carving for generations, backed by computerized CNC stone milling.
                </p>
              </div>
            </div>

            <div className="hidden sm:block absolute -top-4 -right-4 bg-gradient-to-br from-[#d8b571] to-[#ad822e] text-white font-heading font-bold text-xs p-4 rounded-xl shadow-lg uppercase tracking-wider text-center">
              Direct From <br /> Rajasthan
            </div>
          </div>

        </div>
      </section>


      {/* 3. PRODUCT & SERVICES CATEGORIES (With CNC Machine Stone Cut & Marble Statues) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#80540d]">
            Comprehensive Natural Stone & Machine Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#181d26] font-heading">
            Stone Products & Services
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            Selected from premier quarrying belts across Rajasthan, processed to custom architectural and export tolerances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Marble */}
          <div className="group relative bg-white border border-[#e2d6c6] hover:border-[#b88628] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
            <div className="relative h-60 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                alt="Rajasthan Natural Marble"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-[#1c2230] border border-[#d6c7b2] shadow-xs">
                Makrana &bull; Verde &bull; Banswara
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#181d26] font-heading group-hover:text-[#b88628] transition-colors">
                  Marble
                </h3>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  Elegant natural marble for architecture, interiors, flooring, feature walls, monuments, and custom craftsmanship. High calcite density and luminous crystalline clarity.
                </p>
                <div className="mt-4 pt-3 border-t border-[#ede4d7] text-xs text-gray-700 space-y-1">
                  <div><strong>Applications:</strong> Flooring, luxury bath vanities, columns</div>
                  <div><strong>Finishes:</strong> Mirror Polished, Honed, Brushed Antique</div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <button
                  onClick={() => navigate('marble-granite')}
                  className="text-xs font-bold text-[#80540d] group-hover:text-[#b88628] flex items-center gap-1.5 transition-colors"
                >
                  View Collection &rarr;
                </button>
                <button
                  onClick={() => openQuoteModal('makrana-white-marble')}
                  className="text-[11px] px-3 py-1.5 bg-[#f5ede0] hover:bg-[#b88628] hover:text-white text-gray-800 font-semibold rounded-md transition-colors"
                >
                  Enquire
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Granite */}
          <div className="group relative bg-white border border-[#e2d6c6] hover:border-[#b88628] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
            <div className="relative h-60 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80"
                alt="Rajasthan Granite"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-[#1c2230] border border-[#d6c7b2] shadow-xs">
                Black &bull; Lakha Red &bull; Cheema Pink
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#181d26] font-heading group-hover:text-[#b88628] transition-colors">
                  Granite
                </h3>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  Durable and versatile granite for residential, commercial and architectural applications. Unrivaled load-bearing strength, scratch resistance, and low porosity.
                </p>
                <div className="mt-4 pt-3 border-t border-[#ede4d7] text-xs text-gray-700 space-y-1">
                  <div><strong>Applications:</strong> High-traffic lobbies, countertops, plaza paving</div>
                  <div><strong>Finishes:</strong> Polished, Flamed Thermal, Bush-Hammered</div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <button
                  onClick={() => navigate('marble-granite')}
                  className="text-xs font-bold text-[#80540d] group-hover:text-[#b88628] flex items-center gap-1.5 transition-colors"
                >
                  View Collection &rarr;
                </button>
                <button
                  onClick={() => openQuoteModal('rajasthan-black-granite')}
                  className="text-[11px] px-3 py-1.5 bg-[#f5ede0] hover:bg-[#b88628] hover:text-white text-gray-800 font-semibold rounded-md transition-colors"
                >
                  Enquire
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Sandstone */}
          <div className="group relative bg-white border border-[#e2d6c6] hover:border-[#b88628] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
            <div className="relative h-60 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&w=800&q=80"
                alt="Rajasthan Sandstone"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-[#1c2230] border border-[#d6c7b2] shadow-xs">
                Dholpur Beige &bull; Kandla Grey &bull; Teakwood
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#181d26] font-heading group-hover:text-[#b88628] transition-colors">
                  Sandstone
                </h3>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  Natural sandstone for architecture, landscaping, paving, cladding, and decorative applications. Highly frost resistant, non-slip underfoot, and thermally cooling.
                </p>
                <div className="mt-4 pt-3 border-t border-[#ede4d7] text-xs text-gray-700 space-y-1">
                  <div><strong>Applications:</strong> Exterior facades, pool copings, garden patios</div>
                  <div><strong>Finishes:</strong> Natural Cleft, Sawn, Honed, Sandblasted</div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <button
                  onClick={() => navigate('sandstone-redstone')}
                  className="text-xs font-bold text-[#80540d] group-hover:text-[#b88628] flex items-center gap-1.5 transition-colors"
                >
                  View Collection &rarr;
                </button>
                <button
                  onClick={() => openQuoteModal('dholpur-beige-sandstone')}
                  className="text-[11px] px-3 py-1.5 bg-[#f5ede0] hover:bg-[#b88628] hover:text-white text-gray-800 font-semibold rounded-md transition-colors"
                >
                  Enquire
                </button>
              </div>
            </div>
          </div>

          {/* Card 4: Red Sandstone */}
          <div className="group relative bg-white border border-[#e2d6c6] hover:border-[#b88628] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
            <div className="relative h-60 overflow-hidden">
              <img
                src={RED_SANDSTONE_IMAGE}
                alt="Rajasthan Red Sandstone"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-[#1c2230] border border-[#d6c7b2] shadow-xs">
                Heritage Agra & Dholpur Red
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#181d26] font-heading group-hover:text-[#b88628] transition-colors">
                  Red Sandstone
                </h3>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  Distinctive Rajasthan red sandstone for heritage architecture, facades, landscaping, monuments, and architectural projects. Superior weather endurance and rich terracotta patina.
                </p>
                <div className="mt-4 pt-3 border-t border-[#ede4d7] text-xs text-gray-700 space-y-1">
                  <div><strong>Applications:</strong> Rainscreen facades, colonnades, heritage restorations</div>
                  <div><strong>Finishes:</strong> Hand-Chiseled, Sawn, Shot-Blasted, Calibrated</div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <button
                  onClick={() => navigate('sandstone-redstone')}
                  className="text-xs font-bold text-[#80540d] group-hover:text-[#b88628] flex items-center gap-1.5 transition-colors"
                >
                  View Collection &rarr;
                </button>
                <button
                  onClick={() => openQuoteModal('rajasthan-red-sandstone')}
                  className="text-[11px] px-3 py-1.5 bg-[#f5ede0] hover:bg-[#b88628] hover:text-white text-gray-800 font-semibold rounded-md transition-colors"
                >
                  Enquire
                </button>
              </div>
            </div>
          </div>

          {/* Card 5: CNC Machine Stone Cut (Requested by User) */}
          <div className="group relative bg-[#fdfaf5] border-2 border-[#d6be9e] hover:border-[#b88628] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
            <div className="relative h-60 overflow-hidden">
              <img
                src={HERO_IMAGE}
                alt="CNC Machine Precision Stone Cutting"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#fdfaf5] via-transparent to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 bg-[#80540d] text-white rounded-full text-xs font-bold shadow-sm flex items-center gap-1">
                <Cpu className="w-3.5 h-3.5" />
                <span>CNC Machine Stone Cut</span>
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#181d26] font-heading group-hover:text-[#b88628] transition-colors">
                  CNC Machine Precision Stone Cut
                </h3>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  5-Axis CNC stone milling, precision waterjet inlays, 3D parametric relief panels, and perforated jali lattice screens executed with micrometric digital accuracy from CAD/3D files.
                </p>
                <div className="mt-4 pt-3 border-t border-[#ede4d7] text-xs text-gray-700 space-y-1">
                  <div><strong>Applications:</strong> Parametric facades, 3D jali screens, stone inlays</div>
                  <div><strong>Finishes:</strong> 5-Axis CNC Milled, Waterjet Cut, Honed</div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <button
                  onClick={() => navigate('products')}
                  className="text-xs font-bold text-[#80540d] group-hover:text-[#b88628] flex items-center gap-1.5 transition-colors"
                >
                  View CNC Capabilities &rarr;
                </button>
                <button
                  onClick={() => openQuoteModal('cnc-machine-stone-cutting')}
                  className="text-[11px] px-3 py-1.5 bg-[#80540d] hover:bg-[#b88628] text-white font-bold rounded-md transition-colors shadow-xs"
                >
                  CNC Quote
                </button>
              </div>
            </div>
          </div>

          {/* Card 6: Marble Statues & Master Sculptures (Requested by User) */}
          <div className="group relative bg-[#fdfaf5] border-2 border-[#d6be9e] hover:border-[#b88628] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
            <div className="relative h-60 overflow-hidden">
              <img
                src={ARTISAN_IMAGE}
                alt="Marble Statues & Sculptures"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#fdfaf5] via-transparent to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 bg-[#80540d] text-white rounded-full text-xs font-bold shadow-sm flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Marble Statues</span>
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#181d26] font-heading group-hover:text-[#b88628] transition-colors">
                  Marble Statues & Sculptures
                </h3>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  Sacred temple deities, classical European statues, ornamental garden fountains, and commissioned human portrait busts carved in pure Makrana white marble by master artisans.
                </p>
                <div className="mt-4 pt-3 border-t border-[#ede4d7] text-xs text-gray-700 space-y-1">
                  <div><strong>Applications:</strong> Temple mandaps, memorial busts, estate gardens</div>
                  <div><strong>Finishes:</strong> Hand-Chiseled Polish, Fine Satin Honed</div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <button
                  onClick={() => navigate('sculptures')}
                  className="text-xs font-bold text-[#80540d] group-hover:text-[#b88628] flex items-center gap-1.5 transition-colors"
                >
                  Explore Sculptures &rarr;
                </button>
                <button
                  onClick={() => openQuoteModal(undefined, 'sculpture')}
                  className="text-[11px] px-3 py-1.5 bg-[#80540d] hover:bg-[#b88628] text-white font-bold rounded-md transition-colors shadow-xs"
                >
                  Commission
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 4. WHY RAJASTHAN NATURAL STONE? */}
      <section className="bg-[#f5efe4] border-y border-[#e2d5c3] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#80540d]">
                Geological & Craftsmanship Advantages
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#181d26] font-heading">
                Why Rajasthan Natural Stone?
              </h2>
              <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-serif-sub italic">
                Rajasthan stands apart because of its unmatched geological variety and centuries of unbroken craftsmanship.
              </p>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Rather than treating all stones as identical commodities, an experienced stone professional understands that each variety has its own mineral density, porosity, flexural strength, color variation, veining pattern, and weathering behavior.
              </p>

              <div className="p-4 bg-white rounded-xl border border-[#d6be9e] text-xs text-gray-800 leading-relaxed shadow-xs">
                <strong className="text-[#80540d] block mb-1">Architectural Advisory Note:</strong>
                Natural stone properties differ by quarry bench and mineral stratum. We provide laboratory test certificates and physical batch samples for project-specific structural approval.
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openQuoteModal(undefined, 'sample')}
                  className="px-6 py-3 bg-[#b88628] hover:bg-[#a6761f] text-white font-bold rounded-lg text-xs tracking-wider uppercase transition-all shadow-sm"
                >
                  Request a Sample Kit
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Extensive Variety of Stone Types",
                  desc: "Marbles, granites, quartzitic sandstones, and limestones across rich color spectra from pure white to jet black and terracotta."
                },
                {
                  title: "Distinctive Natural Colors & Veining",
                  desc: "Sedimentary banded grain, metamorphic calcite veining, and igneous crystal depth that cannot be replicated synthetically."
                },
                {
                  title: "Generational Carving & CNC Machinery",
                  desc: "Sikandra, Dausa sculptors combined with multi-axis CNC machines for both artisanal nuance and millimeter accuracy."
                },
                {
                  title: "Established Processing Ecosystem",
                  desc: "Gangsaws, multi-wire cutters, bridge cutters, and calibration plants ensure precise sizing and high container output."
                },
                {
                  title: "Custom Fabrication Possibilities",
                  desc: "Ability to produce monolithic columns, carved brackets, 3D pierced jali lattice, and bookmatched interior wall slabs."
                },
                {
                  title: "Direct Sourcing to Export Packing",
                  desc: "Seamless integration between quarry extraction, factory cutting, dry-lay inspection, and seaworthy container packing."
                }
              ].map((adv, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white border border-[#ded1be] rounded-xl hover:border-[#b88628] transition-all space-y-2 shadow-xs"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#f7efe3] border border-[#d8be9d] flex items-center justify-center text-[#80540d] text-xs font-bold font-mono">
                    0{idx + 1}
                  </div>
                  <h4 className="text-sm font-bold text-[#181d26] font-heading">
                    {adv.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* 5. OUR CAPABILITIES (6-CARD SECTION INCLUDING CNC MACHINE STONE CUT) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#80540d]">
            Comprehensive Production Scope
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#181d26] font-heading">
            Our Core Capabilities & Services
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            From raw block extraction to CNC machine precision cutting, hand-carved marble statues, and international container delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Layers,
              title: "1. Natural Stone Supply",
              desc: "Wholesale supply of Rajasthan marble, granite, sandstone, red sandstone, and Kota limestone in gangsaw slabs, calibrated tiles, and standard paving formats."
            },
            {
              icon: Cpu,
              title: "2. CNC Machine Precision Stone Cut",
              desc: "5-axis CNC routing, high-pressure waterjet inlays, 3D relief wall murals, parametric architectural facades, and machine-perforated jali lattice screens."
            },
            {
              icon: Sparkles,
              title: "3. Marble Statues & Sculptures",
              desc: "Fine devotional deities, classical European figurative art, monumental garden fountains, and custom decorative stone art carved in Makrana white marble."
            },
            {
              icon: Compass,
              title: "4. Custom Human Portrait Carving",
              desc: "Sculpting human portrait busts and commemorative statues directly from client photographs, capturing anatomical fidelity and dignified stone likeness."
            },
            {
              icon: Maximize2,
              title: "5. Custom Stone Fabrication",
              desc: "Architectural carved stone, monolithic columns, pierced jali screens, monumental entrance brackets, and bespoke cut-to-size project shop drawings."
            },
            {
              icon: Ship,
              title: "6. Export & Bulk Ocean Supply",
              desc: "Seaworthy ISPM-15 fumigated wooden crating, edge cushion protection, pre-shipment video audits, container lashing, and CIF/FOB seaport dispatch."
            }
          ].map((cap, i) => {
            const Icon = cap.icon;
            return (
              <div
                key={i}
                className="p-6 bg-white border border-[#e2d6c6] hover:border-[#b88628] rounded-2xl transition-all space-y-4 group shadow-xs hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f7efe3] border border-[#d8be9d] flex items-center justify-center text-[#80540d] group-hover:bg-[#b88628] group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#181d26] font-heading">
                  {cap.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>


      {/* 6. APPLICATIONS SHOWCASE */}
      <section className="bg-[#f5efe4] border-y border-[#e2d5c3] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#80540d]">
                Architectural Versatility
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#181d26] font-heading">
                Where Our Stones Are Used
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 max-w-xl">
                Engineered for structural permanence, aesthetic luxury, and weather resilience across residential, hospitality, civic, and religious environments.
              </p>
            </div>

            <button
              onClick={() => navigate('applications')}
              className="text-xs font-bold text-[#80540d] hover:text-[#b88628] flex items-center gap-1.5 transition-colors self-start md:self-end"
            >
              View All Applications &rarr;
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {STONE_APPLICATIONS.slice(0, 12).map((app, idx) => (
              <div
                key={idx}
                className="p-4 bg-white border border-[#ded1be] rounded-xl hover:border-[#b88628] transition-all space-y-1.5 shadow-xs"
              >
                <div className="text-xs font-bold text-[#181d26] font-heading">
                  {app.name}
                </div>
                <div className="text-[11px] text-gray-600 leading-snug">
                  {app.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 7. GLOBAL BUSINESS & EXPORT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-br from-[#ffffff] via-[#f9f5ed] to-[#f4ebe0] border border-[#d6be9e] rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-md">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#80540d]">
                International B2B Supply Network
              </span>

              <h2 className="text-3xl sm:text-5xl font-bold text-[#181d26] font-heading leading-tight">
                From Rajasthan to India and the World
              </h2>

              <p className="text-sm text-gray-800 leading-relaxed font-serif-sub italic text-base">
                Aston Stone Corporation is built to serve as a reliable natural stone partner for global B2B buyers.
              </p>

              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Whether you are an international stone importer in the United States, an architectural contractor in the United Kingdom, a hospitality developer in Dubai or Saudi Arabia, or an Australian landscape distributor, we provide transparent communication, rigorous batch sampling, export-grade packaging, and seamless container coordination.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-gray-800 font-medium">
                {[
                  "Importers & Distributors",
                  "Architects & Designers",
                  "Stone Wholesalers",
                  "General Contractors",
                  "Real-Estate Developers",
                  "Hospitality Brands",
                  "Religious Trusts",
                  "Monument Companies",
                  "Landscape Studios"
                ].map((buyer, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b88628]" />
                    <span>{buyer}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => openQuoteModal(undefined, 'export')}
                  className="px-7 py-3.5 bg-gradient-to-r from-[#d8b571] via-[#c5a059] to-[#ad822e] text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow-md hover:brightness-105 flex items-center gap-2"
                >
                  <Globe2 className="w-4 h-4" />
                  <span>Start an International Enquiry</span>
                </button>

                <button
                  onClick={() => generateAndDownloadB2BZipPackage()}
                  className="px-5 py-3.5 bg-white hover:bg-[#faf6f0] border border-[#cfbeab] text-[#80540d] font-bold rounded-xl text-xs flex items-center gap-2 transition-all shadow-xs"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Export Specs (.zip)</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white border border-[#ded1be] rounded-2xl p-6 space-y-4 shadow-sm">
              <h3 className="text-sm font-bold text-[#80540d] uppercase tracking-wider">
                Key Export Markets Served
              </h3>
              <p className="text-xs text-gray-600">
                Packaging designed to withstand multi-week oceanic freight and regional highway weight limits:
              </p>

              <div className="space-y-2 text-xs">
                {[
                  { region: "North America", countries: "United States, Canada", specs: "20-Ton container payloads, ISPM-15 crates" },
                  { region: "United Kingdom & Europe", countries: "UK, Germany, France, Italy", specs: "Frost-tested calibrated paving, EN 12058 standards" },
                  { region: "Middle East (GCC)", countries: "UAE, Saudi Arabia, Qatar, Oman", specs: "High-temperature resistant cladding, 27-Ton loads" },
                  { region: "Asia-Pacific", countries: "Australia, New Zealand, Singapore", specs: "Custom A-frame slab crates, pre-cleared bio-security" },
                  { region: "Domestic Pan-India", countries: "All Indian States & UTs", specs: "Direct trailer/truck transport from Sikandra, Dausa" }
                ].map((item, idx) => (
                  <div key={idx} className="p-3 bg-[#faf7f2] rounded-lg border border-[#e5dcce]">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-[#181d26]">{item.region}</span>
                      <span className="text-[10px] text-[#80540d] font-mono font-semibold">{item.countries}</span>
                    </div>
                    <span className="text-[11px] text-gray-600 mt-1 block">{item.specs}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 8. TRUST SECTION: WHAT WE FOCUS ON */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#80540d]">
            The Aston Stone Principle
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#181d26] font-heading">
            What We Focus On
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            We operate with transparent commercial integrity. We do not make unsupported guarantees; we build trust through rigorous specification matching and reliable execution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Clear Communication",
              desc: "Honest feedback on stone availability, dimensional tolerances, and expected delivery lead-times."
            },
            {
              title: "Specification-Based Supply",
              desc: "Every cut, bevel, CNC profile, and finish is verified against approved project architectural drawings."
            },
            {
              title: "Protective Packaging",
              desc: "Heavy-duty fumigated wooden crates with internal foam cushioning and edge protection."
            },
            {
              title: "Long-Term Partnerships",
              desc: "Focused on repeatable, dependable business relationships rather than transactional one-off orders."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white border border-[#e2d6c6] rounded-xl space-y-2 hover:border-[#b88628] transition-all shadow-xs"
            >
              <ShieldCheck className="w-5 h-5 text-[#b88628]" />
              <h4 className="text-base font-bold text-[#181d26] font-heading">{item.title}</h4>
              <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* 9. EDITABLE PLACEHOLDERS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white border border-[#ded1be] rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between border-b border-[#eee4d7] pb-4 mb-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#80540d] font-bold">
                Client Testimonials & Industry Recognition
              </span>
              <h3 className="text-lg font-bold text-[#181d26] font-heading mt-0.5">
                Client Feedback & Representative Project Quotes
              </h3>
            </div>
            <span className="text-[11px] text-gray-600 bg-[#f7f2ea] px-3 py-1 rounded border border-[#ded1be]">
              Verified Placeholders
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDITABLE_PLACEHOLDERS.clientTestimonials.map((t) => (
              <div
                key={t.id}
                className="p-5 bg-[#faf7f2] border border-[#e5dcce] rounded-xl flex flex-col justify-between space-y-4"
              >
                <p className="text-xs text-gray-700 italic leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="pt-2 border-t border-[#e2d5c3] text-[11px]">
                  <span className="font-bold text-[#80540d] block">{t.authorPlaceholder}</span>
                  <span className="text-gray-600 block">{t.locationPlaceholder}</span>
                  <span className="text-gray-500 mt-1 block">{t.projectType}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-[#ede4d7] flex flex-wrap items-center justify-between gap-4 text-xs text-gray-700">
            <div>
              <strong>Production Capacity:</strong> {EDITABLE_PLACEHOLDERS.productionCapacity}
            </div>
            <div>
              <strong>Quality Certifications:</strong> {EDITABLE_PLACEHOLDERS.certifications}
            </div>
            <div>
              <strong>Years of Experience:</strong> {EDITABLE_PLACEHOLDERS.yearsExperience}
            </div>
          </div>
        </div>
      </section>


      {/* 10. FINAL CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-r from-[#fbf8f2] via-[#f7f1e5] to-[#f4ebe0] border border-[#d6be9e] rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-md relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#80540d]">
              Ready to Discuss Your Project?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#181d26] font-heading">
              Connect with Aston Stone Corporation
            </h2>
            <p className="text-xs sm:text-sm text-gray-700">
              Speak directly with our stone specialists in Sikandra, Dausa, Rajasthan. We provide comprehensive quotations, physical samples, and CAD cutting consultations.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openQuoteModal()}
              className="px-8 py-3.5 bg-gradient-to-r from-[#d8b571] via-[#c5a059] to-[#ad822e] text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow-md hover:brightness-105"
            >
              Request a B2B Quote
            </button>

            <a
              href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=Hello%20Aston%20Stone%20Corporation%2C%20I%20would%20like%20to%20discuss%20a%20natural%20stone%20requirement`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold rounded-xl text-xs flex items-center gap-2 transition-all shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp (+91 7877443079)</span>
            </a>

            <button
              onClick={() => generateAndDownloadB2BZipPackage()}
              className="px-5 py-3.5 bg-white hover:bg-[#faf6f0] border border-[#cfbeab] text-[#80540d] font-bold rounded-xl text-xs flex items-center gap-2 shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>Download B2B Kit (.zip)</span>
            </button>
          </div>

          <p className="text-[11px] text-gray-600">
            Address: {COMPANY_CONTACT.address} &bull; Emails: {COMPANY_CONTACT.email1} | {COMPANY_CONTACT.email2}
          </p>
        </div>
      </section>

    </div>
  );
};
