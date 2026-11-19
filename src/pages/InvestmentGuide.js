import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import EnquiryForm from '../components/EnquiryForm';
import {
  Wallet,
  FileCheck,
  MapPin,
  Navigation,
  Search,
  LogOut,
  AlertTriangle,
  Phone,
  MessageSquare,
  ChevronRight,
  HelpCircle
} from 'lucide-react';
import './InvestmentGuide.css';

const sixSteps = [
  {
    icon: <Wallet size={24} />,
    title: "01. बजट निर्धारण (DEFINE BUDGET)",
    desc: "पंजीयन, विधिक शुल्क एवं होल्डिंग लागत शामिल करें।",
    detail: "Account for stamp duty (typically 5-7% in Rajasthan), registration charges, local development cess, legal audit retainers, boundary wall fencing, and multi-year holding costs before allocating investment capital."
  },
  {
    icon: <FileCheck size={24} />,
    title: "02. मालिकाना हक सत्यापन (VERIFY TITLE)",
    desc: "स्वतंत्र विधिक अधिवक्ता द्वारा 30 वर्षीय टाइटल सर्च।",
    detail: "Retain an independent property advocate not affiliated with the seller or brokerage to trace continuous ownership records across at least 30 years and verify revenue entries in the local Tehsil registry."
  },
  {
    icon: <MapPin size={24} />,
    title: "03. भू-उपयोग एवं 90-A (LAND USE)",
    desc: "खातेदारी, गैर-कृषि एवं मास्टर प्लान जोनिंग की पुष्टि।",
    detail: "Ascertain whether the parcel is Khatedari (agricultural), non-agricultural (Section 90-A Rajasthan Land Revenue Act), industrial, or falling within municipal development authority master plan green belts."
  },
  {
    icon: <Navigation size={24} />,
    title: "04. राजस्व रास्ता सत्यापन (CONFIRM ACCESS)",
    desc: "पास में सड़क होना और विधिक सजरा रास्ता होना अलग है।",
    detail: "A visible dirt trail or neighboring highway does not grant legal right-of-way. Verify that an official revenue road (Sajra rasta) directly abuts the boundary and has legal easement registered in official records."
  },
  {
    icon: <Search size={24} />,
    title: "05. अवसंरचना वर्गीकरण (INFRASTRUCTURE)",
    desc: "परिचालित, स्वीकृत एवं केवल घोषित परियोजनाओं में अंतर।",
    detail: "Never pay a premium for proposed master plans. Base valuation exclusively on ground reality: operational asphalt roads, functional 3-phase electricity lines, active water connections, and gazetted RIICO boundaries."
  },
  {
    icon: <LogOut size={24} />,
    title: "06. निकास योजना (PLAN THE EXIT)",
    desc: "5-10 वर्ष बाद संभावित खरीददार एवं लिक्विडिटी की समझ।",
    detail: "Land is an inherently illiquid asset class. Clarify who your prospective buyer will be after 5 to 10 years: a residential plotted end-user, an industrial warehouse operator, an agro-farmer, or a secondary land consolidator."
  }
];

