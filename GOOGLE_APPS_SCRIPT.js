// Google Apps Script Code
// Copy this code into a new Google Apps Script project
// Then deploy it as a web app with "Anyone" access

function doPost(e) {
  try {
    // Get the spreadsheet
    const sheet = SpreadsheetApp.openById('1pnszYgqVdK0REQG7f2ASzicFJRci1Mnzs1ZLT0K9-fQ').getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Prepare the row data
    const rowData = [
      data.timestamp,
      data.name,
      data.email,
      data.company,
      data.phone,
      data.service,
      data.budget,
      data.message
    ];
    
    // Add headers if this is the first row
    if (sheet.getLastRow() === 0) {
      const headers = [
        'Timestamp',
        'Name',
        'Email',
        'Company',
        'Phone',
        'Service',
        'Budget',
        'Message'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    }
    
    // Append the new row
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('Contact Form Webhook is running!')
    .setMimeType(ContentService.MimeType.TEXT);
}
