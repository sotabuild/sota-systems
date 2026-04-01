import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, Users, DollarSign, Percent, BarChart3, PieChart, Activity } from "lucide-react";
import { LineChart, Line, BarChart, Bar, PieChart as PieChartComponent, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const occupancyData = [
  { date: "Seg", occupancy: 65 },
  { date: "Ter", occupancy: 72 },
  { date: "Qua", occupancy: 68 },
  { date: "Qui", occupancy: 85 },
  { date: "Sex", occupancy: 92 },
  { date: "Sab", occupancy: 98 },
  { date: "Dom", occupancy: 88 },
];

const revenueData = [
  { month: "Jan", revenue: 12000 },
  { month: "Fev", revenue: 15000 },
  { month: "Mar", revenue: 18000 },
  { month: "Abr", revenue: 22000 },
  { month: "Mai", revenue: 25000 },
  { month: "Jun", revenue: 28000 },
];

const roomTypeData = [
  { name: "Single", value: 20, fill: "#8b5cf6" },
  { name: "Double", value: 35, fill: "#ec4899" },
  { name: "Suite", value: 30, fill: "#f59e0b" },
  { name: "Deluxe", value: 15, fill: "#10b981" },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50">
        <div className="container mx-auto px-4 py-6">
          <button className="flex items-center gap-2 text-accent hover:text-accent/80 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </button>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Painel Administrativo</h1>
          <p className="text-muted-foreground">Dashboard completo com métricas, ocupação, faturamento e gestão de quartos</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* KPI Cards */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: <Users className="w-6 h-6" />, label: "Hóspedes Ativos", value: "248", change: "+12%" },
            { icon: <DollarSign className="w-6 h-6" />, label: "Receita Mês", value: "$28.5K", change: "+8%" },
            { icon: <Percent className="w-6 h-6" />, label: "Ocupação", value: "87%", change: "+5%" },
            { icon: <Activity className="w-6 h-6" />, label: "Avaliação Média", value: "4.8/5", change: "+0.2" },
          ].map((kpi, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm mb-1">{kpi.label}</p>
                      <p className="text-2xl font-bold">{kpi.value}</p>
                      <p className="text-xs text-accent mt-2">{kpi.change} vs. mês anterior</p>
                    </div>
                    <div className="text-accent/50">{kpi.icon}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Occupancy Chart */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-accent" />
                  Ocupação Semanal
                </CardTitle>
                <CardDescription>Taxa de ocupação por dia da semana</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={occupancyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                    <XAxis dataKey="date" stroke="var(--muted-foreground)" />
                    <YAxis stroke="var(--muted-foreground)" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--card)",
                        border: "1px solid var(--border)",
                        borderRadius: "8px",
                      }}
                    />
                    <Line type="monotone" dataKey="occupancy" stroke="var(--accent)" strokeWidth={2} dot={{ fill: "var(--accent)" }} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Revenue Chart */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  Receita Mensal
                </CardTitle>
                <CardDescription>Faturamento dos últimos 6 meses</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                    <XAxis dataKey="month" stroke="var(--muted-foreground)" />
                    <YAxis stroke="var(--muted-foreground)" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--card)",
                        border: "1px solid var(--border)",
                        borderRadius: "8px",
                      }}
                    />
                    <Bar dataKey="revenue" fill="var(--accent)" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Room Management & Distribution */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Room Type Distribution */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="w-5 h-5 text-accent" />
                  Distribuição de Quartos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChartComponent>
                    <Pie data={roomTypeData} cx="50%" cy="50%" labelLine={false} label={({ name, value }) => `${name} ${value}`} outerRadius={80} fill="#8884d8" dataKey="value">
                      {roomTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChartComponent>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Room Management */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Gerenciamento de Quartos</CardTitle>
                <CardDescription>Status e disponibilidade</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { room: "101 - Single", status: "Ocupado", guest: "João Silva", checkout: "Hoje 11:00" },
                    { room: "102 - Double", status: "Disponível", guest: "-", checkout: "-" },
                    { room: "103 - Suite", status: "Ocupado", guest: "Maria Santos", checkout: "Amanhã 10:00" },
                    { room: "104 - Deluxe", status: "Limpeza", guest: "-", checkout: "-" },
                  ].map((room, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-card border border-border rounded-lg">
                      <div>
                        <p className="font-medium text-sm">{room.room}</p>
                        <p className="text-xs text-muted-foreground">{room.guest}</p>
                      </div>
                      <div className="text-right">
                        <span
                          className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                            room.status === "Ocupado"
                              ? "bg-red-500/20 text-red-700"
                              : room.status === "Disponível"
                                ? "bg-green-500/20 text-green-700"
                                : "bg-yellow-500/20 text-yellow-700"
                          }`}
                        >
                          {room.status}
                        </span>
                        <p className="text-xs text-muted-foreground mt-1">{room.checkout}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Recent Bookings & Reviews */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Recent Bookings */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            <Card>
              <CardHeader>
                <CardTitle>Reservas Recentes</CardTitle>
                <CardDescription>Últimas 5 reservas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "Ana Costa", room: "Suite 201", date: "15-20 Jun", price: "$580" },
                    { name: "Pedro Oliveira", room: "Double 102", date: "18-22 Jun", price: "$360" },
                    { name: "Carla Mendes", room: "Deluxe 304", date: "20-25 Jun", price: "$950" },
                    { name: "Bruno Lima", room: "Single 101", date: "22-24 Jun", price: "$240" },
                  ].map((booking, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-card border border-border rounded-lg">
                      <div>
                        <p className="font-medium text-sm">{booking.name}</p>
                        <p className="text-xs text-muted-foreground">{booking.room}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-sm text-accent">{booking.price}</p>
                        <p className="text-xs text-muted-foreground">{booking.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Reviews & Ratings */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
            <Card>
              <CardHeader>
                <CardTitle>Avaliações Recentes</CardTitle>
                <CardDescription>Feedback dos hóspedes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "João Silva", rating: 5, comment: "Excelente atendimento!" },
                    { name: "Maria Santos", rating: 4, comment: "Muito bom, poderia melhorar café" },
                    { name: "Carlos Pereira", rating: 5, comment: "Perfeito! Voltarei com certeza" },
                    { name: "Ana Ferreira", rating: 4, comment: "Ótima localização e conforto" },
                  ].map((review, i) => (
                    <div key={i} className="p-3 bg-card border border-border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium text-sm">{review.name}</p>
                        <span className="text-yellow-500">{"⭐".repeat(review.rating)}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mt-12 bg-accent text-accent-foreground p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Pronto para Otimizar sua Gestão?</h2>
          <p className="mb-6 opacity-90">Comece com uma demo gratuita do Painel Administrativo</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Agendar Demo
            </Button>
            <Button size="lg" variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10">
              Documentação
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
