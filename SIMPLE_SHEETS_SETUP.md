# Simple Google Sheets Integration Setup

## Method 1: Google Apps Script (Recommended - Easier)

### Step 1: Create Google Apps Script
1. Go to [script.google.com](https://script.google.com)
2. Click "New Project"
3. Delete the default code and paste the code from `GOOGLE_APPS_SCRIPT.js`
4. Save the project (Ctrl+S) and name it "Truly Grit Contact Form"

### Step 2: Deploy as Web App
1. Click "Deploy" > "New deployment"
2. Choose "Web app" as the type
3. Set "Execute as" to "Me"
4. Set "Who has access" to "Anyone"
5. Click "Deploy"
6. Copy the Web App URL (you'll need this)

### Step 3: Add Environment Variable
Create a `.env.local` file in your project root:
```env
GOOGLE_APPS_SCRIPT_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

### Step 4: Test
1. Restart your development server
2. Submit a test contact form
3. Check your Google Sheet for the new row

---

## Method 2: Google Cloud Service Account (Advanced)

Follow the instructions in `GOOGLE_SHEETS_SETUP.md` for the full Google Cloud setup.

---

## Data Structure
Your Google Sheet will have these columns:
- **A**: Timestamp
- **B**: Name  
- **C**: Email
- **D**: Company
- **E**: Phone
- **F**: Service
- **G**: Budget
- **H**: Message

## Troubleshooting
- Make sure your Google Sheet is shared with the service account (Method 2)
- Check that the webhook URL is correct (Method 1)
- Verify environment variables are loaded
- Check the server console for error messages

