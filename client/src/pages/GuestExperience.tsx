import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, Zap, TrendingUp, Check } from "lucide-react";

export default function GuestExperience() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50">
        <div className="container mx-auto px-4 py-6">
          <button className="flex items-center gap-2 text-accent hover:text-accent/80 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </button>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Personalização de Experiência</h1>
          <p className="text-muted-foreground">Sistema que adapta a experiência do hóspede conforme suas preferências</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* How It Works */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Como Funciona</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: "1", title: "Coleta", desc: "Preferências do hóspede" },
              { step: "2", title: "Análise", desc: "Padrões e histórico" },
              { step: "3", title: "Personalização", desc: "Recomendações" },
              { step: "4", title: "Experiência", desc: "Satisfação máxima" },
            ].map((item, i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-accent mb-3">{item.step}</div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Personalization Options */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Opções de Personalização</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Temperatura do Quarto",
                desc: "Ajuste automático conforme preferência",
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Preferências de Cama",
                desc: "Firmeza e tipo de travesseiro",
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Restrições Alimentares",
                desc: "Cardápio personalizado",
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Interesses Locais",
                desc: "Recomendações de atrações",
              },
            ].map((option, i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <div className="text-accent mb-3">{option.icon}</div>
                  <h3 className="font-semibold mb-2">{option.title}</h3>
                  <p className="text-sm text-muted-foreground">{option.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Guest Journey */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Jornada do Hóspede</h2>
          <Card className="border-2 border-accent/20">
            <CardContent className="pt-6">
              <div className="space-y-4">
                {[
                  { stage: "Pré-Chegada", actions: ["Coleta de preferências", "Confirmação de dados", "Sugestões personalizadas"] },
                  { stage: "Check-in", actions: ["Acomodação personalizada", "Bem-vindo customizado", "Orientações específicas"] },
                  { stage: "Durante Estadia", actions: ["Ajustes em tempo real", "Recomendações locais", "Suporte proativo"] },
                  { stage: "Check-out", actions: ["Feedback personalizado", "Ofertas futuras", "Programa de fidelidade"] },
                ].map((journey, i) => (
                  <div key={i} className="pb-4 border-b border-border last:border-b-0">
                    <h3 className="font-semibold text-accent mb-2">{journey.stage}</h3>
                    <ul className="space-y-1">
                      {journey.actions.map((action, j) => (
                        <li key={j} className="text-sm flex items-center gap-2">
                          <Check className="w-4 h-4 text-accent" />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Results */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Resultados Comprovados</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { metric: "+35%", desc: "Aumento em satisfação" },
              { metric: "+28%", desc: "Redução de reclamações" },
              { metric: "+42%", desc: "Recomendações positivas" },
            ].map((result, i) => (
              <Card key={i}>
                <CardContent className="pt-6 text-center">
                  <p className="text-4xl font-bold text-accent mb-2">{result.metric}</p>
                  <p className="text-sm text-muted-foreground">{result.desc}</p>
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
              { name: "Básico", price: 79, features: ["Até 30 hóspedes/mês", "Preferências básicas", "Email de suporte"] },
              { name: "Premium", price: 199, features: ["Até 200 hóspedes/mês", "Todas as preferências", "Chat 24/7"], popular: true },
              { name: "Enterprise", price: 499, features: ["Hóspedes ilimitados", "Integrações custom", "Suporte prioritário"] },
            ].map((plan, i) => (
              <Card key={i} className={plan.popular ? "border-2 border-accent" : ""}>
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <div className="text-3xl font-bold mt-4">${plan.price}</div>
                  <p className="text-sm text-muted-foreground">/mês</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="text-sm flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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
          <h2 className="text-2xl font-bold mb-4">Transforme a Experiência do Seu Hóspede</h2>
          <p className="mb-6 opacity-90">Comece com uma demo gratuita</p>
          <Button size="lg" variant="secondary">
            Agendar Demo
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
