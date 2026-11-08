import React, { useState } from 'react';
import { 
  Sparkles, Copy, Check, ExternalLink, CheckCircle2, 
  ArrowLeft, Terminal, Flame, BookOpen, Layers, Lightbulb, Lock, Search, Smartphone, Image
} from 'lucide-react';

interface UnlockedTutorialTabProps {
  onBackToHome: () => void;
  deviceToken?: string;
}

export const TUTORIAL_THEMES = [
  {
    id: 'jogadores',
    title: 'Tema 01: Campeão no Gramado com a Taça',
    subtitle: 'Comemoração oficial com o troféu nos braços',
    image: '/assets/aistudio/image_61e54544.png',
    pinterestSearch: 'soccer champion celebration trophy stadium floodlights red jersey',
    explanation: 'Este tema posiciona você como o jogador campeão do torneio no meio do gramado logo após erguer a taça. A iluminação de holofotes noturnos do estádio cria um recorte profissional ao redor do corpo e a chuva de confetes transmite a emoção de conquista histórica.',
    flowPrompt: 'photorealistic cinematic medium portrait of a young athletic soccer player celebrating championship victory, wearing red sports jersey with gold stripes, tightly holding a gleaming polished metallic tournament cup trophy with both hands, happy ecstatic facial expression, stadium floodlights rim lighting, green grass soccer pitch in background, festive celebration confetti, photorealistic skin pores and natural sweat, 85mm portrait photography f/1.8 --flow-version 2'
  },
  {
    id: 'rico',
    title: 'Tema 02: Lifestyle Rico & Luxo no Carro',
    subtitle: 'Estética Streetwear de grife em veículo executivo',
    image: '/assets/aistudio/image_c5aeff61.png',
    pinterestSearch: 'luxury car back seat candid streetwear aesthetic hoodie gold watch',
    explanation: 'Este tema recria o ângulo autêntico de foto tirada no banco traseiro de um carro executivo de alto padrão. Enquadramento descontraído, roupas de grife urbana com correntes e relógio de ouro, transmitindo autoridade e estilo de vida exclusivo.',
    flowPrompt: 'candid realistic lifestyle photo of a young stylish guy sitting relaxed in the back seat of an executive luxury car, holding a smartphone horizontally with two hands, wearing premium light grey fleece streetwear hoodie and sweatpants, black cap, gold watch and silver chain, white wired earbuds, soft natural daylight entering through tinted car window, European street architecture blurred outside, shot on iPhone 15 Pro, ultra high dynamic range, authentic film tone --flow-version 2'
  },
  {
    id: 'idolos',
    title: 'Tema 03: Vestiário com Ídolos Mundiais',
    subtitle: 'Foto exclusiva com lendas do esporte',
    image: '/assets/aistudio/image_ce48228e.png',
    pinterestSearch: 'locker room football trophy celebration with famous players',
    explanation: 'Este tema reproduz a intimidade e a atmosfera de comemoração dentro do vestiário oficial do time ao lado de estrelas lendárias do esporte, com iluminação de armários esportivos e a cobiçada taça dourada em mãos.',
    flowPrompt: 'candid authentic photograph inside a premier soccer team locker room, smiling athletic young champion standing shoulder-to-shoulder next to Cristiano Ronaldo, holding a massive golden championship trophy, wearing matching team yellow sports polos, natural warm locker room indoor lighting, genuine celebratory smiles, shot on 35mm lens, sharp facial focus, lifelike skin texture --flow-version 2'
  }
];

