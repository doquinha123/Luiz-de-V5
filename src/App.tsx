import React, { useState, useEffect } from 'react';
import { MAIN_PRODUCT } from './data/products';
import { FireParticlesCanvas } from './components/FireParticlesCanvas';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductsSection } from './components/ProductsSection';
import { GuidelinesSection } from './components/GuidelinesSection';
import { FeaturesProof } from './components/FeaturesProof';
import { CheckoutModal } from './components/CheckoutModal';
import { LegalTermsModal, LegalTab } from './components/LegalTermsModal';
import { FeedbackModal } from './components/FeedbackModal';
import { UnlockedTutorialTab } from './components/UnlockedTutorialTab';
import { Footer } from './components/Footer';
import { MessageCircle, Check, MessageSquare, Sparkles } from 'lucide-react';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState<LegalTab | null>(null);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Post-purchase state & Device-bound Access Token
  const [isPaid, setIsPaid] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('has_purchased') === 'true';
    }
    return false;
  });

  const [deviceToken, setDeviceToken] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('device_access_token') || '';
    }
    return '';
  });

  const [activeTab, setActiveTab] = useState<'home' | 'tutorial'>('home');

  // Detect return from Cakto redirect or direct access URL: /AcessoAba-1237123123712ASDASDASDA
  useEffect(() => {
    const checkAccessRoute = () => {
      const hash = window.location.hash || '';
      const pathname = window.location.pathname || '';
      const search = window.location.search || '';
      const savedToken = localStorage.getItem('device_access_token');
      const hasPurchased = localStorage.getItem('has_purchased') === 'true';

      const isAccessUrl = 
        hash.includes('AcessoAba') || 
        pathname.includes('AcessoAba') ||
        search.includes('AcessoAba') ||
        pathname.toLowerCase().includes('acesso') ||
        pathname.toLowerCase().includes('obrigado') ||
        pathname.toLowerCase().includes('sucesso') ||
        search.toLowerCase().includes('status=approved');

      if (isAccessUrl) {
        let token = savedToken;
        if (hash.includes('AcessoAba')) {
          token = hash.replace('#/', '').replace('#', '').split('?')[0];
        } else if (pathname.includes('AcessoAba')) {
          token = pathname.replace('/', '').split('?')[0];
        }

        if (!token || token.length < 5) {
          token = 'AcessoAba-1237123123712ASDASDASDA';
        }

        setDeviceToken(token);
        setIsPaid(true);
        localStorage.setItem('has_purchased', 'true');
        localStorage.setItem('device_access_token', token);
        setActiveTab('tutorial');
        setIsCheckoutOpen(false);
      } else if (hasPurchased) {
        setIsPaid(true);
        if (savedToken) setDeviceToken(savedToken);
      }
    };

    checkAccessRoute();
    window.addEventListener('hashchange', checkAccessRoute);
    window.addEventListener('popstate', checkAccessRoute);

    // Also listen to postMessage from Cakto if it emits completion event
    const handleCaktoMessage = (event: MessageEvent) => {
      try {
        const raw = event.data;
        const data = typeof raw === 'string' ? JSON.parse(raw) : raw;
        if (
          data?.status === 'approved' || 
          data?.status === 'paid' || 
          data?.event === 'purchase_approved' ||
          data?.event === 'checkout:success' ||
          data?.type === 'cakto:success'
        ) {
          const token = localStorage.getItem('device_access_token') || 'AcessoAba-1237123123712ASDASDASDA';
          setDeviceToken(token);
          setIsPaid(true);
          localStorage.setItem('has_purchased', 'true');
          localStorage.setItem('device_access_token', token);
          window.location.hash = `#/${token}`;
          setActiveTab('tutorial');
          setIsCheckoutOpen(false);
        }
      } catch {
        // Non-JSON message from other extensions or iframes, safely ignore
      }
    };

    window.addEventListener('message', handleCaktoMessage);

    return () => {
      window.removeEventListener('hashchange', checkAccessRoute);
      window.removeEventListener('popstate', checkAccessRoute);
      window.removeEventListener('message', handleCaktoMessage);
    };
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleScrollToProducts = () => {
    if (activeTab === 'tutorial') {
      setActiveTab('home');
      setTimeout(() => {
        const el = document.getElementById('produtos');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('produtos');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <div className="relative min-h-screen bg-[#030303] text-neutral-100 flex flex-col selection:bg-orange-500 selection:text-white">
      {/* Background Interactive Fire Embers Canvas */}
      <FireParticlesCanvas />

      {/* Floating Orange Ambient Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-orange-600/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none z-0" />

      {/* Header */}
      <Header
        onOpenCheckout={() => setIsCheckoutOpen(true)}
        onScrollToProducts={handleScrollToProducts}
        onOpenFeedback={() => setIsFeedbackOpen(true)}
        isPaid={isPaid}
        onOpenTutorialTab={() => setActiveTab('tutorial')}
      />

      {/* Main View: Switches between Landing Page and the Unlocked Tutorial Tab */}
      {activeTab === 'tutorial' ? (
        <main className="relative z-10 flex-1">
          <UnlockedTutorialTab 
            onBackToHome={() => setActiveTab('home')} 
            deviceToken={deviceToken}
          />
        </main>
      ) : (
        <main className="relative z-10 flex-1">
          {/* Banner if already purchased */}
          {isPaid && (
            <div className="pt-24 pb-2 bg-gradient-to-r from-orange-600/20 via-amber-500/20 to-orange-600/20 border-b border-orange-500/30 text-center px-4">
              <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 py-2">
                <span className="text-xs font-bold text-orange-300 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-orange-400" />
                  <span>Você já possui acesso liberado aos prompts e tutoriais deste dispositivo!</span>
                </span>
                <button
                  onClick={() => setActiveTab('tutorial')}
                  className="py-1.5 px-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-black font-extrabold text-xs cursor-pointer shadow-md"
                >
                  Abrir Minha Aba de Prompts ({deviceToken ? `/${deviceToken.substring(0, 16)}...` : 'Liberada'})
                </button>
              </div>
            </div>
          )}

          {/* Hero Section with only 1 Integrated Image and fire effect */}
          <Hero
            onScrollToProducts={handleScrollToProducts}
            onQuickBuy={() => setIsCheckoutOpen(true)}
          />

          {/* Single Product Showcase Section: Criar Imagens (R$ 49,99) */}
          <ProductsSection
            onSelectProduct={() => setIsCheckoutOpen(true)}
          />

          {/* Guidelines & AI Ethics Section */}
          <GuidelinesSection
            onOpenLegalModal={(tab) => setLegalModalTab(tab)}
          />

          {/* Benefits, Proof, FAQ */}
          <FeaturesProof />
        </main>
      )}

      {/* Footer */}
      <Footer
        onOpenLegalModal={(tab) => setLegalModalTab(tab)}
        onScrollToProducts={handleScrollToProducts}
        onOpenFeedback={() => setIsFeedbackOpen(true)}
      />

      {/* In-Site Checkout Modal (Integrated with Cakto directly inside the site) */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        product={MAIN_PRODUCT}
      />

      {/* Full Legal & AI Guidelines Modal */}
      <LegalTermsModal
        isOpen={!!legalModalTab}
        onClose={() => setLegalModalTab(null)}
        initialTab={legalModalTab || 'terms'}
      />

      {/* Feedback Modal */}
      <FeedbackModal
        isOpen={isFeedbackOpen}
        onClose={() => setIsFeedbackOpen(false)}
        onSubmitSuccess={() => showToast('Feedback enviado com sucesso! Muito obrigado.')}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-neutral-900 border border-orange-500/50 shadow-2xl shadow-orange-950/80 text-xs font-semibold text-white animate-in slide-in-from-bottom duration-300">
          <span className="w-5 h-5 rounded-full bg-orange-500 text-black flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5" />
          </span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Floating Action Buttons: Feedback & WhatsApp */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        <button
          onClick={() => setIsFeedbackOpen(true)}
          className="group flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-neutral-900/95 hover:bg-neutral-800 border border-orange-500/40 text-neutral-200 text-xs font-bold shadow-xl shadow-black/80 hover:scale-105 transition-all duration-200 cursor-pointer"
          title="Deixar sua Opinião"
        >
          <MessageSquare className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline">Avaliar / Feedback</span>
        </button>

        <a
          href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20tirar%20uma%20dúvida%20sobre%20o%20Criar%20Imagens"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 p-3 sm:px-4 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/60 hover:scale-105 transition-all duration-200 cursor-pointer"
          title="Falar no WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
          <span className="hidden sm:inline text-xs font-bold tracking-wide">
            Dúvidas no WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
}
