import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SourceCard from '../components/SourceCard';
import EnquiryForm from '../components/EnquiryForm';
import {
  Train,
  Factory,
  Truck,
  Building2,
  AlertTriangle,
  CheckCircle2,
  Phone,
  MessageSquare,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import './Infrastructure.css';

export default function Infrastructure() {
  useEffect(() => {
    document.title = "अवसंरचना एवं WDFC गलियारा | New Phulera Smart City Infrastructure Evidence";
  }, []);

  return (
    <div className="infrastructure-page" id="main-content">
      {/* SARKARI BREADCRUMB BAR */}
      <div className="gov-breadcrumb-bar">
        <div className="container gov-breadcrumb-bar__inner">
          <Link to="/">मुख्य पृष्ठ (Home)</Link>
          <ChevronRight size={13} />
          <span>क्षेत्रीय अवसंरचना</span>
          <ChevronRight size={13} />
          <span className="current">अवसंरचना एवं WDFC कॉरिडोर (Infrastructure)</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <HeroSection
        label="EVIDENCE BEFORE EXCITEMENT"
        hindiTitle="क्षेत्रीय विकास की आधारशिला: मालभाड़ा गलियारा एवं औद्योगिक नोड्स"
        title="Infrastructure Driving the Regional Story"
        subtitle="GOVERNMENT ORDERS, RAILWAY CORRIDORS &amp; REGIONAL PLANNING"
        description="हम प्रचार और अतिशयोक्ति को अलग कर केवल प्रमाणित सरकारी दस्तावेजों (DFCCIL, RIICO, राजस्व विभाग) पर आधारित तथ्य प्रस्तुत करते हैं।"
        buttons={[
          { text: "राजपत्र एवं स्रोत (VIEW SOURCES)", to: "/research", variant: "primary" },
          { text: "निवेश मार्गदर्शिका (INVESTMENT GUIDE)", to: "/investment-guide", variant: "secondary" }
        ]}
      />

      {/* CORE CAUTIONARY NOTICE */}
      <div className="gov-inner-notice-bar">
        <div className="container gov-inb-inner">
          <AlertTriangle size={18} className="gov-inb-icon" />
          <p>
            <strong>संस्थागत अन्वेषण अधिदेश:</strong> बुनियादी ढांचा केवल अवसर पैदा करता है, किसी विशिष्ट भूमि पार्सल के मूल्य में गारंटीकृत वृद्धि नहीं। किसी भी संपत्ति सौदे से पूर्व भौतिक पक्के रास्ते, जमाबंदी (Apna Khata) एवं विधिक रूपांतरण (Section 90-A) का स्वतंत्र सत्यापन अनिवार्य है। सहायता हेतु कॉल करें: <strong>+91 92184 67515 / +91 79056 02136</strong>
          </p>
        </div>
      </div>

      {/* SECTION: 4 VERIFIED SOURCE CARDS */}
      <section className="section bg-white sources-section">
        <div className="container">
          <div className="gov-section-header centered">
            <span className="gov-section-header__hindi">सत्यापित आधिकारिक सरकारी साक्ष्य</span>
            <h2 className="gov-section-header__title">Verified Official Infrastructure Sources</h2>
            <p className="gov-section-header__desc">
              Direct access to documented government press releases, administrative sanctions, and industrial notifications validating the Phulera corridor thesis.
            </p>
          </div>

          <div className="grid-2 sources-grid">
            <SourceCard
              icon={<Train size={24} />}
              title="WESTERN DEDICATED FREIGHT CORRIDOR (WDFC)"
              description="DFCCIL has officially documented the Ateli–Phulera section with successful 100 kmph trial runs, confirming Phulera's high-capacity rail freight role."
              sourceUrl="https://dfccil.com/upload/DFCCIL_Press_Release_English_Trial_Run_with_100_kmph_max_speed_27_03_18.pdf"
              buttonLabel="DFCCIL प्रेस रिलीज देखें →"
            />

            <SourceCard
              icon={<Factory size={24} />}
              title="INDUSTRIAL AREA PHULERA (RIICO 2026)"
              description="RIICO's 2026 orders include a revised administrative sanction approving parcel layouts and infrastructure execution for Industrial Area Phulera."
              sourceUrl="https://riico.rajasthan.gov.in/Orders.aspx"
              buttonLabel="रीको आदेश देखें →"
            />

            <SourceCard
              icon={<Truck size={24} />}
              title="INDUSTRIAL / LOGISTICS SITE STUDY"
              description="Rajasthan Urban Development Department officials inspected Manda, Phulera and Bichoon locations while studying multi-modal logistics opportunities."
              sourceUrl="https://urban.rajasthan.gov.in/press-release/948/174452"
              buttonLabel="नगरीय विकास विज्ञप्ति →"
            />

            <SourceCard
              icon={<Building2 size={24} />}
              title="BICHOON INDUSTRIAL AREA (185 HECTARES)"
              description="RIICO documentation identifies Bichoon as an active industrial-area development node in the wider regional logistics network."
              sourceUrl="https://riico.rajasthan.gov.in/Notification.aspx?menu_id=19"
              buttonLabel="रीको अधिसूचना देखें →"
            />
          </div>
        </div>
      </section>

      {/* SECTION: INFRASTRUCTURE CLASSIFICATION MATRIX */}
      <section className="section section--alt classification-section">
        <div className="container">
          <div className="gov-section-header centered">
            <span className="gov-section-header__hindi">बुनियादी ढांचे की स्थिति का वर्गीकरण</span>
            <h2 className="gov-section-header__title">Understanding Infrastructure Status Rigorously</h2>
            <p className="gov-section-header__desc">
              Professional investors distinguish sharply between operational realities, sanctioned budgets, construction phases, and preliminary proposals.
            </p>
          </div>

          <div className="grid-4 status-grid">
            <div className="status-card status-card--operational">
              <div className="status-card__badge">परिचालन में (OPERATIONAL)</div>
              <h4 className="status-card__title">जमीनी स्तर पर तैयार</h4>
              <p className="status-card__desc">
                Facilities in commercial service with active users (e.g., NH-48 Expressway, Phulera Railway Junction, Dudu Tehsil administrative offices).
              </p>
              <span className="status-card__risk">जोखिम: न्यूनतम / मौजूदा कीमतों में परिलक्षित</span>
            </div>

            <div className="status-card status-card--sanctioned">
              <div className="status-card__badge">प्रशासनिक स्वीकृति (SANCTIONED)</div>
              <h4 className="status-card__title">बजट एवं आदेश स्वीकृत</h4>
              <p className="status-card__desc">
                Gazetted and administratively cleared by government bodies (e.g., RIICO administrative orders for Phulera and Bichoon industrial plot layouts).
              </p>
              <span className="status-card__risk">जोखिम: निम्न-मध्यम / कार्यान्वयन पर निर्भर</span>
            </div>

            <div className="status-card status-card--construction">
              <div className="status-card__badge">निर्माणाधीन (CONSTRUCTION)</div>
              <h4 className="status-card__title">सक्रिय जमीनी कार्य</h4>
              <p className="status-card__desc">
                Contractors mobilized on site with designated completion deadlines (e.g., feeder bypass roads, electrification, and logistics sidings).
              </p>
              <span className="status-card__risk">जोखिम: मध्यम / समयसीमा पर निर्भर</span>
            </div>

            <div className="status-card status-card--proposed">
              <div className="status-card__badge">प्रस्तावित / अध्ययन (PROPOSED)</div>
              <h4 className="status-card__title">प्रारंभिक सर्वेक्षण स्तर</h4>
              <p className="status-card__desc">
                Feasibility surveys, master plan visions, or exploratory studies (e.g., conceptual logistics parks and secondary industrial townships).
              </p>
              <span className="status-card__risk">जोखिम: उच्च / कभी भी अग्रिम प्रीमियम न दें</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: CONNECTIVITY ARTERIES */}
      <section className="section bg-white arteries-section">
        <div className="container">
          <div className="gov-section-header centered">
            <span className="gov-section-header__hindi">प्रमुख क्षेत्रीय परिवहन गलियारे</span>
            <h2 className="gov-section-header__title">Key Transport Artery Breakdowns</h2>
            <p className="gov-section-header__desc">
              Detailed inspection of the multi-modal freight, railway, and national highway corridors serving the Phulera–Dudu ecosystem.
            </p>
          </div>

          <div className="grid-3 arteries-grid">
            <div className="artery-card">
              <div className="artery-card__header">
                <Train size={24} className="artery-card__icon" />
                <h3>WDFC Rail Freight Spine</h3>
              </div>
              <p className="artery-card__lead">दादरी (उ.प्र.) से जेएनपीटी (मुंबई) समर्पित रेल गलियारा</p>
              <ul className="artery-card__list">
                <li><CheckCircle2 size={16} /> 1,504 km dedicated electrified double-track high-axle freight artery.</li>
                <li><CheckCircle2 size={16} /> Ateli–Phulera section validated for 100 km/h heavy freight operations.</li>
                <li><CheckCircle2 size={16} /> Drastically reduces logistics turnaround times to Gujarat and Maharashtra ports.</li>
              </ul>
            </div>

            <div className="artery-card">
              <div className="artery-card__header">
                <Truck size={24} className="artery-card__icon" />
                <h3>NH-48 Golden Quadrilateral</h3>
              </div>
              <p className="artery-card__lead">दिल्ली-जयपुर-अजमेर-मुंबई राष्ट्रीय एक्सप्रेसवे गलियारा</p>
              <ul className="artery-card__list">
                <li><CheckCircle2 size={16} /> 6-to-8 lane access-controlled highway passing through Dudu hub (~7 km from Dobri).</li>
                <li><CheckCircle2 size={16} /> Direct connectivity linking industrial freight directly to Jaipur in ~45 mins.</li>
                <li><CheckCircle2 size={16} /> Key truck terminals, warehousing clusters, and petrol distribution stops.</li>
              </ul>
            </div>

            <div className="artery-card">
              <div className="artery-card__header">
                <Factory size={24} className="artery-card__icon" />
                <h3>RIICO Industrial Clusters</h3>
              </div>
              <p className="artery-card__lead">राजस्थान राज्य औद्योगिक विकास एवं निवेश निगम (RIICO)</p>
              <ul className="artery-card__list">
                <li><CheckCircle2 size={16} /> Sanctioned industrial zones at Phulera and adjacent Bichoon area.</li>
                <li><CheckCircle2 size={16} /> Master-planned electricity, drainage, and paved access roads.</li>
                <li><CheckCircle2 size={16} /> Targeted toward packaging, warehousing, mineral, and agro-industries.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: INVESTOR ENQUIRY */}
      <section className="section section--alt enquiry-cta-section">
        <div className="container">
          <div className="gov-enquiry-layout">
            <div className="gov-enquiry-info">
              <span className="gov-section-header__hindi">अवसंरचना सत्यापन परामर्श</span>
              <h2 className="gov-section-header__title">Verify Infrastructure Near Your Target Parcel</h2>
              <p className="gov-section-header__desc">
                Do not commit to land based on verbal broker promises. Let our research team help you match your parcel against official RIICO boundaries and DFCCIL alignments.
              </p>

              {/* Direct Hotlines Box */}
              <div className="gov-direct-helplines-card">
                <div className="gov-dh-head">
                  <Phone size={18} className="gov-dh-head-icon" />
                  <strong>अवसंरचना अनुसंधान डेस्क (DIRECT HOTLINES)</strong>
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
                      href="https://wa.me/919218467515?text=Hello%20Help%20Desk,%20I%20have%20an%20enquiry%20regarding%20Phulera%20WDFC%20and%20infrastructure."
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

              <div className="gov-notice-box mt-4">
                <ShieldCheck size={20} className="gov-notice-box__icon" />
                <p className="gov-notice-box__desc">
                  <strong>सत्यापन प्रोटोकॉल:</strong> बयाना राशि देने से पूर्व राजस्व जमाबंदी (RoR), सजरा नक्शा और सार्वजनिक निर्माण विभाग (PWD) की सड़क चौड़ाई की आधिकारिक पुष्टि अवश्य करें।
                </p>
              </div>
            </div>

            <div className="gov-enquiry-form-card">
              <div className="gov-card__header">
                <span className="gov-card__header-title">अवसंरचना पूछताछ पत्र (ENQUIRY FORM)</span>
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
