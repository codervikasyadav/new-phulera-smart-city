import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  ArrowRight,
  CheckCircle2,
  FileText,
  Factory,
  Train,
  MapPin,
  ChevronRight,
  Landmark,
  Scale
} from 'lucide-react';
import './HeroSection.css';

export default function HeroSection({
  label,
  title,
  hindiTitle,
  subtitle,
  description,
  buttons = [],
  large,
  panels
}) {
  return (
    <section className={`gov-hero ${large ? 'gov-hero--large' : ''}`}>
      {/* Sovereign Geometric Watermark & Ashoka Pattern Background */}
      <div className="gov-hero__watermark" />
      <div className="gov-hero__gradient-glow" />

      <div className="container gov-hero__container">
        <div className="gov-hero__row">
          {/* Left Column: Authoritative Proclamation */}
          <div className="gov-hero__main">
            <div className="gov-hero__tag-bar">
              <span className="gov-hero__badge-dot" />
              <span className="gov-hero__badge-hindi">क्षेत्रीय अवसंरचना एवं औद्योगिक गलियारा</span>
              <span className="gov-hero__badge-divider">|</span>
              <span className="gov-hero__badge-text">{label || "REGIONAL INFRASTRUCTURE & INVESTMENT RESEARCH"}</span>
            </div>

            {hindiTitle && (
              <div className="gov-hero__hindi-title">
                {hindiTitle}
              </div>
            )}

            <h1 className="gov-hero__title">
              {title}
            </h1>

            {subtitle && (
              <h2 className="gov-hero__subtitle">
                {subtitle}
              </h2>
            )}

            {description && (
              <p className="gov-hero__desc">
                {description}
              </p>
            )}

            {buttons.length > 0 && (
              <div className="gov-hero__buttons">
                {buttons.map((btn, i) => (
                  <Link
                    key={i}
                    to={btn.to}
                    className={`btn ${
                      btn.variant === 'secondary'
                        ? 'btn-gov-outline-white'
                        : 'btn-gov-saffron'
                    }`}
                  >
                    {btn.text} <ArrowRight size={14} />
                  </Link>
                ))}
              </div>
            )}

            {/* Statutory Transparency Strip */}
            <div className="gov-hero__statutory-note">
              <Shield size={14} className="gov-hero__statutory-icon" />
              <span>
                <strong>आधिकारिक संदर्भ:</strong> स्वतंत्र क्षेत्रीय अनुसंधान • किसी भी भूमि क्रय से पूर्व ई-धरती (Apna Khata) एवं विधिक परामर्श अनिवार्य है।
              </span>
            </div>
          </div>

          {/* Right Column: Key Online Services / e-Services Window (Hallmark of Indian Govt Sites) */}
          <div className="gov-hero__side">
            <div className="gov-eservices-window">
              <div className="gov-eservices-window__head">
                <div className="gov-eservices-head-icon">
                  <Landmark size={20} />
                </div>
                <div>
                  <span className="gov-eservices-title">KEY CITIZEN &amp; INVESTOR e-SERVICES</span>
                  <span className="gov-eservices-hindi">नागरिक एवं निवेशक ई-सेवा खिड़की</span>
                </div>
              </div>

              <div className="gov-eservices-list">
                <Link to="/research" className="gov-eservice-item">
                  <div className="gov-eservice-icon-wrap icon-blue">
                    <FileText size={18} />
                  </div>
                  <div className="gov-eservice-info">
                    <span className="gov-eservice-name">भू-अभिलेख एवं जमाबंदी (Land Titles)</span>
                    <span className="gov-eservice-sub">Apna Khata RoR, 90A Conversion &amp; Registry Verification</span>
                  </div>
                  <ChevronRight size={14} className="gov-eservice-arrow" />
                </Link>

                <Link to="/infrastructure" className="gov-eservice-item">
                  <div className="gov-eservice-icon-wrap icon-orange">
                    <Train size={18} />
                  </div>
                  <div className="gov-eservice-info">
                    <span className="gov-eservice-name">WDFC समर्पित मालभाड़ा कॉरिडोर</span>
                    <span className="gov-eservice-sub">100 kmph Ateli–Phulera Double-Stack Freight Data</span>
                  </div>
                  <ChevronRight size={14} className="gov-eservice-arrow" />
                </Link>

                <Link to="/infrastructure" className="gov-eservice-item">
                  <div className="gov-eservice-icon-wrap icon-teal">
                    <Factory size={18} />
                  </div>
                  <div className="gov-eservice-info">
                    <span className="gov-eservice-name">रीको (RIICO) औद्योगिक आदेश 2026</span>
                    <span className="gov-eservice-sub">Phulera &amp; Bichoon Industrial Zone Sanctions</span>
                  </div>
                  <ChevronRight size={14} className="gov-eservice-arrow" />
                </Link>

                <Link to="/dobri" className="gov-eservice-item">
                  <div className="gov-eservice-icon-wrap icon-green">
                    <MapPin size={18} />
                  </div>
                  <div className="gov-eservice-info">
                    <span className="gov-eservice-name">दोबरी क्षेत्रीय नोड (Dobri Spotlight)</span>
                    <span className="gov-eservice-sub">7 km from Dudu (NH-48) Highway Feeder Zone</span>
                  </div>
                  <ChevronRight size={14} className="gov-eservice-arrow" />
                </Link>

                <Link to="/investment-guide" className="gov-eservice-item">
                  <div className="gov-eservice-icon-wrap icon-gold">
                    <Scale size={18} />
                  </div>
                  <div className="gov-eservice-info">
                    <span className="gov-eservice-name">8-बिंदु राजस्व दस्तावेज चेकलिस्ट</span>
                    <span className="gov-eservice-sub">Revenue Records, Sajra Map &amp; Legal Protocols</span>
                  </div>
                  <ChevronRight size={14} className="gov-eservice-arrow" />
                </Link>
              </div>

              <div className="gov-eservices-foot">
                <CheckCircle2 size={13} />
                <span>Statutory Source-Backed Documentation Only • No Speculative Claims</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Pillar Cards (When Present) */}
        {panels && panels.length > 0 && (
          <div className="gov-hero__panels">
            {panels.map((panel, idx) => (
              <div key={idx} className="gov-hero-panel-card">
                <div className="gov-hero-panel-card__icon">{panel.icon}</div>
                <div className="gov-hero-panel-card__content">
                  <h3 className="gov-hero-panel-card__title">{panel.title}</h3>
                  <p className="gov-hero-panel-card__desc">{panel.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
