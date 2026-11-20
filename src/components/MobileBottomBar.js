import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageSquare, FileText } from 'lucide-react';
import './MobileBottomBar.css';

export default function MobileBottomBar() {
  const location = useLocation();

  // If on enquiry page, we can highlight the enquiry tab or show direct call options
  const isEnquiryPage = location.pathname === '/enquiry';

  return (
    <nav className="gov-mobile-bottom-bar" aria-label="Mobile quick action bar">
      {/* 1. Primary Hotline */}
      <a
        href="tel:+919218467515"
        className="gov-mbb-action gov-mbb-call-1"
        title="Call Helpline 1: +91 92184 67515"
      >
        <Phone size={17} className="gov-mbb-icon" />
        <div className="gov-mbb-label">
          <span className="gov-mbb-hi">हेल्पलाइन 1</span>
          <span className="gov-mbb-num">92184 67515</span>
        </div>
      </a>

      {/* 2. Secondary Hotline */}
      <a
        href="tel:+917905602136"
        className="gov-mbb-action gov-mbb-call-2"
        title="Call Helpline 2: +91 79056 02136"
      >
        <Phone size={17} className="gov-mbb-icon" />
        <div className="gov-mbb-label">
          <span className="gov-mbb-hi">हेल्पलाइन 2</span>
          <span className="gov-mbb-num">79056 02136</span>
        </div>
      </a>

      {/* 3. Direct WhatsApp */}
      <a
        href="https://wa.me/919218467515?text=Hello%20Help%20Desk%2C%20I%20have%20an%20enquiry%20regarding%20Phulera%20Dobri%20regional%20portal."
        target="_blank"
        rel="noopener noreferrer"
        className="gov-mbb-action gov-mbb-wa"
        title="Chat on WhatsApp"
      >
        <MessageSquare size={17} className="gov-mbb-icon" />
        <div className="gov-mbb-label">
          <span className="gov-mbb-hi">व्हाट्सएप</span>
          <span className="gov-mbb-sub">चैट करें</span>
        </div>
      </a>

      {/* 4. Enquiry Form */}
      <Link
        to="/enquiry"
        className={`gov-mbb-action gov-mbb-form ${isEnquiryPage ? 'active' : ''}`}
        title="Submit Online Enquiry"
      >
        <FileText size={17} className="gov-mbb-icon" />
        <div className="gov-mbb-label">
          <span className="gov-mbb-hi">पूछताछ</span>
          <span className="gov-mbb-sub">फॉर्म</span>
        </div>
      </Link>
    </nav>
  );
}
