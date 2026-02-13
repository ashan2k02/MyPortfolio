# Vercel Deployment Guide - Step by Step

## Prerequisites ✅
- [x] Portfolio code is ready
- [x] GitHub repository exists (`MyPortfolio`)
- [x] All changes are pushed to GitHub

---

## Step 1: Sign Up / Login to Vercel

1. **Go to** [vercel.com](https://vercel.com)
2. **Click** "Sign Up" or "Login"
3. **Choose** "Continue with GitHub"
4. **Authorize** Vercel to access your GitHub account

![Vercel Login Screen]

---

## Step 2: Import Your Portfolio Repository

1. After login, click **"Add New..."** → **"Project"**
2. You'll see "Import Git Repository"
3. Find your **`MyPortfolio`** repository
4. Click **"Import"**

![Import Repository]

---

## Step 3: Configure Project Settings

Vercel will **auto-detect** your Vite project! You should see:

```
Framework Preset: Vite
Build Command: vite build
Output Directory: dist
Install Command: npm install
```

**✅ Everything is correct! Don't change anything.**

Click **"Deploy"**

---

## Step 4: Wait for Deployment

You'll see a beautiful deployment animation! 🚀

This takes about **30-60 seconds**:
- ⏳ Building your project
- ⏳ Optimizing assets
- ⏳ Deploying to global CDN

---

## Step 5: Celebrate! 🎉

Once deployed, you'll see:
- ✅ **Deployment successful!**
- 🌐 Your live URL: `https://your-portfolio-xxx.vercel.app`
- 📸 Screenshot preview of your site

**Click** "Visit" to see your live portfolio!

---

## Your Portfolio is Now Live! 🌐

**Share your link:**
- Copy the Vercel URL
- Share it on LinkedIn, GitHub, resume
- It's live globally with fast CDN

---

## Next Steps (Optional)

### Automatic Deployments
Every time you push to GitHub, Vercel will **automatically redeploy**! 🔄

```bash
# Make changes
git add .
git commit -m "Update portfolio"
git push origin main

# Vercel will auto-deploy in 30 seconds!
```

### Add Custom Domain (Later)
Once you get your `.me` domain from GitHub Student Pack:
1. Go to Project Settings
2. Click **Domains**
3. Add your custom domain
4. Follow DNS setup instructions

---

## Important Notes

✅ **Free forever** for personal projects  
✅ **Unlimited bandwidth**  
✅ **Free SSL certificate** (HTTPS)  
✅ **Global CDN** (fast worldwide)  
✅ **No credit card required**  

---

## Troubleshooting

**Build failed?**
- Check the build logs in Vercel dashboard
- Make sure `package.json` has correct scripts
- Ensure all dependencies are listed

**Site not loading?**
- Wait 1-2 minutes for DNS propagation
- Clear browser cache
- Try incognito mode

---

## Need Help?
- Vercel Docs: https://vercel.com/docs
- Vercel Support: Built-in chat in dashboard

---

Ready to deploy? Follow the steps above! 🚀
