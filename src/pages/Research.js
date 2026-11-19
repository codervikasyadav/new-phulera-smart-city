import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import {
  ExternalLink,
  AlertTriangle,
  Globe,
  FileText,
  Train,
  Factory,
  Truck,
  Building2,
  ChevronRight,
  ShieldCheck,
  Phone,
  MessageSquare,
  FileCheck2
} from 'lucide-react';
import './Research.css';

const officialPortals = [
  {
    name: "अपना खाता / ई-धरती (Apna Khata Rajasthan)",
    url: "https://apnakhata.rajasthan.gov.in",
    purpose: "राजस्थान सरकार राजस्व विभाग का आधिकारिक भू-अभिलेख पोर्टल। प्रमाणित जमाबंदी (RoR), नामांतरण स्थिति एवं ग्राम सजरा नक्शा डाउनलोड करें।"
  },
  {
    name: "पंजीयन एवं मुद्रांक विभाग (IGRS Rajasthan)",
    url: "https://igrs.rajasthan.gov.in",
    purpose: "Inspector General of Registration & Stamps. Verify official DLC rates, calculate stamp duty, and search registered property deeds."
  },
  {
    name: "रीको आधिकारिक पोर्टल (RIICO Portal)",
    url: "https://riico.rajasthan.gov.in",
    purpose: "Rajasthan State Industrial Development & Investment Corporation. Industrial land allotment rules, layout plans, and gazetted notifications."
  },
  {
    name: "डीएफसीसीआईएल (DFCCIL Ministry of Railways)",
    url: "https://dfccil.com",
    purpose: "Dedicated Freight Corridor Corporation of India Limited. Alignment corridors, freight throughput data, and rail junction specifications."
  },
  {
    name: "स्वायत्त शासन एवं नगरीय विकास विभाग",
    url: "https://urban.rajasthan.gov.in",
    purpose: "Urban Development & Housing Department Rajasthan. Master plans, zonal maps, and regional logistics field inspection releases."
  }
];