const documentsChecklist = [
  {
    sr: "01",
    title: "जमाबंदी नकल (Jamabandi - Record of Rights)",
    authority: "राजस्व विभाग (Apna Khata)",
    desc: "Current certified computerized land record from the Apna Khata Rajasthan portal verifying ownership names, shares, and land class."
  },
  {
    sr: "02",
    title: "खसरा नक्शा / सजरा (Khasra Sajra Map)",
    authority: "तहसीलदार / पटवारी",
    desc: "Revenue map confirming parcel geometry, exact Khasra number, directional boundaries, and abutting public road widths."
  },
  {
    sr: "03",
    title: "30 वर्षीय सेल डीड श्रृंखला (Title Deed Chain)",
    authority: "उप-पंजीयक कार्यालय (Sub-Registrar)",
    desc: "Unbroken sequence of registered sale deeds, gift deeds, release deeds, or succession partition decrees dating back 30+ years."
  },
  {
    sr: "04",
    title: "नामांतरण आदेश (Mutation / Dakhil Kharij)",
    authority: "पटवारी / गिरदावर",
    desc: "Official endorsement in Tehsil revenue registers transferring owner title following registration, ensuring tax liability match."
  },
  {
    sr: "05",
    title: "भारमुक्त प्रमाण पत्र (Non-Encumbrance Certificate)",
    authority: "उप-पंजीयक कार्यालय",
    desc: "Sub-registrar office clearance proving absence of registered mortgages, bank liens, court attachments, or statutory claims."
  },
  {
    sr: "06",
    title: "धारा 90-A रूपांतरण आदेश (Section 90-A Order)",
    authority: "प्राधिकृत अधिकारी (SDO / Tehsildar)",
    desc: "If investing in residential or commercial plots, verify the formal Rajasthan Land Revenue Act Section 90-A land conversion order."
  },
  {
    sr: "07",
    title: "स्वीकृत लेआउट प्लान व पट्टा (Approved Layout Plan)",
    authority: "ग्राम पंचायत / यूआईटी / जेडीए",
    desc: "For plotted developments, verify the certified layout sanctioned by the competent authority with earmarked open spaces."
  },
  {
    sr: "08",
    title: "सीमांकन एवं पैमाइश पंचनामा (Demarcation Certificate)",
    authority: "हल्का पटवारी एवं राजस्व निरीक्षक",
    desc: "Official on-ground measurement and boundary pegging conducted by the local Revenue Inspector / Halka Patwari."
  }
];

const riskFactors = [
  {
    title: "पारिवारिक एवं उत्तराधिकार विवाद (Title & Succession Disputes)",
    desc: "Undivided ancestral shares, undisclosed co-sharers, or minor rights can trigger protracted litigation in civil courts."
  },
  {
    title: "राजस्थान काश्तकारी अधिनियम प्रतिबंध (Tenancy Act Sec 42)",
    desc: "Non-compliance with Rajasthan Tenancy Act provisions (such as Section 42 restrictions on SC/ST land transfers) voids purchases ab initio."
  },
  {
    title: "रास्ता विवाद एवं लैंडलॉक्ड भूखंड (Access Denial Risks)",
    desc: "Buying an interior parcel without a registered revenue road can leave your land unreachable if neighbors fence private tracts."
  },
  {
    title: "दीर्घकालिक लिक्विडिटी एवं होल्डिंग (Liquidity Lockup)",
    desc: "Land transactions frequently require months or years to execute. Emergency liquidation typically incurs deep price discounting."
  },
  {
    title: "बुनियादी ढांचा विलंब जोखिम (Infrastructure Delay Risks)",
    desc: "Government notifications and industrial corridor announcements can experience multi-year execution slippages."
  },
  {
    title: "अवैध अतिक्रमण एवं सीमा विवाद (Boundary Encroachments)",
    desc: "Unfenced and unmonitored vacant land is vulnerable to boundary shifts, unauthorized cultivation, or local squatter claims."
  }
];

const questionsForAdvisors = [
  "इस भूमि का वास्तविक राजस्व स्वरूप क्या है (कृषि खातेदारी, धारा 90-ए रूपांतरित, या आबादी)?",
  "क्या राजस्व सजरा नक्शे में मौके पर कम से कम 20-30 फीट का पक्का सरकारी रास्ता दर्ज है?",
  "क्या किसी निष्पक्ष स्वतंत्र वकील द्वारा 30 वर्षों की सर्च रिपोर्ट तैयार कराई गई है?",
  "क्या सभी जीवित सह-खातेदार और विधिक वारिस पंजीकृत बैनामा (Sale Deed) पर हस्ताक्षर कर रहे हैं?",
  "स्टाम्प ड्यूटी, निबंधन शुल्क, विधिक जांच और तारबंदी सहित कुल सर्वसमावेशी लागत क्या होगी?",
  "आस-पास का कौन सा बुनियादी ढांचा आज जमीनी रूप से चालू है और कौन सा केवल घोषित/प्रस्तावित है?",
  "5 से 10 वर्ष बाद इस क्षेत्र में संभावित वास्तविक खरीददार कौन होंगे और लिक्विडिटी की क्या स्थिति है?"
];

