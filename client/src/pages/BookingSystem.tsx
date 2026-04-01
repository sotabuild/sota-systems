import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Users, DollarSign, Clock, Shield } from "lucide-react";
import { useState } from "react";

export default function BookingSystem() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [roomType, setRoomType] = useState("double");

  const roomTypes = [
    { id: "single", name: "Quarto Single", price: 120, capacity: 1 },
    { id: "double", name: "Quarto Duplo", price: 180, capacity: 2 },
    { id: "suite", name: "Suite", price: 280, capacity: 4 },
    { id: "deluxe", name: "Deluxe", price: 380, capacity: 4 },
  ];

  const selectedRoom = roomTypes.find((r) => r.id === roomType);
  const nights = checkIn && checkOut ? Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24)) : 0;
  const totalPrice = selectedRoom ? selectedRoom.price * nights : 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50">
        <div className="container mx-auto px-4 py-6">
          <button className="flex items-center gap-2 text-accent hover:text-accent/80 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </button>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Sistema de Reservas Premium</h1>
          <p className="text-muted-foreground">Plataforma completa de reservas com filtros inteligentes e checkout seguro</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            {/* Features Overview */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Funcionalidades Principais</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    icon: <Clock className="w-6 h-6" />,
                    title: "Disponibilidade em Tempo Real",
                    desc: "Sincronização instantânea com seu sistema de gestão",
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: "Filtros Inteligentes",
                    desc: "Busca por tipo de quarto, capacidade e amenidades",
                  },
                  {
                    icon: <Shield className="w-6 h-6" />,
                    title: "Checkout Seguro",
                    desc: "Integração com Stripe para pagamentos seguros",
                  },
                  {
                    icon: <Check className="w-6 h-6" />,
                    title: "Confirmação Automática",
                    desc: "Notificações por email para hóspede e hotel",
                  },
                ].map((feature, i) => (
                  <Card key={i} className="border border-border">
                    <CardContent className="pt-6">
                      <div className="text-accent mb-3">{feature.icon}</div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Interactive Demo */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Teste Agora</h2>
              <Card className="border-2 border-accent/20">
                <CardHeader>
                  <CardTitle>Simulador de Reserva</CardTitle>
                  <CardDescription>Experimente o fluxo completo de reserva</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Filters */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Check-in</label>
                      <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Check-out</label>
                      <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Tipo de Quarto</label>
                      <select
                        value={roomType}
                        onChange={(e) => setRoomType(e.target.value)}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        {roomTypes.map((room) => (
                          <option key={room.id} value={room.id}>
                            {room.name} - ${room.price}/noite
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Número de Hóspedes</label>
                      <input
                        type="number"
                        min="1"
                        max="6"
                        value={guests}
                        onChange={(e) => setGuests(parseInt(e.target.value))}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                  </div>

                  {/* Room Gallery */}
                  {selectedRoom && (
                    <div className="bg-card p-4 rounded-lg">
                      <h3 className="font-semibold mb-3">{selectedRoom.name}</h3>
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="bg-muted rounded-lg h-24 flex items-center justify-center text-muted-foreground text-sm">
                            Foto {i}
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">Amenidades: WiFi, TV, Ar-condicionado, Minibar, Cofre</p>
                    </div>
                  )}

                  {/* Pricing Summary */}
                  {checkIn && checkOut && nights > 0 && selectedRoom && (
                    <div className="bg-accent/10 p-4 rounded-lg space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{selectedRoom.name}</span>
                        <span>${selectedRoom.price}/noite</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>{nights} noite(s)</span>
                        <span>${selectedRoom.price * nights}</span>
                      </div>
                      <div className="border-t border-accent/20 pt-2 flex justify-between font-bold">
                        <span>Total</span>
                        <span className="text-lg text-accent">${totalPrice}</span>
                      </div>
                    </div>
                  )}

                  <Button className="w-full" size="lg">
                    Prosseguir para Checkout
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Pricing Plans */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h2 className="text-2xl font-bold mb-6">Planos de Preço</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { name: "Básico", price: 99, features: ["Até 20 quartos", "Reservas ilimitadas", "Email de suporte"] },
                  { name: "Premium", price: 299, features: ["Até 100 quartos", "Reservas ilimitadas", "Chat 24/7", "Analytics"], popular: true },
                  { name: "Enterprise", price: 999, features: ["Quartos ilimitados", "Suporte prioritário", "Integrações custom", "SLA garantido"] },
                ].map((plan, i) => (
                  <Card key={i} className={plan.popular ? "border-2 border-accent" : ""}>
                    <CardHeader>
                      <CardTitle>{plan.name}</CardTitle>
                      <div className="text-3xl font-bold mt-4">${plan.price}</div>
                      <p className="text-sm text-muted-foreground">/mês</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {plan.features.map((f, j) => (
                          <li key={j} className="text-sm flex items-center gap-2">
                            <Check className="w-4 h-4 text-accent" />
                            {f}
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
          </div>

          {/* Sidebar - CTA */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="md:col-span-1">
            <Card className="sticky top-20 border-2 border-accent/30">
              <CardHeader>
                <CardTitle>Pronto para Começar?</CardTitle>
                <CardDescription>Implemente em minutos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Setup Rápido</p>
                      <p className="text-xs text-muted-foreground">Integre em menos de 1 hora</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Suporte 24/7</p>
                      <p className="text-xs text-muted-foreground">Nossa equipe está sempre pronta</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Sem Contrato</p>
                      <p className="text-xs text-muted-foreground">Cancele quando quiser</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  Agendar Demo
                </Button>

                <Button variant="outline" className="w-full">
                  Falar com Vendas
                </Button>

                <div className="bg-card p-3 rounded-lg border border-border">
                  <p className="text-xs text-muted-foreground">
                    <strong>Dica:</strong> Clientes que começam hoje ganham 1 mês grátis!
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
