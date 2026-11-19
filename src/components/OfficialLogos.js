import React from 'react';

/**
 * Authentic Indian Government Portal Visual Assets & Badges
 * Includes:
 * 1. Authority Crest / Emblem (Ashoka Chakra, Satyameva Jayate, Wheat Sheaves)
 * 2. Swachh Bharat Abhiyan Logo (Gandhi Spectacles with 'एक कदम स्वच्छता की ओर')
 * 3. Digital India Representation Logo
 * 4. Viksit Bharat @ 2047 / Viksit Rajasthan Emblem
 * 5. NH-48 Authentic Highway Milestone (Yellow & White)
 * 6. GIGW 3.0 Compliance Seal
 * 7. STQC Certified Seal
 */

export const AuthorityCrest = ({ size = 90 }) => (
  <svg
    viewBox="0 0 160 160"
    width={size}
    height={size}
    className="authority-crest-svg"
    aria-label="New Phulera Regional Development Authority Crest"
  >
    {/* Outer Decorative Ring */}
    <circle cx="80" cy="80" r="77" fill="none" stroke="#D4AF37" strokeWidth="2.5" />
    <circle cx="80" cy="80" r="73" fill="none" stroke="#0B2340" strokeWidth="1" strokeDasharray="2,2" />
    <circle cx="80" cy="80" r="70" fill="#0B2340" stroke="#D4AF37" strokeWidth="1.5" />

    {/* Concentric Beaded Circle (Standard in Indian Government Coins & Seals) */}
    {[...Array(36)].map((_, i) => {
      const angle = (i * 10) * (Math.PI / 180);
      const cx = 80 + 74.5 * Math.cos(angle);
      const cy = 80 + 74.5 * Math.sin(angle);
      return <circle key={i} cx={cx} cy={cy} r="1.1" fill="#D4AF37" />;
    })}

    {/* Circular Text Path for Official Inscription */}
    <defs>
      <path
        id="crestTopArc"
        d="M 22 80 A 58 58 0 1 1 138 80"
        fill="none"
      />
      <path
        id="crestBottomArc"
        d="M 138 80 A 58 58 0 0 1 22 80"
        fill="none"
      />
    </defs>

    {/* Hindi Circular Inscription (Top) */}
    <text fill="#FFE899" fontSize="9" fontWeight="700" fontFamily="'Noto Sans Devanagari', sans-serif" letterSpacing="1.2">
      <textPath href="#crestTopArc" startOffset="50%" textAnchor="middle">
        ★ नया फुलेरा क्षेत्रीय विकास अनुसंधान प्रकोष्ठ ★
      </textPath>
    </text>

    {/* English Circular Inscription (Bottom) */}
    <text fill="#FFFFFF" fontSize="7.8" fontWeight="600" fontFamily="'Merriweather', serif" letterSpacing="1">
      <textPath href="#crestBottomArc" startOffset="50%" textAnchor="middle">
        NEW PHULERA REGIONAL CORRIDOR
      </textPath>
    </text>

    {/* Inner Shield / Core Emblem */}
    <circle cx="80" cy="80" r="46" fill="#071A30" stroke="#D4AF37" strokeWidth="2" />

    {/* 24-Spoke Ashoka Chakra Motif */}
    <circle cx="80" cy="74" r="22" fill="#FFFFFF" stroke="#000080" strokeWidth="1.5" />
    <circle cx="80" cy="74" r="3.5" fill="#000080" />
    {[...Array(24)].map((_, i) => {
      const angle = (i * 15) * (Math.PI / 180);
      const x2 = 80 + 20 * Math.cos(angle);
      const y2 = 74 + 20 * Math.sin(angle);
      return (
        <line
          key={i}
          x1="80"
          y1="74"
          x2={x2}
          y2={y2}
          stroke="#000080"
          strokeWidth="0.8"
        />
      );
    })}

    {/* Flanking Wheat Sheaves / Laurel (Agriculture & Regional Prosperity) */}
    <path
      d="M42 96 C40 82 45 70 54 60 C53 66 50 78 52 92 Z"
      fill="#D4AF37"
    />
    <path
      d="M118 96 C120 82 115 70 106 60 C107 66 110 78 108 92 Z"
      fill="#D4AF37"
    />

    {/* Railway Track Cross / WDFC Corridor Motif */}
    <rect x="68" y="94" width="24" height="2" fill="#FF9933" />
    <rect x="68" y="98" width="24" height="2" fill="#FFFFFF" />
    <rect x="68" y="102" width="24" height="2" fill="#138808" />

    {/* Base Scroll / Satyameva Jayate Plinth */}
    <path
      d="M 46 112 L 114 112 L 110 124 L 50 124 Z"
      fill="#D4AF37"
      stroke="#B8972E"
      strokeWidth="1"
    />
    <text
      x="80"
      y="121"
      textAnchor="middle"
      fill="#071A30"
      fontSize="8.5"
      fontWeight="900"
      fontFamily="'Noto Sans Devanagari', serif"
      letterSpacing="0.5"
    >
      सत्यमेव जयते
    </text>
  </svg>
);

