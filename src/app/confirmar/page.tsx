'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { motion } from 'framer-motion';

function ConfirmarForm() {
  const searchParams = useSearchParams();
  const utmSource = searchParams.get('utm_source') || 'direto';

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/confirmar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, whatsapp, origem: utmSource }),
      });

      if (response.ok) {
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'Lead');
        }
        setConfirmed(true);
      } else {
        const result = await response.json();
        alert(`Erro: ${result.error || 'Tente novamente.'}`);
        setIsSubmitting(false);
      }
    } catch (error: any) {
      alert(`Erro na requisição: ${error.message}`);
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-6 bg-mgt-dark text-white font-sans selection:bg-mgt-neon selection:text-black">
      <div className="w-full max-w-xl bg-mgt-gray border border-mgt-gray-light p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
        {!confirmed ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="space-y-4 text-center">
              <div className="inline-flex items-center justify-center gap-2 text-mgt-orange font-bold text-xs sm:text-sm tracking-widest uppercase">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mgt-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-mgt-orange"></span>
                </span>
                Aula ao vivo • 16/04 às 20h
              </div>
              <h1 className="text-3xl md:text-4xl font-display font-bold leading-tight">
                Confirme sua presença: <span className="text-mgt-neon">Funcionários de IA por centavos</span>
              </h1>
              <p className="text-gray-400 text-lg">Preencha abaixo para garantir sua vaga.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold tracking-wide text-gray-400 uppercase">Seu Nome</label>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Como você prefere ser chamado?"
                  required
                  className="w-full bg-mgt-dark border border-mgt-gray-light rounded-xl p-4 text-lg focus:border-mgt-neon outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold tracking-wide text-gray-400 uppercase">Seu E-mail</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  required
                  className="w-full bg-mgt-dark border border-mgt-gray-light rounded-xl p-4 text-lg focus:border-mgt-neon outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold tracking-wide text-gray-400 uppercase">Seu WhatsApp</label>
                <input
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="(00) 00000-0000"
                  required
                  className="w-full bg-mgt-dark border border-mgt-gray-light rounded-xl p-4 text-lg focus:border-mgt-neon outline-none transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={!nome || !email || !whatsapp || isSubmitting}
                className="w-full btn-cta-shadow bg-mgt-orange text-[#1a1a1a] font-display font-bold py-5 rounded-xl text-xl hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(232,97,42,0.3)]"
              >
                {isSubmitting ? 'CONFIRMANDO...' : 'CONFIRMAR PRESENÇA'}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-8 py-10"
          >
            <div className="w-20 h-20 bg-mgt-neon/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-mgt-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-display font-bold text-white">Presença confirmada!</h2>
              <p className="text-gray-400 text-xl">
                Nos vemos dia <span className="text-mgt-neon font-semibold">16/04 às 20h</span>. Fique atento ao seu WhatsApp para receber o link da aula.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <p className="text-gray-300 text-lg">
                Fique atento ao seu WhatsApp — vamos enviar o link da aula antes de começar.
              </p>
            </div>
          </motion.div>
        )}
      </div>

      <p className="mt-8 text-gray-500 text-sm font-medium tracking-widest uppercase">
        Funcionários de IA por centavos • MGT
      </p>
    </main>
  );
}

export default function ConfirmarPage() {
  return (
    <Suspense fallback={
      <main className="flex min-h-screen w-full flex-col items-center justify-center p-6 bg-mgt-dark text-white">
        <p>Carregando...</p>
      </main>
    }>
      <ConfirmarForm />
    </Suspense>
  );
}
