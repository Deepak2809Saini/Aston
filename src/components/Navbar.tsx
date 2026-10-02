import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Globe,
  Download,
  User as UserIcon,
  LogOut,
  FileText,
  Ship,
  Box,
  Cpu,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { COMPANY_CONTACT } from '../data/stoneData';
import { useAuth } from '../context/AuthContext';
import { generateAndDownloadB2BZipPackage } from '../lib/zipExporter';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  openQuoteModal: (stoneId?: string, type?: any) => void;
  openPortalModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  openQuoteModal,
  openPortalModal,
}) => {
  const { user, isAdmin, loginWithGoogle, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [craftsmanshipDropdownOpen, setCraftsmanshipDropdownOpen] = useState(false);
  const [exportDropdownOpen, setExportDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<'EN' | 'HI' | 'AR' | 'FR'>('EN');
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (page: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    setCraftsmanshipDropdownOpen(false);
    setExportDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Utility Bar (Beige / Warm Ivory Theme) */}
      <div className="bg-[#f5efe4] border-b border-[#e5dcce] text-xs text-[#525f77] py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <a
              href={`tel:${COMPANY_CONTACT.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-[#b88628] font-medium transition-colors text-[#2c3340]"
            >
              <Phone className="w-3.5 h-3.5 text-[#b88628]" />
              <span>{COMPANY_CONTACT.phone}</span>
            </a>

            <a
              href={`mailto:${COMPANY_CONTACT.email1}`}
              className="hidden md:flex items-center gap-1.5 hover:text-[#b88628] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#b88628]" />
              <span>{COMPANY_CONTACT.email1}</span>
            </a>

            <span className="hidden lg:inline text-[#c8bcab]">|</span>
            <a
              href={COMPANY_CONTACT.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 hover:text-[#b88628] transition-colors text-[#525f77] group"
              title="Open Sikandra, Dausa Location on Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-[#b88628] group-hover:scale-110 transition-transform" />
              <span>Sikandra, Dausa, Rajasthan (Google Maps)</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            {/* Download B2B Kit / ZIP Package Button */}
            <button
              onClick={() => generateAndDownloadB2BZipPackage()}
              className="flex items-center gap-1.5 text-xs text-[#8c6218] hover:text-[#5e410b] transition-colors bg-[#ebdcc8] hover:bg-[#e4d2bc] px-2.5 py-1 rounded border border-[#d3be9e]"
              title="Download B2B Specifications, Catalog & Export Logistics (.zip)"
            >
              <Download className="w-3.5 h-3.5 text-[#9e701e]" />
              <span className="hidden sm:inline font-medium">B2B Spec Kit</span>
              <span className="text-[10px] bg-[#fffcf7] text-[#9e701e] px-1 rounded font-bold">.ZIP</span>
            </button>

            {/* Language Selector UI Placeholder */}
            <div className="flex items-center gap-1 text-[#6b778d] text-xs">
              <Globe className="w-3 h-3 text-[#9e701e]" />
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value as any)}
                className="bg-transparent text-[#3e4756] text-xs focus:outline-none cursor-pointer border-none font-medium"
              >
                <option value="EN" className="bg-white text-gray-800">EN (English)</option>
                <option value="HI" className="bg-white text-gray-800">हिन्दी (Hindi)</option>
                <option value="AR" className="bg-white text-gray-800">العربية (Arabic)</option>
                <option value="FR" className="bg-white text-gray-800">Français (French)</option>
              </select>
            </div>

            {/* Auth / Client Portal */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-1.5 text-xs text-[#2c3340] hover:text-[#b88628] bg-white px-2.5 py-1 rounded-md border border-[#d6cbbd] shadow-sm"
                >
                  <UserIcon className="w-3.5 h-3.5 text-[#b88628]" />
                  <span className="max-w-[100px] truncate font-medium">{user.displayName || user.email?.split('@')[0]}</span>
                  {isAdmin && <span className="bg-amber-100 text-amber-800 text-[9px] px-1 rounded font-bold">Admin</span>}
                  <ChevronDown className="w-3 h-3" />
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-1 w-48 bg-white border border-[#e2d6c6] rounded-lg shadow-xl py-1 z-50 text-xs">
                    <div className="px-3 py-1.5 border-b border-gray-100 text-gray-500 truncate">
                      {user.email}
                    </div>
                    <button
                      onClick={() => {
                        openPortalModal();
                        setUserDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-gray-700 hover:bg-[#faf6f0] flex items-center gap-2"
                    >
                      <FileText className="w-3.5 h-3.5 text-[#b88628]" />
                      My Enquiries & RFQs
                    </button>
                    <button
                      onClick={() => {
                        logout();
                        setUserDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-red-600 hover:bg-red-50 flex items-center gap-2"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => loginWithGoogle()}
                className="flex items-center gap-1 text-xs text-[#3a4352] hover:text-[#b88628] font-medium transition-colors"
                title="Sign in with Google to track quotes"
              >
                <UserIcon className="w-3.5 h-3.5 text-[#b88628]" />
                <span>Client Login</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Luxury Brand Navigation (White & Warm Beige) */}
      <nav
        className={`px-4 sm:px-8 py-3 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-[#e5dcce]'
            : 'bg-[#faf7f2]/95 backdrop-blur-sm border-b border-[#ebdccb]'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo Area */}
          <div
            onClick={() => navigate('home')}
            className="cursor-pointer"
          >
            <BrandLogo variant="horizontal" size="md" />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-5 text-sm font-medium text-[#3b4556]">
            <button
              onClick={() => navigate('home')}
              className={`hover:text-[#b88628] transition-colors py-1 ${
                currentPage === 'home' ? 'text-[#b88628] font-bold border-b-2 border-[#b88628]' : ''
              }`}
            >
              Home
            </button>

            <button
              onClick={() => navigate('about')}
              className={`hover:text-[#b88628] transition-colors py-1 ${
                currentPage === 'about' ? 'text-[#b88628] font-bold border-b-2 border-[#b88628]' : ''
              }`}
            >
              About Us
            </button>

            <button
              onClick={() => navigate('rajasthan-stones')}
              className={`hover:text-[#b88628] transition-colors py-1 ${
                currentPage === 'rajasthan-stones' ? 'text-[#b88628] font-bold border-b-2 border-[#b88628]' : ''
              }`}
            >
              Rajasthan Stones
            </button>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button
                onClick={() => navigate('products')}
                className={`flex items-center gap-1 hover:text-[#b88628] transition-colors py-1 ${
                  ['products', 'marble-granite', 'sandstone-redstone'].includes(currentPage)
                    ? 'text-[#b88628] font-bold border-b-2 border-[#b88628]'
                    : ''
                }`}
              >
                Products
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {productsDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white border border-[#e2d6c6] rounded-xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                  <button
                    onClick={() => navigate('products')}
                    className="w-full text-left px-4 py-2 hover:bg-[#f7f2ea] text-[#1c2230] text-xs font-bold flex items-center justify-between"
                  >
                    <span>All Natural Stone Products</span>
                    <span className="text-[#b88628]">&rarr;</span>
                  </button>
                  <div className="border-t border-[#ede4d7] my-1" />
                  <button
                    onClick={() => navigate('marble-granite')}
                    className="w-full text-left px-4 py-2 hover:bg-[#f7f2ea] text-gray-700 text-xs"
                  >
                    Marble & Granite Slabs / Tiles
                  </button>
                  <button
                    onClick={() => navigate('sandstone-redstone')}
                    className="w-full text-left px-4 py-2 hover:bg-[#f7f2ea] text-gray-700 text-xs"
                  >
                    Sandstone & Red Sandstone
                  </button>
                  <button
                    onClick={() => navigate('products')}
                    className="w-full text-left px-4 py-2 hover:bg-[#f7f2ea] text-gray-700 text-xs"
                  >
                    Kota Blue & Brown Limestone
                  </button>
                  <button
                    onClick={() => navigate('products')}
                    className="w-full text-left px-4 py-2 hover:bg-[#f7f2ea] text-[#8c6218] font-semibold text-xs flex items-center gap-1.5"
                  >
                    <Cpu className="w-3.5 h-3.5 text-[#b88628]" />
                    CNC Machine Stone Cut & Inlays
                  </button>
                </div>
              )}
            </div>

            {/* Craftsmanship & CNC Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCraftsmanshipDropdownOpen(true)}
              onMouseLeave={() => setCraftsmanshipDropdownOpen(false)}
            >
              <button
                onClick={() => navigate('sculptures')}
                className={`flex items-center gap-1 hover:text-[#b88628] transition-colors py-1 ${
                  ['sculptures', 'custom-portraits'].includes(currentPage)
                    ? 'text-[#b88628] font-bold border-b-2 border-[#b88628]'
                    : ''
                }`}
              >
                Craftsmanship & CNC
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {craftsmanshipDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white border border-[#e2d6c6] rounded-xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                  <div className="px-4 py-1.5 text-[10px] uppercase font-bold tracking-widest text-[#9e701e] border-b border-[#f0e6d8]">
                    Master Artisans & Digital Precision
                  </div>
                  <button
                    onClick={() => navigate('sculptures')}
                    className="w-full text-left px-4 py-2 hover:bg-[#f7f2ea] text-gray-700 text-xs"
                  >
                    Marble Statues & Sculptures
                  </button>
                  <button
                    onClick={() => navigate('custom-portraits')}
                    className="w-full text-left px-4 py-2 hover:bg-[#f7f2ea] text-[#8c6218] text-xs font-semibold flex items-center justify-between"
                  >
                    <span>Custom Human Portraits in Marble</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#b88628]" />
                  </button>
                  <button
                    onClick={() => navigate('products')}
                    className="w-full text-left px-4 py-2 hover:bg-[#f7f2ea] text-gray-700 text-xs flex items-center gap-1.5"
                  >
                    <Cpu className="w-3.5 h-3.5 text-[#b88628]" />
                    CNC Machine Stone Cut & 3D Jali
                  </button>
                </div>
              )}
            </div>

            {/* DEDICATED EXPORT COLUMN (Requested by User) */}
            <div
              className="relative"
              onMouseEnter={() => setExportDropdownOpen(true)}
              onMouseLeave={() => setExportDropdownOpen(false)}
            >
              <button
                onClick={() => navigate('export')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all ${
                  currentPage === 'export'
                    ? 'bg-[#ebdcc8] text-[#80540d] font-bold border border-[#d6be9e]'
                    : 'text-[#2b3340] hover:text-[#b88628] hover:bg-[#f3ece0]'
                }`}
              >
                <Ship className="w-3.5 h-3.5 text-[#b88628]" />
                <span className="font-semibold">We Export Stone</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {exportDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white border border-[#e2d6c6] rounded-2xl shadow-2xl p-4 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                  <div className="border-b border-[#f0e6d8] pb-2 mb-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#9e701e] block">
                      Global B2B Supply & Logistics
                    </span>
                    <h4 className="text-sm font-bold text-[#1c2230] font-heading mt-0.5">
                      Exporting Rajasthan Stone Worldwide
                    </h4>
                  </div>

                  <div className="space-y-1 text-xs">
                    <button
                      onClick={() => navigate('export')}
                      className="w-full text-left p-2 rounded-lg hover:bg-[#f7f2ea] flex items-start gap-2.5 transition-colors"
                    >
                      <Globe className="w-4 h-4 text-[#b88628] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-gray-900 block text-xs">Global Export Markets</strong>
                        <span className="text-[11px] text-gray-500">USA, UK, Europe, UAE/GCC, Australia & Canada</span>
                      </div>
                    </button>

                    <button
                      onClick={() => navigate('export')}
                      className="w-full text-left p-2 rounded-lg hover:bg-[#f7f2ea] flex items-start gap-2.5 transition-colors"
                    >
                      <Box className="w-4 h-4 text-[#b88628] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-gray-900 block text-xs">Seaworthy Export Packaging</strong>
                        <span className="text-[11px] text-gray-500">ISPM-15 fumigated timber crates & moisture barrier</span>
                      </div>
                    </button>

                    <button
                      onClick={() => navigate('export')}
                      className="w-full text-left p-2 rounded-lg hover:bg-[#f7f2ea] flex items-start gap-2.5 transition-colors"
                    >
                      <Ship className="w-4 h-4 text-[#b88628] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-gray-900 block text-xs">Ocean Freight & Seaport Logistics</strong>
                        <span className="text-[11px] text-gray-500">Container loading, CIF/FOB (Mundra / Nhava Sheva)</span>
                      </div>
                    </button>
                  </div>

                  <div className="pt-3 border-t border-[#f0e6d8] mt-2">
                    <button
                      onClick={() => {
                        openQuoteModal(undefined, 'export');
                        setExportDropdownOpen(false);
                      }}
                      className="w-full py-2 bg-gradient-to-r from-[#d8b571] via-[#c5a059] to-[#ad822e] text-white font-semibold rounded-lg text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 shadow"
                    >
                      <span>Request Export Quote (FOB / CIF)</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => navigate('applications')}
              className={`hover:text-[#b88628] transition-colors py-1 ${
                currentPage === 'applications' ? 'text-[#b88628] font-bold border-b-2 border-[#b88628]' : ''
              }`}
            >
              Applications
            </button>

            <button
              onClick={() => navigate('quality-manufacturing')}
              className={`hover:text-[#b88628] transition-colors py-1 ${
                currentPage === 'quality-manufacturing' ? 'text-[#b88628] font-bold border-b-2 border-[#b88628]' : ''
              }`}
            >
              Quality & CNC
            </button>

            <button
              onClick={() => navigate('gallery')}
              className={`hover:text-[#b88628] transition-colors py-1 ${
                currentPage === 'gallery' ? 'text-[#b88628] font-bold border-b-2 border-[#b88628]' : ''
              }`}
            >
              Projects
            </button>

            <button
              onClick={() => navigate('blog')}
              className={`hover:text-[#b88628] transition-colors py-1 ${
                currentPage === 'blog' ? 'text-[#b88628] font-bold border-b-2 border-[#b88628]' : ''
              }`}
            >
              Resources
            </button>

            <button
              onClick={() => navigate('contact')}
              className={`hover:text-[#b88628] transition-colors py-1 ${
                currentPage === 'contact' ? 'text-[#b88628] font-bold border-b-2 border-[#b88628]' : ''
              }`}
            >
              Contact
            </button>
          </div>

          {/* Right Action: GET A QUOTE Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => openQuoteModal()}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#d8b571] via-[#c5a059] to-[#a87e2b] hover:from-[#e2c182] hover:to-[#966d1f] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Get a Quote
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-gray-700 hover:text-black rounded-lg hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 pt-3 border-t border-[#ebdccb] bg-[#faf7f2] rounded-xl p-4 shadow-xl max-h-[80vh] overflow-y-auto">
            <div className="pb-3 mb-2 border-b border-[#ebdccb] flex items-center justify-between">
              <BrandLogo variant="horizontal" size="sm" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-md text-gray-500 hover:text-gray-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-col gap-2 text-sm text-[#2b3340]">
              <button
                onClick={() => navigate('home')}
                className="text-left py-2 px-3 rounded-lg hover:bg-[#ede3d4] font-medium"
              >
                Home
              </button>
              <button
                onClick={() => navigate('about')}
                className="text-left py-2 px-3 rounded-lg hover:bg-[#ede3d4] font-medium"
              >
                About Us
              </button>
              <button
                onClick={() => navigate('rajasthan-stones')}
                className="text-left py-2 px-3 rounded-lg hover:bg-[#ede3d4] font-medium"
              >
                Rajasthan Stones
              </button>
              <button
                onClick={() => navigate('products')}
                className="text-left py-2 px-3 rounded-lg hover:bg-[#ede3d4] font-medium"
              >
                Product Catalogue
              </button>
              <button
                onClick={() => navigate('marble-granite')}
                className="text-left py-1.5 px-3 pl-6 rounded-lg hover:bg-[#ede3d4] text-xs text-gray-600"
              >
                &bull; Marble & Granite
              </button>
              <button
                onClick={() => navigate('sandstone-redstone')}
                className="text-left py-1.5 px-3 pl-6 rounded-lg hover:bg-[#ede3d4] text-xs text-gray-600"
              >
                &bull; Sandstone & Red Sandstone
              </button>
              <button
                onClick={() => navigate('sculptures')}
                className="text-left py-2 px-3 rounded-lg hover:bg-[#ede3d4] font-medium"
              >
                Marble Statues & Sculptures
              </button>
              <button
                onClick={() => navigate('custom-portraits')}
                className="text-left py-2 px-3 rounded-lg hover:bg-[#ede3d4] text-[#8c6218] font-semibold"
              >
                Custom Human Portraits in Marble
              </button>

              {/* Mobile Export Highlight */}
              <div className="bg-[#f0e5d4] p-3 rounded-xl border border-[#decab0] space-y-1 my-1">
                <span className="text-[11px] font-bold text-[#80540d] uppercase tracking-wider block">
                  🚢 WE EXPORT STONE WORLDWIDE
                </span>
                <p className="text-xs text-gray-700">
                  Container export to USA, UK, Europe, UAE, Saudi Arabia, Australia, etc.
                </p>
                <button
                  onClick={() => navigate('export')}
                  className="text-xs font-bold text-[#9e701e] hover:underline"
                >
                  View Export Details & Logistics &rarr;
                </button>
              </div>

              <button
                onClick={() => navigate('applications')}
                className="text-left py-2 px-3 rounded-lg hover:bg-[#ede3d4] font-medium"
              >
                Applications
              </button>
              <button
                onClick={() => navigate('quality-manufacturing')}
                className="text-left py-2 px-3 rounded-lg hover:bg-[#ede3d4] font-medium"
              >
                Quality & CNC Manufacturing
              </button>
              <button
                onClick={() => navigate('gallery')}
                className="text-left py-2 px-3 rounded-lg hover:bg-[#ede3d4] font-medium"
              >
                Projects Gallery
              </button>
              <button
                onClick={() => navigate('blog')}
                className="text-left py-2 px-3 rounded-lg hover:bg-[#ede3d4] font-medium"
              >
                Stone Guides & Blog
              </button>
              <button
                onClick={() => navigate('contact')}
                className="text-left py-2 px-3 rounded-lg hover:bg-[#ede3d4] font-medium"
              >
                Contact Us
              </button>

              <div className="pt-3 border-t border-[#e2d5c3] flex flex-col gap-2">
                <button
                  onClick={() => {
                    generateAndDownloadB2BZipPackage();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2.5 px-3 rounded-lg bg-[#ebdcc8] border border-[#d6be9e] text-[#80540d] flex items-center justify-center gap-2 text-xs font-bold"
                >
                  <Download className="w-4 h-4" />
                  Download B2B Spec Kit (.zip)
                </button>

                <button
                  onClick={() => {
                    openQuoteModal();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#d8b571] to-[#b88628] text-white font-bold text-xs uppercase shadow"
                >
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
