import React, { useState } from 'react';
import { COMPANY_CONTACT, LOGO_IMAGE } from '../data/stoneData';

interface BrandLogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon-only';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showSubtitle?: boolean;
  logoSrc?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  className = '',
  showSubtitle = true,
  logoSrc = COMPANY_CONTACT.logoUrl || LOGO_IMAGE,
}) => {
  const [imageError, setImageError] = useState(false);
  const activeLogoSrc = logoSrc || LOGO_IMAGE;

  // Sizing definitions
  const iconSizeClasses = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
  }[size];

  const titleSizeClasses = {
    sm: 'text-base sm:text-lg',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl sm:text-3xl',
  }[size];

  const subSizeClasses = {
    sm: 'text-[9px] tracking-[0.2em]',
    md: 'text-[10px] tracking-[0.25em]',
    lg: 'text-xs tracking-[0.3em]',
  }[size];

  const iconElement = (
    <div className={`relative ${iconSizeClasses} rounded-xl bg-gradient-to-br from-[#d4af37] via-[#b88628] to-[#80540d] p-[1.5px] shadow-sm shrink-0 group-hover:shadow-md transition-shadow`}>
      <div className="w-full h-full bg-[#fffdf9] rounded-[10px] flex items-center justify-center p-0.5 relative overflow-hidden">
        {/* Subtle stone texture pattern background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#fbf7f0] to-[#f4ebe0] opacity-80" />
        
        {/* Brand Logo Image (with graceful SVG fallback) */}
        {activeLogoSrc && !imageError ? (
          <img
            src={activeLogoSrc}
            alt="Aston Stone Corporation Logo"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover rounded-[8px] relative z-10 transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          /* Architectural Rajasthan Stone Arch & Monogram SVG Crest */
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full relative z-10 text-[#80540d]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Traditional Rajasthan Jharokha Arch Outline */}
            <path
              d="M 50 12 C 38 12 24 22 24 38 L 24 88 L 76 88 L 76 38 C 76 22 62 12 50 12 Z"
              stroke="url(#goldGradient)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Inner Trefoil Point */}
            <path
              d="M 50 18 C 45 23 34 26 34 38 L 34 82 L 66 82 L 66 38 C 66 26 55 23 50 18 Z"
              stroke="#c5a059"
              strokeWidth="1.5"
              strokeDasharray="2 2"
            />
            {/* Stylized Chiseled 'A' & 'S' monogram */}
            <path
              d="M 50 28 L 38 72 L 44 72 L 47 60 L 53 60 L 56 72 L 62 72 Z"
              fill="url(#goldGradient)"
            />
            <path
              d="M 48 46 L 52 46 L 50 36 Z"
              fill="#fffdf9"
            />
            {/* Stone Diamond Keystone / Chisel Peak */}
            <polygon
              points="50,6 54,12 50,18 46,12"
              fill="#b88628"
            />
            {/* Gradients */}
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d4af37" />
                <stop offset="50%" stopColor="#b88628" />
                <stop offset="100%" stopColor="#80540d" />
              </linearGradient>
            </defs>
          </svg>
        )}
      </div>
    </div>
  );

  if (variant === 'icon-only') {
    return <div className={`inline-block ${className}`}>{iconElement}</div>;
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center gap-2 group ${className}`}>
        {iconElement}
        <div>
          <span className={`block font-heading font-bold text-[#181d26] tracking-wider ${titleSizeClasses} leading-tight`}>
            ASTON STONE
          </span>
          {showSubtitle && (
            <span className={`block font-bold uppercase text-[#80540d] font-sans ${subSizeClasses} mt-0.5`}>
              CORPORATION &bull; RAJASTHAN
            </span>
          )}
        </div>
      </div>
    );
  }

  // Default: Horizontal
  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      {iconElement}
      <div className="flex flex-col">
        <span className={`font-heading font-bold text-[#181d26] group-hover:text-[#b88628] transition-colors tracking-wider leading-tight ${titleSizeClasses}`}>
          ASTON STONE
        </span>
        {showSubtitle && (
          <span className={`font-bold uppercase text-[#80540d] font-sans ${subSizeClasses} leading-tight mt-0.5`}>
            CORPORATION &bull; RAJASTHAN
          </span>
        )}
      </div>
    </div>
  );
};
