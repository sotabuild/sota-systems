import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowLeft, Zap, Globe, Check, TrendingUp } from "lucide-react";

export default function TravelIntegrations() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50">
        <div className="container mx-auto px-4 py-6">
          <button className="flex items-center gap-2 text-accent hover:text-accent/80 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </button>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Integrações com Apps de Viagem</h1>
          <p className="text-muted-foreground">Conecte seu hotel aos maiores portais de reservas mundiais</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Connected Platforms */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Plataformas Integradas</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "Booking.com", status: "Conectado", icon: "🏨" },
              { name: "Airbnb", status: "Conectado", icon: "🏠" },
              { name: "Expedia", status: "Conectado", icon: "✈️" },
              { name: "Trivago", status: "Conectado", icon: "🔍" },
              { name: "Google Hotels", status: "Conectado", icon: "🔎" },
              { name: "TripAdvisor", status: "Conectado", icon: "⭐" },
            ].map((platform, i) => (
              <Card key={i} className="border-2 border-accent/20">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">{platform.icon}</div>
                  <h3 className="font-semibold mb-2">{platform.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <Check className="w-4 h-4" />
                    {platform.status}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Funcionalidades</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Sincronização em Tempo Real",
                desc: "Disponibilidade e preços atualizados instantaneamente",
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Alcance Global",
                desc: "Chegue a milhões de viajantes em todo o mundo",
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Aumento de Ocupação",
                desc: "Mais canais = mais reservas",
              },
              {
                icon: <Check className="w-6 h-6" />,
                title: "Gestão Centralizada",
                desc: "Controle todas as reservas em um único painel",
              },
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

        {/* Benefits */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Benefícios</h2>
          <div className="space-y-3">
            {[
              "Aumento de 60% em visibilidade online",
              "Redução de overbooking com sincronização automática",
              "Comissões competitivas e transparentes",
              "Suporte técnico 24/7",
              "Sem custos de integração",
              "Relatórios detalhados de performance",
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-sm">{benefit}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Integration Process */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Como Funciona a Integração</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: "1", title: "Conectar", desc: "Autentique sua conta" },
              { step: "2", title: "Configurar", desc: "Defina preços e disponibilidade" },
              { step: "3", title: "Sincronizar", desc: "Ative a sincronização automática" },
              { step: "4", title: "Monitorar", desc: "Acompanhe as reservas" },
            ].map((process, i) => (
              <Card key={i}>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-3">{process.step}</div>
                  <h3 className="font-semibold mb-2">{process.title}</h3>
                  <p className="text-sm text-muted-foreground">{process.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Pricing */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Planos de Preço</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "Básico", price: 29, channels: "Até 3 canais" },
              { name: "Premium", price: 79, channels: "Até 10 canais", popular: true },
              { name: "Enterprise", price: 199, channels: "Canais ilimitados" },
            ].map((plan, i) => (
              <Card key={i} className={plan.popular ? "border-2 border-accent" : ""}>
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <div className="text-3xl font-bold mt-4">${plan.price}</div>
                  <p className="text-sm text-muted-foreground">/mês</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-6">{plan.channels}</p>
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
          <h2 className="text-2xl font-bold mb-4">Aumente sua Visibilidade Online</h2>
          <p className="mb-6 opacity-90">Conecte-se aos maiores portais de viagem do mundo</p>
          <Button size="lg" variant="secondary">
            Conectar Agora
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
