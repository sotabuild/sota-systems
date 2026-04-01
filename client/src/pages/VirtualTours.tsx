import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowLeft, Play, Check, Eye, Smartphone, Zap } from "lucide-react";

export default function VirtualTours() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50">
        <div className="container mx-auto px-4 py-6">
          <button className="flex items-center gap-2 text-accent hover:text-accent/80 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </button>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Tours Virtuais 3D</h1>
          <p className="text-muted-foreground">Visualizador 360° dos quartos e instalações para aumentar conversão de reservas</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Features Grid */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Funcionalidades</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: <Eye className="w-6 h-6" />, title: "Tours 360°", desc: "Visualização completa dos quartos" },
              { icon: <Smartphone className="w-6 h-6" />, title: "Mobile Ready", desc: "Funciona em qualquer dispositivo" },
              { icon: <Zap className="w-6 h-6" />, title: "Carregamento Rápido", desc: "Otimizado para web" },
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

        {/* Tour Preview */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Visualizador 360°</h2>
          <Card className="border-2 border-accent/20">
            <CardContent className="pt-6">
              <div className="bg-gradient-to-br from-muted to-muted/50 rounded-lg h-96 flex items-center justify-center cursor-pointer hover:from-muted/80 transition-colors group">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                    <Play className="w-8 h-8 text-accent fill-accent" />
                  </div>
                  <p className="text-muted-foreground">Clique para visualizar tour 360°</p>
                  <p className="text-sm text-muted-foreground mt-2">Suite Premium - Quarto 301</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Room Gallery */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Quartos Disponíveis</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Quarto Single", price: "$120/noite", amenities: ["WiFi", "TV", "Ar-condicionado"] },
              { name: "Quarto Double", price: "$180/noite", amenities: ["WiFi", "TV", "Minibar", "Cofre"] },
              { name: "Suite", price: "$280/noite", amenities: ["WiFi", "TV", "Jacuzzi", "Varanda"] },
              { name: "Deluxe", price: "$380/noite", amenities: ["WiFi", "TV", "Spa", "Vista Panorâmica"] },
            ].map((room, i) => (
              <Card key={i} className="cursor-pointer hover:shadow-lg transition-shadow group">
                <CardContent className="pt-6">
                  <div className="bg-muted rounded-lg h-40 mb-4 flex items-center justify-center group-hover:bg-muted/80 transition-colors">
                    <Play className="w-8 h-8 text-accent/50 group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="font-semibold mb-2">{room.name}</h3>
                  <p className="text-accent font-bold mb-3">{room.price}</p>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity, j) => (
                      <span key={j} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Benefícios para seu Hotel</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Aumenta conversão de reservas em até 40%",
              "Reduz cancelamentos por expectativa não atendida",
              "Melhora avaliações e reviews dos hóspedes",
              "Diferencia seu hotel da concorrência",
              "Funciona em todos os dispositivos",
              "Integração fácil com seu site",
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
              { name: "Básico", price: 199, rooms: "Até 10 quartos" },
              { name: "Premium", price: 499, rooms: "Até 50 quartos", popular: true },
              { name: "Enterprise", price: 999, rooms: "Quartos ilimitados" },
            ].map((plan, i) => (
              <Card key={i} className={plan.popular ? "border-2 border-accent" : ""}>
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <div className="text-3xl font-bold mt-4">${plan.price}</div>
                  <p className="text-sm text-muted-foreground">/mês</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-6">{plan.rooms}</p>
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
          <h2 className="text-2xl font-bold mb-4">Pronto para Aumentar suas Reservas?</h2>
          <p className="mb-6 opacity-90">Implemente tours 3D em minutos</p>
          <Button size="lg" variant="secondary">
            Agendar Demo
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
