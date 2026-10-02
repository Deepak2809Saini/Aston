import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  ArrowUp,
  Download,
  ShieldCheck,
  ExternalLink,
  ChevronRight,
  Ship,
  Cpu
} from 'lucide-react';
import { COMPANY_CONTACT, EDITABLE_PLACEHOLDERS } from '../data/stoneData';
import { generateAndDownloadB2BZipPackage } from '../lib/zipExporter';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  navigate: (page: string) => void;
  openQuoteModal: (stoneId?: string, type?: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate, openQuoteModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f4eee4] text-[#333d4e] border-t border-[#e2d5c3] pt-16 pb-12 relative overflow-hidden">
      
      {/* Subtle warm stone gradient decorative glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#ded2bf]">
          
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-4">
            <div onClick={() => navigate('home')} className="cursor-pointer">
              <BrandLogo variant="horizontal" size="md" />
            </div>

            <p className="text-sm font-serif-sub italic text-[#80540d]">
              "{COMPANY_CONTACT.tagline}"
            </p>
            <p className="text-xs text-gray-600 leading-relaxed">
              {COMPANY_CONTACT.subTagline} Natural stone quarrying, gangsaw slicing, 5-axis CNC machine precision cutting, and master marble statues from Rajasthan, India.
            </p>

            <div className="pt-2">
              <button
                onClick={() => generateAndDownloadB2BZipPackage()}
                className="inline-flex items-center gap-2 text-xs bg-white hover:bg-[#faf6f0] border border-[#d6c7b2] text-[#80540d] font-semibold px-3.5 py-2 rounded-lg transition-all shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                Download B2B Spec Kit (.zip)
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#946914] font-bold">
              Navigation & Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => navigate('home')} className="hover:text-[#b88628] transition-colors flex items-center gap-1.5 text-gray-700">
                  <ChevronRight className="w-3 h-3 text-[#b88628]" /> Home
                </button>
              </li>
              <li>
                <button onClick={() => navigate('about')} className="hover:text-[#b88628] transition-colors flex items-center gap-1.5 text-gray-700">
                  <ChevronRight className="w-3 h-3 text-[#b88628]" /> About Aston Stone
                </button>
              </li>
              <li>
                <button onClick={() => navigate('rajasthan-stones')} className="hover:text-[#b88628] transition-colors flex items-center gap-1.5 text-gray-700">
                  <ChevronRight className="w-3 h-3 text-[#b88628]" /> Rajasthan Natural Stones
                </button>
              </li>
              <li>
                <button onClick={() => navigate('products')} className="hover:text-[#b88628] transition-colors flex items-center gap-1.5 text-gray-700">
                  <ChevronRight className="w-3 h-3 text-[#b88628]" /> Stone Catalogue & CNC Cut
                </button>
              </li>
              <li>
                <button onClick={() => navigate('sculptures')} className="hover:text-[#b88628] transition-colors flex items-center gap-1.5 text-gray-700">
                  <ChevronRight className="w-3 h-3 text-[#b88628]" /> Marble Statues & Sculptures
                </button>
              </li>
              <li>
                <button onClick={() => navigate('custom-portraits')} className="hover:text-[#b88628] transition-colors flex items-center gap-1.5 text-gray-700">
                  <ChevronRight className="w-3 h-3 text-[#b88628]" /> Custom Human Portraits in Marble
                </button>
              </li>
              <li>
                <button onClick={() => navigate('export')} className="hover:text-[#b88628] transition-colors flex items-center gap-1.5 text-[#80540d] font-semibold">
                  <Ship className="w-3 h-3 text-[#b88628]" /> We Export Stone Worldwide
                </button>
              </li>
              <li>
                <button onClick={() => navigate('quality-manufacturing')} className="hover:text-[#b88628] transition-colors flex items-center gap-1.5 text-gray-700">
                  <ChevronRight className="w-3 h-3 text-[#b88628]" /> Quality & CNC Precision
                </button>
              </li>
              <li>
                <button onClick={() => navigate('gallery')} className="hover:text-[#b88628] transition-colors flex items-center gap-1.5 text-gray-700">
                  <ChevronRight className="w-3 h-3 text-[#b88628]" /> Project Showcase
                </button>
              </li>
              <li>
                <button onClick={() => navigate('blog')} className="hover:text-[#b88628] transition-colors flex items-center gap-1.5 text-gray-700">
                  <ChevronRight className="w-3 h-3 text-[#b88628]" /> Technical Stone Guides
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Official Contact */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#946914] font-bold">
              Factory & Office Contact
            </h4>
            
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#b88628] shrink-0 mt-0.5" />
                <span className="text-gray-700 leading-relaxed">
                  {COMPANY_CONTACT.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#b88628] shrink-0" />
                <a
                  href={`tel:${COMPANY_CONTACT.phone.replace(/\s+/g, '')}`}
                  className="hover:text-[#b88628] transition-colors font-bold text-[#1c2230]"
                >
                  {COMPANY_CONTACT.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#20ba59] shrink-0" />
                <a
                  href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=Hello%20Aston%20Stone%20Corporation%2C%20I%20am%20interested%20in%20natural%20stone%20inquiry`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#20ba59] transition-colors font-medium text-emerald-800"
                >
                  WhatsApp: +91 7877443079
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#b88628] shrink-0" />
                <a
                  href={`mailto:${COMPANY_CONTACT.email1}`}
                  className="hover:text-[#b88628] transition-colors text-gray-700"
                >
                  {COMPANY_CONTACT.email1}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#b88628] shrink-0" />
                <a
                  href={`mailto:${COMPANY_CONTACT.email2}`}
                  className="hover:text-[#b88628] transition-colors text-gray-700"
                >
                  {COMPANY_CONTACT.email2}
                </a>
              </div>

              <div className="pt-1">
                <a
                  href={COMPANY_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#80540d] font-semibold hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  View Location on Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: We Export Stone & Global Supply */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#946914] font-bold">
              We Export Stone Worldwide
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Supplying 20ft heavy-duty containers of calibrated tiles, slabs, CNC architectural stonework, and fine marble statues to the USA, UK, Europe, UAE, Saudi Arabia, Qatar, Australia, and Canada.
            </p>

            <button
              onClick={() => openQuoteModal(undefined, 'export')}
              className="w-full py-2.5 bg-gradient-to-r from-[#d8b571] via-[#c5a059] to-[#ad822e] text-white font-bold rounded-lg text-xs tracking-wider uppercase transition-all shadow-sm hover:brightness-105"
            >
              Request an Export Quote
            </button>

            {/* Editable Compliance Placeholders */}
            <div className="p-3 bg-white border border-[#ded3c2] rounded-lg space-y-1 text-[11px] text-gray-600">
              <div className="flex items-center gap-1.5 text-gray-800 font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#b88628]" />
                Standards & Compliance
              </div>
              <p>{EDITABLE_PLACEHOLDERS.certifications}</p>
              <p>{EDITABLE_PLACEHOLDERS.productionCapacity}</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <div>
            <p className="text-[#1c2230] font-semibold">
              &copy; {new Date().getFullYear()} ASTON STONE CORPORATION. All Rights Reserved.
            </p>
            <p className="text-[11px] text-gray-500 mt-1 max-w-2xl leading-normal">
              Disclaimer: Natural stone is a product of geological formation. Colors, veining, tonal grain, and micro-crystals naturally vary from piece to piece. Final supply is strictly based on approved samples and project specifications.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-white hover:bg-[#faf6f0] border border-[#d6c7b2] text-[#80540d] font-semibold transition-all flex items-center gap-1.5 text-xs shadow-sm"
              title="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
