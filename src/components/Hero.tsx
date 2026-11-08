import React from 'react';
import { ArrowRight, Zap, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onScrollToProducts: () => void;
  onQuickBuy: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToProducts, onQuickBuy }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background ambient fire glow behind entire hero */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-orange-600/20 via-amber-600/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline and 2 Orange Rounded Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Subtle kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-orange-400 tracking-wider uppercase mb-5">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
              <span>Método Prático e Prompts Prontos</span>
              <span className="text-neutral-500">·</span>
              <span className="text-neutral-400">Sem Computador Potente</span>
            </div>

            {/* Main Headline requested by user */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Aprenda a criar <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">Imagens</span> e Domine As <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400">IA</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mb-8">
              Aprenda os prompts calibrados para criar imagens hiper-realistas e colocar seu rosto com perfeição nas ferramentas de inteligência artificial por apenas <strong className="text-orange-400 font-bold">R$ 49,99</strong>.
            </p>

            {/* 2 Animated Orange Rounded Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              {/* Button 1: Ver Produtos / Ver Oferta */}
              <button
                onClick={onScrollToProducts}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base text-white bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:via-amber-600 hover:to-orange-700 shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:shadow-[0_0_45px_rgba(249,115,22,0.8)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                <span>Ver Criar Imagens</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Button 2: Comprar Agora */}
              <button
                onClick={onQuickBuy}
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-base text-orange-300 bg-neutral-900/95 hover:bg-neutral-850 border-2 border-orange-500/70 hover:border-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_35px_rgba(249,115,22,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
              >
                <Zap className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform" />
                <span>Comprar Agora · R$ 49,99</span>
              </button>
            </div>

            {/* Quick Proof Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-800/80 w-full max-w-lg">
              <div className="flex items-center gap-2 text-xs text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Entrega no E-mail</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-300">
                <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Garantia 7 Dias</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-300">
                <Award className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Cakto Seguro</span>
              </div>
            </div>

          </div>

          {/* Right Column: INTEGRATED PHOTO WITH NATURAL FIRE EFFECT BEHIND IT (NO BULKY FRAME, NO TEXT ON IMAGE) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* === RAGING FIRE FLAME EFFECT GLOWING BEHIND THE PHOTO === */}
              <div className="absolute -inset-8 rounded-full fire-intense-aura opacity-70 blur-3xl animate-flame-aura pointer-events-none" />
              <div className="absolute -inset-4 rounded-3xl fire-gradient-glow opacity-90 blur-2xl pointer-events-none" />

              {/* Dynamic Rising Flame Tongue / Embers behind image */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-32 bg-gradient-to-t from-orange-500/70 to-transparent blur-xl pointer-events-none rounded-t-full" />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-56 h-20 bg-gradient-to-b from-orange-600/60 to-transparent blur-2xl pointer-events-none" />

              {/* === INTEGRATED PHOTO (NO BULKY FRAME BORDER, NO TEXT OVERLAYS, CLEAR FACES) === */}
              <div className="relative rounded-2xl overflow-hidden [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]">
                <img
                  src="/assets/aistudio/image_ce48228e.png"
                  alt="Aprenda a criar imagens e domine as IA"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[520px] object-cover object-top hover:scale-[1.02] transition-transform duration-500 drop-shadow-[0_15px_30px_rgba(255,85,0,0.25)]"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
