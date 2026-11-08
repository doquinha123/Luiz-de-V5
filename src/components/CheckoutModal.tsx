import React from 'react';
import { Product } from '../data/products';
import { X, ShieldCheck, Flame, Lock } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  product
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4">
      <div 
        className="relative w-full max-w-3xl bg-neutral-900 border border-orange-500/30 rounded-3xl shadow-2xl shadow-orange-950/70 overflow-hidden my-4 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header Bar */}
        <div className="px-6 py-4 bg-neutral-950 border-b border-orange-500/20 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/40">
              <Flame className="w-4 h-4 animate-pulse" />
            </span>
            <div>
              <h3 className="font-bold text-white text-base">Checkout Cakto Oficial</h3>
              <p className="text-[11px] text-neutral-400">Ambiente criptografado · Pagamento direto na Cakto</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            title="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
          
          {/* Product Header */}
          <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-between gap-4 shrink-0">
            <div className="flex items-center gap-3">
              <img
                src={product.image}
                alt={product.name}
                className="w-14 h-16 rounded-xl object-cover object-top border border-orange-500/30"
              />
              <div>
                <span className="text-[11px] text-orange-400 font-bold uppercase">Opção Selecionada</span>
                <h4 className="font-extrabold text-white text-base">{product.name}</h4>
                <p className="text-xs text-neutral-400">Com os 3 temas + tutorial do Pinterest e apps</p>
              </div>
            </div>
            <div className="text-right shrink-0">
              <span className="text-[11px] text-neutral-500 line-through block">
                De R$ {product.originalPrice.toFixed(2).replace('.', ',')}
              </span>
              <span className="text-2xl font-black text-orange-400">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </span>
            </div>
          </div>

          {/* EMBEDDED REAL CAKTO CHECKOUT */}
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1 text-xs">
              <span className="text-neutral-300 font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Preencha seus dados para finalizar na Cakto:</span>
              </span>
              <span className="text-orange-400 font-mono text-[11px] flex items-center gap-1">
                <Lock className="w-3 h-3" />
                <span>Checkout 100% Seguro</span>
              </span>
            </div>

            <div className="relative w-full h-[620px] rounded-2xl overflow-hidden border border-orange-500/30 bg-neutral-950 shadow-inner">
              <iframe
                src="https://pay.cakto.com.br/35utq2t_1297997"
                title="Cakto Pagamento Seguro"
                className="w-full h-full border-0"
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 text-[11px] text-neutral-400 pt-2 border-t border-neutral-800 text-center">
            <span>Garantia de 7 Dias</span>
            <span>·</span>
            <span>Processamento Oficial Cakto</span>
            <span>·</span>
            <span className="text-orange-400 font-semibold">Liberação após conclusão na Cakto</span>
          </div>

        </div>

      </div>
    </div>
  );
};
