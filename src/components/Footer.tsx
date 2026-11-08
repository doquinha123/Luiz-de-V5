import React from 'react';
import { Flame, ShieldCheck, Scale, FileText, MessageSquare } from 'lucide-react';
import { LegalTab } from './LegalTermsModal';

interface FooterProps {
  onOpenLegalModal: (tab: LegalTab) => void;
  onScrollToProducts: () => void;
  onOpenFeedback: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenLegalModal, 
  onScrollToProducts,
  onOpenFeedback
}) => {
  return (
    <footer className="relative bg-[#020202] border-t border-neutral-900 py-14 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center text-white">
                <Flame className="w-4 h-4" />
              </span>
              <span className="font-extrabold text-white text-base tracking-wider uppercase">
                Domine as <span className="text-orange-500">IAs</span>
              </span>
            </div>
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              Packs profissionais de prompts para criação de imagens hiper-realistas com inteligência artificial. Métodos práticos para celular e computador.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-orange-400 transition-colors">Início</a></li>
              <li>
                <button onClick={onScrollToProducts} className="hover:text-orange-400 transition-colors cursor-pointer text-left">
                  Ver Produtos
                </button>
              </li>
              <li><a href="#diretrizes" className="hover:text-orange-400 transition-colors">Diretrizes & Ética</a></li>
              <li><a href="#beneficios" className="hover:text-orange-400 transition-colors">Como Funciona</a></li>
              <li>
                <button onClick={onOpenFeedback} className="hover:text-orange-400 transition-colors cursor-pointer text-left flex items-center gap-1">
                  <MessageSquare className="w-3 h-3" />
                  <span>Enviar Feedback</span>
                </button>
              </li>
              <li><a href="#faq" className="hover:text-orange-400 transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">Segurança e Pagamentos</h4>
            <div className="space-y-2">
              <p className="flex items-center gap-1.5 text-neutral-300">
                <ShieldCheck className="w-4 h-4 text-orange-400" />
                <span>Intermediação Segura Cakto</span>
              </p>
              <p className="text-[11px] text-neutral-400">
                Processamento oficial de pagamentos com criptografia de ponta a ponta e garantia incondicional de 7 dias.
              </p>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-neutral-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <p>© {new Date().getFullYear()} Domine as IAs. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenLegalModal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Termos de Uso
            </button>
            <span>·</span>
            <button
              onClick={() => onOpenLegalModal('guidelines')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Diretrizes de IA
            </button>
            <span>·</span>
            <button
              onClick={() => onOpenLegalModal('refund')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Garantia 7 Dias
            </button>
            <span>·</span>
            <button
              onClick={() => onOpenLegalModal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Políticas de Privacidade
            </button>
            <span>·</span>
            <button
              onClick={onOpenFeedback}
              className="text-orange-400 hover:text-orange-300 cursor-pointer font-semibold"
            >
              Opinião & Feedback
            </button>
            <span>·</span>
            <span className="text-neutral-500">
              Pagamento 100% no Site
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
