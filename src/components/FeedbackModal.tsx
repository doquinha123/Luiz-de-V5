import React, { useState } from 'react';
import { X, Star, MessageSquare, CheckCircle2, Flame, Heart } from 'lucide-react';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess?: () => void;
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({
  isOpen,
  onClose,
  onSubmitSuccess
}) => {
  if (!isOpen) return null;

  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('Elogio & Experiência');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    // Save feedback to localStorage
    const saved = JSON.parse(localStorage.getItem('user_feedbacks') || '[]');
    saved.push({
      rating,
      name,
      email,
      category,
      message,
      date: new Date().toISOString()
    });
    localStorage.setItem('user_feedbacks', JSON.stringify(saved));

    setSubmitted(true);
    if (onSubmitSuccess) onSubmitSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-lg bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl my-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-green-500 to-emerald-400 text-black flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-white">Muito Obrigado pelo Feedback!</h3>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-sm mx-auto leading-relaxed">
              Sua avaliação foi enviada com sucesso e nos ajuda a calibrar cada vez mais os novos prompts de inteligência artificial.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="py-3 px-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 font-bold text-white text-xs cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center">
                <MessageSquare className="w-4 h-4" />
              </span>
              <h3 className="text-xl font-bold text-white">Deixe seu Feedback</h3>
            </div>
            <p className="text-xs text-neutral-400 mb-6">
              Conte o que achou dos prompts, da qualidade das imagens e deixe sugestões para os próximos lançamentos:
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Star Rating Selector */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-2">
                  Sua Nota Geral:
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const isFilled = (hoverRating !== null ? hoverRating : rating) >= star;
                    return (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(null)}
                        className="p-1 text-2xl transition-transform hover:scale-110 cursor-pointer"
                      >
                        <Star
                          className={`w-7 h-7 ${
                            isFilled ? 'text-amber-400 fill-amber-400' : 'text-neutral-700'
                          }`}
                        />
                      </button>
                    );
                  })}
                  <span className="text-xs font-bold text-orange-400 ml-2">
                    {rating} de 5 estrelas
                  </span>
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">Seu Nome</label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-orange-500 text-white text-xs outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">Seu E-mail (opcional)</label>
                  <input
                    type="email"
                    placeholder="email@exemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-orange-500 text-white text-xs outline-none"
                  />
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">Categoria</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-orange-500 text-white text-xs outline-none cursor-pointer"
                >
                  <option value="Elogio & Experiência">Elogio & Experiência de Uso</option>
                  <option value="Sugestão de Novo Pack">Sugestão de Novo Tema / Pack</option>
                  <option value="Dúvida sobre os Prompts">Dúvida sobre os Prompts e Criação</option>
                  <option value="Outro">Outro Comentário</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">Sua Mensagem</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Escreva sua opinião sincera ou o que gostaria de ver nos próximos packs..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-orange-500 text-white text-xs outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/20 transition-all cursor-pointer"
              >
                Enviar Avaliação
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
