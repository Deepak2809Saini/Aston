import React, { useState, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ClientPortalModal } from './components/ClientPortalModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { RajasthanStonesPage } from './pages/RajasthanStonesPage';
import { ProductsPage } from './pages/ProductsPage';
import { MarbleGranitePage } from './pages/MarbleGranitePage';
import { SandstoneRedStonePage } from './pages/SandstoneRedStonePage';
import { SculpturesPage } from './pages/SculpturesPage';
import { CustomPortraitsPage } from './pages/CustomPortraitsPage';
import { ApplicationsPage } from './pages/ApplicationsPage';
import { QualityManufacturingPage } from './pages/QualityManufacturingPage';
import { ExportGlobalSupplyPage } from './pages/ExportGlobalSupplyPage';
import { GalleryPage } from './pages/GalleryPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { StoneProduct } from './types';
import { COMPANY_CONTACT } from './data/stoneData';
import { MessageSquare, Download } from 'lucide-react';
import { generateAndDownloadB2BZipPackage } from './lib/zipExporter';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteStoneId, setQuoteStoneId] = useState<string | undefined>(undefined);
  const [quoteType, setQuoteType] = useState<any>('quote');
  const [portalModalOpen, setPortalModalOpen] = useState(false);
  const [selectedProductDetail, setSelectedProductDetail] = useState<StoneProduct | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (hash) {
        setCurrentPage(hash);
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteModal = (stoneId?: string, type: any = 'quote') => {
    setQuoteStoneId(stoneId);
    setQuoteType(type);
    setQuoteModalOpen(true);
  };

  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col bg-[#faf7f2] text-[#1c2230] selection:bg-[#c5a059] selection:text-white">
        
        {/* Navigation Bar */}
        <Navbar
          currentPage={currentPage}
          setCurrentPage={navigate}
          openQuoteModal={handleOpenQuoteModal}
          openPortalModal={() => setPortalModalOpen(true)}
        />

        {/* Dynamic Page Views */}
        <main className="flex-1 bg-[#faf7f2]">
          {currentPage === 'home' && (
            <HomePage
              navigate={navigate}
              openQuoteModal={handleOpenQuoteModal}
              onSelectProduct={(p) => setSelectedProductDetail(p)}
            />
          )}

          {currentPage === 'about' && (
            <AboutPage
              navigate={navigate}
              openQuoteModal={handleOpenQuoteModal}
            />
          )}

          {currentPage === 'rajasthan-stones' && (
            <RajasthanStonesPage
              navigate={navigate}
              openQuoteModal={handleOpenQuoteModal}
              onSelectProduct={(p) => setSelectedProductDetail(p)}
            />
          )}

          {currentPage === 'products' && (
            <ProductsPage
              onSelectProduct={(p) => setSelectedProductDetail(p)}
              openQuoteModal={handleOpenQuoteModal}
            />
          )}

          {currentPage === 'marble-granite' && (
            <MarbleGranitePage
              onSelectProduct={(p) => setSelectedProductDetail(p)}
              openQuoteModal={handleOpenQuoteModal}
            />
          )}

          {currentPage === 'sandstone-redstone' && (
            <SandstoneRedStonePage
              onSelectProduct={(p) => setSelectedProductDetail(p)}
              openQuoteModal={handleOpenQuoteModal}
            />
          )}

          {currentPage === 'sculptures' && (
            <SculpturesPage
              navigate={navigate}
              openQuoteModal={handleOpenQuoteModal}
            />
          )}

          {currentPage === 'custom-portraits' && (
            <CustomPortraitsPage
              openQuoteModal={handleOpenQuoteModal}
            />
          )}

          {currentPage === 'applications' && (
            <ApplicationsPage
              navigate={navigate}
              openQuoteModal={handleOpenQuoteModal}
            />
          )}

          {currentPage === 'quality-manufacturing' && (
            <QualityManufacturingPage
              openQuoteModal={handleOpenQuoteModal}
            />
          )}

          {currentPage === 'export' && (
            <ExportGlobalSupplyPage
              openQuoteModal={handleOpenQuoteModal}
            />
          )}

          {currentPage === 'gallery' && (
            <GalleryPage
              openQuoteModal={handleOpenQuoteModal}
            />
          )}

          {currentPage === 'blog' && (
            <BlogPage
              openQuoteModal={handleOpenQuoteModal}
            />
          )}

          {currentPage === 'contact' && (
            <ContactPage />
          )}
        </main>

        {/* Global Footer */}
        <Footer
          navigate={navigate}
          openQuoteModal={handleOpenQuoteModal}
        />

        {/* Interactive Modals */}
        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          defaultStoneId={quoteStoneId}
          defaultEnquiryType={quoteType}
        />

        <ProductDetailModal
          product={selectedProductDetail}
          onClose={() => setSelectedProductDetail(null)}
          openQuoteModal={(id) => handleOpenQuoteModal(id)}
        />

        <ClientPortalModal
          isOpen={portalModalOpen}
          onClose={() => setPortalModalOpen(false)}
          openQuoteModal={handleOpenQuoteModal}
        />

        {/* Floating International WhatsApp Button */}
        <a
          href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=Hello%20Aston%20Stone%20Corporation%2C%20I%20am%20interested%20in%20natural%20stone%20inquiry`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 p-3.5 bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold rounded-full shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 group border-2 border-white/80"
          title="Direct WhatsApp Chat: +91 7877443079"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold pl-0 group-hover:pl-2">
            WhatsApp Us
          </span>
        </a>

        {/* Floating Quick B2B Kit Download Button */}
        <button
          onClick={() => generateAndDownloadB2BZipPackage()}
          className="fixed bottom-6 left-6 z-40 p-3 bg-white/95 hover:bg-[#f7efe4] text-[#80540d] border border-[#d6be9e] rounded-full shadow-xl flex items-center justify-center transition-all transform hover:scale-105 backdrop-blur-md group"
          title="Download B2B Kit (.zip)"
        >
          <Download className="w-4 h-4 text-[#80540d]" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold pl-0 group-hover:pl-2">
            Download Spec Kit (.zip)
          </span>
        </button>

      </div>
    </AuthProvider>
  );
}
