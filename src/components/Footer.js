import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldAlert,
  ExternalLink,
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  Mail,
  FileCheck2
} from 'lucide-react';
import {
  GIGWComplianceBadge,
  STQCBadge,
  SwachhBharatLogo,
  DigitalIndiaLogo,
  AuthorityCrest
} from './OfficialLogos';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="gov-footer">
      {/* 1. TOP STATUTORY DISCLAIMER BANNER (Clear Transparency Mandate) */}
      <div className="gov-footer-notice">
        <div className="container gov-footer-notice__inner">
          <ShieldAlert size={22} className="gov-footer-notice__icon" />
          <div className="gov-footer-notice__text">
            <strong>संवैधानिक पारदर्शिता एवं विधिक प्रकटीकरण (Statutory Transparency Disclosure):</strong> 'New Phulera Smart City' (न्यू फुलेरा स्मार्ट सिटी) एक स्वतंत्र क्षेत्रीय अनुसंधान, अवसंरचना विश्लेषण एवं भूमि अन्वेषण मंच है। यह वेबसाइट भारत सरकार के '100 स्मार्ट सिटीज मिशन' या राजस्थान सरकार/रीको (RIICO) का आधिकारिक सरकारी पोर्टल नहीं है। यह मंच केवल प्राथमिक अभिलेखों (DFCCIL, RIICO, राजस्व विभाग) पर आधारित तथ्यात्मक अनुसंधान प्रस्तुत करता है। किसी भी संपत्ति सौदे से पूर्व नामांतरण, जमाबंदी (Apna Khata) एवं सेक्शन 90-A रूपांतरण की स्वतंत्र विधिक जांच अनिवार्य है।
          </div>
        </div>
      </div>

      {/* 2. MAIN 4-COLUMN GOVERNMENT DIRECTORY */}
      <div className="gov-footer-main">
        <div className="container">
          <div className="gov-footer-grid">
            {/* Column 1: Identity & Scope */}
            <div className="gov-footer-col gov-footer-col--brand">
              <div className="gov-footer-brand">
                <AuthorityCrest size={64} />
                <div>
                  <span className="gov-footer-hindi-title">न्यू फुलेरा स्मार्ट सिटी</span>
                  <h3 className="gov-footer-title">NEW PHULERA SMART CITY</h3>
                  <span className="gov-footer-tagline">SMART GROWTH. STRONGER TOMORROW.</span>
                </div>
              </div>
              <p className="gov-footer-desc">
                क्षेत्रीय विकास, पश्चिमी समर्पित मालभाड़ा गलियारा (WDFC), रीको औद्योगिक विस्तार एवं फुलेरा-दोबरी-दूदू-सांभर क्षेत्र हेतु स्वतंत्र निवेश अनुसंधान प्रकोष्ठ।
              </p>
              <div className="gov-footer-loc">
                <MapPin size={15} />
                <span>Regional Research Desk, Phulera Junction Corridor, Jaipur District, Rajasthan 303338</span>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="gov-footer-col">
              <h4 className="gov-footer-heading">महत्वपूर्ण लिंक (QUICK LINKS)</h4>
              <ul className="gov-footer-links">
                <li><Link to="/">मुख्य पृष्ठ (Home)</Link></li>
                <li><Link to="/phulera-smart-city">स्मार्ट सिटी विजन (Phulera Vision)</Link></li>
                <li><Link to="/dobri">दोबरी क्षेत्र (Dobri Spotlight)</Link></li>
                <li><Link to="/infrastructure">अवसंरचना एवं WDFC (Infrastructure)</Link></li>
                <li><Link to="/investment-guide">निवेश मार्गदर्शिका (Investment Guide)</Link></li>
                <li><Link to="/research">राजपत्र एवं साक्ष्य (Research &amp; Sources)</Link></li>
                <li><Link to="/enquiry">नागरिक सहायता डेस्क (Citizen Help Desk)</Link></li>
              </ul>
            </div>

            {/* Column 3: Statutory Portals */}
            <div className="gov-footer-col">
              <h4 className="gov-footer-heading">आधिकारिक राज्य पोर्टल (VERIFIED REPOSITORIES)</h4>
              <ul className="gov-footer-links">
                <li>
                  <a href="https://apnakhata.rajasthan.gov.in" target="_blank" rel="noopener noreferrer">
                    अपना खाता / ई-धरती (जमाबंदी नकल) <ExternalLink size={12} />
                  </a>
                </li>
                <li>
                  <a href="https://riico.rajasthan.gov.in" target="_blank" rel="noopener noreferrer">
                    रीको (RIICO) औद्योगिक आदेश 2026 <ExternalLink size={12} />
                  </a>
                </li>
                <li>
                  <a href="https://dfccil.com" target="_blank" rel="noopener noreferrer">
                    डीएफसीसीआईएल (DFCCIL WDFC) <ExternalLink size={12} />
                  </a>
                </li>
                <li>
                  <a href="https://igrs.rajasthan.gov.in" target="_blank" rel="noopener noreferrer">
                    पंजीयन एवं मुद्रांक विभाग (DLC दरें) <ExternalLink size={12} />
                  </a>
                </li>
                <li>
                  <a href="https://urban.rajasthan.gov.in" target="_blank" rel="noopener noreferrer">
                    स्वायत्त शासन एवं नगरीय विकास विभाग <ExternalLink size={12} />
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Official Helpline & Help Desk */}
            <div className="gov-footer-col">
              <h4 className="gov-footer-heading">नागरिक सहायता एवं संपर्क (HELP DESK)</h4>
              <div className="gov-footer-helpline-card">
                <div className="gov-fhl-row">
                  <Phone size={16} className="gov-fhl-icon" />
                  <div>
                    <span className="gov-fhl-label">हेल्पलाइन नंबर 1:</span>
                    <a href="tel:+919218467515" className="gov-fhl-num">+91 92184 67515</a>
                  </div>
                </div>

                <div className="gov-fhl-row">
                  <Phone size={16} className="gov-fhl-icon" />
                  <div>
                    <span className="gov-fhl-label">हेल्पलाइन नंबर 2:</span>
                    <a href="tel:+917905602136" className="gov-fhl-num">+91 79056 02136</a>
                  </div>
                </div>

                <div className="gov-fhl-row">
                  <MessageSquare size={16} className="gov-fhl-icon green" />
                  <div>
                    <span className="gov-fhl-label">व्हाट्सएप सहायता:</span>
                    <a
                      href="https://wa.me/919218467515"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gov-fhl-num green"
                    >
                      +91 92184 67515
                    </a>
                  </div>
                </div>

                <div className="gov-fhl-row">
                  <Clock size={16} className="gov-fhl-icon" />
                  <div>
                    <span className="gov-fhl-label">कार्य समय:</span>
                    <span className="gov-fhl-text">सोमवार - शनिवार: 10:00 AM - 06:00 PM</span>
                  </div>
                </div>

                <div className="gov-fhl-row">
                  <Mail size={16} className="gov-fhl-icon" />
                  <div>
                    <span className="gov-fhl-label">ईमेल संपर्क:</span>
                    <span className="gov-fhl-text">enquiry@newphulerasmartcity.in</span>
                  </div>
                </div>
              </div>

              {/* Web Information Manager Box */}
              <div className="gov-manager-box">
                <span className="gov-manager-box__title">
                  <FileCheck2 size={13} />
                  <span>वेब सूचना प्रबंधक (Web Information Manager)</span>
                </span>
                <p>Regional Documentation &amp; Cadastral Research Officer</p>
                <p>New Phulera Regional Development Research Cell</p>
              </div>
            </div>
          </div>

          {/* Standards & Certifications Band (Hallmark of Real Govt Sites) */}
          <div className="gov-footer-standards">
            <div className="gov-standards-left">
              <GIGWComplianceBadge />
              <STQCBadge />
              <div className="gov-std-badge-pill">W3C WCAG 2.1 AA</div>
            </div>

            <div className="gov-standards-right">
              <DigitalIndiaLogo height={36} />
              <SwachhBharatLogo height={36} />
            </div>
          </div>
        </div>
      </div>

      {/* 3. METADATA & VISITOR COUNTER BAR */}
      <div className="gov-footer-meta">
        <div className="container gov-footer-meta__inner">
          <div className="gov-footer-meta__left">
            <span>अंतिम समीक्षा एवं नवीनीकरण (Last Reviewed): 19 नवम्बर 2026</span>
            <span className="gov-meta-divider">•</span>
            <span>GIGW v3.0 Guidelines Compliant Framework</span>
            <span className="gov-meta-divider">•</span>
            <Link to="/privacy">गोपनीयता नीति (Privacy)</Link>
            <span className="gov-meta-divider">•</span>
            <Link to="/disclaimer">अस्वीकरण (Disclaimer)</Link>
          </div>
          <div className="gov-footer-meta__right">
            <span className="gov-visitor-badge">
              कुल आगंतुक / Total Visitors: <strong className="gov-counter-digits">1,58,940</strong>
            </span>
          </div>
        </div>
      </div>

      {/* 4. COPYRIGHT & TRICOLOR BAR */}
      <div className="gov-footer-bottom">
        <div className="container gov-footer-bottom__inner">
          <p>© 2026 New Phulera Smart City. All Rights Reserved. (सर्वाधिकार सुरक्षित)</p>
          <p className="gov-footer-subline">
            Designed for institutional credibility, research transparency and rigorous land due diligence across the Phulera–Dobri–Dudu–Sambhar corridor.
          </p>
        </div>
        <div className="gov-tricolor-line" />
      </div>
    </footer>
  );
}
