import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { AlertTriangle, ChevronRight } from 'lucide-react';
import './Disclaimer.css';

export default function Disclaimer() {
  useEffect(() => {
    document.title = "विधिक प्रकटीकरण एवं अस्वीकरण | New Phulera Smart City Legal Disclaimer";
  }, []);

  return (
    <div className="disclaimer-page" id="main-content">
      {/* SARKARI BREADCRUMB BAR */}
      <div className="gov-breadcrumb-bar">
        <div className="container gov-breadcrumb-bar__inner">
          <Link to="/">मुख्य पृष्ठ (Home)</Link>
          <ChevronRight size={13} />
          <span>संवैधानिक नीतियां</span>
          <ChevronRight size={13} />
          <span className="current">विधिक अस्वीकरण एवं प्रकटीकरण (Disclaimer)</span>
        </div>
      </div>

      <HeroSection
        label="STATUTORY DISCLOSURE &amp; TRANSPARENCY"
        hindiTitle="संवैधानिक प्रकटीकरण एवं विधिक अस्वीकरण सूचना"
        title="Disclaimer &amp; Advisory Notice"
        subtitle="ESSENTIAL REGULATORY, INFORMATIONAL AND RISK DISCLOSURES"
        description="Please review these essential disclosures regarding brand identity, government non-affiliation, and independent due diligence requirements."
      />

      <section className="section disclaimer-content-section">
        <div className="container">
          <div className="disclaimer-paper">
            {/* CALLOUT BOX */}
            <div className="disclaimer-highlight-box">
              <AlertTriangle size={28} className="disclaimer-highlight-box__icon" />
              <div>
                <h3>गैर-सरकारी संबद्धता एवं पारदर्शी प्रकटीकरण (Mandatory Disclosure)</h3>
                <p>
                  "NEW PHULERA SMART CITY" (न्यू फुलेरा स्मार्ट सिटी) एक स्वतंत्र सूचनात्मक, अनुसंधान एवं निजी संपत्ति अन्वेषण पोर्टल है। यह वेबसाइट भारत सरकार, राजस्थान सरकार, रीको (RIICO), या केंद्रीय '100 स्मार्ट सिटीज मिशन' का आधिकारिक सरकारी पोर्टल नहीं है। हम किसी भी आधिकारिक सरकारी पदनाम, मुहर, प्रमाणीकरण या प्राधिकार का दावा नहीं करते हैं।
                </p>
              </div>
            </div>

            <div className="disclaimer-section">
              <h3>1. Brand Name &amp; Conceptual Scope</h3>
              <p>
                The phrase <em>"New Phulera Smart City"</em> is utilized purely as an informational framework and branding moniker to examine regional development, rail freight connectivity, industrial clustering, and micro-market growth across Phulera, Dobri, Dudu, and Sambhar in Rajasthan. Phulera is not a municipal entity formally designated under the central Smart Cities Mission by the Ministry of Housing and Urban Affairs (MoHUA).
              </p>
            </div>

            <div className="disclaimer-section">
              <h3>2. No Guarantee of Investment Returns or Appreciation</h3>
              <p>
                Real estate investments, particularly in raw rural land, agricultural parcels, and peripheral plotted layouts, entail material risk. <strong>We do not guarantee, forecast, or promise capital appreciation, rental yield, or fixed return on investment (ROI).</strong> Past corridor performance, state infrastructure spending, or industrial notifications do not ensure corresponding market value increases for any individual land parcel.
              </p>
            </div>

            <div className="disclaimer-section">
              <h3>3. Infrastructure Documentation vs. Future Ground Reality</h3>
              <p>
                Infrastructure documentation compiled on this website (including press releases and administrative sanctions from DFCCIL, RIICO, and the Urban Development Department) reflects publicly available records at the time of publication. Proposed projects, feasibility surveys, and administrative sanctions may experience rescheduling, realignment, budgetary revisions, or cancellation by relevant authorities. Never confuse proposed infrastructure with operational completion.
              </p>
            </div>

            <div className="disclaimer-section">
              <h3>4. Independent Due Diligence Mandate</h3>
              <p>
                Prospective buyers and investors must perform exhaustive, independent legal, physical, and financial due diligence before entering into any purchase commitment, memorandum of understanding (MoU), or financial transaction. Essential verifications include, but are not limited to:
              </p>
              <ul>
                <li>Verification of thirty-year registered title deeds and encumbrance certificates via the Sub-Registrar office.</li>
                <li>Computerized Jamabandi (RoR) and Khasra map verification through the official Apna Khata Rajasthan portal.</li>
                <li>Inspection of Section 90-A conversion clearances under the Rajasthan Land Revenue Act where non-agricultural use is intended.</li>
                <li>Physical boundary demarcation (Bhu-Paimaish) by the competent local Revenue Inspector / Halka Patwari.</li>
                <li>Confirmation of unambiguous legal approach road (Sajra rasta) providing registered public access.</li>
              </ul>
            </div>

            <div className="disclaimer-section">
              <h3>5. Distance and Travel Time Approximations</h3>
              <p>
                All geographic distances, travel timelines, and proximity metrics displayed across this website (e.g., Dobri to Dudu ~7 km*, Dobri to Phulera ~31 km*, Dobri to Jaipur ~60 km*) are approximate estimates supplied for general orientational context. Actual road travel distance may vary according to route selected, ongoing road construction, and local detours. Users must verify exact travel routes independently.
              </p>
            </div>

            <div className="disclaimer-section">
              <h3>6. Professional Legal and Financial Advice</h3>
              <p>
                Content published on this website is intended solely for educational, informational, and research purposes. It does not constitute formal legal counsel, investment advice, tax counseling, or licensed financial planning. You are urged to engage independent, licensed legal counsel registered with the Bar Council and certified financial consultants prior to committing investment capital.
              </p>
            </div>

            <div className="disclaimer-section">
              <h3>7. Third-Party Web Links</h3>
              <p>
                Hyperlinks directing users to external websites (e.g., dfccil.com, riico.rajasthan.gov.in, urban.rajasthan.gov.in) are provided for convenience and direct citation of primary statutory sources. We have no control over the availability, security, or continuous accuracy of external domains.
              </p>
            </div>

            <div className="disclaimer-section">
              <h3>8. Limitation of Liability</h3>
              <p>
                To the fullest extent permissible by applicable law, New Phulera Smart City, its founders, analysts, agents, and contributors expressly disclaim all liability for any direct, indirect, consequential, or incidental losses, expenses, or damages arising out of the reliance on, use of, or inability to use the content and data published on this portal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
