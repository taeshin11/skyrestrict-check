function doPost(e) {
  try {
    var sheet = SpreadsheetApp.openById('SHEET_ID_HERE').getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date().toISOString(),
      data.zoneName || '',
      data.region || '',
      data.description || '',
      data.reporterEmail || '',
      data.severity || '',
      data.source || 'web-form'
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
