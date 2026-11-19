import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import EnquiryForm from '../components/EnquiryForm';
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Clock,
  AlertCircle,
  ChevronRight,
  Headphones
} from 'lucide-react';
import './Enquiry.css';

export default function Enquiry() {
  useEffect(() => {
    document.title = "नागरिक सहायता एवं संपर्क डेस्क | New Phulera Smart City Citizen Help Desk";
  }, []);

  return (
    <div className="enquiry-page" id="main-content">
      {/* SARKARI BREADCRUMB BAR */}
      <div className="gov-breadcrumb-bar">
        <div className="container gov-breadcrumb-bar__inner">
          <Link to="/">मुख्य पृष्ठ (Home)</Link>
          <ChevronRight size={13} />
          <span>नागरिक सेवाएं</span>
          <ChevronRight size={13} />
          <span className="current">नागरिक सहायता एवं संपर्क डेस्क (Citizen Help Desk)</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <HeroSection
        label="PUBLIC CITIZEN &amp; INVESTOR HELPLINE"
        hindiTitle="नागरिक सहायता, भूमि अन्वेषण एवं संपर्क प्रकोष्ठ"
        title="Citizen Advisory &amp; Investor Help Desk"
        subtitle="INDEPENDENT REGIONAL ADVISORY &amp; PROPERTY INFORMATION DESK"
        description="भूमि पार्सल, खसरा जमाबंदी नकल सत्यापन, सड़क पहुंच एवं क्षेत्रीय विकास अनुसंधान संबंधी सभी प्रश्नों हेतु संपर्क करें।"
      />

      {/* SARKARI NOTICE BAR */}
      <div className="gov-inner-notice-bar">
        <div className="container gov-inb-inner">
          <AlertCircle size={18} className="gov-inb-icon" />
          <p>
            <strong>पारदर्शी सूचना नीति:</strong> यह डेस्क स्वतंत्र क्षेत्रीय अनुसंधानकर्ताओं द्वारा संचालित है। हम किसी भी सरकारी पट्टा जारी करने या नगरपालिका स्वीकृति का दावा नहीं करते। हेल्प डेस्क: <strong>+91 92184 67515 / +91 79056 02136</strong>
          </p>
        </div>
      </div>

      {/* MAIN ENQUIRY & CONTACT LAYOUT */}
      <section className="section bg-white enquiry-main-section">
        <div className="container">
          <div className="enquiry-layout">
            {/* LEFT COLUMN: CONTACT CARDS & CONTEXT */}
            <div className="enquiry-contact-col">
              <span className="gov-section-header__hindi">आधिकारिक संचार माध्यम</span>
              <h2 className="gov-section-header__title">Connect with Regional Research Analysts</h2>
              <p className="gov-section-header__desc">
                Whether you are evaluating a specific Khasra number, seeking ground road verification in Dobri, or researching industrial logistics plots along the WDFC corridor, our team is equipped to provide transparent, document-backed data.
              </p>

              <div className="contact-details-list">
                <div className="gov-card" style={{ padding: '16px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '42px', height: '42px', background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1D4ED8', flexShrink: 0 }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '0.95rem', color: '#0B2340' }}>क्षेत्रीय कार्यक्षेत्र (Regional Coverage)</h4>
                    <p style={{ margin: 0, fontSize: '0.82rem', color: '#475569' }}>
                      फुलेरा • दोबरी • दूदू • सांभर • बिचून गलियारा, जयपुर जिला, राजस्थान (303338 / 303008)
                    </p>
                  </div>
                </div>

                <div className="gov-card" style={{ padding: '16px', display: 'flex', gap: '14px', alignItems: 'flex-start', borderLeft: '4px solid #FF9933' }}>
                  <div style={{ width: '42px', height: '42px', background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#DC2626', flexShrink: 0 }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '0.95rem', color: '#0B2340' }}>सीधी टेलीफोन हेल्पलाइन (Direct Help Desk)</h4>
                    <p style={{ margin: 0, fontSize: '0.88rem', fontWeight: 800, color: '#0B2340' }}>
                      <a href="tel:+919218467515" style={{ color: 'inherit', textDecoration: 'none' }}>+91 92184 67515</a>
                      {' '}<span style={{ color: '#94A3B8' }}>/</span>{' '}
                      <a href="tel:+917905602136" style={{ color: 'inherit', textDecoration: 'none' }}>+91 79056 02136</a>
                    </p>
                    <small style={{ color: '#64748B', display: 'block', marginTop: '2px' }}>कार्य दिवस: सोमवार से शनिवार (प्रातः 10:00 से सायं 06:00 बजे तक IST)</small>
                  </div>
                </div>

                <div className="gov-card" style={{ padding: '16px', display: 'flex', gap: '14px', alignItems: 'flex-start', borderLeft: '4px solid #10B981' }}>
                  <div style={{ width: '42px', height: '42px', background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#047857', flexShrink: 0 }}>
                    <MessageSquare size={22} />
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '0.95rem', color: '#0B2340' }}>व्हाट्सएप त्वरित सहायता (WhatsApp Support)</h4>
                    <p style={{ margin: 0, fontSize: '0.88rem', fontWeight: 800 }}>
                      <a href="https://wa.me/919218467515" target="_blank" rel="noopener noreferrer" style={{ color: '#047857', textDecoration: 'none' }}>
                        +91 92184 67515
                      </a>
                    </p>
                    <small style={{ color: '#64748B', display: 'block', marginTop: '2px' }}>दस्तावेज सत्यापन एवं लोकेशन साझा करने हेतु सीधा चैट उपलब्ध</small>
                  </div>
                </div>

                <div className="gov-card" style={{ padding: '16px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '42px', height: '42px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#087E83', flexShrink: 0 }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '0.95rem', color: '#0B2340' }}>आधिकारिक ईमेल (Electronic Mail)</h4>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#0B2340', fontWeight: 700 }}>
                      enquiry@newphulerasmartcity.in
                    </p>
                    <small style={{ color: '#64748B' }}>सभी ईमेल कार्य दिवसों में प्राथमिकता से देखे जाते हैं</small>
                  </div>
                </div>

                <div className="gov-card" style={{ padding: '16px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '42px', height: '42px', background: '#FEFCE8', border: '1px solid #FEF08A', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#A16207', flexShrink: 0 }}>
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '0.95rem', color: '#0B2340' }}>प्रतिक्रिया समयसीमा (Response SLA)</h4>
                    <p style={{ margin: 0, fontSize: '0.82rem', color: '#475569' }}>
                      प्राथमिक विधिक एवं राजस्व अभिलेखों की पुष्टि के उपरांत 24 से 48 कार्य घंटों में विस्तृत उत्तर।
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: INTERACTIVE FORM CARD */}
            <div className="enquiry-form-col">
              <div className="gov-card" style={{ boxShadow: '0 8px 30px rgba(11, 35, 64, 0.12)' }}>
                <div className="gov-card__header">
                  <span className="gov-card__header-title">नागरिक पूछताछ पत्र (CITIZEN ENQUIRY FORM)</span>
                  <Headphones size={20} color="#FF9933" />
                </div>
                <div className="gov-card__body">
                  <EnquiryForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: 4-STEP ADVISORY WORKFLOW */}
      <section className="section section--alt workflow-section">
        <div className="container">
          <div className="gov-section-header centered">
            <span className="gov-section-header__hindi">नागरिक सहायता की 4-चरणीय कार्यप्रणाली</span>
            <h2 className="gov-section-header__title">Transparent Inquiry &amp; Advisory Workflow</h2>
            <p className="gov-section-header__desc">
              Every inquiry submitted through our public portal is processed through a transparent, documented pipeline.
            </p>
          </div>

          <div className="grid-4">
            <div className="gov-card" style={{ padding: '20px', textAlign: 'center' }}>
              <div style={{ width: '36px', height: '36px', background: '#0B2340', color: '#FF9933', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', fontWeight: 900 }}>1</div>
              <h4 style={{ fontSize: '0.92rem', color: '#0B2340', marginBottom: '6px' }}>पूछताछ प्राप्ति</h4>
              <p style={{ fontSize: '0.78rem', color: '#64748B', margin: 0 }}>Requirement intake and location logging across Phulera or Dobri.</p>
            </div>

            <div className="gov-card" style={{ padding: '20px', textAlign: 'center' }}>
              <div style={{ width: '36px', height: '36px', background: '#0B2340', color: '#FF9933', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', fontWeight: 900 }}>2</div>
              <h4 style={{ fontSize: '0.92rem', color: '#0B2340', marginBottom: '6px' }}>राजस्व मिलान</h4>
              <p style={{ fontSize: '0.78rem', color: '#64748B', margin: 0 }}>Apna Khata RoR and revenue boundary cross-referencing.</p>
            </div>

            <div className="gov-card" style={{ padding: '20px', textAlign: 'center' }}>
              <div style={{ width: '36px', height: '36px', background: '#0B2340', color: '#FF9933', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', fontWeight: 900 }}>3</div>
              <h4 style={{ fontSize: '0.92rem', color: '#0B2340', marginBottom: '6px' }}>सड़क व अवसंरचना पुष्टि</h4>
              <p style={{ fontSize: '0.78rem', color: '#64748B', margin: 0 }}>Physical road width and operational infrastructure status check.</p>
            </div>

            <div className="gov-card" style={{ padding: '20px', textAlign: 'center' }}>
              <div style={{ width: '36px', height: '36px', background: '#0B2340', color: '#FF9933', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', fontWeight: 900 }}>4</div>
              <h4 style={{ fontSize: '0.92rem', color: '#0B2340', marginBottom: '6px' }}>तथ्यात्मक परामर्श रिपोर्ट</h4>
              <p style={{ fontSize: '0.78rem', color: '#64748B', margin: 0 }}>Transparent briefing delivered directly with official source citations.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
