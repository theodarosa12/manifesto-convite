'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  {
    id: 'pergunta1',
    question: 'Qual é o seu nível de familiaridade com o Claude Code hoje?',
    options: [
      'Nunca ouvi falar, mas sei que preciso aprender.',
      'Já ouvi falar, mas nunca tentei usar na prática.',
      'Estou começando a testar e brincar com a ferramenta.',
      'Já uso ativamente para desenvolvimento no meu dia a dia.'
    ]
  },
  {
    id: 'pergunta2',
    question: 'Sendo bem sincero, você sabe o que é e como funciona uma API?',
    options: [
      'Não faço ideia do que seja.',
      'Sei a teoria, mas não sei integrar sozinho.',
      'Sim, sei o que é e já faço integrações.'
    ]
  },
  {
    id: 'pergunta3',
    question: 'Qual é o seu objetivo principal com a IA e Automações hoje?',
    options: [
      'Quero aprender a ferramenta do zero para ganhar dinheiro e prestar serviço',
      'Quero aprender para eu mesmo aplicar no meu próprio negócio',
      'Quero entender o conceito, mas prefiro contratar alguém/uma equipe para implementar na minha empresa'
    ]
  },
  {
    id: 'pergunta4',
    question: 'Se você pudesse automatizar uma única tarefa hoje para economizar tempo e faturar mais, qual seria?',
    type: 'text',
    placeholder: 'Ex: Atendimento WhatsApp, leitura de contratos...'
  },
  {
    id: 'pergunta5',
    question: 'Para eu entender com quem estou falando, qual é o seu perfil profissional hoje?',
    options: [
      'Sou CEO / Founder / Dono do meu próprio negócio.',
      'Tenho uma Agência (Marketing, IA, etc.).',
      'Sou Prestador de Serviço / Freelancer.',
      'Sou CLT ou estou começando do zero no mercado digital.'
    ]
  }
];

export default function QuizPage() {
  const [step, setStep] = useState(0); // 0 = Identificação, 1..5 = Perguntas, 6 = Finalizado
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    pergunta1: '',
    pergunta2: '',
    pergunta3: '',
    pergunta4: '',
    pergunta5: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = (value?: string) => {
    if (value) {
      const currentId = step === 0 ? '' : questions[step - 1].id;
      if (currentId) setFormData(prev => ({ ...prev, [currentId]: value }));
    }

    if (step < questions.length) {
      setStep(step + 1);
    } else {
      submitQuiz();
    }
  };

  const submitQuiz = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStep(questions.length + 1);
        setTimeout(() => {
          window.location.href = "https://calendar.app.google/UqQppipbiv9H4yU17";
        }, 3000);
      } else {
        const result = await response.json();
        alert(`Erro ao salvar respostas: ${result.error || 'Erro inesperado'}. Tente novamente.`);
        setIsSubmitting(false);
      }
    } catch (error: any) {
      alert(`Erro técnico na requisição: ${error.message}`);
      console.error(error);
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-6 bg-mgt-dark text-white font-sans selection:bg-mgt-neon selection:text-black">
      <div className="w-full max-w-xl bg-mgt-gray border border-mgt-gray-light p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-mgt-gray-light">
          <motion.div 
            className="h-full bg-mgt-neon"
            initial={{ width: 0 }}
            animate={{ width: `${(step / (questions.length + 1)) * 100}%` }}
          />
        </div>

        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="space-y-4 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-display font-bold leading-tight">
                  Antes de confirmarmos sua vaga, precisamos de <span className="text-mgt-neon">30 segundos</span> do seu tempo.
                </h1>
                <p className="text-gray-400 text-lg">Preencha seus dados para começar o quiz rápido.</p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold tracking-wide text-gray-400 uppercase">Seu Nome Completo</label>
                  <input 
                    type="text" 
                    value={formData.nome}
                    onChange={(e) => setFormData({...formData, nome: e.target.value})}
                    placeholder="Como você prefere ser chamado?"
                    className="w-full bg-mgt-dark border border-mgt-gray-light rounded-xl p-4 text-lg focus:border-mgt-neon outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold tracking-wide text-gray-400 uppercase">Seu WhatsApp</label>
                  <input 
                    type="tel" 
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                    placeholder="(00) 00000-0000"
                    className="w-full bg-mgt-dark border border-mgt-gray-light rounded-xl p-4 text-lg focus:border-mgt-neon outline-none transition-all"
                  />
                </div>
                <button 
                  disabled={!formData.nome || !formData.whatsapp}
                  onClick={() => setStep(1)}
                  className="w-full bg-mgt-orange text-black font-bold py-5 rounded-xl text-xl hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(232,97,42,0.3)]"
                >
                  COMEÇAR QUIZ
                </button>
              </div>
            </motion.div>
          )}

          {step > 0 && step <= questions.length && (
            <motion.div
              key={`step${step}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <span className="text-mgt-neon font-bold text-sm tracking-widest uppercase">Pergunta {step} de {questions.length}</span>
                <h2 className="text-2xl md:text-3xl font-display font-bold leading-tight">
                  {questions[step - 1].question}
                </h2>
              </div>

              <div className="space-y-4">
                {questions[step - 1].type === 'text' ? (
                  <div className="space-y-6">
                    <textarea 
                      autoFocus
                      value={formData.pergunta4}
                      onChange={(e) => setFormData({...formData, pergunta4: e.target.value})}
                      placeholder={questions[step - 1].placeholder}
                      className="w-full bg-mgt-dark border border-mgt-gray-light rounded-xl p-4 text-lg min-h-[150px] focus:border-mgt-neon outline-none transition-all"
                    />
                    <button 
                      onClick={() => handleNext()}
                      className="w-full bg-mgt-neon text-black font-bold py-5 rounded-xl text-xl hover:scale-[1.02] transition-all"
                    >
                      PRÓXIMA PERGUNTA
                    </button>
                  </div>
                ) : (
                  questions[step - 1].options?.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleNext(option)}
                      className="w-full text-left bg-mgt-dark border border-mgt-gray-light p-5 rounded-xl text-lg hover:border-mgt-neon hover:bg-mgt-neon/5 transition-all group relative overflow-hidden"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full border border-mgt-gray-light flex items-center justify-center shrink-0 group-hover:border-mgt-neon transition-colors">
                          <div className="w-2 h-2 rounded-full bg-mgt-neon scale-0 group-hover:scale-100 transition-transform" />
                        </div>
                        <span className="text-gray-200 group-hover:text-white transition-colors">{option}</span>
                      </div>
                    </button>
                  ))
                )}
              </div>
            </motion.div>
          )}

          {step > questions.length && (
            <motion.div
              key="final"
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
                <h2 className="text-4xl font-display font-bold text-white">Respostas Salvas!</h2>
                <p className="text-gray-400 text-xl">
                  Estamos redirecionando você agora para <span className="text-mgt-neon font-semibold text-white">confirmar sua vaga</span> na Call do Google Meet.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-12 h-12 border-4 border-mgt-neon border-t-transparent rounded-full animate-spin" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p className="mt-8 text-gray-500 text-sm font-medium tracking-widest uppercase">
        Infraestrutura 100% baseada em IA • MGT
      </p>
    </main>
  );
}
