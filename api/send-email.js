const { Resend } = require('resend');

module.exports = async function handler(req, res) {
  // Set CORS headers so the function can be tested locally or from any preview deployment
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle pre-flight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method Not Allowed. Only POST requests are supported.'
    });
  }

  try {
    const { name, mobile, email, interest, propertyType, message } = req.body || {};

    // Validate required fields
    if (!name || !name.trim()) {
      return res.status(400).json({ success: false, message: 'नाम (Name) is required' });
    }
    if (!mobile || !mobile.trim()) {
      return res.status(400).json({ success: false, message: 'मोबाइल नंबर (Mobile) is required' });
    }
    if (!/^[6-9]\d{9}$/.test(mobile.trim())) {
      return res.status(400).json({ success: false, message: 'वैध 10-अंकीय भारतीय मोबाइल नंबर (Valid 10-digit mobile) is required' });
    }
    if (!interest) {
      return res.status(400).json({ success: false, message: 'रुचि का प्रकार (Interest) is required' });
    }
    if (!propertyType) {
      return res.status(400).json({ success: false, message: 'लक्षित क्षेत्र (Target Area) is required' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY environment variable is not set.');
      return res.status(500).json({
        success: false,
        message: 'Resend API key is missing. Please configure RESEND_API_KEY in your Vercel Environment Variables.'
      });
    }

    const resend = new Resend(apiKey);

    const fromAddress = process.env.RESEND_FROM_EMAIL || 'New Phulera Smart City <onboarding@resend.dev>';
    const toAddress = process.env.NOTIFICATION_EMAIL || 'enquiry@newphulerasmartcity.in';

    // Format timestamp in Indian Standard Time (IST)
    const timestampIST = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium'
    });

    const cleanMobile = mobile.trim();
    const cleanName = name.trim();
    const cleanEmail = email ? email.trim() : 'Not Provided';
    const cleanMessage = message ? message.trim() : 'No specific message entered';

    const whatsappUrl = `https://wa.me/91${cleanMobile}?text=Hello%20${encodeURIComponent(cleanName)}%2C%20thank%20you%20for%20contacting%20New%20Phulera%20Smart%20City%20Portal%20regarding%20${encodeURIComponent(propertyType)}.`;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; color: #1e293b; }
          .container { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
          .flag-bar { height: 6px; background: linear-gradient(90deg, #FF9933 0%, #FF9933 33.3%, #ffffff 33.3%, #ffffff 66.6%, #138808 66.6%, #138808 100%); }
          .header { background: #0B2340; color: #ffffff; padding: 24px 28px; text-align: left; }
          .header h1 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: 0.5px; color: #ffffff; }
          .header p { margin: 6px 0 0; font-size: 13px; color: #94a3b8; }
          .badge { display: inline-block; background: #FF9933; color: #000000; font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 4px; text-transform: uppercase; margin-bottom: 8px; }
          .content { padding: 28px; }
          .alert-box { background: #f8fafc; border-left: 4px solid #FF9933; padding: 14px 18px; margin-bottom: 24px; border-radius: 0 6px 6px 0; }
          .alert-box p { margin: 0; font-size: 14px; line-height: 1.5; color: #334155; }
          .details-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
          .details-table th, .details-table td { padding: 12px 14px; text-align: left; font-size: 14px; border-bottom: 1px solid #e2e8f0; }
          .details-table th { background: #f8fafc; color: #475569; width: 35%; font-weight: 600; }
          .details-table td { color: #0f172a; font-weight: 500; }
          .actions { display: flex; gap: 12px; margin: 24px 0 16px; flex-wrap: wrap; }
          .btn { display: inline-block; padding: 10px 18px; border-radius: 6px; text-decoration: none; font-size: 13px; font-weight: 600; text-align: center; }
          .btn-call { background: #0B2340; color: #ffffff !important; }
          .btn-wa { background: #25D366; color: #ffffff !important; }
          .btn-mail { background: #0284c7; color: #ffffff !important; }
          .footer { background: #f8fafc; padding: 20px 28px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; line-height: 1.6; }
          .footer strong { color: #334155; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="flag-bar"></div>
          <div class="header">
            <span class="badge">NEW REGIONAL ENQUIRY</span>
            <h1>New Phulera Smart City Portal</h1>
            <p>Citizen & Investor Regional Enquiry Notification Desk</p>
          </div>

          <div class="content">
            <div class="alert-box">
              <p><strong>नई पूछताछ प्राप्त हुई:</strong> नागरिक / निवेशक ने पोर्टल से पूछताछ विवरण प्रेषित किया है। त्वरित प्रतिक्रिया के लिए नीचे दिए गए विवरण देखें।</p>
            </div>

            <table class="details-table">
              <tr>
                <th>नागरिक का नाम (Name)</th>
                <td><strong>${cleanName}</strong></td>
              </tr>
              <tr>
                <th>मोबाइल नंबर (Mobile)</th>
                <td>
                  <a href="tel:+91${cleanMobile}" style="color: #0B2340; font-weight: 700; text-decoration: none;">
                    +91 ${cleanMobile}
                  </a>
                </td>
              </tr>
              <tr>
                <th>ईमेल आईडी (Email)</th>
                <td>${cleanEmail !== 'Not Provided' ? `<a href="mailto:${cleanEmail}" style="color: #0284c7;">${cleanEmail}</a>` : cleanEmail}</td>
              </tr>
              <tr>
                <th>रुचि का प्रकार (Interest)</th>
                <td><span style="background: #e0f2fe; color: #0369a1; padding: 3px 8px; border-radius: 4px; font-weight: 600;">${interest}</span></td>
              </tr>
              <tr>
                <th>लक्षित क्षेत्र (Target Area)</th>
                <td><span style="background: #fef3c7; color: #92400e; padding: 3px 8px; border-radius: 4px; font-weight: 600;">${propertyType}</span></td>
              </tr>
              <tr>
                <th>संदेश / विवरण (Message)</th>
                <td style="white-space: pre-line; line-height: 1.5;">${cleanMessage}</td>
              </tr>
              <tr>
                <th>प्राप्ति समय (Timestamp)</th>
                <td style="color: #64748b; font-size: 13px;">${timestampIST} (IST)</td>
              </tr>
            </table>

            <div style="margin-top: 20px;">
              <p style="font-size: 13px; font-weight: 600; color: #475569; margin-bottom: 10px;">त्वरित संपर्क विकल्प (Quick Contact Actions):</p>
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-right: 8px;">
                    <a href="tel:+91${cleanMobile}" class="btn btn-call" style="background: #0B2340; color: #ffffff; padding: 10px 16px; border-radius: 5px; text-decoration: none; font-size: 13px; display: inline-block;">
                      📞 Call ${cleanMobile}
                    </a>
                  </td>
                  <td style="padding-right: 8px;">
                    <a href="${whatsappUrl}" class="btn btn-wa" style="background: #25D366; color: #ffffff; padding: 10px 16px; border-radius: 5px; text-decoration: none; font-size: 13px; display: inline-block;">
                      💬 Open WhatsApp
                    </a>
                  </td>
                  ${cleanEmail !== 'Not Provided' ? `
                  <td>
                    <a href="mailto:${cleanEmail}" class="btn btn-mail" style="background: #0284c7; color: #ffffff; padding: 10px 16px; border-radius: 5px; text-decoration: none; font-size: 13px; display: inline-block;">
                      ✉️ Reply Email
                    </a>
                  </td>` : ''}
                </tr>
              </table>
            </div>
          </div>

          <div class="footer">
            <p style="margin: 0 0 6px 0;"><strong>New Phulera Smart City & Dobri Regional Corridor Research Desk</strong></p>
            <p style="margin: 0 0 6px 0;">Help Desk Phone: +91 92184 67515 | +91 79056 02136</p>
            <p style="margin: 0; font-size: 11px; color: #94a3b8;">This is an automated notification dispatched via Vercel Serverless Function & Resend API.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const textContent = `
New Phulera Smart City - Regional Enquiry Received
==================================================
Date & Time: ${timestampIST} (IST)

Citizen Details:
- Name: ${cleanName}
- Mobile: +91 ${cleanMobile}
- Email: ${cleanEmail}
- Interest: ${interest}
- Target Area: ${propertyType}

Message:
${cleanMessage}

Contact Links:
- Call: tel:+91${cleanMobile}
- WhatsApp: ${whatsappUrl}
    `.trim();

    const emailPayload = {
      from: fromAddress,
      to: [toAddress],
      subject: `[New Enquiry] ${cleanName} - ${propertyType} (${interest.split('(')[0].trim()})`,
      html: htmlContent,
      text: textContent
    };

    // If citizen provided valid email, set it as reply_to
    if (cleanEmail !== 'Not Provided') {
      emailPayload.reply_to = cleanEmail;
    }

    const { data, error } = await resend.emails.send(emailPayload);

    if (error) {
      console.error('Resend API returned error:', error);
      return res.status(500).json({
        success: false,
        message: error.message || 'Failed to send enquiry email via Resend',
        error
      });
    }

    return res.status(200).json({
      success: true,
      message: 'पूछताछ सफलतापूर्वक प्रेषित की गई (Enquiry sent successfully)',
      id: data ? data.id : null
    });
  } catch (err) {
    console.error('Unhandled error in /api/send-email:', err);
    return res.status(500).json({
      success: false,
      message: 'आंतरिक सर्वर त्रुटि (Internal Server Error)',
      error: err.message
    });
  }
};
