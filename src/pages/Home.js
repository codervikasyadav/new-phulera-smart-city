import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import EnquiryForm from '../components/EnquiryForm';
import {
  HighwayMilestone,
  AuthorityCrest
} from '../components/OfficialLogos';
import {
  MapPin,
  Train,
  Factory,
  Search,
  Landmark,
  Clock,
  Compass,
  CheckCircle,
  ShieldCheck,
  Navigation,
  FileText,
  ExternalLink,
  Scale,
  Download,
  FileCheck2,
  Phone,
  Award
} from 'lucide-react';
import './Home.css';

export default function Home() {
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    document.title = "न्यू फुलेरा स्मार्ट सिटी | New Phulera Smart City Regional Portal | WDFC & RIICO Research";
  }, []);

  const heroPanels = [
    {
      icon: <MapPin size={22} />,
      title: "रणनीतिक क्षेत्रीय अवस्थिति",
      description: "Phulera, Dobri, Dudu & Sambhar corridor on Western Jaipur axis."
    },
    {
      icon: <Train size={22} />,
      title: "पश्चिमी मालभाड़ा कॉरिडोर (WDFC)",
      description: "100 kmph heavy freight railway junction and logistics spine."
    },
    {
      icon: <Factory size={22} />,
      title: "रीको औद्योगिक क्षेत्र विस्तार",
      description: "Approved administrative sanctions for Phulera & Bichoon nodes."
    },
    {
      icon: <Search size={22} />,
      title: "राजस्व एवं भूलेख अन्वेषण",
      description: "Apna Khata RoR, Jamabandi, and Section 90-A conversion analysis."
    }
  ];

  return (
    <div className="home-page" id="main-content">
      {/* SECTION 1: SARKARI HERO BANNER WITH e-SERVICES WINDOW */}
      <HeroSection
        large={true}
        label="REGIONAL INFRASTRUCTURE & INDUSTRIAL CORRIDOR"
        hindiTitle="नया फुलेरा क्षेत्रीय विकास एवं अवसंरचना गलियारा"
        title="NEW PHULERA SMART CITY"
        subtitle="SMART GROWTH. STRONGER TOMORROW. (सतत विकास • सुदृढ़ कल)"
        description="पश्चिमी समर्पित मालभाड़ा कॉरिडोर (WDFC), रीको औद्योगिक क्षेत्र, राष्ट्रीय राजमार्ग (NH-48) एवं दोबरी-दूदू-सांभर क्षेत्रीय विकास का समग्र तथ्यात्मक एवं विधिक अनुसंधान पोर्टल।"
        buttons={[
          { text: "परियोजना विजन देखें (EXPLORE VISION)", to: "/phulera-smart-city", variant: "primary" },
          { text: "निवेश मार्गदर्शिका (INVESTMENT GUIDE)", to: "/investment-guide", variant: "secondary" }
        ]}
        panels={heroPanels}
      />

      {/* SECTION 1B: SARKARI CITIZEN ADVISORY BANNER (जनहित में जारी सूचना) */}
      <div className="gov-public-advisory-bar">
        <div className="container gov-public-advisory-bar__inner">
          <div className="gov-pab-badge">
            <span className="gov-pab-pulse" />
            <span>जनहित में जारी सूचना / PUBLIC CAUTION NOTICE</span>
          </div>
          <div className="gov-pab-content">
            <p>
              <strong>सावधानी एवं पारदर्शी घोषणा:</strong> यह एक स्वतंत्र क्षेत्रीय अनुसंधान पोर्टल है। यह भारत सरकार या राजस्थान सरकार का आधिकारिक पोर्टल नहीं है। भूमि क्रय से पूर्व 'अपना खाता' (Apna Khata) पर जमाबंदी एवं धारा 90-ए कृषि रूपांतरण की मूल विधिक पुष्टि स्वयं करें। सहायता हेतु कॉल करें: <strong>+91 92184 67515 / +91 79056 02136</strong>
            </p>
          </div>
          <Link to="/disclaimer" className="gov-pab-link">
            विधिक अस्वीकरण &rarr;
          </Link>
        </div>
      </div>

      {/* SECTION 2: DIGNITARY / EXECUTIVE DESK MESSAGE (NIC / State Portal Hallmark) */}
      <section className="section gov-executive-desk-section">
        <div className="container">
          <div className="gov-executive-box">
            <div className="gov-executive-box__left">
              <div className="gov-executive-portrait-frame">
                <AuthorityCrest size={100} />
                <div className="gov-executive-seal-tag">
                  <span>सत्यापित अनुसंधान</span>
                </div>
              </div>
              <div className="gov-executive-profile">
                <span className="gov-exec-name">क्षेत्रीय योजना एवं अनुसंधान प्रकोष्ठ</span>
                <span className="gov-exec-desig">REGIONAL PLANNING &amp; INVESTMENT CELL</span>
                <span className="gov-exec-sub">Phulera Corridor Research Desk • Rajasthan</span>
              </div>
            </div>

            <div className="gov-executive-box__right">
              <div className="gov-exec-quote-header">
                <Award size={18} className="gov-exec-quote-icon" />
                <span className="gov-exec-quote-tag">अध्यक्षीय संदेश एवं विजन / EXECUTIVE PROCLAMATION</span>
              </div>
              <h3 className="gov-exec-title">
                "तथ्य, साक्ष्य और विधिक अनुशासन: पश्चिमी जयपुर गलियारे के सतत विकास का आधार"
              </h3>
              <p className="gov-exec-p">
                फुलेरा जंक्शन सदियों से राजस्थान का एक प्रमुख रेलवे केंद्र रहा है। वर्तमान में पश्चिमी समर्पित मालभाड़ा कॉरिडोर (WDFC) के संचालन और रीको (RIICO) द्वारा फुलेरा एवं बिचून में औद्योगिक भूमि आवंटन से यह संपूर्ण क्षेत्र (दोबरी, दूदू, सांभर) लॉजिस्टिक्स और विनिर्माण के एक प्रमुख आर्थिक केंद्र के रूप में उभर रहा है।
              </p>
              <p className="gov-exec-p">
                हमारा उद्देश्य निवेशकों, नीति निर्माताओं और नागरिकों को बिना किसी भ्रामक वादों के केवल सत्यापित सरकारी आदेशों (DFCCIL Press Releases, RIICO Gazettes, E-Dharti Jamabandi) के आधार पर निष्पक्ष अनुसंधान उपलब्ध कराना है। किसी भी संपत्ति में निवेश दीर्घकालिक धैर्य (5–10 वर्ष) और कठोर विधिक जांच की मांग करता है।
              </p>
              <div className="gov-exec-footer">
                <div className="gov-exec-sign-wrap">
                  <span className="gov-exec-sig">Regional Documentation Officer</span>
                  <small>New Phulera Smart City Research Desk</small>
                </div>
                <div className="gov-exec-cta">
                  <Link to="/research" className="btn btn-gov-outline">
                    आधिकारिक स्रोत व राजपत्र अभिलेख &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: KEY STATISTICAL INDICATORS & SARKARI DASHBOARD */}
      <section className="gov-stats-dashboard">
        <div className="container">
          <div className="gov-section-header centered">
            <span className="gov-section-header__hindi">प्रमुख क्षेत्रीय सांख्यिकी एवं संकेतक</span>
            <h2 className="gov-section-header__title">Infrastructure Indicators &amp; Statistical Dashboard</h2>
            <p className="gov-section-header__desc">
              Data points verified against DFCCIL, Ministry of Railways, NHAI, RIICO and Rajasthan Urban Development records.
            </p>
          </div>

          <div className="gov-stats-grid">
            <div className="gov-stat-box">
              <span className="gov-stat-box__hindi-val">१,५०४ किमी</span>
              <span className="gov-stat-box__value">1,504 KM</span>
              <span className="gov-stat-box__title">WDFC FREIGHT CORRIDOR</span>
              <span className="gov-stat-box__desc">दादरी (उ.प्र.) से जेएनपीटी (मुंबई) तक उच्च क्षमता समर्पित मालभाड़ा रेल गलियारा</span>
            </div>

            <div className="gov-stat-box">
              <span className="gov-stat-box__hindi-val">७ किमी*</span>
              <span className="gov-stat-box__value">7 KM*</span>
              <span className="gov-stat-box__title">DOBRI TO DUDU (NH-48)</span>
              <span className="gov-stat-box__desc">दिल्ली-जयपुर-अजमेर राष्ट्रीय राजमार्ग एवं उप-जिला प्रशासनिक मुख्यालय से दूरी</span>
            </div>

            <div className="gov-stat-box">
              <span className="gov-stat-box__hindi-val">३१ किमी*</span>
              <span className="gov-stat-box__value">31 KM*</span>
              <span className="gov-stat-box__title">PHULERA JUNCTION</span>
              <span className="gov-stat-box__desc">उत्तर पश्चिम रेलवे का 4-मार्गीय जंक्शन एवं WDFC मालभाड़ा स्टेशन नोड</span>
            </div>

            <div className="gov-stat-box">
              <span className="gov-stat-box__hindi-val">१०० किमी/घं</span>
              <span className="gov-stat-box__value">100 KM/H</span>
              <span className="gov-stat-box__title">FREIGHT TRIAL SPEED</span>
              <span className="gov-stat-box__desc">अटेली-फुलेरा WDFC खंड पर प्रमाणित गति परीक्षण संपन्न (आधिकारिक प्रेस रिलीज)</span>
            </div>

            <div className="gov-stat-box">
              <span className="gov-stat-box__hindi-val">१८५ हेक्टेयर</span>
              <span className="gov-stat-box__value">185 HECTARES</span>
              <span className="gov-stat-box__title">RIICO BICHOON NODE</span>
              <span className="gov-stat-box__desc">रीको द्वारा नियोजित औद्योगिक क्षेत्र एवं लॉजिस्टिक्स पार्सल विकास</span>
            </div>

            <div className="gov-stat-box gov-stat-box--highlight">
              <span className="gov-stat-box__hindi-val">५–१० वर्ष</span>
              <span className="gov-stat-box__value">5–10 YR</span>
              <span className="gov-stat-box__title">RESEARCH HORIZON</span>
              <span className="gov-stat-box__desc">दीर्घकालिक अनुसंधान अवधि — धारा 90-A एवं राजस्व जमाबंदी जांच अनिवार्य</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CITIZEN e-SERVICES ACCELERATOR (नागरिक एवं निवेशक ई-सेवाएं) */}
      <section className="section section--white citizen-services-section">
        <div className="container">
          <div className="gov-section-header centered">
            <span className="gov-section-header__hindi">त्वरित नागरिक एवं निवेशक सेवाएं</span>
            <h2 className="gov-section-header__title">Key Online e-Services &amp; Due Diligence Window</h2>
            <p className="gov-section-header__desc">
              Direct official access to land registries, industrial notifications, rail freight status and cadastral surveys.
            </p>
          </div>

          <div className="citizen-services-grid">
            <Link to="/research" className="citizen-srv-card">
              <div className="citizen-srv-card__icon icon-blue">
                <FileText size={28} />
              </div>
              <div className="citizen-srv-card__body">
                <span className="citizen-srv-card__hindi">भू-अभिलेख एवं जमाबंदी</span>
                <h4 className="citizen-srv-card__title">Land Records Verification</h4>
                <p className="citizen-srv-card__desc">
                  Apna Khata (E-Dharti) digital Record of Rights (RoR) verification and mutation status check.
                </p>
                <span className="citizen-srv-card__link">अभिलेख देखें &rarr;</span>
              </div>
            </Link>

            <Link to="/infrastructure" className="citizen-srv-card">
              <div className="citizen-srv-card__icon icon-orange">
                <Train size={28} />
              </div>
              <div className="citizen-srv-card__body">
                <span className="citizen-srv-card__hindi">WDFC मालभाड़ा कॉरिडोर स्थिति</span>
                <h4 className="citizen-srv-card__title">Freight Rail Documentation</h4>
                <p className="citizen-srv-card__desc">
                  Official DFCCIL trial-run notifications and freight operational timeline for Phulera junction.
                </p>
                <span className="citizen-srv-card__link">कॉरिडोर डेटा &rarr;</span>
              </div>
            </Link>

            <Link to="/infrastructure" className="citizen-srv-card">
              <div className="citizen-srv-card__icon icon-teal">
                <Factory size={28} />
              </div>
              <div className="citizen-srv-card__body">
                <span className="citizen-srv-card__hindi">रीको औद्योगिक आवंटन आदेश</span>
                <h4 className="citizen-srv-card__title">RIICO Industrial Orders 2026</h4>
                <p className="citizen-srv-card__desc">
                  Official administrative sanctions for Industrial Area Phulera and Bichoon logistics cluster.
                </p>
                <span className="citizen-srv-card__link">रीको आदेश देखें &rarr;</span>
              </div>
            </Link>

            <Link to="/investment-guide" className="citizen-srv-card">
              <div className="citizen-srv-card__icon icon-gold">
                <Scale size={28} />
              </div>
              <div className="citizen-srv-card__body">
                <span className="citizen-srv-card__hindi">धारा 90-A रूपांतरण गाइड</span>
                <h4 className="citizen-srv-card__title">Section 90-A Conversion Guide</h4>
                <p className="citizen-srv-card__desc">
                  Step-by-step regulatory walkthrough for agricultural to non-agricultural land conversion.
                </p>
                <span className="citizen-srv-card__link">रूपांतरण नियम &rarr;</span>
              </div>
            </Link>

            <Link to="/dobri" className="citizen-srv-card">
              <div className="citizen-srv-card__icon icon-green">
                <MapPin size={28} />
              </div>
              <div className="citizen-srv-card__body">
                <span className="citizen-srv-card__hindi">दोबरी माइक्रो-मार्केट विश्लेषण</span>
                <h4 className="citizen-srv-card__title">Dobri Spotlight &amp; Milestones</h4>
                <p className="citizen-srv-card__desc">
                  7 km from Dudu sub-district hub on NH-48. Road approach and topography verification.
                </p>
                <span className="citizen-srv-card__link">दोबरी विवरण &rarr;</span>
              </div>
            </Link>

            <Link to="/enquiry" className="citizen-srv-card">
              <div className="citizen-srv-card__icon icon-purple">
                <Phone size={28} />
              </div>
              <div className="citizen-srv-card__body">
                <span className="citizen-srv-card__hindi">नागरिक सहायता व शिकायत डेस्क</span>
                <h4 className="citizen-srv-card__title">Citizen Help Desk &amp; Advisory</h4>
                <p className="citizen-srv-card__desc">
                  Direct helpline support: +91 92184 67515 / +91 79056 02136 (Mon-Sat, 10 AM - 6 PM IST).
                </p>
                <span className="citizen-srv-card__link">सहायता प्राप्त करें &rarr;</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: OFFICIAL NOTICE BOARD & GAZETTE TABLE (NIC Authentic Table) */}
      <section className="section section--alt gov-notice-board-section">
        <div className="container">
          <div className="gov-notice-board">
            <div className="gov-notice-board__header">
              <div className="gov-notice-board__title-wrap">
                <div className="gov-nb-seal">
                  <FileCheck2 size={24} />
                </div>
                <div>
                  <span className="gov-notice-board__tag">OFFICIAL GAZETTE &amp; CIRCULARS REPOSITORY</span>
                  <h3 className="gov-notice-board__title">राजपत्र अधिसूचनाएं, सरकारी आदेश एवं प्रेस विज्ञप्ति</h3>
                  <span className="gov-notice-board__sub">Official Statutory Documentation Registry (Phulera Development Corridor)</span>
                </div>
              </div>
              <div className="gov-notice-board__filter-tabs">
                <button
                  type="button"
                  className={`gov-filter-tab ${activeTab === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveTab('all')}
                >
                  सभी अभिलेख (All)
                </button>
                <button
                  type="button"
                  className={`gov-filter-tab ${activeTab === 'rail' ? 'active' : ''}`}
                  onClick={() => setActiveTab('rail')}
                >
                  DFCCIL रेलवे
                </button>
                <button
                  type="button"
                  className={`gov-filter-tab ${activeTab === 'riico' ? 'active' : ''}`}
                  onClick={() => setActiveTab('riico')}
                >
                  रीको (RIICO) आदेश
                </button>
              </div>
            </div>

            {/* Sarkari Table View */}
            <div className="gov-table-container">
              <table className="gov-table">
                <thead>
                  <tr>
                    <th style={{ width: '80px' }}>क्र.सं. (Sr)</th>
                    <th style={{ width: '130px' }}>दिनांक (Date)</th>
                    <th>विषय एवं अधिसूचना शीर्षक (Subject / Order Title)</th>
                    <th style={{ width: '180px' }}>प्राधिकरण (Issuing Body)</th>
                    <th style={{ width: '150px' }}>दस्तावेज (Download)</th>
                  </tr>
                </thead>
                <tbody>
                  {(activeTab === 'all' || activeTab === 'rail') && (
                    <tr>
                      <td className="gov-td-center"><strong>01</strong></td>
                      <td>
                        <span className="gov-table-date">27-03-2018</span>
                        <span className="gov-table-badge-active">लागू (Active)</span>
                      </td>
                      <td>
                        <div className="gov-table-title-row">
                          <span className="gov-new-badge">नवीन [NEW]</span>
                          <strong>अटेली-फुलेरा रेल खंड पर 100 किमी/घंटा की गति से मालगाड़ी का सफल ट्रायल रन</strong>
                        </div>
                        <p className="gov-table-summary">
                          Official statutory press release from DFCCIL validating heavy-haul double-stack container freight capability through Phulera Junction node.
                        </p>
                        <span className="gov-table-ref">संदर्भ सं: DFCCIL/PR/2018/100KMPH-TRIAL</span>
                      </td>
                      <td>
                        <span className="gov-table-dept">DFCCIL</span>
                        <small className="gov-table-ministry">रेल मंत्रालय (भारत सरकार)</small>
                      </td>
                      <td className="gov-td-center">
                        <a
                          href="https://dfccil.com/upload/DFCCIL_Press_Release_English_Trial_Run_with_100_kmph_max_speed_27_03_18.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gov-table-pdf-btn"
                          title="Download DFCCIL Press Release PDF"
                        >
                          <Download size={13} />
                          <span>PDF [240 KB]</span>
                          <ExternalLink size={11} />
                        </a>
                      </td>
                    </tr>
                  )}

                  {(activeTab === 'all' || activeTab === 'riico') && (
                    <tr>
                      <td className="gov-td-center"><strong>02</strong></td>
                      <td>
                        <span className="gov-table-date">2026</span>
                        <span className="gov-table-badge-active">लागू (Active)</span>
                      </td>
                      <td>
                        <div className="gov-table-title-row">
                          <span className="gov-new-badge">नवीन [NEW]</span>
                          <strong>औद्योगिक क्षेत्र फुलेरा के विकास हेतु संशोधित प्रशासनिक स्वीकृति आदेश</strong>
                        </div>
                        <p className="gov-table-summary">
                          Revised administrative sanction issued by RIICO approving infrastructure development, parcel demarcations, and layout for Industrial Area Phulera.
                        </p>
                        <span className="gov-table-ref">संदर्भ सं: RIICO/PLG/2026/PHULERA-AS</span>
                      </td>
                      <td>
                        <span className="gov-table-dept">RIICO</span>
                        <small className="gov-table-ministry">उद्योग विभाग (राजस्थान सरकार)</small>
                      </td>
                      <td className="gov-td-center">
                        <a
                          href="https://riico.rajasthan.gov.in/Orders.aspx"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gov-table-pdf-btn"
                          title="View Official RIICO Orders"
                        >
                          <Download size={13} />
                          <span>आदेश देखें</span>
                          <ExternalLink size={11} />
                        </a>
                      </td>
                    </tr>
                  )}

                  {(activeTab === 'all' || activeTab === 'riico') && (
                    <tr>
                      <td className="gov-td-center"><strong>03</strong></td>
                      <td>
                        <span className="gov-table-date">2026</span>
                        <span className="gov-table-badge-active">लागू (Active)</span>
                      </td>
                      <td>
                        <div className="gov-table-title-row">
                          <strong>मांडा, फुलेरा एवं बिचून में औद्योगिक एवं लॉजिस्टिक्स अवसरों का आधिकारिक निरीक्षण</strong>
                        </div>
                        <p className="gov-table-summary">
                          Urban Development Department field inspection report for developing dedicated multi-modal logistics nodes in western rural Jaipur.
                        </p>
                        <span className="gov-table-ref">संदर्भ सं: UDH/PR/948/174452</span>
                      </td>
                      <td>
                        <span className="gov-table-dept">नगरीय विकास विभाग</span>
                        <small className="gov-table-ministry">स्वायत्त शासन (राजस्थान सरकार)</small>
                      </td>
                      <td className="gov-td-center">
                        <a
                          href="https://urban.rajasthan.gov.in/press-release/948/174452"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gov-table-pdf-btn"
                          title="View Official Site Inspection Release"
                        >
                          <Download size={13} />
                          <span>विज्ञप्ति</span>
                          <ExternalLink size={11} />
                        </a>
                      </td>
                    </tr>
                  )}

                  {activeTab === 'all' && (
                    <tr>
                      <td className="gov-td-center"><strong>04</strong></td>
                      <td>
                        <span className="gov-table-date">2026</span>
                        <span className="gov-table-badge-active">लागू (Active)</span>
                      </td>
                      <td>
                        <div className="gov-table-title-row">
                          <strong>बिचून औद्योगिक क्षेत्र (185 हेक्टेयर) आवंटन एवं नियमन अधिसूचना</strong>
                        </div>
                        <p className="gov-table-summary">
                          Statutory notification identifying Bichoon as a notified industrial manufacturing and warehousing cluster in the Phulera–Dudu sphere.
                        </p>
                        <span className="gov-table-ref">संदर्भ सं: RIICO/NOTIF/MENU-19</span>
                      </td>
                      <td>
                        <span className="gov-table-dept">RIICO</span>
                        <small className="gov-table-ministry">उद्योग विभाग (राजस्थान सरकार)</small>
                      </td>
                      <td className="gov-td-center">
                        <a
                          href="https://riico.rajasthan.gov.in/Notification.aspx?menu_id=19"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gov-table-pdf-btn"
                          title="View Official RIICO Notification"
                        >
                          <Download size={13} />
                          <span>अधिसूचना</span>
                          <ExternalLink size={11} />
                        </a>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="gov-notice-board__foot">
              <Link to="/research" className="btn btn-gov-primary">
                संपूर्ण राजपत्र एवं अभिलेख संग्रह देखें (COMPLETE REPOSITORY) &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: DOBRI LOCATION SPOTLIGHT WITH REAL HIGHWAY MILESTONES */}
      <section className="section section--white dobri-spotlight-section">
        <div className="container">
          <div className="gov-section-header centered">
            <span className="gov-section-header__hindi">भौगोलिक अवस्थिति एवं दूरी चार्ट</span>
            <h2 className="gov-section-header__title">Dobri Spotlight &amp; Highway Milestone Matrix</h2>
            <p className="gov-section-header__desc">
              Authentic road milestones showing verified corridor distances from Dobri to key administrative, rail, and highway junctions.
            </p>
          </div>

          {/* Highway Milestones Display (Iconic Sarkari Indian Highway Marker) */}
          <div className="gov-milestones-container">
            <div className="gov-milestones-row">
              <div className="gov-milestone-item">
                <HighwayMilestone
                  route="NH-48"
                  destination="DUDU"
                  distance="7 KM*"
                  type="nh"
                />
                <div className="gov-ms-label">
                  <strong>दूदू (NH-48)</strong>
                  <span>Sub-district HQ • Civic Hub</span>
                </div>
              </div>

              <div className="gov-milestone-item">
                <HighwayMilestone
                  route="MDR-85"
                  destination="PHULERA"
                  distance="31 KM*"
                  type="sh"
                />
                <div className="gov-ms-label">
                  <strong>फुलेरा जंक्शन</strong>
                  <span>WDFC Railway Hub</span>
                </div>
              </div>

              <div className="gov-milestone-item">
                <HighwayMilestone
                  route="SH-2"
                  destination="SAMBHAR"
                  distance="38 KM*"
                  type="sh"
                />
                <div className="gov-ms-label">
                  <strong>सांभर साल्ट</strong>
                  <span>Wetland &amp; Heritage</span>
                </div>
              </div>

              <div className="gov-milestone-item">
                <HighwayMilestone
                  route="SH-12"
                  destination="MALPURA"
                  distance="30 KM*"
                  type="sh"
                />
                <div className="gov-ms-label">
                  <strong>मालपुरा</strong>
                  <span>Agrarian Market</span>
                </div>
              </div>

              <div className="gov-milestone-item">
                <HighwayMilestone
                  route="NH-48"
                  destination="JAIPUR"
                  distance="60 KM*"
                  type="nh"
                />
                <div className="gov-ms-label">
                  <strong>जयपुर राजधानी</strong>
                  <span>State Capital &amp; Airport</span>
                </div>
              </div>
            </div>

            <p className="gov-distance-note">
              *अनुमानित सड़क दूरियां संदर्भ हेतु हैं। किसी भी विशिष्ट भूमि पार्सल तक पहुंचने के लिए मौके पर उपलब्ध भौतिक पक्के रास्ते एवं सजरा नक्शे (Sajra Map) की पुष्टि अवश्य करें।
            </p>
          </div>

          {/* 4 Evaluation Focus Cards */}
          <div className="grid-2 mt-4">
            <div className="gov-card">
              <div className="gov-card__header">
                <span className="gov-card__header-title">पहुंच मार्ग सत्यापन (ROAD ACCESS)</span>
                <Navigation size={18} color="#FF9933" />
              </div>
              <div className="gov-card__body">
                <p>
                  Verify approach road, legal access and actual distance for the property being studied. Physical road width and registered revenue easement are essential.
                </p>
              </div>
            </div>

            <div className="gov-card">
              <div className="gov-card__header">
                <span className="gov-card__header-title">विरासत एवं पर्यटन (HERITAGE CONTEXT)</span>
                <Landmark size={18} color="#FF9933" />
              </div>
              <div className="gov-card__body">
                <p>
                  Chaparwada masonry dam and Fort Pachewar Garh add cultural identity and eco-tourism interest, providing rich regional character beyond industrial nodes.
                </p>
              </div>
            </div>

            <div className="gov-card">
              <div className="gov-card__header">
                <span className="gov-card__header-title">औद्योगिक परिदृश्य (INDUSTRIAL CONTEXT)</span>
                <Factory size={18} color="#FF9933" />
              </div>
              <div className="gov-card__body">
                <p>
                  Malpura and the wider RIICO industrial network (Phulera, Bichoon) are useful economic reference points indicating broader manufacturing footprint.
                </p>
              </div>
            </div>

            <div className="gov-card">
              <div className="gov-card__header">
                <span className="gov-card__header-title">दीर्घकालिक दृष्टिकोण (PATIENT HORIZON)</span>
                <Clock size={18} color="#FF9933" />
              </div>
              <div className="gov-card__body">
                <p>
                  Do not confuse emerging infrastructure with guaranteed appreciation. Land investments require patience and rigorous risk assessment.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 text-center">
            <Link to="/dobri" className="btn btn-gov-primary">
              दोबरी विस्तृत अन्वेषण रिपोर्ट देखें (EXPLORE DOBRI) &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7: JAIPUR VS PHULERA COMPARATIVE EVALUATION */}
      <section className="section section--alt comparison-section">
        <div className="container">
          <div className="gov-section-header centered">
            <span className="gov-section-header__hindi">बाजार तुलना विश्लेषण</span>
            <h2 className="gov-section-header__title">Jaipur vs Emerging Phulera Region</h2>
            <p className="gov-section-header__desc">
              Objective institutional comparison between a mature metropolitan market and an early-stage infrastructure-anchored regional growth corridor.
            </p>
          </div>

          <div className="grid-2 comparison-grid">
            <div className="gov-comp-card gov-comp-card--jaipur">
              <div className="gov-comp-card__header">
                <div className="gov-comp-card__badge">स्थापित शहरी बाजार</div>
                <h3 className="gov-comp-card__title">JAIPUR METROPOLITAN</h3>
                <span className="gov-comp-card__hindi">परिपक्व नगरीय अवसंरचना</span>
              </div>
              <div className="gov-comp-card__body">
                <ul className="gov-comp-card__list">
                  <li>
                    <CheckCircle size={18} className="gov-comp-icon" />
                    <span>Deep urban infrastructure with operational public transport, municipal utilities, and ready services.</span>
                  </li>
                  <li>
                    <CheckCircle size={18} className="gov-comp-icon" />
                    <span>High rental liquidity and diversified residential, institutional, and commercial tenant demand.</span>
                  </li>
                  <li>
                    <CheckCircle size={18} className="gov-comp-icon" />
                    <span>Substantially higher capital entry basis with compressed initial yield multiples.</span>
                  </li>
                  <li>
                    <CheckCircle size={18} className="gov-comp-icon" />
                    <span>Peripheral expansion governed by Master Plan 2025 urban development envelopes.</span>
                  </li>
                </ul>
              </div>
              <div className="gov-comp-card__footer">
                <span>Characteristics: High Liquidity • Higher Entry Barrier • Mature Civic Services</span>
              </div>
            </div>

            <div className="gov-comp-card gov-comp-card--phulera">
              <div className="gov-comp-card__header">
                <div className="gov-comp-card__badge">उभरता हुआ विकास गलियारा</div>
                <h3 className="gov-comp-card__title">PHULERA REGIONAL CORRIDOR</h3>
                <span className="gov-comp-card__hindi">मालभाड़ा एवं औद्योगिक नोड</span>
              </div>
              <div className="gov-comp-card__body">
                <ul className="gov-comp-card__list">
                  <li>
                    <CheckCircle size={18} className="gov-comp-icon gov-comp-icon--teal" />
                    <span>Earlier-stage infrastructure story anchored by heavy-haul rail freight (WDFC) and NH-48 feeder arterial roads.</span>
                  </li>
                  <li>
                    <CheckCircle size={18} className="gov-comp-icon gov-comp-icon--teal" />
                    <span>Lower acquisition basis attractive for long-term patient capital with 5–10 year evaluation horizon.</span>
                  </li>
                  <li>
                    <CheckCircle size={18} className="gov-comp-icon gov-comp-icon--teal" />
                    <span>RIICO industrial zoning (Phulera, Bichoon) creates formalized manufacturing and warehousing employment anchors.</span>
                  </li>
                  <li>
                    <CheckCircle size={18} className="gov-comp-icon gov-comp-icon--teal" />
                    <span>Mandatory legal due diligence: Khasra RoR verification, approach road width, and Section 90-A conversion.</span>
                  </li>
                </ul>
              </div>
              <div className="gov-comp-card__footer gov-comp-card__footer--phulera">
                <span>Characteristics: Low Entry Basis • 5–10 Year Horizon • Strict Due Diligence Mandated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: 5–10 YEAR INVESTMENT MINDSET */}
      <section className="section section--white mindset-section">
        <div className="container">
          <div className="gov-section-header centered">
            <span className="gov-section-header__hindi">चरणबद्ध निवेश एवं अनुसंधान दृष्टिकोण</span>
            <h2 className="gov-section-header__title">The 5–10 Year Investment Discipline</h2>
            <p className="gov-section-header__desc">
              Structured evaluation framework balancing macroscopic corridor announcements with ground-level cadastral due diligence.
            </p>
          </div>

          <div className="grid-3 timeline-grid">
            <div className="gov-timeline-card">
              <div className="gov-timeline-card__phase">PHASE 01 • चरण 1</div>
              <div className="gov-timeline-card__stamp">अनुसंधान (RESEARCH)</div>
              <h3 className="gov-timeline-card__title">TODAY — RESEARCH</h3>
              <p className="gov-timeline-card__desc">
                Study title, land use, access, current market pricing and operational infrastructure. Verify revenue registers (Jamabandi &amp; Khasra) before committing capital.
              </p>
              <div className="gov-timeline-card__status">
                <CheckCircle size={14} /> Title &amp; Document Scrutiny
              </div>
            </div>

            <div className="gov-timeline-card">
              <div className="gov-timeline-card__phase">PHASE 02 • चरण 2</div>
              <div className="gov-timeline-card__stamp">निगरानी (OBSERVE)</div>
              <h3 className="gov-timeline-card__title">NEXT 3–5 YEARS — OBSERVE</h3>
              <p className="gov-timeline-card__desc">
                Track roads, industry, logistics, housing, services and transaction activity. Monitor RIICO parcel allocations, freight corridor throughput, and feeder road paving.
              </p>
              <div className="gov-timeline-card__status">
                <CheckCircle size={14} /> Infrastructure Progression
              </div>
            </div>

            <div className="gov-timeline-card">
              <div className="gov-timeline-card__phase">PHASE 03 • चरण 3</div>
              <div className="gov-timeline-card__stamp">पुनर्मूल्यांकन (RE-EVALUATE)</div>
              <h3 className="gov-timeline-card__title">NEXT 5–10 YEARS — RE-EVALUATE</h3>
              <p className="gov-timeline-card__desc">
                Judge whether the regional thesis matured. Infrastructure creates possibilities, not guaranteed returns. Evaluate end-user liquidity and exit options realistically.
              </p>
              <div className="gov-timeline-card__status">
                <CheckCircle size={14} /> Long-Term Outcome Review
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: PUBLIC ENQUIRY & ADVISORY DESK */}
      <section className="section section--alt enquiry-section" id="enquire">
        <div className="container">
          <div className="gov-enquiry-layout">
            <div className="gov-enquiry-info">
              <span className="gov-section-header__hindi">सार्वजनिक पूछताछ एवं परामर्श खिड़की</span>
              <h2 className="gov-section-header__title">Citizen &amp; Investor Advisory Desk</h2>
              <p className="gov-section-header__desc">
                Connect with our regional documentation desk for factual parcel information, revenue document checklists, and verified distance data across Phulera and Dobri.
              </p>

              {/* Direct Helplines Box with Both Numbers */}
              <div className="gov-direct-helplines-card">
                <div className="gov-dh-head">
                  <Phone size={18} className="gov-dh-head-icon" />
                  <strong>आधिकारिक सहायता केंद्र (DIRECT HOTLINES)</strong>
                </div>
                <div className="gov-dh-body">
                  <div className="gov-dh-line">
                    <span>प्राथमिक सहायता:</span>
                    <a href="tel:+919218467515">+91 92184 67515</a>
                  </div>
                  <div className="gov-dh-line">
                    <span>द्वितीयक सहायता:</span>
                    <a href="tel:+917905602136">+91 79056 02136</a>
                  </div>
                  <div className="gov-dh-line wa">
                    <span>व्हाट्सएप संदेश:</span>
                    <a
                      href="https://wa.me/919218467515?text=Hello%20Help%20Desk,%20I%20have%20an%20enquiry%20regarding%20Phulera%20Dobri%20land%20and%20infrastructure%20research."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +91 92184 67515
                    </a>
                  </div>
                  <small className="gov-dh-timing">
                    कार्य समय: सोमवार - शनिवार, प्रातः 10:00 से सायं 06:00 बजे तक (IST)
                  </small>
                </div>
              </div>

              <div className="gov-enquiry-features mt-4">
                <div className="gov-enquiry-feature-item">
                  <ShieldCheck size={20} className="gov-feature-icon" />
                  <div>
                    <strong>Research-Oriented Insights</strong>
                    <p>Transparent documentation, verified distances, and official reference links.</p>
                  </div>
                </div>

                <div className="gov-enquiry-feature-item">
                  <Compass size={20} className="gov-feature-icon" />
                  <div>
                    <strong>Micro-Market Focus</strong>
                    <p>Granular understanding of Dobri, Phulera, Bichoon, and Dudu development belts.</p>
                  </div>
                </div>

                <div className="gov-enquiry-feature-item">
                  <CheckCircle size={20} className="gov-feature-icon" />
                  <div>
                    <strong>Independent Information</strong>
                    <p>Clear separation between proposed plans and operational ground realities.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="gov-enquiry-form-card">
              <div className="gov-card__header">
                <span className="gov-card__header-title">नागरिक पूछताछ पत्र (PUBLIC ENQUIRY FORM)</span>
                <span className="gov-doc-tag">INDEPENDENT DESK</span>
              </div>
              <div className="gov-card__body">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
