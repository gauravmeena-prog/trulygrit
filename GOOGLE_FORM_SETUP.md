# Google Form Setup Guide

## 🎯 Easy Contact Form with Google Forms

You can now use Google Forms for your contact form - it's much simpler and easier to manage!

## 📋 Setup Steps:

### 1. Create Your Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Click "Blank" to create a new form
3. Add your form fields:
   - **Name** (Short answer)
   - **Email** (Short answer)
   - **Company** (Short answer) - Optional
   - **Phone** (Short answer) - Optional
   - **Service Needed** (Multiple choice or Dropdown)
   - **Budget Range** (Multiple choice or Dropdown)
   - **Project Description** (Paragraph)

### 2. Get Your Form ID

1. In your Google Form, click the "Send" button
2. Click the "Embed" tab (</> icon)
3. Copy the embed code
4. Find the form ID in the URL: `https://docs.google.com/forms/d/e/FORM_ID/viewform`
5. Copy the `FORM_ID` part

### 3. Update Your Website

Replace `YOUR_FORM_ID` in the contact page with your actual form ID:

```html
<iframe
  src="https://docs.google.com/forms/d/e/YOUR_ACTUAL_FORM_ID/viewform?embedded=true"
  width="100%"
  height="800"
  frameBorder="0"
  marginHeight="0"
  marginWidth="0"
  className="rounded-lg"
  title="Contact Form"
>
  Loading…
</iframe>
```

## ✅ Benefits of Google Forms:

- **Easy to manage** - No coding required
- **Automatic responses** - Google handles everything
- **Data collection** - All responses go to Google Sheets
- **Email notifications** - Get notified when someone submits
- **Mobile friendly** - Works perfectly on all devices
- **Spam protection** - Built-in Google security
- **Analytics** - See form performance in Google Analytics

## 🔧 Customization Options:

### Form Styling:
- Change colors to match your brand
- Add your logo
- Customize field labels
- Set required/optional fields

### Response Settings:
- Get email notifications for new submissions
- Set up automatic responses to users
- Export data to Google Sheets
- Set up email confirmations

### Advanced Features:
- Add conditional logic (show/hide fields based on answers)
- Set up file uploads
- Add payment integration
- Connect to other Google services

## 📊 Managing Responses:

1. **View responses** in Google Forms
2. **Export to Google Sheets** for detailed analysis
3. **Set up email notifications** for new submissions
4. **Download data** as CSV or Excel files

## 🎨 Form Design Tips:

- Use your brand colors
- Add a clear title and description
- Make required fields obvious
- Keep it simple and focused
- Test on mobile devices

## 🚀 Ready to Go!

Once you update the form ID, your contact form will be live and working. Google handles all the backend processing, data storage, and email notifications automatically!
