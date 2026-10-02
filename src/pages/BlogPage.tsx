import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, X, CheckCircle2, Download, Search } from 'lucide-react';
import { BLOG_POSTS, COMPANY_CONTACT } from '../data/stoneData';
import { BlogPost } from '../types';
import { generateAndDownloadB2BZipPackage } from '../lib/zipExporter';

interface BlogPageProps {
  openQuoteModal: (stoneId?: string, type?: any) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ openQuoteModal }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = BLOG_POSTS.filter(p =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-16 bg-[#faf7f2]">
      
      {/* Header */}
      <div className="border-b border-[#e2d6c6] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#80540d]">
            Architectural Insights & Technical Guides
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#181d26] font-heading">
            Stone Resources & B2B Knowledge Base
          </h1>
          <p className="text-sm sm:text-base text-gray-700 max-w-2xl leading-relaxed font-serif-sub italic">
            Practical, SEO-optimized guides for architects, project managers, and international natural stone importers.
          </p>
        </div>

        <button
          onClick={() => generateAndDownloadB2BZipPackage()}
          className="px-4 py-2.5 bg-white hover:bg-[#faf6f0] border border-[#cfbeab] text-[#80540d] font-bold rounded-lg text-xs flex items-center gap-2 shrink-0 shadow-xs"
        >
          <Download className="w-4 h-4" />
          <span>Download All Guides (.zip)</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search articles, guides, and specifications..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white border border-[#d6be9e] rounded-lg pl-9 pr-4 py-2.5 text-xs text-gray-900 focus:outline-none focus:border-[#b88628] shadow-xs"
        />
      </div>

      {/* Articles Grid (All 14 Articles) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((post) => (
          <div
            key={post.id}
            className="group bg-white border border-[#e2d6c6] hover:border-[#b88628] rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-lg space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[11px] text-gray-500">
                <span className="text-[#80540d] font-bold uppercase tracking-wider">{post.category}</span>
                <span className="flex items-center gap-1 font-medium">
                  <Clock className="w-3 h-3 text-gray-400" />
                  {post.readTime}
                </span>
              </div>

              <h3
                onClick={() => setSelectedPost(post)}
                className="text-lg font-bold text-[#181d26] font-heading cursor-pointer group-hover:text-[#b88628] transition-colors leading-snug"
              >
                {post.title}
              </h3>

              <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                {post.summary}
              </p>

              <div className="pt-2 border-t border-[#ede4d7] space-y-1">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-bold">
                  Key Takeaway:
                </span>
                <p className="text-[11px] text-gray-700 italic">
                  "{post.keyTakeaways[0]}"
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedPost(post)}
              className="pt-3 border-t border-[#ede4d7] text-xs font-bold text-[#80540d] hover:text-[#b88628] flex items-center justify-between w-full transition-colors"
            >
              <span>Read Full Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

      {/* In-depth Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-3xl my-8 bg-white border border-[#d6be9e] rounded-2xl shadow-2xl p-6 md:p-10 text-[#1c2230] max-h-[85vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-5 right-5 text-gray-500 hover:text-black p-1.5 rounded-lg hover:bg-gray-100"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-4 border-b border-[#ebdccb] pb-6 mb-6">
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span className="text-[#80540d] font-bold uppercase tracking-wider">{selectedPost.category}</span>
                <span>&bull;</span>
                <span>{selectedPost.readTime}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#181d26] font-heading">
                {selectedPost.title}
              </h2>
            </div>

            {/* Key Takeaways Box */}
            <div className="mb-6 p-4 bg-[#faf7f2] border border-[#d6be9e] rounded-xl space-y-2">
              <span className="text-xs uppercase tracking-wider text-[#80540d] font-bold block">
                Key Professional Takeaways
              </span>
              <ul className="space-y-1.5 text-xs text-gray-800">
                {selectedPost.keyTakeaways.map((take, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#b88628] shrink-0 mt-0.5" />
                    <span>{take}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Content Paragraphs */}
            <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
              {selectedPost.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Modal Bottom CTA */}
            <div className="mt-8 pt-6 border-t border-[#ede4d7] flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-gray-500">
                Published by <strong className="text-gray-900">Aston Stone Corporation</strong>, Rajasthan, India.
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    openQuoteModal();
                    setSelectedPost(null);
                  }}
                  className="px-5 py-2.5 bg-gradient-to-r from-[#d8b571] via-[#c5a059] to-[#ad822e] text-white font-bold rounded-lg text-xs uppercase tracking-wider shadow-sm"
                >
                  Request Project Quote
                </button>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="text-xs text-gray-600 hover:text-black"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
