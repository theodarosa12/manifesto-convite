import { google } from 'googleapis';

export async function appendToSheet(values: any[]) {
  try {
    const rawKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY || '';
    
    let formattedKey: string | undefined = undefined;

    // Estratégia de Decodificação Blindada
    if (rawKey && !rawKey.includes('-----BEGIN')) {
        try {
          // Remove espaços, aspas e limpa a string antes de decodificar
          const cleanRaw = rawKey.replace(/[\s"]/g, '');
          formattedKey = Buffer.from(cleanRaw, 'base64').toString('utf8');
        } catch (e) {
          console.error('Erro ao decodificar Base64');
        }
    }

    if (!formattedKey || !formattedKey.includes('-----BEGIN')) {
        formattedKey = rawKey
          .replace(/^"|"$/g, '')
          .replace(/\\n/g, '\n')
          .replace(/\r/g, '')
          .trim();
    }

    // Diagnóstico Seguro (adicionando ao erro se falhar)
    (global as any)._last_key_info = {
      rawLen: rawKey.length,
      fmtLen: formattedKey?.length || 0,
      startsWith: formattedKey?.substring(0, 15),
      hasBegin: formattedKey?.includes('-----BEGIN'),
      hasEnd: formattedKey?.includes('-----END')
    };

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