export const SwachhBharatLogo = ({ height = 44 }) => (
  <div className="gov-badge-swachh" title="स्वच्छ भारत अभियान - एक कदम स्वच्छता की ओर">
    <svg viewBox="0 0 160 70" height={height} width={height * 2.28}>
      {/* Spectacles (Chashma) */}
      {/* Left Lens */}
      <circle cx="50" cy="30" r="22" fill="#FFFFFF" stroke="#0B2340" strokeWidth="3" />
      <text
        x="50"
        y="35"
        textAnchor="middle"
        fill="#FF9933"
        fontSize="14"
        fontWeight="800"
        fontFamily="'Noto Sans Devanagari', sans-serif"
      >
        स्वच्छ
      </text>

      {/* Bridge between lenses */}
      <path d="M72 26 Q80 20 88 26" fill="none" stroke="#0B2340" strokeWidth="3" />

      {/* Right Lens */}
      <circle cx="110" cy="30" r="22" fill="#FFFFFF" stroke="#0B2340" strokeWidth="3" />
      <text
        x="110"
        y="35"
        textAnchor="middle"
        fill="#138808"
        fontSize="14"
        fontWeight="800"
        fontFamily="'Noto Sans Devanagari', sans-serif"
      >
        भारत
      </text>

      {/* Left temple */}
      <path d="M28 26 L12 20" stroke="#0B2340" strokeWidth="3" strokeLinecap="round" />
      {/* Right temple */}
      <path d="M132 26 L148 20" stroke="#0B2340" strokeWidth="3" strokeLinecap="round" />

      {/* Subtitle text: एक कदम स्वच्छता की ओर */}
      <text
        x="80"
        y="62"
        textAnchor="middle"
        fill="#0B2340"
        fontSize="9.5"
        fontWeight="700"
        fontFamily="'Noto Sans Devanagari', sans-serif"
        letterSpacing="0.2"
      >
        एक कदम स्वच्छता की ओर
      </text>
    </svg>
  </div>
);

export const DigitalIndiaLogo = ({ height = 44 }) => (
  <div className="gov-badge-digital" title="Digital India - Power To Empower">
    <svg viewBox="0 0 140 50" height={height} width={height * 2.8}>
      {/* Tricolor digital spark/nodes */}
      <circle cx="16" cy="18" r="5" fill="#FF9933" />
      <circle cx="28" cy="12" r="4" fill="#0B2340" />
      <circle cx="24" cy="28" r="4.5" fill="#138808" />
      <circle cx="12" cy="32" r="3.5" fill="#087E83" />
      <line x1="16" y1="18" x2="28" y2="12" stroke="#CBD5E1" strokeWidth="1.5" />
      <line x1="16" y1="18" x2="24" y2="28" stroke="#CBD5E1" strokeWidth="1.5" />
      <line x1="24" y1="28" x2="12" y2="32" stroke="#CBD5E1" strokeWidth="1.5" />

      {/* Digital India Typography */}
      <text
        x="38"
        y="22"
        fill="#0B2340"
        fontSize="16"
        fontWeight="900"
        fontFamily="'Source Sans 3', sans-serif"
        letterSpacing="-0.3"
      >
        Digital <tspan fill="#FF9933">India</tspan>
      </text>
      <text
        x="39"
        y="35"
        fill="#64748B"
        fontSize="7.5"
        fontWeight="700"
        letterSpacing="0.8"
        fontFamily="sans-serif"
      >
        POWER TO EMPOWER
      </text>
    </svg>
  </div>
);

