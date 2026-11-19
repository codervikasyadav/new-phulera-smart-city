import React, { useState } from 'react';
import { Send, MessageSquare, CheckCircle, AlertCircle, Loader2, Phone } from 'lucide-react';
import './EnquiryForm.css';

const interestOptions = [
  'Residential Plot (आवासीय भूखंड)',
  'Agricultural Land (कृषि खातेदारी)',
  'Commercial / Highway Frontage (व्यावसायिक)',
  'Industrial & Warehousing (औद्योगिक/लॉजिस्टिक्स)',
  'General Regional Research (सामान्य परामर्श)'
];

const propertyTypes = [
  'Dobri Corridor (दोबरी क्षेत्र)',
  'Phulera Junction Area (फुलेरा क्षेत्र)',
  'Dudu (NH-48) Sub-district (दूदू क्षेत्र)',
  'Bichoon Industrial Belt (बिचून क्षेत्र)',
  'Sambhar Lake Vicinity (सांभर क्षेत्र)',
  'Other Regional Parcel (अन्य)'
];

export default function EnquiryForm({ defaultLocation }) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    interest: '',
    propertyType: defaultLocation ? `${defaultLocation} Corridor` : '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'नाम दर्ज करें (Name is required)';
    }
    
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'मोबाइल नंबर दर्ज करें (Mobile number is required)';
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile.trim())) {
      newErrors.mobile = 'वैध 10-अंकीय भारतीय मोबाइल नंबर दर्ज करें (Valid 10-digit mobile required)';
    }
    
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'वैध ईमेल पता दर्ज करें (Valid email required)';
    }
    
    if (!formData.interest) {
      newErrors.interest = 'कृपया अपनी रुचि चुनें (Select your interest)';
    }
    
    if (!formData.propertyType) {
      newErrors.propertyType = 'कृपया प्राथमिकता स्थान चुनें (Select target area)';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitted) return;
    
    if (!validateForm()) return;
    
    setStatus('loading');
    setSubmitted(true);
    
    console.log('Enquiry Data Submitted:', formData);
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (status === 'success') {
    return (
      <div className="enquiry-form__success">
        <CheckCircle size={44} color="#10B981" />
        <h3 style={{ color: '#0B2340', margin: '8px 0 4px' }}>पूछताछ सफलतापूर्वक दर्ज की गई!</h3>
        <p style={{ fontSize: '0.85rem', color: '#475569' }}>
          आपकी पूछताछ क्षेत्रीय अनुसंधान डेस्क को प्राप्त हो गई है। हमारी टीम शीघ्र ही आपसे संपर्क करेगी।
        </p>
        <button
          onClick={() => {
            setStatus('idle');
            setSubmitted(false);
            setFormData({ name: '', mobile: '', email: '', interest: '', propertyType: '', message: '' });
          }}
          className="btn btn-gov-outline"
          style={{ marginTop: '12px', fontSize: '0.8rem' }}
        >
          दूसरी पूछताछ भेजें (New Inquiry)
        </button>
      </div>
    );
  }

  return (
    <div className="enquiry-form">
      <form onSubmit={handleSubmit} noValidate>
        <div className="enquiry-form__group">
          <label htmlFor="name">
            आपका पूरा नाम (Full Name) <span className="required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="नाम दर्ज करें (e.g. Ramesh Sharma)"
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="enquiry-form__error"><AlertCircle size={12} /> {errors.name}</span>}
        </div>

        <div className="enquiry-form__group">
          <label htmlFor="mobile">
            मोबाइल नंबर (Mobile Number) <span className="required">*</span>
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="10-digit Mobile (e.g. 98XXXXXXXX)"
            className={errors.mobile ? 'error' : ''}
            maxLength={10}
          />
          {errors.mobile && <span className="enquiry-form__error"><AlertCircle size={12} /> {errors.mobile}</span>}
        </div>

        <div className="enquiry-form__group">
          <label htmlFor="email">ईमेल पता (Email Address - Optional)</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@example.com"
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="enquiry-form__error"><AlertCircle size={12} /> {errors.email}</span>}
        </div>

        <div className="enquiry-form__row">
          <div className="enquiry-form__group">
            <label htmlFor="interest">
              रुचि का प्रकार (Interest) <span className="required">*</span>
            </label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className={errors.interest ? 'error' : ''}
            >
              <option value="">-- रुचि चुनें --</option>
              {interestOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            {errors.interest && <span className="enquiry-form__error"><AlertCircle size={12} /> {errors.interest}</span>}
          </div>

          <div className="enquiry-form__group">
            <label htmlFor="propertyType">
              लक्षित क्षेत्र (Target Area) <span className="required">*</span>
            </label>
            <select
              id="propertyType"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              className={errors.propertyType ? 'error' : ''}
            >
              <option value="">-- लक्षित क्षेत्र चुनें --</option>
              {propertyTypes.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            {errors.propertyType && <span className="enquiry-form__error"><AlertCircle size={12} /> {errors.propertyType}</span>}
          </div>
        </div>

        <div className="enquiry-form__group">
          <label htmlFor="message">संदेश / बजट / विशिष्ट खसरा या विवरण (Optional)</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="अपनी आवश्यकता या विशिष्ट प्रश्न यहां लिखें..."
            rows={3}
          />
        </div>

        <button
          type="submit"
          className="btn btn-gov-saffron enquiry-form__submit"
          disabled={status === 'loading'}
          style={{ width: '100%', justifyContent: 'center' }}
        >
          {status === 'loading' ? (
            <><Loader2 size={16} className="spinning" /> विवरण भेजा जा रहा है...</>
          ) : (
            <><Send size={15} /> पूछताछ पत्र जमा करें (SUBMIT ENQUIRY)</>
          )}
        </button>

        {status === 'error' && (
          <div className="enquiry-form__error-msg">
            <AlertCircle size={16} />
            <p>पूछताछ भेजने में असमर्थ। कृपया सीधे कॉल या व्हाट्सएप करें।</p>
          </div>
        )}
      </form>

      <div className="enquiry-form__divider">
        <span>अथवा त्वरित सहायता</span>
      </div>

      {/* Direct WhatsApp Action with 9218467515 */}
      <a
        href="https://wa.me/919218467515?text=Hello%20New%20Phulera%20Smart%20City%20Team%2C%20I%20have%20an%20enquiry%20regarding%20property%20and%20infrastructure%20research."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        style={{ width: '100%' }}
      >
        <MessageSquare size={17} />
        <span>व्हाट्सएप पूछताछ: <strong>+91 92184 67515</strong></span>
      </a>

      <div className="enquiry-direct-calling-line">
        <Phone size={13} color="#DC2626" />
        <span>सीधा संपर्क: <a href="tel:+919218467515">+91 92184 67515</a> / <a href="tel:+917905602136">+91 79056 02136</a></span>
      </div>
    </div>
  );
}
