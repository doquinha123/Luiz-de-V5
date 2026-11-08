import React from 'react';
import { Flame, ShoppingCart, MessageSquare, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenCheckout: () => void;
  onScrollToProducts: () => void;
  onOpenFeedback: () => void;
  isPaid: boolean;
  onOpenTutorialTab: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenCheckout,
  onScrollToProducts,
  onOpenFeedback,
  isPaid,
  onOpenTutorialTab
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#050505]/85 backdrop-blur-md border-b border-orange-500/15 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 group"
        >
          <span className="w-9 h-9 rounded-full bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-600/30 group-hover:scale-105 transition-transform">
            <Flame className="w-5 h-5 text-white animate-pulse" />
          </span>
          <span className="font-extrabold uppercase tracking-wider text-base sm:text-lg">
            Domine as <span className="text-orange-500">IAs</span>
          </span>
        </a>

        {/* Zone 2: Clean Nav Links - ZERO Flow AI mentions before purchase */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-300">
          <a
            href="#hero"
            className="hover:text-orange-400 transition-colors whitespace-nowrap shrink-0"
          >
            Início
          </a>
          <button
            onClick={onScrollToProducts}
            className="hover:text-orange-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Produtos
          </button>
          
          {/* Post-Purchase Tab: Unlocked only after paying */}
          {isPaid && (
            <button
              onClick={onOpenTutorialTab}
              className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-black font-extrabold text-xs flex items-center gap-1.5 shadow-lg shadow-orange-500/30 cursor-pointer animate-pulse whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>Aba de Acesso (Liberado)</span>
            </button>
          )}

          <a
            href="#diretrizes"
            className="hover:text-orange-400 transition-colors whitespace-nowrap shrink-0"
          >
            Diretrizes
          </a>
          <button
            onClick={onOpenFeedback}
            className="hover:text-orange-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Feedback</span>
          </button>
          <a
            href="#faq"
            className="hover:text-orange-400 transition-colors whitespace-nowrap shrink-0"
          >
            Dúvidas
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          {isPaid ? (
            <button
              onClick={onOpenTutorialTab}
              className="relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-extrabold text-xs sm:text-sm tracking-wide shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0"
            >
              <Sparkles className="w-4 h-4 text-black" />
              <span>Aba de Acesso</span>
            </button>
          ) : (
            <button
              onClick={onOpenCheckout}
              className="relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0"
            >
              <Flame className="w-4 h-4 text-white" />
              <span>Comprar · R$ 49,99</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
