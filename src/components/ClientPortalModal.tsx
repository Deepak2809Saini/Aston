import React, { useEffect, useState } from 'react';
import { X, User, LogIn, FileText, CheckCircle2, Clock, Download, ExternalLink, RefreshCw, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { db } from '../lib/firebase';
import { collection, query, where, getDocs, orderBy, updateDoc, doc } from 'firebase/firestore';
import { EnquirySubmission } from '../types';
import { generateAndDownloadB2BZipPackage } from '../lib/zipExporter';
import { BrandLogo } from './BrandLogo';

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  openQuoteModal: (stoneId?: string, type?: any) => void;
}

export const ClientPortalModal: React.FC<ClientPortalModalProps> = ({
  isOpen,
  onClose,
  openQuoteModal,
}) => {
  const { user, isAdmin, loginWithGoogle, logout } = useAuth();
  const [enquiries, setEnquiries] = useState<EnquirySubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const fetchEnquiries = async () => {
    if (!user) return;
    setLoading(true);
    setErrorMsg(null);
    try {
      let q;
      if (isAdmin) {
        q = query(collection(db, 'enquiries'), orderBy('createdAt', 'desc'));
      } else {
        q = query(
          collection(db, 'enquiries'),
          where('userId', '==', user.uid)
        );
      }

      const snap = await getDocs(q);
      const list: EnquirySubmission[] = [];
      snap.forEach((d) => {
        list.push({ id: d.id, ...d.data() } as EnquirySubmission);
      });
      list.sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''));
      setEnquiries(list);
    } catch (err: any) {
      console.warn("Could not query enquiries directly:", err);
      setEnquiries([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen && user) {
      fetchEnquiries();
    }
  }, [isOpen, user, isAdmin]);

  if (!isOpen) return null;

  const updateStatus = async (enquiryId: string, newStatus: any) => {
    try {
      await updateDoc(doc(db, 'enquiries', enquiryId), { status: newStatus });
      setEnquiries(prev => prev.map(e => e.id === enquiryId ? { ...e, status: newStatus } : e));
    } catch (err) {
      console.error("Status update error", err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl my-8 bg-white border border-[#d6be9e] rounded-2xl shadow-2xl p-6 md:p-8 text-[#1c2230]">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-500 hover:text-black p-1.5 rounded-lg hover:bg-gray-100"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="border-b border-[#ebdccb] pb-4 mb-6">
          <div className="mb-3">
            <BrandLogo variant="horizontal" size="sm" />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#f7efe4] border border-[#d6be9e] flex items-center justify-center text-[#80540d]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#181d26] font-heading">
                Client Portal & RFQ Tracker
              </h2>
              <p className="text-xs text-gray-600">
                Aston Stone Corporation direct customer service and project specification dashboard
              </p>
            </div>
          </div>
        </div>

        {!user ? (
          <div className="text-center py-10 max-w-md mx-auto">
            <User className="w-12 h-12 text-[#b88628] mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#181d26]">Sign In to View Your Enquiries</h3>
            <p className="text-xs text-gray-600 mt-2 mb-6">
              Track submitted stone requirements, sample kits, and custom sculpture orders in real-time.
            </p>
            <button
              onClick={() => loginWithGoogle()}
              className="w-full py-3 px-4 bg-white text-gray-900 border border-gray-300 font-semibold rounded-lg flex items-center justify-center gap-3 shadow hover:bg-gray-50 transition-all text-sm"
            >
              <LogIn className="w-4 h-4 text-red-500" />
              Sign in with Google
            </button>
          </div>
        ) : (
          <div>
            {/* User Profile Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-[#faf7f2] p-4 rounded-xl border border-[#e2d5c3] mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#181d26] text-sm">{user.displayName || 'Authorized Client'}</span>
                  {isAdmin && (
                    <span className="text-[10px] bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded font-mono font-bold">
                      ADMIN / MANAGER
                    </span>
                  )}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">{user.email}</div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => generateAndDownloadB2BZipPackage()}
                  className="px-3 py-1.5 bg-white hover:bg-[#f7f2ea] border border-[#d6be9e] text-[#80540d] font-semibold rounded-lg text-xs flex items-center gap-1.5 shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  B2B Kit (.zip)
                </button>
                <button
                  onClick={fetchEnquiries}
                  className="p-2 bg-white hover:bg-[#f7f2ea] border border-gray-300 text-gray-700 rounded-lg text-xs"
                  title="Refresh Enquiries"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
                </button>
                <button
                  onClick={() => {
                    openQuoteModal();
                    onClose();
                  }}
                  className="px-3 py-1.5 bg-gradient-to-r from-[#d8b571] to-[#b88628] text-white font-bold rounded-lg text-xs shadow-xs"
                >
                  + New RFQ
                </button>
              </div>
            </div>

            {/* Enquiries List */}
            <h3 className="text-sm font-bold text-[#80540d] uppercase tracking-wider mb-3">
              {isAdmin ? "All Global Inquiries & Orders (Admin View)" : "Your Submitted Inquiries"}
            </h3>

            {loading ? (
              <div className="text-center py-8 text-xs text-gray-500">Loading inquiries from Firestore...</div>
            ) : enquiries.length === 0 ? (
              <div className="text-center py-10 bg-[#faf7f2] rounded-xl border border-dashed border-[#decab0]">
                <AlertCircle className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">No enquiries recorded yet.</p>
                <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
                  Submit a stone requirement or project quote, and it will appear here with live status updates.
                </p>
                <button
                  onClick={() => {
                    openQuoteModal();
                    onClose();
                  }}
                  className="mt-4 px-4 py-2 bg-[#b88628] text-white font-bold rounded-lg text-xs"
                >
                  Create Your First RFQ
                </button>
              </div>
            ) : (
              <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-1">
                {enquiries.map((enq) => (
                  <div
                    key={enq.id}
                    className="p-4 bg-white border border-[#e2d5c3] hover:border-[#b88628] rounded-xl transition-all shadow-xs"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-[#80540d]">{enq.id}</span>
                          <span className="text-[11px] px-2 py-0.5 rounded bg-[#f5efe4] text-gray-800 capitalize font-medium">
                            {enq.enquiryType?.replace('_', ' ')}
                          </span>
                        </div>
                        <h4 className="font-bold text-[#181d26] text-sm mt-1">
                          {enq.productName || 'Rajasthan Stone Inquiry'}
                        </h4>
                        <p className="text-xs text-gray-600">
                          Requester: {enq.fullName} ({enq.companyName || 'Individual'}) &bull; {enq.country}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs px-2.5 py-1 rounded-full font-bold ${
                            enq.status === 'completed'
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                              : enq.status === 'in_review'
                              ? 'bg-blue-100 text-blue-800 border border-blue-300'
                              : enq.status === 'quoted'
                              ? 'bg-purple-100 text-purple-800 border border-purple-300'
                              : 'bg-amber-100 text-amber-800 border border-amber-300'
                          }`}
                        >
                          {enq.status?.toUpperCase() || 'PENDING'}
                        </span>

                        {isAdmin && (
                          <select
                            value={enq.status}
                            onChange={(e) => updateStatus(enq.id!, e.target.value)}
                            className="bg-[#faf7f2] text-gray-800 text-[11px] font-medium rounded border border-[#decab0] px-2 py-1"
                          >
                            <option value="pending">Pending</option>
                            <option value="in_review">In Review</option>
                            <option value="quoted">Quoted</option>
                            <option value="completed">Completed</option>
                          </select>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] text-gray-600 bg-[#faf7f2] p-2.5 rounded-lg border border-[#e5dcce] mt-2">
                      <div>
                        <span className="text-gray-500 block">Quantity:</span>
                        <span className="text-gray-900 font-semibold">{enq.quantity || 'TBD'}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">Finish:</span>
                        <span className="text-gray-900 font-semibold">{enq.finish || 'Standard'}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">Dimensions:</span>
                        <span className="text-gray-900 font-semibold">{enq.dimensions || 'Cut to size'}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">Destination:</span>
                        <span className="text-gray-900 font-semibold">{enq.destinationPort || 'Domestic'}</span>
                      </div>
                    </div>

                    {enq.message && (
                      <p className="text-xs text-gray-700 mt-2 italic bg-[#faf7f2] p-2 rounded border border-[#e8ded0]">
                        "{enq.message}"
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
