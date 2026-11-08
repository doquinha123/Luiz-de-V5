export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: number;
  originalPrice: number;
  image: string;
  galleryImages: string[];
  status: 'available';
  caktoUrl: string;
  badge?: string;
  features: string[];
  category: string;
}

export const MAIN_PRODUCT: Product = {
  id: 'criar-imagens',
  name: 'Criar Imagens',
  subtitle: 'Domine as IAs e Crie Fotos Hiper-Realistas com o seu Rosto',
  description: 'O treinamento definitivo com prompts calibrados e o método passo a passo para criar fotos com taças de campeão, carros de luxo e lendas mundiais, além de aprender exatamente onde garimpar as melhores imagens no Pinterest e em vários apps.',
  price: 49.99,
  originalPrice: 197.00,
  image: '/assets/aistudio/image_61e54544.png',
  galleryImages: [
    '/assets/aistudio/image_61e54544.png',
    '/assets/aistudio/image_c5aeff61.png',
    '/assets/aistudio/image_ce48228e.png'
  ],
  status: 'available',
  caktoUrl: 'https://pay.cakto.com.br/35utq2t_1297997',
  badge: 'Oferta Exclusiva 🔥',
  category: 'Treinamento Completo',
  features: [
    'Acesso a todas as 3 categorias (Jogadores, Luxo no Carro e Lendas)',
    'Tutorial ensinando onde e como pegar imagens no Pinterest e outros apps',
    'Prompts calibrados e prontos com 1 clique para copiar',
    'Técnica de consistência facial e substituição de rosto perfeita',
    'Aba de acesso privada exclusiva e vinculada ao seu dispositivo'
  ]
};

export const PRODUCTS: Product[] = [MAIN_PRODUCT];
