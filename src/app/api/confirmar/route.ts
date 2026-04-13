import { NextResponse } from 'next/server';
import { appendToSheet } from '@/lib/google-sheets';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const values = [
      new Date().toLocaleString('pt-BR'),
      data.nome || '',
      data.email || '',
      data.whatsapp || '',
      data.origem || 'direto',
    ];

    await appendToSheet(values, 'Manifesto 16/04');

    return NextResponse.json({ success: true, message: 'Presença confirmada!' });
  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, message: 'Erro ao confirmar presença.', error: error.message },
      { status: 500 }
    );
  }
}