export const ViksitBharatLogo = ({ height = 44 }) => (
  <div className="gov-badge-viksit" title="विकसित भारत @ 2047 | Viksit Rajasthan">
    <svg viewBox="0 0 130 50" height={height} width={height * 2.6}>
      <defs>
        <linearGradient id="flagGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF9933" />
          <stop offset="50%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#138808" />
        </linearGradient>
      </defs>
      
      {/* Circular Emblem */}
      <circle cx="24" cy="25" r="20" fill="#0B2340" stroke="#D4AF37" strokeWidth="1.5" />
      <circle cx="24" cy="25" r="16" fill="#F8FAFC" />
      
      {/* Rising Sun and 2047 */}
      <path d="M12 28 Q24 16 36 28 Z" fill="#FF9933" />
      <circle cx="24" cy="22" r="3" fill="#D4AF37" />
      <text x="24" y="32" textAnchor="middle" fill="#0B2340" fontSize="6.5" fontWeight="900">2047</text>

      {/* Text Lines */}
      <text
        x="50"
        y="20"
        fill="#0B2340"
        fontSize="11.5"
        fontWeight="800"
        fontFamily="'Noto Sans Devanagari', sans-serif"
      >
        विकसित भारत
      </text>
      <text
        x="50"
        y="32"
        fill="#FF9933"
        fontSize="8.5"
        fontWeight="800"
        fontFamily="'Source Sans 3', sans-serif"
        letterSpacing="0.5"
      >
        VIKSIT RAJASTHAN
      </text>
      <text
        x="50"
        y="42"
        fill="#64748B"
        fontSize="6.8"
        fontWeight="600"
      >
        WDFC Regional Growth
      </text>
    </svg>
  </div>
);

export const HighwayMilestone = ({
  route = "NH-48",
  destination = "DUDU",
  distance = "7 KM",
  stateCode = "RJ",
  type = "nh" // 'nh' for yellow (National Highway), 'sh' for green (State Highway)
}) => {
  const topBg = type === "nh" ? "#F59E0B" : "#10B981"; // Golden Yellow for NH, Green for SH
  return (
    <div className="gov-milestone" title={`${destination} ${distance} via ${route}`}>
      <svg viewBox="0 0 80 120" width="70" height="105">
        {/* Stone Shadow */}
        <ellipse cx="40" cy="116" rx="34" ry="4" fill="rgba(0,0,0,0.15)" />

        {/* Milestone Body */}
        <path
          d="M 12 114 L 12 40 C 12 16 68 16 68 40 L 68 114 Z"
          fill="#FFFFFF"
          stroke="#334155"
          strokeWidth="2"
        />

        {/* Milestone Top Rounded Cap (Yellow for NH, Green for SH) */}
        <path
          d="M 12 46 C 12 16 68 16 68 46 Z"
          fill={topBg}
          stroke="#334155"
          strokeWidth="2"
        />

        {/* Route / Highway Code in Top Cap */}
        <text
          x="40"
          y="35"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="11"
          fontWeight="900"
          fontFamily="'Source Sans 3', sans-serif"
          letterSpacing="0.5"
        >
          {route}
        </text>

        {/* Destination Name in Lower Body */}
        <text
          x="40"
          y="70"
          textAnchor="middle"
          fill="#0F172A"
          fontSize="10"
          fontWeight="800"
          fontFamily="'Source Sans 3', sans-serif"
          letterSpacing="1"
        >
          {destination}
        </text>

        {/* Divider line on stone */}
        <line x1="24" y1="78" x2="56" y2="78" stroke="#CBD5E1" strokeWidth="1" />

        {/* Distance in KM */}
        <text
          x="40"
          y="98"
          textAnchor="middle"
          fill="#0F172A"
          fontSize="14"
          fontWeight="900"
          fontFamily="'Source Sans 3', sans-serif"
        >
          {distance}
        </text>
      </svg>
    </div>
  );
};

export const GIGWComplianceBadge = () => (
  <div className="gov-cert-badge" title="Certified as per Guidelines for Indian Government Websites (GIGW 3.0)">
    <div className="gov-cert-badge__shield">
      <svg viewBox="0 0 32 36" width="22" height="24">
        <path d="M16 2 L4 7 L4 18 C4 26 16 33 16 33 C16 33 28 26 28 18 L28 7 Z" fill="#0B2340" stroke="#D4AF37" strokeWidth="1.5" />
        <path d="M10 17 L14 21 L22 13" fill="none" stroke="#FF9933" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
    <div className="gov-cert-badge__text">
      <span className="gov-cert-badge__title">GIGW 3.0</span>
      <span className="gov-cert-badge__sub">COMPLIANT</span>
    </div>
  </div>
);

export const STQCBadge = () => (
  <div className="gov-cert-badge" title="Standardisation Testing and Quality Certification">
    <div className="gov-cert-badge__shield">
      <svg viewBox="0 0 32 36" width="22" height="24">
        <circle cx="16" cy="18" r="14" fill="#087E83" stroke="#D4AF37" strokeWidth="1.2" />
        <text x="16" y="21" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="800">STQC</text>
      </svg>
    </div>
    <div className="gov-cert-badge__text">
      <span className="gov-cert-badge__title">QUALITY</span>
      <span className="gov-cert-badge__sub">CERTIFIED</span>
    </div>
  </div>
);
