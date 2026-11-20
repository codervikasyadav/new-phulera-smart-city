import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Home,
  Building2,
  MapPin,
  Train,
  FileCheck,
  BookOpen,
  PhoneCall,
  Search,
  Bell,
  Globe,
  Phone,
  MessageSquare,
  Pause,
  Play
} from 'lucide-react';
import {
  AuthorityCrest,
  SwachhBharatLogo,
  ViksitBharatLogo,
  DigitalIndiaLogo
} from './OfficialLogos';
import { useLanguage } from '../context/LanguageContext';
import './Header.css';

const navLinks = [
  { path: '/', label: 'Home', icon: Home, hindi: 'मुखपृष्ठ' },
  { path: '/phulera-smart-city', label: 'Phulera Vision', icon: Building2, hindi: 'फुलेरा विजन' },
  { path: '/dobri', label: 'Dobri Spotlight', icon: MapPin, hindi: 'दोबरी क्षेत्र' },
  { path: '/infrastructure', label: 'Infrastructure & WDFC', icon: Train, hindi: 'अवसंरचना' },
  { path: '/investment-guide', label: 'Investment Guide', icon: FileCheck, hindi: 'निवेश गाइड' },
  { path: '/research', label: 'Gazette & Sources', icon: BookOpen, hindi: 'राजपत्र व स्रोत' },
  { path: '/enquiry', label: 'Citizen Help Desk', icon: PhoneCall, hindi: 'नागरिक सहायता' },
];

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [currentNewsIdx, setCurrentNewsIdx] = useState(0);
  const [newsPaused, setNewsPaused] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  const newsItems = [
    "★ DFCCIL पश्चिमी समर्पित मालभाड़ा कॉरिडोर (WDFC): अटेली-फुलेरा खंड पर 100 किमी/घंटा गति परीक्षण सफल।",
    "★ रीको (RIICO) औद्योगिक आदेश 2026: फुलेरा एवं बिचून औद्योगिक क्षेत्र विकास हेतु प्रशासनिक स्वीकृति जारी।",
    "★ राजस्थान नगरीय विकास विभाग: मांडा, फुलेरा एवं बिचून लॉजिस्टिक्स नोड्स का आधिकारिक स्थल निरीक्षण संपन्न।",
    "★ दोबरी माइक्रो-मार्केट: एनएच-48 (दूदू) से लगभग 7 किमी दूरी — मौके पर भौतिक सड़क एवं राजस्व खसरा सत्यापन आवश्यक।",
    "★ नागरिक सतर्कता सूचना: यह एक स्वतंत्र क्षेत्रीय अनुसंधान पोर्टल है — भारत सरकार या रीको से कोई आधिकारिक संबद्धता नहीं है।",
    "★ सहायता केंद्र: भूमि अभिलेख, जमाबंदी एवं क्षेत्रीय अनुसंधान पूछताछ हेतु संपर्क करें: +91 92184 67515 / +91 79056 02136"
  ];

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTime(now.toLocaleString('en-IN', options) + ' IST');
    };
    updateDateTime();
    const timer = setInterval(updateDateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (newsPaused) return;
    const newsTimer = setInterval(() => {
      setCurrentNewsIdx(prev => (prev + 1) % newsItems.length);
    }, 5500);
    return () => clearInterval(newsTimer);
  }, [newsItems.length, newsPaused]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleFontChange = (size) => {
    setFontSize(size);
    document.body.classList.remove('font-large', 'font-xlarge');
    if (size === 'large') {
      document.body.classList.add('font-large');
    } else if (size === 'xlarge') {
      document.body.classList.add('font-xlarge');
    }
  };

  const handleContrastToggle = () => {
    const nextState = !highContrast;
    setHighContrast(nextState);
    if (nextState) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      window.location.href = `/research?q=${encodeURIComponent(searchTerm.trim())}`;
    }
  };

  return (
    <header className="gov-header">
      {/* 1. NATIONAL TRICOLOR TOP ACCENT STRIP (NIC Standard) */}
      <div className="gov-tricolor-line" />

      {/* 2. TOP GIGW ACCESSIBILITY & GOVT HIERARCHY BAR */}
      <div className="gov-utility-bar">
        <div className="container gov-utility-bar__inner">
          <div className="gov-utility-bar__left">
            {/* National Tricolor Icon */}
            <span className="gov-flag-icon" title="भारत का राष्ट्रीय ध्वज / National Flag of India">
              <span className="gov-flag-orange" />
              <span className="gov-flag-white">
                <span className="gov-chakra-dot" />
              </span>
              <span className="gov-flag-green" />
            </span>
            <span className="gov-utility-bar__portal-title">
              सार्वजनिक क्षेत्रीय विकास एवं निवेश अनुसंधान प्रकोष्ठ | Public Regional Infrastructure Portal
            </span>
            <span className="gov-utility-bar__portal-title-mobile">
              क्षेत्रीय विकास पोर्टल (GoI GIGW)
            </span>
            <span className="gov-utility-bar__divider">|</span>
            <a href="#main-content" className="gov-utility-bar__skip">
              मुख्य सामग्री पर जाएं (Skip to Main Content)
            </a>
          </div>

          <div className="gov-utility-bar__right">
            {/* Screen Reader & Font Scaler */}
            <div className="gov-accessibility-controls">
              <span className="gov-ctrl-label">Accessibility:</span>
              <button
                type="button"
                onClick={() => handleFontChange('normal')}
                className={`gov-font-btn ${fontSize === 'normal' ? 'active' : ''}`}
                title="सामान्य फ़ॉन्ट / Standard Font"
              >
                A-
              </button>
              <button
                type="button"
                onClick={() => handleFontChange('large')}
                className={`gov-font-btn ${fontSize === 'large' ? 'active' : ''}`}
                title="मध्यम फ़ॉन्ट / Medium Font"
              >
                A
              </button>
              <button
                type="button"
                onClick={() => handleFontChange('xlarge')}
                className={`gov-font-btn ${fontSize === 'xlarge' ? 'active' : ''}`}
                title="बड़ा फ़ॉन्ट / Large Font"
              >
                A+
              </button>
            </div>

            <span className="gov-utility-bar__divider">|</span>

            {/* Contrast Toggle */}
            <button
              type="button"
              onClick={handleContrastToggle}
              className={`gov-contrast-btn ${highContrast ? 'active' : ''}`}
              title="उच्च कंट्रास्ट / High Contrast Toggle"
            >
              <span>{highContrast ? 'सामान्य (Normal)' : 'कंट्रास्ट (Contrast)'}</span>
            </button>

            <span className="gov-utility-bar__divider">|</span>

            {/* Interactive Language Switcher */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="gov-lang-select-btn"
              title="भाषा बदलें / Toggle Language"
            >
              <Globe size={13} />
              <span>{language === 'en' ? 'हिन्दी' : 'English'}</span>
            </button>

            <span className="gov-utility-bar__divider">|</span>

            {/* Live IST Clock */}
            <div className="gov-datetime">
              {currentTime}
            </div>
          </div>
        </div>
      </div>

      {/* 3. OFFICIAL MANDATORY TOP REGIONAL STRIP */}
      <div className="gov-top-strip">
        <div className="container">
          <p>
            फुलेरा • दोबरी • दूदू • सांभर • बिचून • राजस्थान | REGIONAL INFRASTRUCTURE, WDFC INDUSTRIAL CORRIDOR &amp; LAND DUE DILIGENCE
          </p>
        </div>
      </div>

      {/* 4. MAIN SARKARI MASTHEAD */}
      <div className="gov-masthead">
        <div className="container gov-masthead__inner">
          {/* Left: Official Authority Crest & Bilingual Title Hierarchy */}
          <Link to="/" className="gov-brand" title="New Phulera Smart City Regional Portal">
            <div className="gov-emblem-wrap">
              <AuthorityCrest size={88} />
            </div>

            <div className="gov-brand-titles">
              <span className="gov-brand-hindi-top">
                नया फुलेरा क्षेत्रीय विकास एवं निवेश अनुसंधान प्रकोष्ठ
              </span>
              <h1 className="gov-brand-name">
                NEW PHULERA SMART CITY
              </h1>
              <span className="gov-brand-hindi-sub">
                पश्चिमी मालभाड़ा गलियारा (WDFC), रीको औद्योगिक नोड्स एवं भूमि अन्वेषण संदर्भ
              </span>
              <div className="gov-brand-tagline-wrap">
                <span className="gov-brand-tagline">SMART GROWTH. STRONGER TOMORROW.</span>
                <span className="gov-tagline-bullet">•</span>
                <span className="gov-brand-tagline-hi">सतत विकास • सुदृढ़ कल</span>
              </div>
            </div>
          </Link>

          {/* Right: National Badges (Swachh Bharat, Digital India, Viksit Bharat) & Helpline Box */}
          <div className="gov-masthead__right">
            {/* National Initiative Badges Group (Hallmark of Real Gov Portals) */}
            <div className="gov-national-badges">
              <ViksitBharatLogo height={42} />
              <div className="gov-badge-divider" />
              <DigitalIndiaLogo height={42} />
              <div className="gov-badge-divider" />
              <SwachhBharatLogo height={42} />
            </div>

            {/* Official Citizen Help Desk & Hotline Box */}
            <div className="gov-helpline-box">
              <div className="gov-helpline-box__top">
                <Phone size={15} className="gov-helpline-icon-pulse" />
                <span className="gov-helpline-box__title">
                  नागरिक सहायता केंद्र / HELP DESK
                </span>
              </div>

              <div className="gov-helpline-numbers">
                <a
                  href="tel:+919218467515"
                  className="gov-helpline-num"
                  title="Call Primary Helpline Desk"
                >
                  <span className="gov-hl-prefix">हेल्पलाइन:</span>
                  <strong>+91 92184 67515</strong>
                </a>
                <span className="gov-hl-sep">|</span>
                <a
                  href="tel:+917905602136"
                  className="gov-helpline-num"
                  title="Call Secondary Helpline Desk"
                >
                  <strong>+91 79056 02136</strong>
                </a>
              </div>

              <div className="gov-helpline-wa-bar">
                <a
                  href="https://wa.me/919218467515?text=Hello%20Help%20Desk,%20I%20have%20an%20enquiry%20regarding%20Phulera%20Dobri%20land%20and%20infrastructure%20research."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gov-wa-link"
                >
                  <MessageSquare size={12} />
                  <span>व्हाट्सएप पूछताछ: <strong>9218467515</strong></span>
                </a>
                <span className="gov-hl-timing">(10 AM - 6 PM IST)</span>
              </div>
            </div>

            {/* Mobile Direct Quick Actions (Call & WhatsApp) */}
            <div className="gov-mobile-header-actions">
              <a
                href="tel:+919218467515"
                className="gov-mobile-head-btn gov-mobile-head-call"
                title="कॉल सहायता केंद्र / Call Help Desk"
              >
                <Phone size={14} />
                <span>कॉल</span>
              </a>
              <a
                href="https://wa.me/919218467515?text=Hello%20Help%20Desk,%20I%20have%20an%20enquiry%20regarding%20Phulera%20Dobri%20land%20and%20infrastructure."
                target="_blank"
                rel="noopener noreferrer"
                className="gov-mobile-head-btn gov-mobile-head-wa"
                title="व्हाट्सएप सहायता / WhatsApp Enquiry"
              >
                <MessageSquare size={14} />
              </a>
            </div>

            {/* Mobile Menu Hamburger */}
            <button
              className="gov-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* 5. PRIMARY GOVERNMENT NAVIGATION BAR (Solid Dark Navy with Gold Accents) */}
      <nav className="gov-navbar">
        <div className="container gov-navbar__inner">
          <div className="gov-nav-links">
            {navLinks.map((link) => {
              const IconComp = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`gov-nav-item ${isActive ? 'gov-nav-item--active' : ''}`}
                >
                  <IconComp size={15} className="gov-nav-item__icon" />
                  <div className="gov-nav-item__text-wrap">
                    <span className="gov-nav-item__hindi">{link.hindi}</span>
                    <span className="gov-nav-item__label">{link.label}</span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Integrated Sarkari Search Box */}
          <div className="gov-nav-search-wrap">
            <form onSubmit={handleSearchSubmit} className="gov-nav-search-form">
              <input
                type="text"
                placeholder={language === 'hi' ? 'पोर्टल में खोजें...' : 'Search Portal...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="gov-nav-search-input"
              />
              <button type="submit" className="gov-nav-search-btn" aria-label="Search">
                <Search size={14} />
                <span className="gov-search-btn-text">खोजें</span>
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* 6. OFFICIAL NOTICE & FLASH NEWS TICKER (सूचना पट्ट) */}
      <div className="gov-ticker">
        <div className="container gov-ticker__inner">
          <div className="gov-ticker__label">
            <span className="gov-ticker__pulse" />
            <Bell size={13} />
            <span>ताज़ा सूचना / FLASH NEWS</span>
          </div>

          <div className="gov-ticker__content">
            <p className="gov-ticker__text">
              {newsItems[currentNewsIdx]}
            </p>
          </div>

          <div className="gov-ticker__controls">
            <button
              type="button"
              onClick={() => setNewsPaused(!newsPaused)}
              className="gov-ticker-ctrl-btn"
              title={newsPaused ? "Play Ticker" : "Pause Ticker"}
            >
              {newsPaused ? <Play size={12} /> : <Pause size={12} />}
            </button>
            <Link to="/research" className="gov-ticker__more">
              सभी स्रोत देखें &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`gov-mobile-drawer ${mobileMenuOpen ? 'gov-mobile-drawer--open' : ''}`}>
        <div className="gov-mobile-drawer__header">
          <div className="gov-mobile-drawer__title">
            <span>नया फुलेरा क्षेत्रीय विकास पोर्टल</span>
            <small>GOVERNMENT-STYLE PORTAL NAVIGATION</small>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="gov-mobile-drawer__close"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <div className="gov-mobile-drawer__body">
          {navLinks.map((link) => {
            const IconComp = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`gov-mobile-item ${isActive ? 'gov-mobile-item--active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <IconComp size={18} />
                <div>
                  <span className="gov-mobile-item__hindi">{link.hindi}</span>
                  <span className="gov-mobile-item__eng">{link.label}</span>
                </div>
              </Link>
            );
          })}

          <div className="gov-mobile-drawer__helpline">
            <span className="gov-mobile-drawer__hl-title">नागरिक सहायता केंद्र (HELP DESK)</span>
            <a href="tel:+919218467515" className="gov-mobile-drawer__hl-num">📞 +91 92184 67515</a>
            <a href="tel:+917905602136" className="gov-mobile-drawer__hl-num">📞 +91 79056 02136</a>
            <a
              href="https://wa.me/919218467515"
              target="_blank"
              rel="noopener noreferrer"
              className="gov-mobile-drawer__hl-wa"
            >
              💬 WhatsApp: 9218467515
            </a>
          </div>
        </div>

        <div className="gov-mobile-drawer__footer">
          <p className="gov-mobile-drawer__note">
            NEW PHULERA SMART CITY — Independent regional development and investment research portal.
          </p>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="gov-mobile-overlay" onClick={() => setMobileMenuOpen(false)} />
      )}
    </header>
  );
}
