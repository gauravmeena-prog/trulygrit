# Deployment Guide - Truly Grit Website

Complete guide for deploying the Truly Grit marketing website to production.

## 🚀 Quick Deploy (Vercel - Recommended)

### Option 1: GitHub Integration
1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import from GitHub repository
   - Select `Website_trulygrit` repository

3. **Configure Build Settings**
   ```
   Framework Preset: Next.js
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy
   - Get production URL: `https://your-project.vercel.app`

### Option 2: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel

# Follow prompts for configuration
# Production deployment
vercel --prod
```

## 🌐 Alternative Deployment Options

### Netlify
1. **Build Settings**
   ```
   Build command: npm run build
   Publish directory: out
   ```

2. **Next.js Configuration**
   ```javascript
   // next.config.js
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   ```

3. **Deploy**
   - Drag and drop build folder to Netlify
   - Or connect GitHub repository

### Traditional Server (Ubuntu/CentOS)

#### Prerequisites
```bash
# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 for process management
npm install -g pm2

# Install Nginx
sudo apt-get install nginx
```

#### Deployment Steps
```bash
# Clone repository
git clone <your-repo-url>
cd Website_trulygrit

# Install dependencies
npm install

# Build for production
npm run build

# Start with PM2
pm2 start npm --name "truly-grit" -- start

# Configure Nginx
sudo nano /etc/nginx/sites-available/truly-grit
```

#### Nginx Configuration
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### SSL with Let's Encrypt
```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Auto-renewal (crontab)
sudo crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet
```

## ⚙️ Environment Configuration

### Environment Variables
Create `.env.local` for sensitive data:
```env
# Contact Form
NEXT_PUBLIC_CONTACT_EMAIL=hello@trulygrithq.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Site URL
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# API Keys (if needed)
SENDGRID_API_KEY=your_sendgrid_key
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

### Production Environment Variables (Vercel)
```bash
# Set via Vercel dashboard or CLI
vercel env add NEXT_PUBLIC_SITE_URL
vercel env add SENDGRID_API_KEY
```

## 🔍 Pre-Deployment Checklist

### Performance Audit
- [ ] Run Lighthouse audit (90+ scores)
- [ ] Test Core Web Vitals
- [ ] Verify image optimization
- [ ] Check bundle size
- [ ] Test loading performance

### SEO Verification
- [ ] All pages have unique titles
- [ ] Meta descriptions are optimized
- [ ] OpenGraph tags are complete
- [ ] Structured data is valid
- [ ] Robots.txt is configured
- [ ] Sitemap is accessible

### Accessibility Testing
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] Color contrast meets standards
- [ ] Focus indicators visible
- [ ] Form labels are associated

### Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari
- [ ] Mobile Chrome

### Security Review
- [ ] Environment variables secured
- [ ] HTTPS enforced
- [ ] Form validation working
- [ ] XSS protection enabled
- [ ] Content Security Policy ready

## 📊 Post-Deployment Setup

### Analytics Setup
1. **Google Analytics 4**
   ```javascript
   // Add to app/layout.tsx
   <Script
     src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
     strategy="afterInteractive"
   />
   ```

2. **Google Search Console**
   - Add property for your domain
   - Verify ownership
   - Submit sitemap: `yourdomain.com/sitemap.xml`

3. **Vercel Analytics** (if using Vercel)
   ```bash
   npm install @vercel/analytics
   ```

### Performance Monitoring
1. **Set up monitoring alerts**
2. **Configure error tracking** (Sentry)
3. **Monitor Core Web Vitals**
4. **Set up uptime monitoring**

### Social Media Setup
1. **Test OpenGraph tags**
   - Facebook Sharing Debugger
   - Twitter Card Validator
   - LinkedIn Post Inspector

2. **Verify social images**
   - Logo displays correctly
   - Brand colors maintained
   - Text is readable

## 🔄 Continuous Deployment

### GitHub Actions (Optional)
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🛠️ Maintenance & Updates

### Regular Maintenance
- **Monthly**: Update dependencies
- **Quarterly**: Performance audit
- **Bi-annually**: Security review
- **Annually**: Complete redesign review

### Update Process
```bash
# Check for updates
npm outdated

# Update dependencies
npm update

# Test locally
npm run build
npm start

# Deploy updates
git add .
git commit -m "Update dependencies"
git push origin main
```

### Backup Strategy
- **Code**: Git repository (GitHub)
- **Assets**: Cloud storage backup
- **Database**: If added later
- **Environment Variables**: Secure documentation

## 📞 Troubleshooting

### Common Issues
1. **Build Failures**
   - Check Node.js version (18+)
   - Clear node_modules and reinstall
   - Verify environment variables

2. **Performance Issues**
   - Run Lighthouse audit
   - Check image optimization
   - Review JavaScript bundle size

3. **SEO Problems**
   - Validate structured data
   - Check robots.txt accessibility
   - Verify meta tags

### Debug Commands
```bash
# Check build output
npm run build -- --debug

# Analyze bundle
npm install -g @next/bundle-analyzer
ANALYZE=true npm run build

# Test production build locally
npm run build && npm start
```

## 📈 Success Metrics

### Key Performance Indicators
- **Page Load Speed**: < 3 seconds
- **Lighthouse Scores**: 90+ across all categories
- **Core Web Vitals**: Green scores
- **Mobile Usability**: 100% mobile-friendly
- **SEO Visibility**: High search rankings

### Monitoring Tools
- Google PageSpeed Insights
- GTmetrix
- WebPageTest
- Google Search Console
- Vercel Analytics

---

## 🎯 Production Checklist

Before going live, ensure:

- [ ] Domain configured and DNS propagated
- [ ] SSL certificate installed and working
- [ ] All forms tested and working
- [ ] Contact information updated
- [ ] Analytics tracking implemented
- [ ] Social media links functional
- [ ] Performance targets met
- [ ] Accessibility standards met
- [ ] SEO optimization complete
- [ ] Cross-browser testing passed
- [ ] Mobile responsiveness verified
- [ ] Error pages configured
- [ ] Monitoring and alerts set up

**🚀 Your Truly Grit website is now ready for launch!**

*Built with unwavering determination and technical excellence.*

