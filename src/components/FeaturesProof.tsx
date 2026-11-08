import React, { useState } from 'react';
import { 
  Smartphone, Sparkles, Zap, ShieldCheck, ChevronDown, CheckCircle2, 
  HelpCircle, Image, Star, Flame, Award
} from 'lucide-react';

export const FeaturesProof: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const steps = [
    {
      num: '01',
      title: 'Garanta o Criar Imagens',
      desc: 'Adquira a opção completa por apenas R$ 49,99 com acesso liberado a todos os temas e tutorial exclusivo.',
      icon: Image
    },
    {
      num: '02',
      title: 'Acesso Imediato no seu Dispositivo',
      desc: 'Assim que o pagamento for aprovado pela Cakto, você recebe na hora o link de acesso exclusivo direto no seu navegador.',
      icon: Zap
    },
    {
      num: '03',
      title: 'Aprenda Onde Pegar Imagens',
      desc: 'Descubra os melhores termos e apps como Pinterest, Instagram e bancos para obter as referências perfeitas.',
      icon: Smartphone
    },
    {
      num: '04',
      title: 'Copie os Prompts e Gere com seu Rosto',
      desc: 'Aprenda o método simples para colocar seu rosto com iluminação perfeita e qualidade profissional.',
      icon: Sparkles
    }
  ];

  const faqs = [
    {
      q: 'Preciso ter computador potente ou placa de vídeo?',
      a: 'Não! Todas as ferramentas de Inteligência Artificial rodam 100% na nuvem. Você pode gerar todas as imagens diretamente pelo seu celular Android ou iPhone, ou pelo seu computador básico.'
    },
    {
      q: 'Quais ferramentas e Inteligências Artificiais são usadas?',
      a: 'Os prompts foram calibrados com precisão para ferramentas modernas com suporte a referência de rosto. Você aprende tudo no tutorial passo a passo após a compra.'
    },
    {
      q: 'Como e quando recebo o acesso?',
      a: 'A liberação é instantânea no seu próprio dispositivo através da sua Aba de Acesso exclusiva, além do envio para o seu e-mail informado no checkout da Cakto.'
    },
    {
      q: 'Como funciona a substituição de rosto (Face Swap / Face Reference)?',
      a: 'Ensinamos no tutorial o método passo a passo utilizando fotos de selfie naturais para mesclar o seu rosto mantendo a iluminação, expressões, cor da pele e resolução idênticas à foto de referência.'
    },
    {
      q: 'Existe alguma garantia se eu não gostar?',
      a: 'Sim! Você conta com 7 dias de garantia incondicional pela Cakto. Se por qualquer motivo achar que o treinamento não atendeu suas expectativas, devolvemos 100% do seu dinheiro.'
    }
  ];

  return (
    <div className="relative bg-[#050505]">
      
      {/* How it works Section */}
      <section id="beneficios" className="py-24 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold text-orange-400 uppercase tracking-widest">
              Passo a Passo Simples
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Como funciona o <span className="text-orange-500">Acesso aos Prompts</span>
            </h2>
            <p className="text-sm text-neutral-400 mt-3">
              Você não precisa de nenhum conhecimento prévio. É só copiar, colar e gerar fotos de qualidade cinematográfica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="relative p-6 rounded-3xl bg-neutral-900/60 border border-neutral-800 hover:border-orange-500/40 transition-all group"
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black text-orange-500/80 font-mono">
                      {step.num}
                    </span>
                    <span className="w-10 h-10 rounded-2xl bg-orange-500/10 text-orange-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Social Proof & Guarantee Section */}
      <section id="depoimentos" className="py-20 bg-neutral-950/80 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold text-orange-400 uppercase tracking-widest">
                Segurança e Confiança
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
                7 Dias de Garantia <br />
                <span className="text-orange-500">Risco Absolutamente Zero</span>
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                Teste todos os prompts, crie suas fotos e comprove a qualidade. Se dentro de 7 dias você achar que o conteúdo não é para você, devolvemos seu dinheiro integralmente via Cakto.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Reembolso automático em 1 clique</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Plataforma Cakto reconhecida nacionalmente</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Suporte humanizado no WhatsApp</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800">
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-neutral-300 italic mb-4">
                  "O método de criar imagens é surreal! Consegui criar a foto com a taça e parecer que eu realmente estava no vestiário com o Cristiano. Meus amigos não acreditaram quando viram a perfeição do meu rosto."
                </p>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 font-bold text-xs flex items-center justify-center">
                    MR
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Matheus Ramos</h4>
                    <span className="text-[10px] text-neutral-500">Adquiriu Criar Imagens</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800">
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-neutral-300 italic mb-4">
                  "O tutorial ensinando a buscar referências no Pinterest e os prompts calibrados me ajudaram a renovar completamente meu feed. Por R$ 49,99 vale dez vezes mais. Muito top!"
                </p>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 font-bold text-xs flex items-center justify-center">
                    LF
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Lucas Ferreira</h4>
                    <span className="text-[10px] text-neutral-500">Adquiriu Criar Imagens</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-orange-400 uppercase tracking-widest">
              Tire suas dúvidas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-neutral-900/80 border border-neutral-800 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-800/40 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-orange-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};