export default function InvestmentGuide() {
  useEffect(() => {
    document.title = "निवेश मार्गदर्शिका एवं विधिक जांच | New Phulera Smart City Investment Guide";
  }, []);

  return (
    <div className="investment-guide-page" id="main-content">
      {/* SARKARI BREADCRUMB BAR */}
      <div className="gov-breadcrumb-bar">
        <div className="container gov-breadcrumb-bar__inner">
          <Link to="/">मुख्य पृष्ठ (Home)</Link>
          <ChevronRight size={13} />
          <span>निवेशक शिक्षा</span>
          <ChevronRight size={13} />
          <span className="current">विधिक एवं निवेश मार्गदर्शिका (Investment Guide)</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <HeroSection
        label="INVESTMENT DUE DILIGENCE &amp; RISK AUDIT"
        hindiTitle="दीर्घकालिक भूमि निवेश एवं राजस्व विधिक जांच मार्गदर्शिका"
        title="A Smarter Way to Research Long-Term Land Investment"
        subtitle="DUE DILIGENCE FRAMEWORK, RISK MANAGEMENT &amp; LEGAL SCRUTINY"
        description="प्रचार नहीं, विधिक अनुशासन। भूमि में निवेश करने से पूर्व जोखिम नियंत्रण, 30 वर्षीय राजस्व इतिहास एवं दस्तावेजी सत्यापन से शुरुआत करें।"
        buttons={[
          { text: "8 राजस्व दस्तावेज चेकलिस्ट (CHECKLIST)", to: "#checklist", variant: "primary" },
          { text: "राजपत्र स्रोत देखें (SOURCES)", to: "/research", variant: "secondary" }
        ]}
      />

      {/* SARKARI CAUTION STRIP */}
      <div className="gov-inner-notice-bar">
        <div className="container gov-inb-inner">
          <AlertTriangle size={18} className="gov-inb-icon" />
          <p>
            <strong>संस्थागत निवेशक चेतावनी:</strong> किसी भी दलाल या मध्यस्थ के मौखिक दावों पर कभी विश्वास न करें। हमेशा ई-धरती (Apna Khata) से डिजिटल जमाबंदी नकल निकालें और स्थानीय उप-पंजीयक कार्यालय से 30 वर्षीय भारमुक्त प्रमाण पत्र प्राप्त करें। विधिक सहायता हेल्पलाइन: <strong>+91 92184 67515 / +91 79056 02136</strong>
          </p>
        </div>
      </div>

      {/* SECTION: 6 STEP METHODICAL FRAMEWORK */}
      <section className="section bg-white steps-section">
        <div className="container">
          <div className="gov-section-header centered">
            <span className="gov-section-header__hindi">व्यवस्थित 6-चरणीय निवेश अनुशासन</span>
            <h2 className="gov-section-header__title">Six Methodical Steps for Land Research</h2>
            <p className="gov-section-header__desc">
              A structured roadmap guiding investors from preliminary budget modeling to title discovery, physical access audit, and realistic exit strategy.
            </p>
          </div>

          <div className="grid-3 steps-grid">
            {sixSteps.map((step, idx) => (
              <div key={idx} className="gov-card">
                <div className="gov-card__header">
                  <span className="gov-card__header-title">{step.title}</span>
                  <div style={{ color: '#FF9933' }}>{step.icon}</div>
                </div>
                <div className="gov-card__body">
                  <p style={{ fontWeight: 700, color: '#0B2340', marginBottom: '8px' }}>{step.desc}</p>
                  <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: 8 REVENUE DOCUMENTS REGISTRY (NIC Table Format) */}
      <section className="section section--alt checklist-section" id="checklist">
        <div className="container">
          <div className="gov-section-header centered">
            <span className="gov-section-header__hindi">अनिवार्य 8 राजस्व दस्तावेज चेकलिस्ट</span>
            <h2 className="gov-section-header__title">Official Land Title &amp; Revenue Document Registry</h2>
            <p className="gov-section-header__desc">
              Demand and verify these eight mandatory statutory documents before transferring earnest money or signing agreements to sell in Rajasthan.
            </p>
          </div>

          <div className="gov-table-container">
            <table className="gov-table">
              <thead>
                <tr>
                  <th style={{ width: '80px' }}>क्र.सं.</th>
                  <th style={{ width: '260px' }}>राजस्व दस्तावेज का नाम (Document Title)</th>
                  <th style={{ width: '200px' }}>जारीकर्ता प्राधिकरण (Issuing Authority)</th>
                  <th>सत्यापन उद्देश्य एवं विधिक महत्व (Verification Scope)</th>
                </tr>
              </thead>
              <tbody>
                {documentsChecklist.map((doc, idx) => (
                  <tr key={idx}>
                    <td className="gov-td-center"><strong>{doc.sr}</strong></td>
                    <td>
                      <strong style={{ color: '#0B2340', display: 'block' }}>{doc.title}</strong>
                    </td>
                    <td>
                      <span className="gov-table-ref">{doc.authority}</span>
                    </td>
                    <td>
                      <p style={{ margin: 0, fontSize: '0.82rem', color: '#334155' }}>{doc.desc}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION: 6 CRITICAL RISK FACTORS */}
      <section className="section bg-white risks-section">
        <div className="container">
          <div className="gov-section-header centered">
            <span className="gov-section-header__hindi">जोखिम प्रबंधन एवं विधिक सावधानियां</span>
            <h2 className="gov-section-header__title">Six Inherent Risks in Rural Land Investment</h2>
            <p className="gov-section-header__desc">
              Unvarnished analysis of legal pitfalls, tenancy constraints, access denial disputes, and illiquidity typical of rural land acquisitions.
            </p>
          </div>

          <div className="grid-3">
            {riskFactors.map((risk, idx) => (
              <div key={idx} className="gov-card" style={{ borderTop: '3.5px solid #DC2626' }}>
                <div className="gov-card__body">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <AlertTriangle size={18} color="#DC2626" />
                    <h4 style={{ margin: 0, fontSize: '0.92rem', color: '#0B2340' }}>{risk.title}</h4>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.82rem', color: '#475569', lineHeight: 1.6 }}>{risk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: 7 QUESTIONS FOR BROKERS & ADVISORS */}
      <section className="section section--alt questions-section">
        <div className="container">
          <div className="gov-section-header centered">
            <span className="gov-section-header__hindi">संपत्ति सलाहकारों से पूछे जाने वाले 7 प्रश्न</span>
            <h2 className="gov-section-header__title">Seven Tough Questions for Property Brokers</h2>
            <p className="gov-section-header__desc">
              Test the credibility and transparency of any property dealer or seller by asking these seven non-negotiable questions.
            </p>
          </div>

          <div className="gov-card" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="gov-card__header">
              <span className="gov-card__header-title">प्रश्नावली चेकलिस्ट (DUE DILIGENCE QUESTIONNAIRE)</span>
              <HelpCircle size={20} color="#FF9933" />
            </div>
            <div className="gov-card__body">
              <ol style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {questionsForAdvisors.map((q, idx) => (
                  <li key={idx} style={{ fontSize: '0.88rem', color: '#1E293B', fontWeight: 600, lineHeight: 1.5 }}>
                    {q}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: INVESTOR ADVISORY & ENQUIRY */}
      <section className="section bg-white enquiry-cta-section">
        <div className="container">
          <div className="gov-enquiry-layout">
            <div className="gov-enquiry-info">
              <span className="gov-section-header__hindi">विधिक अन्वेषण परामर्श</span>
              <h2 className="gov-section-header__title">Need Independent Revenue Verification Support?</h2>
              <p className="gov-section-header__desc">
                Our regional documentation cell assists prospective buyers in locating certified cadastral maps, matching Khasra numbers against Tehsil records, and reviewing Section 90-A conversion compliance.
              </p>

              {/* Direct Hotlines Box */}
              <div className="gov-direct-helplines-card">
                <div className="gov-dh-head">
                  <Phone size={18} className="gov-dh-head-icon" />
                  <strong>निवेश परामर्श डेस्क (DIRECT HOTLINES)</strong>
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
                      href="https://wa.me/919218467515?text=Hello%20Help%20Desk,%20I%20have%20an%20enquiry%20regarding%20land%20documents%20and%20due%20diligence."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageSquare size={14} /> 9218467515
                    </a>
                  </div>
                  <small className="gov-dh-timing">
                    सोमवार - शनिवार: 10:00 AM - 06:00 PM (IST)
                  </small>
                </div>
              </div>
            </div>

            <div className="gov-enquiry-form-card">
              <div className="gov-card__header">
                <span className="gov-card__header-title">परामर्श पूछताछ पत्र (ADVISORY FORM)</span>
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
