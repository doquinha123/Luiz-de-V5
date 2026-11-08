import React, { useState } from 'react';
import { MAIN_PRODUCT } from '../data/products';
import { Zap, Check, Eye, Sparkles, ShieldCheck, Flame, Compass, Lock } from 'lucide-react';

interface ProductsSectionProps {
  onSelectProduct: () => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onSelectProduct }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const photoLabels = [
    { title: 'Tema 01: Campeão no Estádio', tag: 'Jogadores & Troféu' },
    { title: 'Tema 02: Luxo no Carro', tag: 'Streetwear & Lifestyle' },
    { title: 'Tema 03: Ídolos Globais', tag: 'Vestiário & Lendas' }
  ];

  return (
    <section id="produtos" className="relative py-24 bg-[#050505] border-t border-neutral-900">
      {/* Background ambient fire glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-orange-600/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-amber-500/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>Opção Única & Completa</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Criar <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">Imagens</span>
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base mt-3 leading-relaxed">
            Tenha acesso completo ao treinamento com os 3 estilos de criação, prompts calibrados e o método ensinando onde garimpar as melhores imagens no Pinterest e em vários apps.
          </p>
        </div>

        {/* SINGLE UNIFIED PRODUCT CARD: CRIAR IMAGENS FOR R$ 49,99 */}
        <div className="relative rounded-3xl bg-neutral-900/90 border-2 border-orange-500/40 shadow-2xl shadow-orange-950/40 overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
            
            {/* Left: The 3 Photos Showcase */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Main Featured Photo (Selected from the 3) */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-xl group">
                <img
                  src={MAIN_PRODUCT.galleryImages[selectedPhotoIndex]}
                  alt="Criar Imagens Exemplo"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtitle bottom banner */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-neutral-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-orange-400 uppercase font-bold block">
                      {photoLabels[selectedPhotoIndex].tag}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-white">
                      {photoLabels[selectedPhotoIndex].title}
                    </h4>
                  </div>
                  <button
                    onClick={() => setPreviewImage(MAIN_PRODUCT.galleryImages[selectedPhotoIndex])}
                    className="p-1.5 rounded-lg bg-neutral-800 hover:bg-orange-500 text-white hover:text-black transition-colors cursor-pointer"
                    title="Ampliar"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* The 3 Photos Selector Thumbnails */}
              <div className="grid grid-cols-3 gap-3">
                {MAIN_PRODUCT.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedPhotoIndex(idx)}
                    className={`relative rounded-xl overflow-hidden border-2 transition-all p-1 bg-neutral-950 cursor-pointer ${
                      selectedPhotoIndex === idx
                        ? 'border-orange-500 ring-2 ring-orange-500/30 scale-102'
                        : 'border-neutral-800 hover:border-neutral-700 opacity-65 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Foto ${idx + 1}`}
                      className="w-full aspect-[3/4] object-cover object-top rounded-lg"
                    />
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 text-[10px] font-bold px-2 py-0.5 rounded bg-black/80 text-orange-300">
                      Foto 0{idx + 1}
                    </span>
                  </button>
                ))}
              </div>

            </div>

            {/* Right: Offer Details, Pinterest/Apps module & Big Buy CTA */}
            <div className="lg:col-span-6 space-y-6">
              
              <div>
                <span className="text-xs font-bold text-orange-400 uppercase tracking-widest block mb-1">
                  Pacote Completo Oficial
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Criar Imagens & Dominar IA
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
                  Tudo o que você precisa para criar imagens surreais com o seu rosto. Você recebe o método ensinando exatamente onde garimpar referências (no Pinterest e em vários apps) e a aba de acesso privada.
                </p>
              </div>

              {/* What's included checklist */}
              <div className="p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800 space-y-2.5">
                <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2 text-orange-400">
                  O que você vai receber:
                </span>
                {MAIN_PRODUCT.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                    <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Price Block */}
              <div className="p-5 rounded-2xl bg-neutral-950 border border-orange-500/30 flex items-center justify-between">
                <div>
                  <span className="text-xs text-neutral-500 line-through block">
                    De R$ 197,00
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-white">
                    R$ <span className="text-orange-400">49,99</span>
                  </div>
                  <span className="text-[11px] text-neutral-400">
                    Valor único · Acesso vitalício no seu dispositivo
                  </span>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 font-bold text-xs border border-emerald-500/30">
                    <Flame className="w-3.5 h-3.5" />
                    <span>Liberado na Cakto</span>
                  </span>
                </div>
              </div>

              {/* The Single Big Action Button */}
              <div className="space-y-3">
                <button
                  onClick={onSelectProduct}
                  className="w-full py-4 px-8 rounded-full font-black text-base text-white bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:via-amber-600 hover:to-orange-700 shadow-[0_0_35px_rgba(249,115,22,0.5)] hover:shadow-[0_0_50px_rgba(249,115,22,0.8)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer flex items-center justify-center gap-3"
                >
                  <Zap className="w-5 h-5 text-black fill-black" />
                  <span>Comprar Criar Imagens · R$ 49,99</span>
                </button>

                <div className="flex items-center justify-center gap-4 text-xs text-neutral-400 pt-1">
                  <span className="flex items-center gap-1 text-neutral-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
                    <span>Garantia de 7 Dias</span>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1 text-neutral-300">
                    <Lock className="w-3.5 h-3.5 text-orange-400" />
                    <span>Cakto 100% no Site</span>
                  </span>
                  <span>·</span>
                  <span>Acesso Imediato</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Image Zoom Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-neutral-900 rounded-2xl overflow-hidden border border-orange-500/40 p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={previewImage}
              alt="Visualização"
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
            />
            <div className="p-4 flex items-center justify-end">
              <button
                onClick={() => setPreviewImage(null)}
                className="px-5 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
