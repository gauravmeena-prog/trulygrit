# Google Sheets Integration Setup

## Step 1: Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the Google Sheets API

## Step 2: Create Service Account
1. Go to "IAM & Admin" > "Service Accounts"
2. Click "Create Service Account"
3. Name it "Truly Grit Contact Form"
4. Click "Create and Continue"
5. Skip roles for now, click "Done"

## Step 3: Generate Credentials
1. Click on your service account
2. Go to "Keys" tab
3. Click "Add Key" > "Create new key"
4. Choose "JSON" format
5. Download the JSON file

## Step 4: Share Google Sheet
1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1OOGEAl0o_MY6KvFsPFaDutc3F0ZDSp5og-F5syLMlr4/edit
2. Click "Share" button
3. Add the service account email (from JSON file) with "Editor" permissions
4. Click "Send"

## Step 5: Add Environment Variables
Create a `.env.local` file in your project root with:

```env
GOOGLE_PROJECT_ID=your-project-id-from-json
GOOGLE_PRIVATE_KEY_ID=your-private-key-id-from-json
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"
GOOGLE_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_CLIENT_ID=your-client-id-from-json
```

## Step 6: Test the Integration
1. Restart your development server
2. Submit a test contact form
3. Check your Google Sheet for the new row

## Data Structure
The form will save data in this format:
- Column A: Timestamp
- Column B: Name
- Column C: Email
- Column D: Company
- Column E: Phone
- Column F: Service
- Column G: Budget
- Column H: Message

