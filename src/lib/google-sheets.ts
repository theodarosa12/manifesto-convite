import { google } from 'googleapis';

export async function appendToSheet(values: any[]) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:Z', // Certifique-se de que a aba da planilha se chama 'Sheet1' ou mude aqui
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [values],
      },
    });

    return response.data;
  } catch (error) {
    console.error('Erro ao escrever na planilha:', error);
    throw error;
  }
}
