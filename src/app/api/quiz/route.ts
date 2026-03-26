import { NextResponse } from 'next/server';
import { appendToSheet } from '@/lib/google-sheets';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // LOGICA DE ETIQUETAS (TAGS)
    let etiqueta = "Lead Indefinido";
    const p3 = data.pergunta3 || "";
    const p5 = data.pergunta5 || "";

    // REGRA 3: Lead Ouro (High-Ticket) - Prioridade Máxima
    if (
      p3.toLowerCase().includes("contratar alguém") || 
      p3.toLowerCase().includes("contratar uma equipe") ||
      p3.toLowerCase().includes("delegar") ||
      p5.toLowerCase().includes("ceo") ||
      p5.toLowerCase().includes("founder") ||
      p5.toLowerCase().includes("dono de negócio") ||
      p5.toLowerCase().includes("agência")
    ) {
        etiqueta = "Lead Ouro (Funil Raicon / High-Ticket)";
    } 
    
    // REGRA 2: Empresário DIY
    else if (
      p3.toLowerCase().includes("aplicar no próprio negócio") || 
      p3.toLowerCase().includes("aplicar na minha área") || 
      p3.toLowerCase().includes("usar no meu trabalho")
    ) {
        etiqueta = "Empresário DIY (Funil Coda)";
    }

    // REGRA 1: Entusiasta
    else if (
      p3.toLowerCase().includes("prestar serviço") || 
      p3.toLowerCase().includes("ganhar dinheiro") || 
      p3.toLowerCase().includes("vender") ||
      p5.toLowerCase().includes("clt") ||
      p5.toLowerCase().includes("freelancer") ||
      p5.toLowerCase().includes("estagiário") ||
      p5.toLowerCase().includes("do zero")
    ) {
        etiqueta = "Entusiasta (Funil Coda)";
    }

    // Preparar os dados para a planilha
    const values = [
      new Date().toLocaleString('pt-BR'), // Data/Hora
      data.nome || '',
      data.whatsapp || '',
      data.pergunta1 || '',
      data.pergunta2 || '',
      data.pergunta3 || '',
      data.pergunta4 || '',
      data.pergunta5 || '',
      etiqueta // COLUNA DE ETIQUETA
    ];

    await appendToSheet(values);

    return NextResponse.json({ success: true, message: 'Dados salvos com sucesso!', etiqueta });
  } catch (error: any) {
    console.error('API Error:', error);
    const errorInfo = (global as any)._last_key_info || {};
    return NextResponse.json(
      { 
        success: false, 
        message: 'Erro ao salvar os dados.', 
        error: `${error.response?.data?.error?.message || error.message} (Dgn: L:${errorInfo.rawLen}/${errorInfo.fmtLen}, H:${errorInfo.hasBegin}, E:${errorInfo.hasEnd}, S:${errorInfo.startsWith})`
      },
      { status: 500 }
    );
  }
}