export default function Research() {
  useEffect(() => {
    document.title = "राजपत्र अभिलेख एवं अनुसंधान स्रोत | New Phulera Smart City Sources";
  }, []);

  return (
    <div className="research-page" id="main-content">
      {/* SARKARI BREADCRUMB BAR */}
      <div className="gov-breadcrumb-bar">
        <div className="container gov-breadcrumb-bar__inner">
          <Link to="/">मुख्य पृष्ठ (Home)</Link>
          <ChevronRight size={13} />
          <span>अभिलेख संग्रह</span>
          <ChevronRight size={13} />
          <span className="current">राजपत्र अभिलेख एवं प्राथमिक स्रोत (Research &amp; Sources)</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <HeroSection
        label="PRIMARY STATUTORY REPOSITORY"
        hindiTitle="प्राथमिक राजपत्र अभिलेख एवं आधिकारिक सरकारी स्रोत"
        title="Research &amp; Source Library"
        subtitle="VERIFIABLE PUBLIC DOCUMENTATION &amp; STATUTORY REFERENCES"
        description="किसी भी भूमि निवेश से पूर्व प्राथमिक सरकारी आदेशों, रेलवे परीक्षण रिपोर्टों और रीको अधिसूचनाओं की मूल प्रति का अध्ययन करें।"
        buttons={[
          { text: "4 प्राथमिक स्रोत देखें (VIEW SOURCES)", to: "#primary-sources", variant: "primary" },
          { text: "राज्य राजस्व पोर्टल (REVENUE PORTALS)", to: "#portals", variant: "secondary" }
        ]}
      />

      {/* SARKARI CAUTION STRIP */}
      <div className="gov-inner-notice-bar">
        <div className="container gov-inb-inner">
          <AlertTriangle size={18} className="gov-inb-icon" />
          <p>
            <strong>प्राथमिक साक्ष्य का महत्व:</strong> यह रिपॉजिटरी केवल सार्वजनिक रूप से सत्यापित सरकारी रिकॉर्ड को संकलित करती है। हम किसी ब्रोकर के दावों को शामिल नहीं करते। अनुसंधान सहायता हेतु संपर्क करें: <strong>+91 92184 67515 / +91 79056 02136</strong>
          </p>
        </div>
      </div>

      {/* SECTION: 4 OFFICIAL SOURCE CARDS */}
      <section className="section bg-white primary-sources-section" id="primary-sources">
        <div className="container">
          <div className="gov-section-header centered">
            <span className="gov-section-header__hindi">चार आधिकारिक आधारभूत साक्ष्य</span>
            <h2 className="gov-section-header__title">Verified Primary Infrastructure Records</h2>
            <p className="gov-section-header__desc">
              Direct access to the original gazette orders, trial-run releases, and field inspection reports validating the wider Phulera economic corridor.
            </p>
          </div>

          <div className="grid-2 research-sources-grid">
            {/* CARD 1 */}
            <div className="gov-card">
              <div className="gov-card__header">
                <span className="gov-card__header-title">01. DFCCIL प्रेस रिलीज</span>
                <Train size={20} color="#FF9933" />
              </div>
              <div className="gov-card__body">
                <span className="gov-new-badge">नवीन [NEW]</span>
                <h3 style={{ fontSize: '1.15rem', color: '#0B2340', margin: '8px 0 6px 0' }}>
                  DFCCIL — Ateli–Phulera Trial Run (100 kmph)
                </h3>
                <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.6, marginBottom: '14px' }}>
                  आधिकारिक साक्ष्य जो प्रमाणित करता है कि पश्चिमी समर्पित मालभाड़ा गलियारे पर फुलेरा जंक्शन को उच्च क्षमता डबल-स्टैक कंटेनर संचालन हेतु सफलतापूर्वक परखा जा चुका है।
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #E2E8F0', paddingTop: '12px' }}>
                  <small style={{ color: '#64748B', fontWeight: 600 }}>स्रोत: रेल मंत्रालय (भारत सरकार)</small>
                  <a
                    href="https://dfccil.com/upload/DFCCIL_Press_Release_English_Trial_Run_with_100_kmph_max_speed_27_03_18.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gov-primary"
                    style={{ padding: '6px 14px', fontSize: '0.75rem' }}
                  >
                    मूल दस्तावेज (Open Source) &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="gov-card">
              <div className="gov-card__header">
                <span className="gov-card__header-title">02. रीको प्रशासनिक स्वीकृति 2026</span>
                <Factory size={20} color="#FF9933" />
              </div>
              <div className="gov-card__body">
                <span className="gov-new-badge">नवीन [NEW]</span>
                <h3 style={{ fontSize: '1.15rem', color: '#0B2340', margin: '8px 0 6px 0' }}>
                  RIICO — Industrial Area Phulera Orders
                </h3>
                <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.6, marginBottom: '14px' }}>
                  रीको द्वारा औद्योगिक क्षेत्र फुलेरा के समग्र विकास हेतु जारी संशोधित प्रशासनिक स्वीकृति आदेश, जिसमें लेआउट और औद्योगिक भूखंड नियोजन स्वीकृत है।
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #E2E8F0', paddingTop: '12px' }}>
                  <small style={{ color: '#64748B', fontWeight: 600 }}>स्रोत: उद्योग विभाग (राजस्थान सरकार)</small>
                  <a
                    href="https://riico.rajasthan.gov.in/Orders.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gov-primary"
                    style={{ padding: '6px 14px', fontSize: '0.75rem' }}
                  >
                    रीको आदेश (Open Source) &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="gov-card">
              <div className="gov-card__header">
                <span className="gov-card__header-title">03. नगरीय विकास स्थल निरीक्षण</span>
                <Truck size={20} color="#FF9933" />
              </div>
              <div className="gov-card__body">
                <h3 style={{ fontSize: '1.15rem', color: '#0B2340', margin: '8px 0 6px 0' }}>
                  UDH — Manda, Phulera &amp; Bichoon Study
                </h3>
                <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.6, marginBottom: '14px' }}>
                  राजस्थान नगरीय विकास एवं आवासन विभाग के अधिकारियों द्वारा मांडा, फुलेरा एवं बिचून में औद्योगिक व लॉजिस्टिक्स संभावनाओं हेतु संयुक्त निरीक्षण रिपोर्ट।
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #E2E8F0', paddingTop: '12px' }}>
                  <small style={{ color: '#64748B', fontWeight: 600 }}>स्रोत: स्वायत्त शासन विभाग (राजस्थान)</small>
                  <a
                    href="https://urban.rajasthan.gov.in/press-release/948/174452"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gov-primary"
                    style={{ padding: '6px 14px', fontSize: '0.75rem' }}
                  >
                    सरकारी विज्ञप्ति (Open Source) &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="gov-card">
              <div className="gov-card__header">
                <span className="gov-card__header-title">04. बिचून रीको अधिसूचना</span>
                <Building2 size={20} color="#FF9933" />
              </div>
              <div className="gov-card__body">
                <h3 style={{ fontSize: '1.15rem', color: '#0B2340', margin: '8px 0 6px 0' }}>
                  RIICO — Bichoon Industrial Area (185 Ha)
                </h3>
                <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.6, marginBottom: '14px' }}>
                  रीको की आधिकारिक अधिसूचना निर्देशिका जो बिचून को फुलेरा-दूदू गलियारे में एक सक्रिय औद्योगिक विनिर्माण एवं वेयरहाउसिंग क्लस्टर के रूप में स्थापित करती है।
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #E2E8F0', paddingTop: '12px' }}>
                  <small style={{ color: '#64748B', fontWeight: 600 }}>स्रोत: रीको अधिसूचना सं. 19</small>
                  <a
                    href="https://riico.rajasthan.gov.in/Notification.aspx?menu_id=19"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gov-primary"
                    style={{ padding: '6px 14px', fontSize: '0.75rem' }}
                  >
                    अधिसूचना देखें (Open Source) &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: STATE LAND & REGULATORY PORTALS DIRECTORY */}
      <section className="section section--alt portals-section" id="portals">
        <div className="container">
          <div className="gov-section-header centered">
            <span className="gov-section-header__hindi">आधिकारिक सरकारी वेब पोर्टल निर्देशिका</span>
            <h2 className="gov-section-header__title">Official State Government Portals Directory</h2>
            <p className="gov-section-header__desc">
              Verified external links to Government of Rajasthan and Government of India online services for cadastral records, stamps, and industrial planning.
            </p>
          </div>

          <div className="gov-table-container">
            <table className="gov-table">
              <thead>
                <tr>
                  <th style={{ width: '80px' }}>क्र.सं.</th>
                  <th style={{ width: '280px' }}>पोर्टल का नाम (Portal Name)</th>
                  <th>पोर्टल का कार्य एवं सत्यापन उद्देश्य (Scope &amp; Utility)</th>
                  <th style={{ width: '160px' }}>पोर्टल लिंक (Action)</th>
                </tr>
              </thead>
              <tbody>
                {officialPortals.map((portal, idx) => (
                  <tr key={idx}>
                    <td className="gov-td-center"><strong>0{idx + 1}</strong></td>
                    <td>
                      <strong style={{ color: '#0B2340', display: 'block' }}>{portal.name}</strong>
                    </td>
                    <td>
                      <p style={{ margin: 0, fontSize: '0.82rem', color: '#334155' }}>{portal.purpose}</p>
                    </td>
                    <td className="gov-td-center">
                      <a
                        href={portal.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gov-table-pdf-btn"
                        title={`Open ${portal.name}`}
                      >
                        <Globe size={13} />
                        <span>पोर्टल खोलें</span>
                        <ExternalLink size={11} />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION: 3-STEP DUE DILIGENCE BLUEPRINT */}
      <section className="section bg-white blueprint-section">
        <div className="container">
          <div className="gov-section-header centered">
            <span className="gov-section-header__hindi">स्वतंत्र जांच की 3-चरणीय विधिक प्रक्रिया</span>
            <h2 className="gov-section-header__title">How to Conduct Due Diligence Step-by-Step</h2>
            <p className="gov-section-header__desc">
              Follow this rigorous investigative protocol before committing any financial resources to property in the Phulera–Dobri corridor.
            </p>
          </div>

          <div className="grid-3">
            <div className="gov-card">
              <div className="gov-card__header">
                <span className="gov-card__header-title">चरण 1: ऑनलाइन अभिलेख</span>
                <FileText size={20} color="#FF9933" />
              </div>
              <div className="gov-card__body">
                <h4 style={{ color: '#0B2340', marginBottom: '8px' }}>अपना खाता जमाबंदी जांचें</h4>
                <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  Search the property's Khasra number on Apna Khata Rajasthan. Confirm that the seller's name matches the registered Khatedar and verify there are no pending court injunctions or co-sharer caveats.
                </p>
              </div>
            </div>

            <div className="gov-card">
              <div className="gov-card__header">
                <span className="gov-card__header-title">चरण 2: तहसील रिकॉर्ड</span>
                <Building2 size={20} color="#FF9933" />
              </div>
              <div className="gov-card__body">
                <h4 style={{ color: '#0B2340', marginBottom: '8px' }}>सजरा नक्शा एवं भारमुक्तता</h4>
                <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  Visit the local Tehsil office (Dudu or Phulera) to obtain a certified copy of the Sajra revenue map. Apply for a 30-year non-encumbrance certificate from the Sub-Registrar to prove clear title.
                </p>
              </div>
            </div>

            <div className="gov-card">
              <div className="gov-card__header">
                <span className="gov-card__header-title">चरण 3: मौके पर भौतिक पैमाइश</span>
                <ShieldCheck size={20} color="#FF9933" />
              </div>
              <div className="gov-card__body">
                <h4 style={{ color: '#0B2340', marginBottom: '8px' }}>पटवारी द्वारा सीमांकन</h4>
                <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  Commission an official physical demarcation with the Halka Patwari. Verify that the registered revenue road touches the parcel physically and that neighbors agree with boundary coordinates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: RESEARCH DESK ASSISTANCE & HOTLINES */}
      <section className="section section--alt enquiry-cta-section">
        <div className="container">
          <div className="gov-card" style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center', padding: '36px 24px' }}>
            <FileCheck2 size={44} color="#FF9933" style={{ margin: '0 auto 12px' }} />
            <h3 style={{ fontSize: '1.45rem', color: '#0B2340', marginBottom: '8px' }}>
              राजपत्र अभिलेख एवं अनुसंधान प्रकोष्ठ सहायता
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#475569', maxWidth: '620px', margin: '0 auto 20px', lineHeight: 1.6 }}>
              यदि आपको किसी विशिष्ट खसरा संख्या के लिए सरकारी अधिसूचनाओं या डीएफसीसीआईएल अलाइनमेंट की पुष्टि में सहायता चाहिए, तो हमारी शोध टीम से संपर्क करें।
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', background: '#FFFBEB', border: '1.5px solid #F59E0B', padding: '10px 20px', borderRadius: '4px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Phone size={16} color="#DC2626" />
                <span style={{ fontSize: '0.82rem', color: '#78350F' }}>हेल्पलाइन:</span>
                <a href="tel:+919218467515" style={{ fontWeight: 800, color: '#0B2340', textDecoration: 'none' }}>+91 92184 67515</a>
                <span style={{ color: '#94A3B8' }}>/</span>
                <a href="tel:+917905602136" style={{ fontWeight: 800, color: '#0B2340', textDecoration: 'none' }}>+91 79056 02136</a>
              </div>
              <span style={{ color: '#F59E0B' }}>|</span>
              <a
                href="https://wa.me/919218467515?text=Hello%20Help%20Desk,%20I%20have%20an%20enquiry%20regarding%20Phulera%20gazette%20and%20research%20sources."
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#047857', fontWeight: 800, fontSize: '0.82rem', textDecoration: 'none' }}
              >
                <MessageSquare size={14} /> व्हाट्सएप: 9218467515
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
