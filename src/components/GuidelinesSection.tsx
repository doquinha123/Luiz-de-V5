import React, { useState } from 'react';
import { Scale, ShieldCheck, Terminal, Copy, Check, FileText, Sparkles, BookOpen } from 'lucide-react';
import { LegalTab } from './LegalTermsModal';

interface GuidelinesSectionProps {
  onOpenLegalModal: (tab: LegalTab) => void;
}

export const GuidelinesSection: React.FC<GuidelinesSectionProps> = ({ onOpenLegalModal }) => {
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const samplePrompt = `cinematic 8k portrait of an athletic soccer champion inside a luxury locker room, holding a solid gold tournament trophy, high contrast stadium rim lighting, photorealistic skin textures, shot on Leica 35mm f/1.4 --ar 3:4 --style raw --v 6.1`;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(samplePrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2500);
  };

  const guidelines = [
    {
      icon: Scale,
      title: 'Diretrizes Éticas e Responsabilidade',
      desc: 'Encorajamos o uso consciente da IA. Nossos métodos ensinam a aplicar consistência de rosto em suas próprias fotos ou com consentimento prévio, garantindo segurança e respeito à privacidade.',
      tab: 'guidelines' as LegalTab
    },
    {
      icon: ShieldCheck,
      title: 'Termos de Uso e Direitos Comerciais',
      desc: 'Todas as imagens que você criar com os prompts são 100% de sua propriedade. Você pode usá-las comercialmente no Instagram, YouTube, campanhas de marketing ou portfólio de clientes.',
      tab: 'terms' as LegalTab
    },
    {
      icon: BookOpen,
      title: 'Garantia Incondicional de 7 Dias',
      desc: 'Total conformidade com o Código de Defesa do Consumidor. Caso o treinamento não atenda suas expectativas, o reembolso integral de R$ 49,99 é feito pela Cakto.',
      tab: 'refund' as LegalTab
    },
    {
      icon: FileText,
      title: 'Privacidade de Dados (LGPD)',
      desc: 'Seus dados fornecidos no checkout são protegidos com criptografia de ponta a ponta e utilizados exclusivamente para liberação do acesso e suporte no WhatsApp.',
      tab: 'privacy' as LegalTab
    }
  ];

  return (
    <section id="diretrizes" className="relative py-24 bg-[#040404] border-t border-neutral-900 overflow-hidden">
      {/* Background soft ambient flame glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-orange-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-orange-400 uppercase tracking-widest mb-3">
            <Scale className="w-3.5 h-3.5 text-orange-400" />
            <span>Transparência e Boas Práticas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Diretrizes Oficiais e <span className="text-orange-500">Termos de Uso</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
            Desenvolvido para criadores que buscam resultados de alto nível com ética, segurança e total conformidade com as regras das principais plataformas de Inteligência Artificial.
          </p>
        </div>

        {/* 4 Guidelines Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {guidelines.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-neutral-900/70 border border-neutral-800 hover:border-orange-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-2xl bg-orange-500/10 text-orange-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </span>
                    <button
                      onClick={() => onOpenLegalModal(item.tab)}
                      className="text-xs text-orange-400 hover:text-orange-300 font-semibold cursor-pointer underline underline-offset-4"
                    >
                      Ler detalhes
                    </button>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Prompt Demo Box - Showing "Mais Coisas" / Demonstrating Value */}
        <div className="p-6 sm:p-8 rounded-3xl bg-neutral-950 border border-orange-500/30 relative overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-orange-400 mb-1">
                <Terminal className="w-4 h-4" />
                <span>Exemplo Real de Prompt Calibrado (Criar Imagens)</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Engenharia de Prompt Profissional 8K
              </h4>
              <p className="text-xs text-neutral-400 mt-1">
                Veja a estrutura técnica testada que garante iluminação de cinema e consistência de estúdio:
              </p>
            </div>

            <button
              onClick={handleCopyPrompt}
              className="self-start lg:self-auto py-2.5 px-5 rounded-full bg-orange-500/15 hover:bg-orange-500 text-orange-300 hover:text-black border border-orange-500/40 font-bold text-xs flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap"
            >
              {copiedPrompt ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedPrompt ? 'Prompt Copiado!' : 'Copiar Prompt de Teste'}</span>
            </button>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 font-mono text-xs text-orange-300/90 leading-relaxed overflow-x-auto select-all">
            {samplePrompt}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span>Compatível com Midjourney, Flux & Bing Image Creator</span>
            </span>
            <span>·</span>
            <span>Sem distorções em dedos e olhos</span>
            <span>·</span>
            <span>Fórmula de substituição de rosto inclusa no pack</span>
          </div>
        </div>

      </div>
    </section>
  );
};
