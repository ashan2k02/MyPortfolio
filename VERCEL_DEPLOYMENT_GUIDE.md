# Deploying to Vercel with Environment Variables

## ✅ What We've Done:

1. **Created `.env` file** - Contains your actual EmailJS credentials (NOT in GitHub)
2. **Created `.env.example`** - Template file (safe to commit)
3. **Updated `.gitignore`** - Protects your `.env` file from being committed
4. **Updated `Contact.jsx`** - Now reads credentials from environment variables

---

## 🚀 Step-by-Step Vercel Deployment

### Step 1: Push to GitHub

Your sensitive data is now protected! Let's push the changes:

```bash
# Already done for you!
✅ .env file created (ignored by git)
✅ .env.example committed (template only)
✅ Contact.jsx updated to use env variables
```

### Step 2: Deploy to Vercel

1. **Go to** https://vercel.com
2. **Sign in** with GitHub
3. **Click** "Add New..." → "Project"
4. **Select** your `MyPortfolio` repository
5. **Click** "Import"

### Step 3: Add Environment Variables in Vercel ⚠️ IMPORTANT

Before deploying, you MUST add your environment variables in Vercel:

1. **After clicking Import**, you'll see "Configure Project"
2. **Scroll down** to "Environment Variables" section
3. **Add these 4 variables** one by one:

```
Name: VITE_EMAILJS_SERVICE_ID
Value: service_iutx6ml

Name: VITE_EMAILJS_TEMPLATE_ID  
Value: template_6b11q8b

Name: VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID
Value: template_me0dn2n

Name: VITE_EMAILJS_PUBLIC_KEY
Value: yha14yxlEihvxSEOi
```

**How to add each variable:**
- Click "Add" under Environment Variables
- Enter the **Name** (e.g., `VITE_EMAILJS_SERVICE_ID`)
- Enter the **Value** (e.g., `service_iutx6ml`)
- Click "Add"
- Repeat for all 4 variables

### Step 4: Deploy!

After adding all 4 environment variables:
1. **Click** "Deploy"
2. **Wait** ~30 seconds
3. **Your site is live!** 🎉

---

## 📋 Environment Variables Reference

Copy these for easy pasting into Vercel:

| Variable Name | Your Value |
|--------------|------------|
| `VITE_EMAILJS_SERVICE_ID` | `service_iutx6ml` |
| `VITE_EMAILJS_TEMPLATE_ID` | `template_6b11q8b` |
| `VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID` | `template_me0dn2n` |
| `VITE_EMAILJS_PUBLIC_KEY` | `yha14yxlEihvxSEOi` |

---

## 🔒 Security Benefits

✅ **Credentials NOT in GitHub** - Your `.env` is ignored  
✅ **Safe to share code** - Only template is committed  
✅ **Vercel protection** - Environment variables are encrypted  
✅ **Easy to update** - Change in Vercel dashboard anytime  

---

## 🔄 Future Updates

After initial deployment, to update environment variables:

1. Go to your project in Vercel
2. Click **Settings** → **Environment Variables**
3. Edit or add new variables
4. **Redeploy** for changes to take effect

---

## ⚠️ Important Notes

- **Don't skip Step 3!** Without environment variables, your contact form won't work
- **All 4 variables required** - Missing one will cause errors
- **Case sensitive** - Use exact names: `VITE_EMAILJS_SERVICE_ID` not `vite_emailjs_service_id`

---

## 🧪 Testing After Deployment

After deployment, test your contact form:
1. Visit your live Vercel URL
2. Fill out the contact form
3. Submit
4. Check if auto-reply arrives in visitor's email
5. Check if you receive the message

---

## 🆘 Troubleshooting

**Contact form not working?**
- Check environment variables are set correctly in Vercel
- Verify all 4 variables are added
- Check for typos in variable names
- Redeploy after adding variables

**How to redeploy:**
- Go to "Deployments" tab
- Click ⋯ menu on latest deployment
- Click "Redeploy"

---

Ready to deploy? Follow the steps above! 🚀
