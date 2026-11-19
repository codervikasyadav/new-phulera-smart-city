import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { ChevronRight } from 'lucide-react';
import './Privacy.css';

export default function Privacy() {
  useEffect(() => {
    document.title = "गोपनीयता नीति | New Phulera Smart City Privacy Policy";
  }, []);

  return (
    <div className="privacy-page" id="main-content">
      {/* SARKARI BREADCRUMB BAR */}
      <div className="gov-breadcrumb-bar">
        <div className="container gov-breadcrumb-bar__inner">
          <Link to="/">मुख्य पृष्ठ (Home)</Link>
          <ChevronRight size={13} />
          <span>संवैधानिक नीतियां</span>
          <ChevronRight size={13} />
          <span className="current">गोपनीयता नीति (Privacy Policy)</span>
        </div>
      </div>

      <HeroSection
        label="DATA PRIVACY &amp; CITIZEN PROTECTION"
        hindiTitle="गोपनीयता नीति एवं डेटा सुरक्षा मानक"
        title="Privacy Policy"
        subtitle="HOW WE COLLECT, PROCESS AND PROTECT YOUR INFORMATION"
        description="We respect your privacy and handle all submitted details with strict confidentiality and discretion as per GIGW standards."
      />

      <section className="section legal-content-section">
        <div className="container">
          <div className="legal-paper">
            <div className="legal-paper__meta">
              <span>Effective Date: 1 January 2026</span>
              <span>Last Reviewed: 19 November 2026</span>
            </div>

            <div className="legal-section">
              <h3>1. Identity and Scope</h3>
              <p>
                This Privacy Policy explains the data processing practices of <strong>NEW PHULERA SMART CITY</strong> ("the Portal", "we", "us", or "our"), an independently operated regional real estate information and research website concerning the Phulera and Dobri micro-markets in Rajasthan, India.
              </p>
            </div>

            <div className="legal-section">
              <h3>2. Information We Collect</h3>
              <p>
                We collect personal information solely when voluntarily transmitted through our website enquiry forms, email communications, or WhatsApp correspondence. Such data may include:
              </p>
              <ul>
                <li>Your full name and contact title</li>
                <li>Your valid 10-digit mobile phone number</li>
                <li>Your electronic mailing address (email)</li>
                <li>Your property interest category (e.g., Residential Plot, Land Investment, Industrial Land)</li>
                <li>Your preferred budget bracket, holding horizon, and bespoke message details</li>
              </ul>
            </div>

            <div className="legal-section">
              <h3>3. How We Use Collected Data</h3>
              <p>Information gathered is utilized exclusively for the following operational purposes:</p>
              <ul>
                <li>To contact you regarding your specific property or regional research query</li>
                <li>To furnish verified documentation, land survey references, and corridor briefing reports</li>
                <li>To schedule in-person site visits or telephone consultations upon your explicit request</li>
                <li>To maintain internal correspondence logs and combat automated spam submissions</li>
              </ul>
            </div>

            <div className="legal-section">
              <h3>4. Strict Non-Disclosure &amp; Non-Sale Policy</h3>
              <p>
                We do not sell, lease, trade, or monetize your contact records to commercial data brokers, unsolicited telemarketers, or unrelated third-party real estate agencies. Your contact details are stored securely and accessible only to authorized advisory associates assigned to address your specific inquiry.
              </p>
            </div>

            <div className="legal-section">
              <h3>5. Data Security Standards</h3>
              <p>
                We implement industry-standard electronic, organizational, and physical safeguards to prevent unauthorized interception, alteration, disclosure, or destruction of your personal data. Web traffic is served over secure Hypertext Transfer Protocol Secure (HTTPS) encryption.
              </p>
            </div>

            <div className="legal-section">
              <h3>6. Cookies and Analytical Tracking</h3>
              <p>
                Our portal utilizes standard session cookies solely to preserve core navigation functionality, ensure responsive layout rendering, and evaluate aggregated, non-personally identifiable web traffic performance. You may disable cookies through your personal web browser settings without preventing page view access.
              </p>
            </div>

            <div className="legal-section">
              <h3>7. Grievance Redressal Officer</h3>
              <p>
                In compliance with Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, users may direct privacy inquiries or grievance redressal requests to:
              </p>
              <p>
                <strong>Web Information Manager &amp; Documentation Officer</strong><br />
                Regional Research Cell, Phulera Junction Corridor, Rajasthan<br />
                Email: enquiry@newphulerasmartcity.in<br />
                Helpline: +91 92184 67515 / +91 79056 02136
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
