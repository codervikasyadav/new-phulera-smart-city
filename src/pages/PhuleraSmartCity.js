import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import EnquiryForm from '../components/EnquiryForm';
import {
  Network,
  Factory,
  MapPin,
  Stethoscope,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Phone,
  MessageSquare,
  ChevronRight,
  Train
} from 'lucide-react';
import './PhuleraSmartCity.css';

export default function PhuleraSmartCity() {
  useEffect(() => {
    document.title = "फुलेरा स्मार्ट सिटी विजन | Phulera Smart City Regional Concept & Research";
  }, []);

  return (
    <div className="smart-city-page" id="main-content">
      {/* SARKARI BREADCRUMB BAR */}
      <div className="gov-breadcrumb-bar">
        <div className="container gov-breadcrumb-bar__inner">
          <Link to="/">मुख्य पृष्ठ (Home)</Link>
          <ChevronRight size={13} />
          <span>क्षेत्रीय विकास रूपरेखा</span>
          <ChevronRight size={13} />
          <span className="current">फुलेरा स्मार्ट सिटी विजन (Phulera Vision)</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <HeroSection
        label="REGIONAL CORRIDOR VISION"
        hindiTitle="नया फुलेरा स्मार्ट सिटी: अवधारणा, तथ्य एवं विजन"
        title="What New Phulera Smart City Means on This Website"
        subtitle="AN INDEPENDENT REGIONAL DEVELOPMENT AND RESEARCH FRAMEWORK"
        description="यह पश्चिमी जयपुर गलियारे में रेलवे मालभाड़ा (WDFC), औद्योगिक विकास (RIICO), सड़क अवसंरचना (NH-48) और क्षेत्रीय कस्बों (दोबरी, दूदू, सांभर) के सुनियोजित विकास के अध्ययन हेतु एक स्वतंत्र अनुसंधान मंच है।"
        buttons={[
          { text: "अवसंरचना साक्ष्य देखें (EVIDENCE)", to: "/infrastructure", variant: "primary" },
          { text: "निवेश मार्गदर्शिका (INVESTMENT GUIDE)", to: "/investment-guide", variant: "secondary" }
        ]}
      />

      {/* CORE CLARIFICATION NOTICE */}
      <div className="gov-inner-notice-bar">
        <div className="container gov-inb-inner">
          <AlertCircle size={18} className="gov-inb-icon" />
          <p>
            <strong>पारदर्शी विधिक घोषणा:</strong> 'न्यू फुलेरा स्मार्ट सिटी' एक निजी क्षेत्रीय अनुसंधान एवं सूचना मंच है। यह भारत सरकार के केंद्रीय '100 स्मार्ट सिटीज मिशन' का आधिकारिक सरकारी पोर्टल नहीं है। हमारा उद्देश्य निवेशकों को केवल सत्यापित प्राथमिक साक्ष्यों के आधार पर तथ्यात्मक जानकारी प्रदान करना है। सहायता हेतु कॉल करें: <strong>+91 92184 67515 / +91 79056 02136</strong>
          </p>
        </div>
      </div>

      {/* SECTION: FIVE PILLARS OF SMART REGIONAL GROWTH */}
      <section className="section bg-white pillars-section">
        <div className="container">
          <div className="gov-section-header centered">
            <span className="gov-section-header__hindi">स्मार्ट क्षेत्रीय विकास के पांच मुख्य आधारस्तम्भ</span>
            <h2 className="gov-section-header__title">Five Pillars of Smart Regional Growth</h2>
            <p className="gov-section-header__desc">
              A comprehensive methodology evaluating physical connectivity, manufacturing nodes, micro-market demographics, essential public services, and rigorous title verification.
            </p>
          </div>

          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-card__header">
                <div className="pillar-card__icon-wrap">
                  <Network size={28} />
                </div>
                <span className="pillar-card__num">स्तम्भ 01</span>
              </div>
              <h3 className="pillar-card__title">परिवहन एवं कनेक्टिविटी (CONNECTIVITY)</h3>
              <p className="pillar-card__lead">Rail, freight and road networks.</p>
              <p className="pillar-card__desc">
                Phulera has historically stood as a vital railway junction in Rajasthan. Modern alignment with the Western Dedicated Freight Corridor (WDFC) and accessibility to NH-48 establish strategic logistics channels connecting North Indian consumption centers with western maritime ports.
              </p>
              <div className="pillar-card__tags">
                <span>DFCCIL Corridor</span>
                <span>Junction Hub</span>
                <span>Expressway Links</span>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-card__header">
                <div className="pillar-card__icon-wrap">
                  <Factory size={28} />
                </div>
                <span className="pillar-card__num">स्तम्भ 02</span>
              </div>
              <h3 className="pillar-card__title">औद्योगिक नोड्स (INDUSTRY)</h3>
              <p className="pillar-card__lead">RIICO areas, logistics and employment nodes.</p>
              <p className="pillar-card__desc">
                State-level industrial planning by RIICO around Industrial Area Phulera and neighboring Bichoon creates formalized spaces for manufacturing, warehousing, agro-processing, and ancillary supply chains, laying the groundwork for regional job creation.
              </p>
              <div className="pillar-card__tags">
                <span>RIICO Sanctions</span>
                <span>Bichoon Cluster</span>
                <span>Warehousing</span>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-card__header">
                <div className="pillar-card__icon-wrap">
                  <MapPin size={28} />
                </div>
                <span className="pillar-card__num">स्तम्भ 03</span>
              </div>
              <h3 className="pillar-card__title">क्षेत्रीय कस्बे व गांव (VILLAGES)</h3>
              <p className="pillar-card__lead">Micro-markets around Phulera, Dudu and Sambhar.</p>
              <p className="pillar-card__desc">
                Regional growth is not confined to municipal limits. Surrounding micro-markets like Dobri, Dudu, Chaparwada, and Sambhar function as integral residential, agricultural, and plotted sub-clusters offering diverse land dynamics.
              </p>
              <div className="pillar-card__tags">
                <span>Dobri Cluster</span>
                <span>Dudu Gateway</span>
                <span>Sambhar Basin</span>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-card__header">
                <div className="pillar-card__icon-wrap">
                  <Stethoscope size={28} />
                </div>
                <span className="pillar-card__num">स्तम्भ 04</span>
              </div>
              <h3 className="pillar-card__title">नागरिक सेवाएं (SERVICES)</h3>
              <p className="pillar-card__lead">Education, healthcare, retail and local amenities.</p>
              <p className="pillar-card__desc">
                Sustainable urban settlement requires social infrastructure. As industrial employment expands, schools, healthcare clinics, retail centers, and dependable civic services will progressively upgrade local quality of life.
              </p>
              <div className="pillar-card__tags">
                <span>Healthcare</span>
                <span>Secondary Schools</span>
                <span>Retail Nodes</span>
              </div>
            </div>

            <div className="pillar-card pillar-card--highlight">
              <div className="pillar-card__header">
                <div className="pillar-card__icon-wrap">
                  <ShieldCheck size={28} />
                </div>
                <span className="pillar-card__num">स्तम्भ 05</span>
              </div>
              <h3 className="pillar-card__title">विधिक अनुशासन (DUE DILIGENCE)</h3>
              <p className="pillar-card__lead">Investment quality depends on the specific parcel, not the brand name.</p>
              <p className="pillar-card__desc">
                A promising macro thesis never compensates for defective micro documentation. Independent legal title clearance, certified land-use records (90A conversion), and physical access validation remain the ultimate safeguard.
              </p>
              <div className="pillar-card__tags">
                <span>Title Chain</span>
                <span>90A Conversion</span>
                <span>Access Verification</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: REGIONAL STRATEGIC POSITIONING */}
      <section className="section section--alt strategic-section">
        <div className="container">
          <div className="gov-section-header centered">
            <span className="gov-section-header__hindi">भौगोलिक एवं आर्थिक अवस्थिति</span>
            <h2 className="gov-section-header__title">The Geographic &amp; Economic Positioning</h2>
            <p className="gov-section-header__desc">
              Understanding why the western corridor between Jaipur, Ajmer, and the Sambhar salt basin represents an evolving territorial crossroad.
            </p>
          </div>

          <div className="grid-2 strategic-grid">
            <div className="gov-card">
              <div className="gov-card__header">
                <span className="gov-card__header-title">रेलवे जंक्शन से मालभाड़ा गलियारा</span>
                <Train size={20} color="#FF9933" />
              </div>
              <div className="gov-card__body">
                <p>
                  Phulera Junction has long served as an indispensable railway hub within the North Western Railway network. Its expansive yard facilities, crew changing points, and direct interconnectivity between Jaipur, Ajmer, and Ahmedabad form an existing operational logistical foundation.
                </p>
                <p>
                  With the advent of the Dedicated Freight Corridor Corporation of India Limited (DFCCIL) trial runs and commercial freight operationalization through the Ateli–Phulera stretch, the region transitions from a passenger node into a critical industrial freight artery capable of handling heavy-haul double-stack container rakes.
                </p>
                <div className="gov-card-check">
                  <CheckCircle2 size={16} /> <span>100 किमी/घंटा गति परीक्षण प्रमाणित मालभाड़ा क्षमता</span>
                </div>
              </div>
            </div>

            <div className="gov-card">
              <div className="gov-card__header">
                <span className="gov-card__header-title">जयपुर का पश्चिमी क्षेत्रीय विस्तार</span>
                <Factory size={20} color="#FF9933" />
              </div>
              <div className="gov-card__body">
                <p>
                  As the Jaipur metropolitan region expands outward along arterial highways, commercial and plotting pressure shifts along the western transit axis. Traditional urban hubs encounter elevated land valuation, high initial ticket sizes, and infrastructure congestion.
                </p>
                <p>
                  The Phulera–Dudu belt provides an accessible regional alternative characterized by large contiguous land parcels, competitive cost basis, and direct proximity to major transport corridors including NH-48 (Delhi–Mumbai Expressway feeder) and the Sambhar Lake economic ecosystem.
                </p>
                <div className="gov-card-check">
                  <CheckCircle2 size={16} /> <span>एनएच-48 एवं रीको बिचून/फुलेरा से सीधा जुड़ाव</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: INVESTOR ENQUIRY */}
      <section className="section bg-white enquiry-cta-section">
        <div className="container">
          <div className="gov-enquiry-layout">
            <div className="gov-enquiry-info">
              <span className="gov-section-header__hindi">क्षेत्रीय विजन परामर्श</span>
              <h2 className="gov-section-header__title">Inquire About Phulera Regional Opportunities</h2>
              <p className="gov-section-header__desc">
                Whether you are evaluating residential plots, commercial frontage, or long-term agricultural parcels, our advisory team provides verified data, boundary assessments, and regional planning insights.
              </p>

              {/* Direct Hotlines Box */}
              <div className="gov-direct-helplines-card">
                <div className="gov-dh-head">
                  <Phone size={18} className="gov-dh-head-icon" />
                  <strong>क्षेत्रीय सहायता केंद्र (DIRECT HOTLINES)</strong>
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
                      href="https://wa.me/919218467515?text=Hello%20Help%20Desk,%20I%20have%20an%20enquiry%20regarding%20Phulera%20Smart%20City%20Vision."
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
                <span className="gov-card__header-title">विजन पूछताछ पत्र (VISION ENQUIRY FORM)</span>
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
