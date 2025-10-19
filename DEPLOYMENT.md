# 🚀 Deployment Guide

This guide will help you deploy your personal website to various hosting platforms.

---

## 📦 Before Deployment

### 1. Build the Project
```bash
npm run build
```
This creates an optimized production build in the `dist` folder.

### 2. Test the Production Build Locally
```bash
npm run preview
```
Visit `http://localhost:4173` to test the production build.

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended) ⚡

**Why Vercel?**
- Free hosting for personal projects
- Automatic HTTPS
- CDN with global edge network
- Zero configuration for Vite projects
- Automatic deployments from Git

**Steps:**

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Deploy**
```bash
vercel
```

3. **Follow the prompts:**
   - Set up and deploy? Yes
   - Which scope? (Select your account)
   - Link to existing project? No
   - Project name? (Press Enter to use current directory name)
   - In which directory is your code located? ./
   - Want to override settings? No

4. **Done!** Your site is live. Vercel will give you a URL like:
   - `https://personal-website-xyz.vercel.app`

**For GitHub Integration:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"
6. Done! Automatic deployments on every push

---

### Option 2: Netlify 🎯

**Why Netlify?**
- Free hosting for personal projects
- Drag-and-drop deployment
- Form handling
- Automatic HTTPS

**Steps:**

**Method A: Drag and Drop**
1. Run `npm run build`
2. Go to [netlify.com](https://www.netlify.com)
3. Drag and drop the `dist` folder
4. Done! Your site is live

**Method B: Git Integration**
1. Push your code to GitHub
2. Go to [netlify.com](https://www.netlify.com)
3. Click "New site from Git"
4. Connect your GitHub account
5. Select your repository
6. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click "Deploy site"
8. Done! Automatic deployments on every push

---

### Option 3: GitHub Pages 📄

**Why GitHub Pages?**
- Free hosting on GitHub
- Easy integration with your GitHub profile
- Custom domain support

**Steps:**

1. **Install gh-pages package**
```bash
npm install --save-dev gh-pages
```

2. **Update vite.config.js**
Add base path:
```javascript
export default {
  base: '/personal-website/', // Replace with your repo name
  plugins: [react()]
}
```

3. **Update package.json**
Add deploy scripts:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

4. **Deploy**
```bash
npm run deploy
```

5. **Enable GitHub Pages**
   - Go to your GitHub repository
   - Settings → Pages
   - Source: gh-pages branch
   - Click Save

6. **Your site will be live at:**
   `https://yourusername.github.io/personal-website/`

---

### Option 4: Render 🔄

**Why Render?**
- Free hosting for static sites
- Automatic HTTPS
- Auto-deploy from Git

**Steps:**

1. Push your code to GitHub
2. Go to [render.com](https://render.com)
3. Click "New +" → "Static Site"
4. Connect your GitHub repository
5. Configure:
   - Name: `personal-website`
   - Build Command: `npm run build`
   - Publish Directory: `dist`
6. Click "Create Static Site"
7. Done! Your site will be live in a few minutes

---

### Option 5: Firebase Hosting 🔥

**Why Firebase?**
- Google's infrastructure
- Free SSL
- Global CDN
- Custom domain support

**Steps:**

1. **Install Firebase CLI**
```bash
npm install -g firebase-tools
```

2. **Login to Firebase**
```bash
firebase login
```

3. **Initialize Firebase**
```bash
firebase init
```

4. **Select:**
   - Hosting: Configure files for Firebase Hosting
   - Use existing project or create new
   - Public directory: `dist`
   - Configure as single-page app: Yes
   - Set up automatic builds: No

5. **Build and Deploy**
```bash
npm run build
firebase deploy
```

6. **Done!** Your site is live at:
   `https://your-project-id.web.app`

---

## 🌍 Custom Domain Setup

### For Vercel:
1. Go to your project dashboard
2. Settings → Domains
3. Add your custom domain
4. Update DNS records as instructed

### For Netlify:
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow DNS configuration instructions

### For GitHub Pages:
1. Add CNAME file to public folder with your domain
2. Update DNS records with your domain provider
3. Enable HTTPS in repository settings

---

## 🔒 Environment Variables

If you add API keys or sensitive data in the future:

### Vercel:
```bash
vercel env add
```

### Netlify:
Site settings → Build & deploy → Environment variables

### GitHub Pages:
Use GitHub Secrets for Actions

---

## ✅ Post-Deployment Checklist

After deploying, verify:

- [ ] All pages load correctly
- [ ] Navigation works properly
- [ ] Theme toggle (dark/light) functions
- [ ] Mobile menu works on small screens
- [ ] All links are working
- [ ] Images/assets load properly
- [ ] Contact links work (email, GitHub)
- [ ] HTTPS is enabled
- [ ] Site loads quickly
- [ ] No console errors in browser DevTools
- [ ] Meta tags are correct (check with view-source)
- [ ] Mobile responsive on real devices

---

## 🎯 Recommended: Vercel + GitHub

**Best workflow for continuous deployment:**

1. Push code to GitHub
2. Connect GitHub to Vercel
3. Every push to main branch = automatic deployment
4. Preview deployments for pull requests
5. Rollback capabilities
6. Analytics and performance monitoring

---

## 📊 Performance Optimization

### Enable Compression
Most platforms enable this by default, but verify:
- Gzip/Brotli compression enabled
- Static asset caching
- CDN distribution

### Add _headers file (Netlify)
Create `public/_headers`:
```
/*
  Cache-Control: public, max-age=31536000, immutable
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
```

### Add vercel.json (Vercel)
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

---

## 🐛 Troubleshooting

### Build Fails
- Check Node.js version (use v14+)
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check for linting errors

### Blank Page After Deploy
- Verify `base` path in vite.config.js
- Check browser console for errors
- Verify build output in `dist` folder

### 404 Errors
- Ensure single-page app configuration
- Check routing setup for hosting platform

### Assets Not Loading
- Verify relative paths
- Check `base` configuration in vite.config.js
- Ensure assets are in `public` folder

---

## 📈 Monitor Your Site

After deployment, set up monitoring:

1. **Google Analytics**: Track visitors
2. **Vercel Analytics**: Built-in performance monitoring
3. **Google Search Console**: SEO tracking
4. **PageSpeed Insights**: Performance testing

---

## 🎉 You're Live!

Your professional portfolio is now deployed and accessible worldwide!

**Share your website:**
- Add to your GitHub profile README
- Share on LinkedIn
- Include in your resume
- Share with potential employers/clients

---

**Questions?** Check the hosting platform's documentation or reach out for help!

