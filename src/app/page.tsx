import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-6 sm:p-8 md:p-12 lg:p-20 selection:bg-mgt-neon selection:text-black">
      <div className="w-full max-w-3xl flex flex-col gap-12 lg:gap-14 my-auto py-10">
        
        {/* CABEÇALHO / HEADLINE */}
        <div className="flex flex-col gap-6 text-center md:text-left">
          <div className="inline-flex items-center justify-center md:justify-start gap-2 text-mgt-orange font-bold text-xs sm:text-sm tracking-widest uppercase">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mgt-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-mgt-orange"></span>
            </span>
            Apenas 100 vagas • Google Meet
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-white">
            O recado de hoje é direto para você que é CEO, Founder ou dono do próprio negócio.
          </h1>
        </div>

        {/* THUMBNAIL */}
        <div className="w-full rounded-2xl overflow-hidden border border-mgt-gray-light shadow-2xl relative">
          <Image
            src="/thumb.png"
            alt="Claude + Obsidian + Skills Thumbnail"
            width={1200}
            height={675}
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            priority
          />
        </div>

        <div className="h-px w-full bg-mgt-gray-light" />

        {/* CORPO DE TEXTO 1 */}
        <div className="text-gray-300 text-lg sm:text-xl leading-relaxed space-y-6">
          <p>
            Lendo as pesquisas de vocês nas últimas horas, um padrão assustador ficou claro. A maioria de vocês construiu negócios incríveis, mas acabaram se tornando <strong className="text-white font-semibold">os funcionários mais sobrecarregados de suas próprias empresas.</strong>
          </p>
          <p>
            Vocês sabem que a IA é o futuro. Mas continuam perdendo horas preciosas apagando incêndios, microgerenciando a equipe e presos no operacional.
          </p>
          <p className="bg-mgt-gray/50 p-6 rounded-xl border-l-4 border-mgt-neon text-gray-200">
            <strong className="text-white font-semibold block mb-2">Entenda uma coisa:</strong> 
            enquanto você está focado em tarefas que uma máquina poderia fazer, a sua empresa não cresce. O seu Equity (valor de mercado) congela. Se você é CEO e ainda não opera com uma infraestrutura 100% baseada em IA, você já está pelo menos três anos atrasado em relação aos grandes players do mercado.
          </p>
        </div>

        {/* DESTAQUE / SUB-HEADLINE */}
        <div className="p-8 md:p-10 bg-mgt-gray border border-mgt-gray-light rounded-2xl relative overflow-hidden group hover:border-mgt-neon/30 transition-colors duration-500 shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-mgt-neon/10 blur-3xl rounded-full -mr-10 -mt-10 group-hover:bg-mgt-neon/20 transition-colors duration-500"></div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-mgt-neon relative z-10 leading-tight">
            Amanhã, dia 26/03 às 20:00, nós vamos virar essa chave.
          </h2>
        </div>

        {/* CORPO DE TEXTO 2 */}
        <div className="text-gray-300 text-lg sm:text-xl leading-relaxed">
          <p>
            Esta não será mais uma aulinha teórica sobre ferramentas. Será a engenharia reversa de uma máquina de alta performance corporativa. Vamos abrir a caixa preta da nossa própria infraestrutura para vocês: <strong className="text-white font-semibold text-mgt-neon">a integração perfeita entre Claude Code e Obsidian.</strong>
          </p>
        </div>

        {/* LISTA DE TÓPICOS */}
        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-display font-semibold text-white leading-tight">
            O que os empresários e líderes vão descobrir amanhã na Masterclass:
          </h3>
          <ul className="space-y-6 flex flex-col">
            <li className="flex gap-5 items-start bg-mgt-gray/30 p-6 rounded-xl border border-transparent hover:border-mgt-gray-light transition-all">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-mgt-orange to-[#c53c00] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_15px_rgba(232,97,42,0.3)]">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <p className="text-gray-300 text-[1.1rem] leading-relaxed">
                <strong className="text-white font-semibold block mb-1 text-xl">A Infraestrutura AI First:</strong> 
                O modelo exato para escalar a sua operação e aumentar drasticamente as suas margens de lucro, sem precisar inchar a sua folha de pagamento contratando mais pessoas.
              </p>
            </li>
            <li className="flex gap-5 items-start bg-mgt-gray/30 p-6 rounded-xl border border-transparent hover:border-mgt-gray-light transition-all">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-mgt-orange to-[#c53c00] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_15px_rgba(232,97,42,0.3)]">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <p className="text-gray-300 text-[1.1rem] leading-relaxed">
                <strong className="text-white font-semibold block mb-1 text-xl">Delegação Executiva Autônoma:</strong> 
                Como construir um "Segundo Cérebro" que não apenas armazena processos, mas lê, organiza e executa tarefas através de agentes autônomos.
              </p>
            </li>
            <li className="flex gap-5 items-start bg-mgt-gray/30 p-6 rounded-xl border border-transparent hover:border-mgt-gray-light transition-all">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-mgt-orange to-[#c53c00] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_15px_rgba(232,97,42,0.3)]">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <p className="text-gray-300 text-[1.1rem] leading-relaxed">
                <strong className="text-white font-semibold block mb-1 text-xl">O fim do "CEO Bombeiro":</strong> 
                O passo a passo para se libertar da escravidão do horário comercial e das tarefas repetitivas, voltando a sentar na cadeira de estrategista para prospectar e fechar grandes negócios.
              </p>
            </li>
          </ul>
        </div>

        {/* CORPO DE TEXTO 3 / QUALIFICAÇÃO */}
        <div className="bg-mgt-gray-light/20 backdrop-blur-sm border border-mgt-gray-light/50 p-8 md:p-10 rounded-2xl flex flex-col gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full"></div>
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-white">
            Para quem é o encontro de amanhã?
          </h3>
          <div className="text-gray-300 text-lg sm:text-xl space-y-5 leading-relaxed relative z-10">
            <p>
              Para o empresário que sente o mercado acelerar, sofre com o FOMO (medo de ficar de fora), mas não sabe por onde começar a implementar a IA de verdade. É para o dono de negócio que cansou da teoria e quer ver uma operação real, automatizada e lucrativa funcionando.
            </p>
            <p className="text-gray-400 italic font-medium">
              Se você acha normal ser o gargalo da sua própria empresa, ignore esta mensagem.
            </p>
            <p className="text-white font-medium bg-mgt-gray/50 p-4 rounded-lg border border-white/5">
              Mas se você quer construir uma infraestrutura de alta performance para escalar e faturar mais, o seu lugar é com a gente amanhã.
            </p>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-mgt-gray-light to-transparent my-6" />

        {/* RODAPÉ / CALL TO ACTION */}
        <div className="flex flex-col items-center justify-center text-center gap-10 py-4 pb-12">
          <div className="space-y-4">
            <p className="text-3xl md:text-4xl text-mgt-neon font-display font-semibold">
              Fiquem atentos.
            </p>
            <p className="text-gray-300 text-xl font-medium">
              Os primeiros 100 que confirmarem, vão garantir vaga, para essa reunião fechada.
            </p>
            <p className="text-gray-300 text-xl font-bold text-white mt-4">
              Confirme sua presença no botão "CONFIRMAR" abaixo.
            </p>
          </div>
          
          <a 
            href="https://calendar.app.google/UqQppipbiv9H4yU17"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta-shadow bg-mgt-orange text-[#1a1a1a] font-display font-bold text-xl md:text-2xl py-5 px-14 rounded-[14px] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group w-full sm:w-auto shadow-[0_0_30px_rgba(232,97,42,0.3)]"
          >
            CONFIRMAR
            <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </main>
  );
}
