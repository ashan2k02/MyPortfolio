# EmailJS Setup Guide for Contact Form

Your contact form is now configured to send real emails using EmailJS! Follow these steps to complete the setup:

## Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account (free tier allows 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service

1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the prompts to connect your email
5. Copy your **Service ID** (you'll need this)

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact from {{name}}

From: {{name}}
Email: {{email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Copy your **Template ID** (you'll need this)

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (also called API Key)
3. Copy it (you'll need this)

## Step 5: Update Contact.jsx

Open `/Users/ashan/Desktop/Portfolio/src/components/Contact.jsx` and replace these values around line 32-35:

```javascript
const serviceID = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const templateID = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

## Example Configuration

```javascript
const serviceID = 'service_abc123';
const templateID = 'template_xyz456';
const publicKey = 'aBcDeFgHiJkLmNo123';
```

## Step 6: Test the Form

1. Save the file
2. Go to your portfolio website
3. Navigate to the Contact section
4. Fill out the form and click "Send Message"
5. Check your email inbox for the message!

## Important Notes

- ✅ The form fields (`name`, `email`, `message`) must match the template variables
- ✅ Free tier: 200 emails/month
- ✅ Emails are sent from your connected email service
- ✅ You'll receive the message at the connected email address

## Troubleshooting

**Form not sending?**
- Check that all IDs are correct
- Verify your email service is connected in EmailJS dashboard
- Check browser console for errors
- Make sure you're not exceeding the monthly limit

**Need help?**
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com

---

Once configured, your contact form will be fully functional! 🎉