export const UnlockedTutorialTab: React.FC<UnlockedTutorialTabProps> = ({ 
  onBackToHome,
  deviceToken 
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const token = deviceToken || (typeof window !== 'undefined' ? localStorage.getItem('device_access_token') || 'AcessoAba-1237123123712ASDASDASDA' : 'AcessoAba-1237123123712ASDASDASDA');

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white pt-28 pb-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Navigation Bar with Device Lock Indicator */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-neutral-800 gap-4">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 text-xs font-bold text-neutral-400 hover:text-orange-400 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar à Página Principal</span>
          </button>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-orange-500/40 text-xs">
            <Lock className="w-3.5 h-3.5 text-orange-400" />
            <span className="text-neutral-400">Acesso Restrito:</span>
            <span className="font-mono text-orange-300 font-bold">/{token}</span>
          </div>
        </div>

        {/* Welcome Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4" />
            <span>Pagamento Confirmado Cakto · Aba de Acesso Liberada</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Tutorial de Criação & <span className="text-orange-500">Onde Pegar Imagens</span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Aqui está o método completo explicando passo a passo como encontrar referências no Pinterest e em vários apps, e como aplicar os prompts no Google Flow AI com o seu rosto.
          </p>
        </div>

        {/* MODULE 1: ONDE PEGAR AS IMAGENS (PINTEREST E VÁRIOS APPS) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900 border-2 border-orange-500/40 space-y-6 shadow-2xl">
          <div className="flex items-center gap-2.5">
            <span className="w-10 h-10 rounded-2xl bg-orange-500 text-black flex items-center justify-center font-black">
              <Search className="w-5 h-5" />
            </span>
            <div>
              <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">Módulo Essencial</span>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                Onde Pegar as Imagens de Referência (Pinterest & Apps)
              </h2>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            Para a Inteligência Artificial criar uma imagem ultra-realista com o seu rosto, o segredo dos maiores criadores é utilizar imagens base de alta resolução garimpadas nos melhores aplicativos. Veja os principais lugares:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
            
            {/* App 1: Pinterest */}
            <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-white text-base text-red-500">1. Pinterest</span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-bold">O Melhor App</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                O Pinterest é o maior acervo do mundo para estética. Pesquise termos em inglês para encontrar fotos com a melhor iluminação e ângulo de câmera.
              </p>
              <div className="p-3 bg-neutral-900 rounded-xl text-[11px] text-neutral-400 space-y-1">
                <strong className="text-orange-400 block">Termos para buscar no Pinterest:</strong>
                <p>• <em>"football champion trophy locker room aesthetic"</em></p>
                <p>• <em>"luxury car back seat aesthetic photoshoot"</em></p>
                <p>• <em>"streetwear hoodie men photography 8k"</em></p>
              </div>
            </div>

            {/* App 2: Instagram */}
            <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-white text-base text-pink-400">2. Instagram</span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-pink-500/20 text-pink-400 font-bold">Fotos Reais</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Procure no Explore ou na aba de pesquisa de fotógrafos oficiais de clubes esportivos (como Real Madrid, seleção espanhola, etc.) e perfis de lifestyle urbano.
              </p>
              <div className="p-3 bg-neutral-900 rounded-xl text-[11px] text-neutral-400 space-y-1">
                <strong className="text-orange-400 block">Dica de captura:</strong>
                <p>Tire um print com a tela cheia para preservar o enquadramento de meio corpo e iluminação de holofotes.</p>
              </div>
            </div>

            {/* App 3: Unsplash & Google Imagens */}
            <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-white text-base text-amber-400">3. Unsplash & Apps</span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-bold">Sem Direitos</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Apps como <strong>Unsplash</strong> e <strong>Pexels</strong> oferecem fotos profissionais gratuitas em alta definição. No Google Imagens, ative a opção "Tamanho Grande".
              </p>
              <div className="p-3 bg-neutral-900 rounded-xl text-[11px] text-neutral-400 space-y-1">
                <strong className="text-orange-400 block">Foco no Rosto:</strong>
                <p>Escolha fotos onde a cabeça e o pescoço estejam nítidos para facilitar o encaixe perfeito.</p>
              </div>
            </div>

          </div>
        </div>

        {/* MODULE 2: COMO GERAR NO GOOGLE FLOW AI */}
        <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-6">
          <div className="flex items-center gap-2.5">
            <span className="w-10 h-10 rounded-2xl bg-orange-500 text-black flex items-center justify-center font-black">
              <Terminal className="w-5 h-5" />
            </span>
            <div>
              <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">Passo a Passo</span>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                Como Gerar no Google Flow AI com o seu Rosto
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-orange-400">PASSO 01</span>
              <h4 className="font-bold text-white text-sm">Abra o Google Flow AI</h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Acesse a ferramenta do Google (ImageFX / Flow AI). Não precisa instalar nada, roda direto no navegador do celular ou PC.
              </p>
              <a
                href="https://aitestkitchen.withgoogle.com/tools/image-fx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-orange-400 hover:underline pt-1 font-semibold"
              >
                <span>Abrir Ferramenta Oficial</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-orange-400">PASSO 02</span>
              <h4 className="font-bold text-white text-sm">Carregue a Referência e sua Foto</h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Carregue a imagem do Pinterest como estilo e uma foto sua de selfie sem filtros como <strong>Face Reference</strong> (referência facial).
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-orange-400">PASSO 03</span>
              <h4 className="font-bold text-white text-sm">Cole o Prompt Calibrado</h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Cole o prompt do tema que você deseja criar (abaixo) e aperte em Gerar. Em poucos segundos a foto estará pronta para salvar!
              </p>
            </div>
          </div>
        </div>

        {/* MODULE 3: THE 3 THEMES WITH PHOTOS AND COPYABLE PROMPTS */}
        <div className="space-y-8 pt-4">
          <div className="flex items-center gap-2 text-sm font-bold text-orange-400 uppercase tracking-widest">
            <Layers className="w-4 h-4" />
            <span>Os 3 Temas com Fotos e Prompts Oficiais</span>
          </div>

          <div className="space-y-10">
            {TUTORIAL_THEMES.map((theme, idx) => (
              <div
                key={theme.id}
                className="rounded-3xl bg-neutral-900 border border-orange-500/30 overflow-hidden shadow-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 items-center">
                  
                  {/* Photo Column - Clear Face */}
                  <div className="lg:col-span-5 flex justify-center">
                    <div className="w-full max-w-sm rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-xl">
                      <img
                        src={theme.image}
                        alt={theme.title}
                        className="w-full aspect-[3/4] object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Text & Prompt */}
                  <div className="lg:col-span-7 space-y-4">
                    <div>
                      <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block mb-1">
                        Foto 0{idx + 1} do Pacote
                      </span>
                      <h3 className="text-2xl font-black text-white">{theme.title}</h3>
                      <p className="text-xs text-neutral-400 mt-0.5">{theme.subtitle}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {theme.explanation}
                    </div>

                    {/* Pinterest Suggestion */}
                    <div className="p-3 bg-neutral-950/70 rounded-xl border border-neutral-800/80 flex items-center justify-between text-xs">
                      <span className="text-neutral-400">Busca no Pinterest:</span>
                      <code className="text-orange-400 font-mono text-[11px] truncate max-w-[280px]">
                        {theme.pinterestSearch}
                      </code>
                    </div>

                    {/* Copy Prompt Box */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-white flex items-center gap-1.5">
                          <Flame className="w-3.5 h-3.5 text-orange-500" />
                          <span>Prompt para Google Flow AI:</span>
                        </span>
                        <button
                          onClick={() => handleCopy(theme.id, theme.flowPrompt)}
                          className="py-2 px-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-extrabold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-md shadow-orange-500/20"
                        >
                          {copiedId === theme.id ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Prompt Copiado!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copiar Prompt</span>
                            </>
                          )}
                        </button>
                      </div>

                      <div className="p-4 rounded-2xl bg-neutral-950 border border-orange-500/30 text-xs font-mono text-orange-300/95 leading-relaxed break-words select-all">
                        {theme.flowPrompt}
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp VIP Support */}
        <div className="p-6 rounded-3xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-white text-base">Suporte VIP para Alunos</h4>
            <p className="text-xs text-neutral-400 mt-0.5">
              Se precisar de ajuda para achar alguma imagem no Pinterest ou ajustar seu prompt, chame no WhatsApp.
            </p>
          </div>
          <a
            href="https://wa.me/5511999999999?text=Olá!%20Comprei%20o%20Criar%20Imagens%20e%20gostaria%20de%20ajuda%20com%20meus%20prompts"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-6 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shrink-0 transition-colors"
          >
            Chamar no WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
};
