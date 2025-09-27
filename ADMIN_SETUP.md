# Admin Dashboard Setup Guide

## 🔐 Security Configuration

Your admin dashboard is now **SECURED** and requires authentication to access.

### 1. Set Admin Secret Key

Create a `.env.local` file in your project root with:

```bash
ADMIN_SECRET_KEY=your_secure_admin_key_here
```

**Generate a secure key:**
```bash
# Option 1: Using OpenSSL
openssl rand -base64 32

# Option 2: Using Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"

# Option 3: Online generator
# Visit: https://generate-secret.vercel.app/32
```

### 2. Access the Admin Dashboard

1. Go to `/admin` on your website
2. Enter the admin key you set in `ADMIN_SECRET_KEY`
3. Click "Access Dashboard"

### 3. Security Features

✅ **Authentication Required** - No one can access without the key
✅ **API Protection** - All endpoints require authentication
✅ **Session Management** - Login persists until logout
✅ **Secure Headers** - Proper authorization headers
✅ **Error Handling** - Invalid keys are rejected

### 4. Data Protection

- **No public access** to submission data
- **Encrypted storage** of admin sessions
- **Secure API endpoints** with authentication
- **Protected admin interface** with login screen

### 5. Admin Features

- View all contact form submissions
- Search and filter submissions
- Update submission status
- View analytics and statistics
- Export data (coming soon)

## 🚨 Important Security Notes

1. **Keep your admin key secret** - Don't share it with unauthorized people
2. **Use a strong key** - At least 32 characters with mixed characters
3. **Change it regularly** - Update the key periodically
4. **Don't commit keys** - Keep `.env.local` in `.gitignore`
5. **Monitor access** - Check logs for unauthorized attempts

## 📧 Email Notifications (Optional)

To enable email notifications when forms are submitted, add to `.env.local`:

```bash
# For Gmail/Google Workspace
EMAIL_SERVICE=nodemailer
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=admin@yourcompany.com

# For SendGrid
EMAIL_SERVICE=sendgrid
SENDGRID_API_KEY=your_sendgrid_api_key
EMAIL_TO=admin@yourcompany.com

# For Resend
EMAIL_SERVICE=resend
RESEND_API_KEY=your_resend_api_key
EMAIL_TO=admin@yourcompany.com
```

## 🔧 Troubleshooting

**"Unauthorized access" error:**
- Check that `ADMIN_SECRET_KEY` is set in `.env.local`
- Restart your development server after adding the key
- Ensure the key matches exactly (no extra spaces)

**Admin dashboard not loading:**
- Check browser console for errors
- Verify the admin key is correct
- Clear browser cache and try again

**API endpoints returning 401:**
- Ensure the admin key is set correctly
- Check that the authorization header is being sent
- Verify the key format: `Bearer your_key_here`
