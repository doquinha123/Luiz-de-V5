import React, { useState } from 'react';
import { X, ShieldCheck, Scale, FileText, Lock, CheckCircle2 } from 'lucide-react';

export type LegalTab = 'terms' | 'guidelines' | 'privacy' | 'refund';

interface LegalTermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: LegalTab;
}

export const LegalTermsModal: React.FC<LegalTermsModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'terms'
}) => {
  const [activeTab, setActiveTab] = useState<LegalTab>(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative w-full max-w-3xl bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-6 py-4 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center">
              <Scale className="w-4 h-4" />
            </span>
            <div>
              <h3 className="font-bold text-white text-base">Termos, Diretrizes & Privacidade</h3>
              <p className="text-xs text-neutral-400">Transparência, conformidade legal e segurança Cakto</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-neutral-800 bg-neutral-950/60 overflow-x-auto scrollbar-none px-4">
          <button
            onClick={() => setActiveTab('terms')}
            className={`py-3 px-4 text-xs font-bold transition-all border-b-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'terms'
                ? 'border-orange-500 text-orange-400'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Termos de Uso
          </button>
          <button
            onClick={() => setActiveTab('guidelines')}
            className={`py-3 px-4 text-xs font-bold transition-all border-b-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'guidelines'
                ? 'border-orange-500 text-orange-400'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Diretrizes de IA & Ética
          </button>
          <button
            onClick={() => setActiveTab('refund')}
            className={`py-3 px-4 text-xs font-bold transition-all border-b-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'refund'
                ? 'border-orange-500 text-orange-400'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Garantia & Reembolso (7 Dias)
          </button>
          <button
            onClick={() => setActiveTab('privacy')}
            className={`py-3 px-4 text-xs font-bold transition-all border-b-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'privacy'
                ? 'border-orange-500 text-orange-400'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Políticas de Privacidade (LGPD)
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto text-xs sm:text-sm text-neutral-300 space-y-5 leading-relaxed">
          
          {activeTab === 'terms' && (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-orange-400" />
                <span>1. Termos de Uso e Licença de Conteúdo</span>
              </h4>
              <p>
                Ao adquirir qualquer pack no site <strong>Domine as IAs</strong>, o comprador obtém uma licença pessoal e intransferível de uso dos prompts, fórmulas textuais, guias e parâmetros de iluminação fornecidos.
              </p>
              <div className="p-4 bg-neutral-950 rounded-2xl border border-neutral-800 space-y-2">
                <h5 className="font-bold text-white text-xs uppercase text-orange-400">O que você PODE fazer:</h5>
                <ul className="space-y-1 list-disc list-inside text-neutral-300 text-xs">
                  <li>Gerar imagens ilimitadas para suas redes sociais, perfis pessoais e profissionais;</li>
                  <li>Utilizar as imagens geradas comercialmente em campanhas, publicidades ou para seus clientes;</li>
                  <li>Acessar as atualizações futuras do pack adquirido sem custos adicionais.</li>
                </ul>
              </div>
              <div className="p-4 bg-neutral-950 rounded-2xl border border-neutral-800 space-y-2">
                <h5 className="font-bold text-white text-xs uppercase text-red-400">O que é PROIBIDO:</h5>
                <ul className="space-y-1 list-disc list-inside text-neutral-300 text-xs">
                  <li>Revender, piratear, doar ou redistribuir os arquivos de prompts brutos em sites, grupos ou drives públicos;</li>
                  <li>Compartilhar acessos ou links de download direto sem a devida autorização.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'guidelines' && (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Scale className="w-4 h-4 text-orange-400" />
                <span>2. Diretrizes de Criação com IA & Boas Práticas Éticas</span>
              </h4>
              <p>
                Incentivamos o uso criativo, inovador e responsável das tecnologias de Inteligência Artificial Generativa (Midjourney, Flux, Bing Image Creator, DALL-E, etc.):
              </p>
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
                  <strong className="text-white block mb-1">Direito de Imagem e Consentimento:</strong>
                  <span>
                    Ao aplicar técnicas de substituição de rosto (Face Swap) com as imagens geradas, utilize apenas fotos próprias ou de pessoas que tenham expressamente autorizado o uso da imagem. É expressamente vedada a criação de imagens difamatórias ou ilegais.
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
                  <strong className="text-white block mb-1">Conformidade com os Modelos de IA:</strong>
                  <span>
                    Todos os prompts desenvolvidos em nossos packs respeitam integralmente os Termos de Serviço e as Políticas de Conteúdo dos provedores de IA, sendo 100% seguros (Safe for Work).
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
                  <strong className="text-white block mb-1">Transparência nas Redes:</strong>
                  <span>
                    Recomendamos sempre sinalizar quando uma imagem tiver sido criada ou aprimorada com o auxílio de IA ao publicar em redes sociais, promovendo a credibilidade e o engajamento orgânico.
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'refund' && (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-orange-400" />
                <span>3. Garantia Incondicional de 7 Dias & Processo de Reembolso</span>
              </h4>
              <p>
                Em total conformidade com o <strong>Artigo 49 do Código de Defesa do Consumidor (Lei nº 8.078/1990)</strong>, garantimos a você 7 (sete) dias corridos de garantia incondicional após a confirmação da compra.
              </p>
              <div className="p-4 rounded-2xl bg-neutral-950 border border-orange-500/30 space-y-3">
                <div className="flex items-center gap-2 text-orange-400 font-bold text-xs uppercase">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Como solicitar a devolução:</span>
                </div>
                <p className="text-xs text-neutral-300">
                  Basta enviar uma mensagem para nosso suporte oficial no WhatsApp ou diretamente pelo painel da <strong>Cakto Pagamentos</strong> informando o número do pedido. O valor de <strong>R$ 49,99</strong> será reembolsado integralmente via Cakto em até 24 horas úteis, sem qualquer burocracia ou questionamento.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Lock className="w-4 h-4 text-orange-400" />
                <span>4. Política de Privacidade & Proteção de Dados (LGPD)</span>
              </h4>
              <p>
                Em respeito à <strong>Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD)</strong>, seus dados cadastrais (Nome, E-mail, Telefone e CPF) são coletados única e exclusivamente para:
              </p>
              <ul className="space-y-1.5 list-disc list-inside text-neutral-300 text-xs">
                <li>Envio imediato do link de acesso e arquivos dos prompts para a sua caixa de entrada;</li>
                <li>Processamento e validação antifraude seguro intermediado pela Cakto Pagamentos;</li>
                <li>Suporte ao cliente e emissão de comprovante fiscal.</li>
              </ul>
              <p className="text-xs text-neutral-400">
                Seus dados jamais são vendidos, repassados a terceiros ou utilizados para spam. Todo o tráfego de dados é protegido com criptografia SSL TLS 1.3 de 256 bits.
              </p>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-neutral-950 border-t border-neutral-800 flex items-center justify-between">
          <span className="text-xs text-neutral-500">Última atualização: Novembro de 2026</span>
          <button
            onClick={onClose}
            className="py-2 px-6 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs cursor-pointer shadow-md shadow-orange-500/20"
          >
            Entendido e Fechar
          </button>
        </div>

      </div>
    </div>
  );
};
