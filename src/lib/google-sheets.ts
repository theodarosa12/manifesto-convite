import { google } from 'googleapis';

export async function appendToSheet(values: any[]) {
  try {
    const rawKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
    
    let formattedKey: string | undefined = undefined;

    if (rawKey) {
      // Se não começar com o cabeçalho PEM, tentamos decodificar de Base64 (estratégia blindada)
      if (!rawKey.includes('-----BEGIN')) {
        try {
          formattedKey = Buffer.from(rawKey, 'base64').toString('utf8');
        } catch (e) {
          console.error('Falha ao decodificar chave Base64, tentando limpeza PEM...');
        }
      }

      // Se ainda não temos a chave formatada ou se a decodificação falhou
      if (!formattedKey || !formattedKey.includes('-----BEGIN')) {
        formattedKey = rawKey
          .replace(/^"|"$/g, '')             // Remove aspas externas
          .replace(/\\n/g, '\n')            // Converte \n literal em quebra de linha
          .replace(/\r/g, '')               // Remove retornos de carro
          .trim();
      }
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: formattedKey,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Página1!A:Z', // Certifique-se de que a aba da planilha se chama 'Página1' ou mude aqui
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
