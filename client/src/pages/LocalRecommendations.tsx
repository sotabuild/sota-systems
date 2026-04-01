import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Star, Clock, DollarSign, Check } from "lucide-react";

export default function LocalRecommendations() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50">
        <div className="container mx-auto px-4 py-6">
          <button className="flex items-center gap-2 text-accent hover:text-accent/80 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </button>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Recomendações Locais</h1>
          <p className="text-muted-foreground">Sugestões de atrações, restaurantes e atividades personalizadas</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Features */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Funcionalidades</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: <MapPin className="w-6 h-6" />, title: "Mapa Interativo", desc: "Visualize atrações no mapa" },
              { icon: <Star className="w-6 h-6" />, title: "Avaliações", desc: "Reviews de outros hóspedes" },
              { icon: <Clock className="w-6 h-6" />, title: "Horários", desc: "Informações de funcionamento" },
            ].map((feature, i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <div className="text-accent mb-3">{feature.icon}</div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Recommendations */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Exemplos de Recomendações</h2>
          <div className="space-y-4">
            {[
              {
                category: "Restaurantes",
                items: [
                  { name: "Pizzaria Artesanal", distance: "0.5 km", rating: 4.8, price: "$$" },
                  { name: "Churrascaria Premium", distance: "1.2 km", rating: 4.9, price: "$$$" },
                  { name: "Sushi Bar", distance: "0.8 km", rating: 4.7, price: "$$" },
                ],
              },
              {
                category: "Atrações",
                items: [
                  { name: "Museu de Arte Moderna", distance: "2 km", rating: 4.6, price: "$" },
                  { name: "Parque Ecológico", distance: "3 km", rating: 4.8, price: "Grátis" },
                  { name: "Centro Histórico", distance: "1.5 km", rating: 4.7, price: "Grátis" },
                ],
              },
            ].map((section, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold mb-3 text-accent">{section.category}</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {section.items.map((item, j) => (
                    <Card key={j} className="cursor-pointer hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6">
                        <h4 className="font-semibold mb-2">{item.name}</h4>
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{item.distance}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            <span className="text-sm font-semibold">{item.rating}</span>
                          </div>
                          <span className="text-sm text-accent font-semibold">{item.price}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Personalization */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Personalização Inteligente</h2>
          <Card className="border-2 border-accent/20">
            <CardContent className="pt-6">
              <div className="space-y-3">
                {[
                  "Aprende com histórico de preferências do hóspede",
                  "Recomenda baseado em interesses declarados",
                  "Filtra por restrições dietéticas e mobilidade",
                  "Sugere horários ideais para evitar filas",
                  "Integra com sistemas de transporte local",
                  "Atualiza em tempo real com eventos especiais",
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-sm">{feature}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Benefits */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Benefícios para seu Hotel</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Aumenta satisfação dos hóspedes",
              "Gera receita com comissões de parceiros",
              "Reduz tempo de atendimento",
              "Melhora avaliações e reviews",
              "Cria diferencial competitivo",
              "Integra com sistema de concierge",
            ].map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg">
                <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-sm">{benefit}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Pricing */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Planos de Preço</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "Básico", price: 49, items: "Até 100 recomendações/mês" },
              { name: "Premium", price: 149, items: "Até 1000 recomendações/mês", popular: true },
              { name: "Enterprise", price: 399, items: "Recomendações ilimitadas" },
            ].map((plan, i) => (
              <Card key={i} className={plan.popular ? "border-2 border-accent" : ""}>
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <div className="text-3xl font-bold mt-4">${plan.price}</div>
                  <p className="text-sm text-muted-foreground">/mês</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-6">{plan.items}</p>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    Começar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-accent text-accent-foreground p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Ofereça Experiências Locais Personalizadas</h2>
          <p className="mb-6 opacity-90">Comece com uma demo gratuita</p>
          <Button size="lg" variant="secondary">
            Agendar Demo
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
