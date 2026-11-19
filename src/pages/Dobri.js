import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import EnquiryForm from '../components/EnquiryForm';
import { HighwayMilestone } from '../components/OfficialLogos';
import {
  Navigation,
  Landmark,
  Factory,
  Clock,
  ExternalLink,
  CheckCircle2,
  Route,
  Trees,
  Phone,
  MessageSquare,
  ShieldAlert,
  ChevronRight
} from 'lucide-react';
import './Dobri.css';

const nearbyPlaces = [
  {
    name: "Dudu (दूदू)",
    distance: "7 km*",
    direction: "उत्तर-पूर्व (North-East)",
    route: "NH-48",
    description: "उप-जिला प्रशासनिक मुख्यालय, तहसील कार्यालय, बैंक, अस्पताल एवं दिल्ली-जयपुर-अजमेर राष्ट्रीय राजमार्ग पहुंच।"
  },
  {
    name: "Phulera (फुलेरा जंक्शन)",
    distance: "31 km*",
    direction: "उत्तर (North)",
    route: "MDR-85",
    description: "प्रमुख रेलवे जंक्शन, उत्तर पश्चिम रेलवे यार्ड एवं पश्चिमी समर्पित मालभाड़ा कॉरिडोर (WDFC) का प्रमुख परिचालन नोड।"
  },
  {
    name: "Sambhar (सांभर झील)",
    distance: "38 km*",
    direction: "उत्तर-पश्चिम (North-West)",
    route: "SH-2",
    description: "विश्व प्रसिद्ध अंतर्देशीय खारे पानी की झील, रामसर आर्द्रभूमि, ऐतिहासिक नमक उत्पादन केंद्र एवं पर्यटन स्थल।"
  },
  {
    name: "Malpura (मालपुरा)",
    distance: "30 km*",
    direction: "दक्षिण (South)",
    route: "SH-12",
    description: "टोंक जिला व्यापारिक मंडी, कृषि उत्पाद विपणन एवं क्षेत्रीय पशुधन/अनाज व्यापार केंद्र।"
  },
  {
    name: "Jaipur (जयपुर शहर)",
    distance: "60 km*",
    direction: "पूर्व (East)",
    route: "NH-48",
    description: "राजस्थान की राजधानी, अंतरराष्ट्रीय हवाई अड्डा, उच्च स्तरीय स्वास्थ्य संस्थान एवं प्रमुख आर्थिक केंद्र।"
  },
  {
    name: "Bichoon (बिचून रीको नोड)",
    distance: "26 km*",
    direction: "उत्तर-पूर्व (North-East)",
    route: "Rural Arterial",
    description: "रीको द्वारा अधिसूचित औद्योगिक क्षेत्र (185 हेक्टेयर), लॉजिस्टिक्स एवं विनिर्माण इकाइयों हेतु प्रस्तावित क्लस्टर।"
  },
  {
    name: "Chaparwada (छापरवाड़ा बांध)",
    distance: "14 km*",
    direction: "पश्चिम (West)",
    route: "Feeder Road",
    description: "ऐतिहासिक चिनाई बांध एवं सिंचाई जलाशय जो स्थानीय भूजल स्तर तथा कृषि पारिस्थितिकी को संबल प्रदान करता है।"
  },
  {
    name: "Pachewar (पचेवर गढ़)",
    distance: "22 km*",
    direction: "दक्षिण-पश्चिम (South-West)",
    route: "Rural Arterial",
    description: "प्रसिद्ध हेरिटेज पर्यटन गंतव्य (किला पचेवर गढ़), जो देशी एवं विदेशी पर्यटकों को आकर्षित करता है।"
  }
];

