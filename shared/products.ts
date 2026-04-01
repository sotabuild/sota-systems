/**
 * SOTA Systems - Product Catalog
 * Defines all modules, pricing plans, and features
 */

export const SOTA_MODULES = {
  BOOKING_SYSTEM: {
    id: 1,
    name: "Sistema de Reservas",
    slug: "booking-system",
    category: "booking",
    icon: "Calendar",
    description: "Plataforma completa de reservas com filtros inteligentes, checkout rápido e disponibilidade em tempo real",
    features: [
      "Filtros inteligentes por data, tipo de quarto e preço",
      "Calendário de disponibilidade interativo",
      "Checkout seguro integrado com Stripe",
      "Confirmação automática de reservas",
      "Notificações em tempo real",
      "Integração com sistemas de PMS",
    ],
  },
  ADMIN_DASHBOARD: {
    id: 2,
    name: "Painel Administrativo",
    slug: "admin-dashboard",
    category: "admin",
    icon: "BarChart3",
    description: "Dashboard completo para gestão de hotel com métricas, ocupação, faturamento e reviews",
    features: [
      "Dashboard com KPIs principais",
      "Gerenciamento de quartos (CRUD)",
      "Visualização de ocupação por período",
      "Relatórios de faturamento detalhados",
      "Gestão de reviews e ratings",
      "Alertas e notificações automáticas",
    ],
  },
  VIRTUAL_TOURS: {
    id: 3,
    name: "Tours Virtuais 3D",
    slug: "virtual-tours",
    category: "experience",
    icon: "BarChart3",
    description: "Visualizador 360° dos quartos e instalações para aumentar conversão de reservas",
    features: [
      "Tours 360° dos quartos",
      "Visualização de amenidades",
      "Galeria de imagens interativa",
      "Compatível com VR",
      "Carregamento rápido",
      "Suporte para múltiplas câmeras",
    ],
  },
  GUEST_EXPERIENCE: {
    id: 4,
    name: "Personalização de Experiência",
    slug: "guest-experience",
    category: "experience",
    icon: "Sparkles",
    description: "Sistema de personalização que adapta a experiência do hóspede conforme suas preferências",
    features: [
      "Coleta de preferências do hóspede",
      "Recomendações personalizadas",
      "Histórico de preferências",
      "Integração com serviços do hotel",
      "Feedback em tempo real",
      "Análise de satisfação",
    ],
  },
  LOCAL_RECOMMENDATIONS: {
    id: 5,
    name: "Recomendações Locais",
    slug: "local-recommendations",
    category: "integration",
    icon: "MapPin",
    description: "Sugestões de atrações, restaurantes e atividades baseadas nas preferências do hóspede",
    features: [
      "Banco de dados de atrações locais",
      "Recomendações por categoria",
      "Integração com mapas",
      "Avaliações e comentários",
      "Distância e tempo de deslocamento",
      "Links diretos para reservas",
    ],
  },
};

export const PRICING_TIERS = {
  BASIC: {
    tier: "basic",
    name: "Básico",
    description: "Perfeito para pequenos hotéis",
    monthlyPrice: 99,
    annualPrice: 990,
    features: [
      "Até 20 quartos",
      "1 usuário administrativo",
      "Relatórios básicos",
      "Email de suporte",
      "Atualizações mensais",
    ],
  },
  PREMIUM: {
    tier: "premium",
    name: "Premium",
    description: "Ideal para hotéis em crescimento",
    monthlyPrice: 299,
    annualPrice: 2990,
    features: [
      "Até 100 quartos",
      "5 usuários administrativos",
      "Relatórios avançados",
      "Chat de suporte 24/7",
      "Integrações com APIs",
      "Analytics detalhado",
    ],
  },
  ENTERPRISE: {
    tier: "enterprise",
    name: "Enterprise",
    description: "Solução completa para grandes redes",
    monthlyPrice: 999,
    annualPrice: 9990,
    features: [
      "Quartos ilimitados",
      "Usuários ilimitados",
      "Relatórios personalizados",
      "Suporte prioritário 24/7",
      "Integrações customizadas",
      "Consultoria dedicada",
      "SLA garantido",
    ],
  },
};

export const MODULE_PRICING: Record<string, Record<string, number>> = {
  "booking-system": {
    basic: 9900,
    premium: 29900,
    enterprise: 99900,
  },
  "admin-dashboard": {
    basic: 4900,
    premium: 14900,
    enterprise: 49900,
  },
  "virtual-tours": {
    basic: 19900,
    premium: 49900,
    enterprise: 149900,
  },
  "guest-experience": {
    basic: 7900,
    premium: 19900,
    enterprise: 59900,
  },
  "local-recommendations": {
    basic: 4900,
    premium: 9900,
    enterprise: 29900,
  },
};

export const BUNDLE_PACKAGES = {
  STARTER: {
    name: "Pacote Iniciante",
    description: "Comece com o essencial",
    modules: ["booking-system"],
    monthlyPrice: 9900,
    annualPrice: 99000,
    savings: 0,
  },
  GROWTH: {
    name: "Pacote Crescimento",
    description: "Expanda suas capacidades",
    modules: ["booking-system", "admin-dashboard", "guest-experience"],
    monthlyPrice: 19900,
    annualPrice: 199000,
    savings: 5000,
  },
  COMPLETE: {
    name: "Pacote Completo",
    description: "Solução integral de hotelaria",
    modules: ["booking-system", "admin-dashboard", "virtual-tours", "guest-experience", "local-recommendations"],
    monthlyPrice: 39900,
    annualPrice: 399000,
    savings: 15000,
  },
};
