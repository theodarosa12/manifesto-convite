'use client';

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function HomeContent() {
  const searchParams = useSearchParams();
  const utmSource = searchParams.get('utm_source');
  const confirmarLink = utmSource ? `/confirmar?utm_source=${utmSource}` : '/confirmar';

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-6 sm:p-8 md:p-12 lg:p-20 selection:bg-mgt-neon selection:text-black">
      <div className="w-full max-w-3xl flex flex-col gap-12 lg:gap-14 my-auto py-10">

        {/* INTIMAÇÃO / DATA + CTA TOPO */}
        <div className="bg-mgt-gray border border-mgt-gray-light rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mgt-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-mgt-orange"></span>
              </span>
              <span className="text-mgt-orange font-bold text-xs sm:text-sm tracking-widest uppercase">Ao vivo</span>
            </div>
            <div>
              <p className="font-display text-2xl md:text-3xl font-bold text-white">16/04 às 20:00h</p>
              <p className="text-gray-400 text-sm mt-1">Confirme sua presença agora</p>
            </div>
          </div>
          <Link
            href={confirmarLink}
            className="btn-cta-shadow bg-mgt-orange text-[#1a1a1a] font-display font-bold text-lg py-4 px-10 rounded-[14px] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group shrink-0 shadow-[0_0_20px_rgba(232,97,42,0.3)]"
          >
            CONFIRMAR
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* CABEÇALHO / HEADLINE */}
        <div className="flex flex-col gap-6 text-center md:text-left">
          <div className="inline-flex items-center justify-center md:justify-start gap-2 text-mgt-orange font-bold text-xs sm:text-sm tracking-widest uppercase">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mgt-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-mgt-orange"></span>
            </span>
            Aula ao vivo • 16/04 às 20h
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-white">
            Você está pagando <span className="text-mgt-orange">R$15.000/mês</span> por trabalho que custa R$50.
          </h1>
          <p className="font-display text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-[1.2] text-mgt-neon">
            Meus funcionários custam centavos e trabalham 24/7 — vou te mostrar ao vivo.
          </p>
        </div>

        {/* THUMBNAIL */}
        <Link
          href={confirmarLink}
          className="block w-full rounded-2xl overflow-hidden border border-mgt-gray-light shadow-2xl relative cursor-pointer"
        >
          <Image
            src="/THUMBS (29).png"
            alt="Meus funcionários custam centavos e trabalham 24/7"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            priority
          />
        </Link>

        {/* COMPROMISSO — CEDO */}
        <div className="bg-mgt-gray border border-mgt-neon/20 p-6 md:p-8 rounded-2xl">
          <p className="text-mgt-neon font-display font-semibold text-xl md:text-2xl text-center leading-relaxed">
            Essa aula tem um conteúdo que eu só vou revelar pra quem ficar até o final. Se não puder dedicar 1h30 de atenção total, melhor se inscrever pra próxima.
          </p>
        </div>

        <div className="h-px w-full bg-mgt-gray-light" />

        {/* CORPO DE TEXTO 1 — DOR */}
        <div className="text-gray-300 text-lg sm:text-xl leading-relaxed space-y-6">
          <p>
            Folha de pagamento. Encargos. Férias. Décimo terceiro. Falta. Atraso. Retrabalho. Treinamento de gente nova a cada 6 meses. E no final do dia, metade do time está fazendo tarefa que uma máquina resolve em segundos.
          </p>
          <p>
            Faz a conta: quantas horas por dia sua equipe gasta respondendo as mesmas perguntas, copiando dado de um sistema pro outro, montando relatório que ninguém lê? Duas horas? Três? Multiplica por 22 dias. Multiplica pelo salário/hora. <strong className="text-white font-semibold">Esse é o dinheiro que você joga no lixo todo mês.</strong>
          </p>
          <p className="bg-mgt-gray/50 p-6 rounded-xl border-l-4 border-mgt-orange text-gray-200">
            <strong className="text-white font-semibold block mb-2">Eu resolvi isso.</strong>
            Hoje minha empresa opera com funcionários de IA que custam centavos por hora, não faltam, não pedem aumento, não esquecem, e trabalham enquanto eu durmo. E na quarta, dia 16/04 às 20h, eu vou abrir minha tela e te mostrar exatamente como funciona.
          </p>
        </div>

        {/* DESTAQUE / SUB-HEADLINE */}
        <div className="p-8 md:p-10 bg-mgt-gray border border-mgt-gray-light rounded-2xl relative overflow-hidden group hover:border-mgt-orange/30 transition-colors duration-500 shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-mgt-orange/10 blur-3xl rounded-full -mr-10 -mt-10 group-hover:bg-mgt-orange/20 transition-colors duration-500"></div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-mgt-orange relative z-10 leading-tight">
            Dia 16/04 às 20h, ao vivo. Eu vou te mostrar o sistema.
          </h2>
        </div>

        {/* LISTA DE TÓPICOS */}
        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-display font-semibold text-white leading-tight">
            O que você vai ver nessa aula:
          </h3>
          <ul className="space-y-6 flex flex-col">
            <li className="flex gap-5 items-start bg-mgt-gray/30 p-6 rounded-xl border border-transparent hover:border-mgt-gray-light transition-all">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-mgt-orange to-[#c53c00] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_15px_rgba(232,97,42,0.3)]">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <p className="text-gray-300 text-[1.1rem] leading-relaxed">
                <strong className="text-white font-semibold block mb-1 text-xl">A conta que ninguém faz.</strong>
                Quanto você está perdendo por mês sem IA operando. Em reais — não em &quot;potencial&quot;. Você vai sair dessa aula sabendo o número exato.
              </p>
            </li>
            <li className="flex gap-5 items-start bg-mgt-gray/30 p-6 rounded-xl border border-transparent hover:border-mgt-gray-light transition-all">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-mgt-orange to-[#c53c00] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_15px_rgba(232,97,42,0.3)]">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <p className="text-gray-300 text-[1.1rem] leading-relaxed">
                <strong className="text-white font-semibold block mb-1 text-xl">O que meu sistema faz em 5 minutos.</strong>
                O que minha equipe levava 2 horas. Ao vivo, na minha tela, sem cortes. Você vai ver funcionando.
              </p>
            </li>
            <li className="flex gap-5 items-start bg-mgt-gray/30 p-6 rounded-xl border border-transparent hover:border-mgt-gray-light transition-all">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-mgt-orange to-[#c53c00] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_15px_rgba(232,97,42,0.3)]">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <p className="text-gray-300 text-[1.1rem] leading-relaxed">
                <strong className="text-white font-semibold block mb-1 text-xl">Por que 97% estão usando IA errado.</strong>
                Não é ChatGPT. Não é copiar e colar resposta. É outro sistema — e vou mostrar qual.
              </p>
            </li>
          </ul>
        </div>

        {/* QUALIFICAÇÃO */}
        <div className="bg-mgt-gray-light/20 backdrop-blur-sm border border-mgt-gray-light/50 p-8 md:p-10 rounded-2xl flex flex-col gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full"></div>
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-white">
            Pra quem é essa aula?
          </h3>
          <div className="text-gray-300 text-lg sm:text-xl space-y-5 leading-relaxed relative z-10">
            <p>
              Pra quem tem negócio e sente que <strong className="text-white font-semibold">está pagando caro demais pra operar</strong>. Pro empresário que sabe que IA existe mas não entende como colocar pra trabalhar de verdade.
            </p>
            <p>
              Pro <strong className="text-white font-semibold">profissional que quer vender isso como serviço</strong> pra empresas que estão desesperadas por eficiência.
            </p>
            <p className="text-gray-400 italic font-medium">
              Se você acha normal gastar 3 horas do seu dia em tarefas que uma máquina resolve em segundos — essa aula não é pra você.
            </p>
            <p className="text-white font-medium bg-mgt-gray/50 p-4 rounded-lg border border-white/5">
              Mas se você quer saber exatamente quanto está perdendo e como resolver isso em dias — seu lugar é aqui.
            </p>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-mgt-gray-light to-transparent my-6" />

        {/* RODAPÉ / CALL TO ACTION */}
        <div className="flex flex-col items-center justify-center text-center gap-8 py-4 pb-12">
          <p className="text-gray-400 text-lg font-medium">
            16/04 às 20h — não fique de fora.
          </p>
          <Link
            href={confirmarLink}
            className="btn-cta-shadow bg-mgt-orange text-[#1a1a1a] font-display font-bold text-xl md:text-2xl py-5 px-14 rounded-[14px] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group w-full sm:w-auto shadow-[0_0_30px_rgba(232,97,42,0.3)]"
          >
            CONFIRMAR PRESENÇA
            <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={
      <main className="flex min-h-screen w-full flex-col items-center justify-center p-6 bg-mgt-dark text-white">
        <p>Carregando...</p>
      </main>
    }>
      <HomeContent />
    </Suspense>
  );
}
