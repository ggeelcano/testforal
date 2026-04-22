function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById('1jkMIMIOiNmsyUVD8v5gRGrjjHjx7YF-_3UU5mPgtI4I').getSheetByName('Emails');
    const data = JSON.parse(e.postData.contents);
    sheet.appendRow([
      new Date(),
      data.email || '',
      data.oposicion || '',
      data.origen || 'landing',
      data.ip || ''
    ]);
    return ContentService.createTextOutput(JSON.stringify({ok: true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ok: false, error: err.message}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
function doGet() {
  return ContentService.createTextOutput('TestForal Waitlist Endpoint OK')
    .setMimeType(ContentService.MimeType.TEXT);
}