export default function Dobri() {
  useEffect(() => {
    document.title = "दोबरी माइक्रो-मार्केट | Dobri Regional Spotlight | New Phulera Smart City";
  }, []);

  return (
    <div className="dobri-page" id="main-content">
      {/* SARKARI BREADCRUMB BAR */}
      <div className="gov-breadcrumb-bar">
        <div className="container gov-breadcrumb-bar__inner">
          <Link to="/">मुख्य पृष्ठ (Home)</Link>
          <ChevronRight size={13} />
          <span>क्षेत्रीय माइक्रो-मार्केट</span>
          <ChevronRight size={13} />
          <span className="current">दोबरी क्षेत्र (Dobri Spotlight)</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <HeroSection
        label="REGIONAL MICRO-MARKET SPOTLIGHT"
        hindiTitle="दोबरी: क्षेत्रीय विकास परिदृश्य में एक रणनीतिक गांव"
        title="Dobri: A Village Inside a Bigger Growth Story"
        subtitle="MICRO-MARKET SPOTLIGHT IN WESTERN JAIPUR DISTRICT"
        description="दोबरी को फुलेरा, दूदू, सांभर और मालपुरा के व्यापक आर्थिक और अवसंरचना नेटवर्क से जुड़े एक क्षेत्रीय नोड के रूप में विश्लेषित किया गया है।"
        buttons={[
          { text: "स्थानिक नक्शा देखें (VIEW MAP)", to: "#map-section", variant: "primary" },
          { text: "नागरिक पूछताछ (SUBMIT ENQUIRY)", to: "#enquiry-section", variant: "secondary" }
        ]}
      />

      {/* SARKARI NOTICE BAR */}
      <div className="gov-inner-notice-bar">
        <div className="container gov-inb-inner">
          <ShieldAlert size={18} className="gov-inb-icon" />
          <p>
            <strong>राजस्व एवं भौतिक सत्यापन निर्देश:</strong> दोबरी क्षेत्र में किसी भी भूमि पार्सल के अध्ययन हेतु राजस्व नक्शा (सजरा), नामांतरण (Mutation), खसरा जमाबंदी एवं भौतिक पक्के रास्ते की स्थिति का स्वयं सत्यापन अनिवार्य है। सहायता हेतु कॉल करें: <strong>+91 92184 67515 / +91 79056 02136</strong>
          </p>
        </div>
      </div>

      {/* SECTION: AUTHENTIC HIGHWAY MILESTONES DISPLAY */}
      <section className="section bg-white distance-milestones-section">
        <div className="container">
          <div className="gov-section-header centered">
            <span className="gov-section-header__hindi">सत्यापित राजमार्ग दूरियां एवं मील के पत्थर</span>
            <h2 className="gov-section-header__title">Verified Highway Milestones from Dobri</h2>
            <p className="gov-section-header__desc">
              National Highway &amp; State Highway milestone representations displaying approximate road distances from Dobri to key administrative and transport junctions.
            </p>
          </div>

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
                  <strong>दूदू (Dudu)</strong>
                  <span>उप-जिला मुख्यालय • 7 KM*</span>
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
                  <strong>फुलेरा (Phulera)</strong>
                  <span>रेलवे जंक्शन • 31 KM*</span>
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
                  <strong>सांभर (Sambhar)</strong>
                  <span>नमक झील व हेरिटेज • 38 KM*</span>
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
                  <strong>मालपुरा (Malpura)</strong>
                  <span>कृषि मंडी • 30 KM*</span>
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
                  <strong>जयपुर (Jaipur)</strong>
                  <span>राज्य राजधानी • 60 KM*</span>
                </div>
              </div>
            </div>

            <p className="gov-distance-note">
              *अनुमानित सड़क दूरियां पोर्टल संदर्भ हेतु हैं। वास्तविक दूरी एवं यात्रा समय मार्ग की स्थिति पर निर्भर करता है।
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: 4 CRITICAL EVALUATION PILLARS */}
      <section className="section section--alt dobri-pillars">
        <div className="container">
          <div className="gov-section-header centered">
            <span className="gov-section-header__hindi">भूमि अन्वेषण के चार मुख्य मानदंड</span>
            <h2 className="gov-section-header__title">Critical Considerations for Dobri Land Research</h2>
            <p className="gov-section-header__desc">
              Essential technical and legal parameters every prospective buyer must scrutinize prior to exploring land parcels in Dobri.
            </p>
          </div>

          <div className="grid-2">
            <div className="gov-card">
              <div className="gov-card__header">
                <span className="gov-card__header-title">01. पक्का पहुंच मार्ग (ROAD ACCESS)</span>
                <Navigation size={20} color="#FF9933" />
              </div>
              <div className="gov-card__body">
                <p>
                  Verify approach road, legal access and actual distance for the property you study. Ensure the parcel enjoys a registered right-of-way (rasta) documented in the official revenue map (Sajra), rather than relying merely on informal field paths.
                </p>
                <div className="gov-card-check">
                  <CheckCircle2 size={16} /> <span>राजस्व सजरा नक्शे में पक्के रास्ते की चौड़ाई जांचें</span>
                </div>
              </div>
            </div>

            <div className="gov-card">
              <div className="gov-card__header">
                <span className="gov-card__header-title">02. विरासत व जल निकाय (HERITAGE CONTEXT)</span>
                <Landmark size={20} color="#FF9933" />
              </div>
              <div className="gov-card__body">
                <p>
                  Chaparwada masonry dam and Pachewar Fort add regional identity and tourism context. Scenic catchment basins and historical architectures reflect traditional Rajasthani character, offering value for agro-tourism and leisure setups.
                </p>
                <div className="gov-card-check">
                  <CheckCircle2 size={16} /> <span>छापरवाड़ा बांध एवं पचेवर गढ़ पर्यटन निकटता</span>
                </div>
              </div>
            </div>

            <div className="gov-card">
              <div className="gov-card__header">
                <span className="gov-card__header-title">03. औद्योगिक प्रभाव (INDUSTRIAL CONTEXT)</span>
                <Factory size={20} color="#FF9933" />
              </div>
              <div className="gov-card__body">
                <p>
                  Malpura and the wider RIICO network (Phulera, Bichoon) are useful economic reference points. Expanding supply-chain nodes between Phulera, Bichoon, and Dudu generate peripheral economic spillover across nearby rural belts.
                </p>
                <div className="gov-card-check">
                  <CheckCircle2 size={16} /> <span>रीको बिचून एवं फुलेरा औद्योगिक नोड्स का प्रभाव</span>
                </div>
              </div>
            </div>

            <div className="gov-card">
              <div className="gov-card__header">
                <span className="gov-card__header-title">04. 5-10 वर्ष का धैर्य (LONG-TERM LENS)</span>
                <Clock size={20} color="#FF9933" />
              </div>
              <div className="gov-card__body">
                <p>
                  Do not confuse emerging infrastructure with guaranteed appreciation. Rural land investments demand a 5-to-10 year holding horizon, clear liquidity expectations, and conservative capital allocations.
                </p>
                <div className="gov-card-check">
                  <CheckCircle2 size={16} /> <span>दीर्घकालिक मूल्यांकन एवं पूंजी सुरक्षा अनुशासन</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: VISUAL GALLERY & TOPOGRAPHY */}
      <section className="section section--white gallery-section">
        <div className="container">
          <div className="gov-section-header centered">
            <span className="gov-section-header__hindi">भू-आकृति एवं स्थलाकृति परिदृश्य</span>
            <h2 className="gov-section-header__title">Dobri &amp; Surrounding Rural Topography</h2>
            <p className="gov-section-header__desc">
              Visual overview of terrain character, open vistas, approach highways, and agricultural topography defining the corridor.
            </p>
          </div>

          <div className="gallery-grid">
            <div className="gallery-card">
              <div className="gallery-card__visual gallery-card__visual--1">
                <Route size={36} />
              </div>
              <div className="gallery-card__caption">
                <h4>धमनी संपर्क मार्ग (Feeder Connectivity)</h4>
                <p>Paved MDR and village linking roads connecting Dobri inward to Dudu and the Jaipur–Ajmer expressway.</p>
              </div>
            </div>

            <div className="gallery-card">
              <div className="gallery-card__visual gallery-card__visual--2">
                <Trees size={36} />
              </div>
              <div className="gallery-card__caption">
                <h4>खुली कृषि भूमि (Agricultural Acreage)</h4>
                <p>Spacious, level farmland parcels suitable for long-term holding, agro-projects, or managed plantations.</p>
              </div>
            </div>

            <div className="gallery-card">
              <div className="gallery-card__visual gallery-card__visual--3">
                <Landmark size={36} />
              </div>
              <div className="gallery-card__caption">
                <h4>जलाशय एवं सांस्कृतिक धरोहर (Ecology &amp; Heritage)</h4>
                <p>Scenic catchment basins and historical architectures reflecting traditional Rajasthani rural character.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: NEARBY PLACES DETAILED SARKARI REGISTRY */}
      <section className="section section--alt nearby-section">
        <div className="container">
          <div className="gov-section-header centered">
            <span className="gov-section-header__hindi">निकटवर्ती कस्बे, प्रशासनिक केंद्र एवं नोड्स</span>
            <h2 className="gov-section-header__title">Corridor Settlement Registry &amp; Infrastructure Matrix</h2>
            <p className="gov-section-header__desc">
              Detailed registry of surrounding regional settlements, approximate road distance from Dobri, connecting route, and economic function.
            </p>
          </div>

          <div className="gov-table-container">
            <table className="gov-table">
              <thead>
                <tr>
                  <th style={{ width: '80px' }}>क्र.सं.</th>
                  <th style={{ width: '180px' }}>स्थान / कस्बा (Place)</th>
                  <th style={{ width: '120px' }}>अनुमानित दूरी</th>
                  <th style={{ width: '150px' }}>मार्ग (Route)</th>
                  <th style={{ width: '140px' }}>दिशा (Direction)</th>
                  <th>कार्यात्मक विवरण एवं प्रशासनिक महत्व (Role)</th>
                </tr>
              </thead>
              <tbody>
                {nearbyPlaces.map((place, idx) => (
                  <tr key={idx}>
                    <td className="gov-td-center"><strong>0{idx + 1}</strong></td>
                    <td>
                      <strong style={{ color: '#0B2340' }}>{place.name}</strong>
                    </td>
                    <td>
                      <span className="gov-table-badge-active" style={{ background: '#FEF3C7', color: '#92400E' }}>
                        {place.distance}
                      </span>
                    </td>
                    <td>
                      <span className="gov-table-ref">{place.route}</span>
                    </td>
                    <td>
                      <small style={{ color: '#64748B' }}>{place.direction}</small>
                    </td>
                    <td>
                      <p style={{ margin: 0, fontSize: '0.8rem', color: '#334155' }}>
                        {place.description}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION: INTERACTIVE REGIONAL MAP */}
      <section className="section section--white map-section" id="map-section">
        <div className="container">
          <div className="gov-section-header centered">
            <span className="gov-section-header__hindi">मानचित्र एवं स्थानिक अवस्थिति</span>
            <h2 className="gov-section-header__title">Regional Geographic Map &amp; Access Arteries</h2>
            <p className="gov-section-header__desc">
              Geographical positioning of Dobri, Dudu, and Phulera in Jaipur district along the NH-48 corridor.
            </p>
          </div>

          <div className="map-container">
            <div className="map-frame">
              <iframe
                title="Regional Map - Dudu Phulera Dobri Area"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114167.92209727409!2d75.14811867119253!3d26.79015183857503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4ea5254199c9%3A0xebe66d21f8a846f4!2sDudu%2C%20Rajasthan%20303008!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="map-actions">
              <div className="map-actions__info">
                <strong>सत्यापित प्रशासनिक केंद्र:</strong> Dudu Tehsil Headquarters (~7 km from Dobri) on NH-48.
              </div>
              <a
                href="https://www.google.com/maps/search/Dudu+Rajasthan"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gov-primary"
              >
                गूगल मैप पर देखें (OPEN GOOGLE MAPS) <ExternalLink size={14} />
              </a>
            </div>
            <p className="map-note">
              नोट: नक्शा दूदू उप-जिला पर केंद्रित क्षेत्रीय क्षेत्र को दर्शाता है। किसी भी विशिष्ट भूमि पार्सल के खसरा नंबर, सजरा नक्शा और सीमांकन हेतु संबंधित पटवारी एवं उप-पंजीयक कार्यालय से पुष्टि अनिवार्य है।
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: DIRECT HELP DESK & ENQUIRY */}
      <section className="section section--alt enquiry-cta-section" id="enquiry-section">
        <div className="container">
          <div className="gov-enquiry-layout">
            <div className="gov-enquiry-info">
              <span className="gov-section-header__hindi">दोबरी भूमि परामर्श डेस्क</span>
              <h2 className="gov-section-header__title">Dobri Land Research &amp; Advisory Desk</h2>
              <p className="gov-section-header__desc">
                Contact our regional research desk to review cadastral road access records, revenue document checklists, and local pricing trends in Dobri.
              </p>

              {/* Direct Hotlines Box */}
              <div className="gov-direct-helplines-card">
                <div className="gov-dh-head">
                  <Phone size={18} className="gov-dh-head-icon" />
                  <strong>दोबरी सहायता केंद्र (DIRECT HOTLINES)</strong>
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
                      href="https://wa.me/919218467515?text=Hello%20Help%20Desk,%20I%20have%20an%20enquiry%20regarding%20Dobri%20land%20and%20distances."
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
                <ShieldAlert size={20} className="gov-notice-box__icon" />
                <p className="gov-notice-box__desc">
                  <strong>विधिक सावधानी:</strong> कोई भी टोकन राशि देने से पूर्व खसरा नकल (Jamabandi), नामांतरण (Mutation), और मौके पर रास्ते का भौतिक सत्यापन अवश्य करें।
                </p>
              </div>
            </div>

            <div className="gov-enquiry-form-card">
              <div className="gov-card__header">
                <span className="gov-card__header-title">दोबरी पूछताछ पत्र (DOBRI ENQUIRY FORM)</span>
                <span className="gov-doc-tag">INDEPENDENT DESK</span>
              </div>
              <div className="gov-card__body">
                <EnquiryForm defaultLocation="Dobri" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
