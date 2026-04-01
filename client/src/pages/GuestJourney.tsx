import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Check, MapPin, Calendar, Smile, LogOut } from "lucide-react";
import { useState } from "react";

export default function GuestJourney() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      title: "Busca e Descoberta",
      icon: <MapPin className="w-6 h-6" />,
      description: "O hóspede descobre seu hotel",
      steps: [
        "Busca em portais de viagem (Booking, Airbnb, Expedia)",
        "Visualiza fotos e tours 3D dos quartos",
        "Lê avaliações e recomendações",
        "Compara preços com concorrentes",
      ],
      result: "Decisão de reservar",
    },
    {
      title: "Reserva e Pagamento",
      icon: <Calendar className="w-6 h-6" />,
      description: "Processo seguro e rápido",
      steps: [
        "Seleciona datas e tipo de quarto",
        "Aplica filtros inteligentes",
        "Revisa preço total e promoções",
        "Checkout seguro com Stripe",
      ],
      result: "Confirmação por email",
    },
    {
      title: "Pré-Chegada",
      icon: <Check className="w-6 h-6" />,
      description: "Personalização e preparação",
      steps: [
        "Recebe email de confirmação",
        "Preenche preferências (cama, temperatura, etc)",
        "Recebe recomendações locais",
        "Acesso ao portal do hóspede",
      ],
      result: "Hóspede pronto e informado",
    },
    {
      title: "Check-in e Acomodação",
      icon: <Smile className="w-6 h-6" />,
      description: "Bem-vindo personalizado",
      steps: [
        "Check-in rápido e sem filas",
        "Quarto ajustado conforme preferências",
        "Bem-vindo customizado",
        "Informações de amenidades",
      ],
      result: "Satisfação imediata",
    },
    {
      title: "Durante a Estadia",
      icon: <Smile className="w-6 h-6" />,
      description: "Experiência premium",
      steps: [
        "Recomendações de atrações locais",
        "Suporte proativo 24/7",
        "Ajustes em tempo real",
        "Ofertas de serviços adicionais",
      ],
      result: "Experiência memorável",
    },
    {
      title: "Check-out e Pós-Viagem",
      icon: <LogOut className="w-6 h-6" />,
      description: "Encerramento e fidelização",
      steps: [
        "Check-out rápido",
        "Solicitação de feedback",
        "Ofertas para próxima visita",
        "Programa de fidelidade",
      ],
      result: "Cliente fidelizado",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Jornada do Hóspede</h1>
          <p className="text-muted-foreground">Experiência completa desde a busca até o check-out</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Timeline */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <div className="grid md:grid-cols-6 gap-2 mb-8">
            {stages.map((stage, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveStage(i)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  activeStage === i
                    ? "border-accent bg-accent/10"
                    : "border-border hover:border-accent/50"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`mb-2 ${activeStage === i ? "text-accent" : "text-muted-foreground"}`}>{stage.icon}</div>
                <p className="text-xs font-semibold">{stage.title}</p>
              </motion.button>
            ))}
          </div>

          {/* Active Stage Detail */}
          <motion.div key={activeStage} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid md:grid-cols-3 gap-6">
            {/* Stage Info */}
            <div className="md:col-span-2">
              <Card className="border-2 border-accent/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="text-accent">{stages[activeStage].icon}</div>
                    {stages[activeStage].title}
                  </CardTitle>
                  <CardDescription>{stages[activeStage].description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {stages[activeStage].steps.map((step, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <p className="text-sm">{step}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-accent/10 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-accent">Resultado: {stages[activeStage].result}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Visual Representation */}
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg p-6 flex flex-col items-center justify-center">
              <div className="text-6xl mb-4">{stages[activeStage].icon}</div>
              <p className="text-center text-sm text-muted-foreground mb-4">{stages[activeStage].title}</p>
              <div className="text-3xl font-bold text-accent">{activeStage + 1}</div>
              <p className="text-xs text-muted-foreground mt-2">de {stages.length} etapas</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Impacto da Jornada Otimizada</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { metric: "92%", desc: "Taxa de conversão" },
              { metric: "4.8/5", desc: "Avaliação média" },
              { metric: "+45%", desc: "Aumento de receita" },
              { metric: "99%", desc: "Satisfação do cliente" },
            ].map((item, i) => (
              <Card key={i}>
                <CardContent className="pt-6 text-center">
                  <p className="text-3xl font-bold text-accent mb-2">{item.metric}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Features Highlight */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Recursos que Tornam Possível</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Reservas Inteligentes",
                desc: "Filtros avançados e checkout rápido aumentam conversão",
              },
              {
                title: "Personalização",
                desc: "Cada hóspede recebe experiência customizada",
              },
              {
                title: "Notificações Automáticas",
                desc: "Emails de confirmação, lembretes e ofertas",
              },
              {
                title: "Recomendações Locais",
                desc: "Sugestões personalizadas de atrações e restaurantes",
              },
              {
                title: "Painel Administrativo",
                desc: "Gestão completa e tempo real de operações",
              },
              {
                title: "Integrações Globais",
                desc: "Conectado aos maiores portais de viagem",
              },
            ].map((feature, i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-accent text-accent-foreground p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Transforme a Jornada do Seu Hóspede</h2>
          <p className="mb-6 opacity-90">Implemente SOTA Systems e veja o impacto imediato</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Começar Agora
            </Button>
            <Button size="lg" variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10">
              Agendar Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
