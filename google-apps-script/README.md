# Google Sheets Webhook Setup

## Steps to set up data collection:

1. **Create a Google Sheet**
   - Go to [Google Sheets](https://sheets.google.com)
   - Create a new spreadsheet
   - Add headers in Row 1: `Timestamp | Zone Name | Region | Description | Email | Severity | Source`
   - Copy the Sheet ID from the URL: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`

2. **Create the Apps Script**
   - Go to Extensions → Apps Script
   - Delete any existing code in `Code.gs`
   - Paste the contents of `Code.gs` from this folder
   - Replace `SHEET_ID_HERE` with your actual Sheet ID

3. **Deploy as Web App**
   - Click Deploy → New deployment
   - Select type: Web app
   - Execute as: Me
   - Who has access: Anyone
   - Click Deploy
   - Copy the Web app URL

4. **Configure the Environment Variable**
   - Add the Web app URL to `.env.local`:
     ```
     NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
     ```

5. **Test**
   - Submit a report through the website form
   - Check your Google Sheet for the new row
