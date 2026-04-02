import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getLoginUrl } from "@/const";
import { SOTA_MODULES, PRICING_TIERS } from "@shared/products";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, BarChart3, Calendar, MapPin, Sparkles, Check, Star, ChevronDown } from "lucide-react";
import { useState, useRef } from "react";

const iconMap: Record<string, React.ReactNode> = {
  Calendar: <Calendar className="w-8 h-8" />,
  BarChart3: <BarChart3 className="w-8 h-8" />,
  Sparkles: <Sparkles className="w-8 h-8" />,
  MapPin: <MapPin className="w-8 h-8" />,
};

export default function Home() {
  const { user, isAuthenticated } = useAuth();
  const [selectedBillingCycle, setSelectedBillingCycle] = useState<"monthly" | "annual">("monthly");
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, [0, 0.5], ["0%", "-20%"]);

  const springScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white selection:bg-accent selection:text-accent-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="./assets/logo.png" alt="SOTA Logo" className="h-8 w-auto object-contain" />
            <span className="font-bold text-xl tracking-tight hidden sm:inline-block">SOTA</span>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
              <a href="#modules" className="hover:text-white transition-colors">Módulos</a>
              <a href="#pricing" className="hover:text-white transition-colors">Preços</a>
            </nav>
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <span className="text-sm text-white/60 hidden lg:inline">Olá, {user?.name}</span>
                <Button variant="outline" size="sm" className="border-white/20 hover:bg-white/10">
                  Dashboard
                </Button>
              </div>
            ) : (
              <Button size="sm" className="bg-white text-black hover:bg-white/90" asChild>
                <a href={getLoginUrl()}>Entrar</a>
              </Button>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section with Scroll Effects */}
      <section ref={targetRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity, scale, y: position }}
          className="container mx-auto px-6 relative z-10 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img 
              src="./assets/logo.png" 
              alt="SOTA Logo" 
              className="h-32 md:h-48 mx-auto mb-12 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]" 
            />
            <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
              SOTA Systems
            </h1>
            <p className="text-lg md:text-2xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
              Sistemas inteligentes para hotelaria de alto padrão. 
              Elevando a experiência do hóspede através da tecnologia.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="h-14 px-8 bg-white text-black hover:bg-white/90 text-lg font-semibold rounded-full" asChild>
                <a href="#modules">
                  Ver Módulos <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 border-white/20 hover:bg-white/10 text-lg font-semibold rounded-full" asChild>
                <a href="./guest-journey">
                  Explorar Jornada
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-white/40">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-white/20" />
          </motion.div>
        </motion.div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px]" />
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-32 relative bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Módulos SOTA</h2>
            <p className="text-xl text-white/40 max-w-2xl">
              Uma suite completa de ferramentas modulares projetadas para escala e performance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(SOTA_MODULES).map((module, idx) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 group overflow-hidden">
                  <CardHeader className="p-8">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <div className="text-white">{iconMap[module.icon]}</div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-white mb-2">{module.name}</CardTitle>
                    <CardDescription className="text-white/40">{module.category}</CardDescription>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <p className="text-white/60 mb-8 leading-relaxed">{module.description}</p>
                    <Button variant="link" className="p-0 h-auto text-white group-hover:gap-4 transition-all" asChild>
                      <a href={`./${module.slug}`}>
                        Saber mais <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Planos</h2>
            <div className="inline-flex p-1 bg-white/5 rounded-xl border border-white/10">
              <button
                onClick={() => setSelectedBillingCycle("monthly")}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedBillingCycle === "monthly" ? "bg-white text-black" : "text-white/40 hover:text-white"
                }`}
              >
                Mensal
              </button>
              <button
                onClick={() => setSelectedBillingCycle("annual")}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedBillingCycle === "annual" ? "bg-white text-black" : "text-white/40 hover:text-white"
                }`}
              >
                Anual
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(PRICING_TIERS).map(([key, tier], idx) => {
              const price = selectedBillingCycle === "monthly" ? tier.monthlyPrice : Math.floor(tier.annualPrice / 12);
              const isPopular = key === "PREMIUM";

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className={`h-full bg-white/5 border-white/10 relative overflow-hidden ${isPopular ? "ring-2 ring-white/20" : ""}`}>
                    {isPopular && (
                      <div className="absolute top-0 right-0 p-4">
                        <span className="bg-white text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                          Popular
                        </span>
                      </div>
                    )}
                    <CardHeader className="p-8">
                      <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                      <div className="flex items-baseline gap-1 mt-4">
                        <span className="text-4xl font-bold text-white">${price}</span>
                        <span className="text-white/40 text-sm">/mês</span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-8 pt-0">
                      <div className="space-y-4 mb-8">
                        {tier.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-3 text-sm text-white/60">
                            <Check className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button className={`w-full h-12 rounded-xl font-bold ${isPopular ? "bg-white text-black hover:bg-white/90" : "bg-white/10 text-white hover:bg-white/20"}`}>
                        Selecionar Plano
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-black">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-3">
            <img src="./assets/logo.png" alt="SOTA Logo" className="h-6 w-auto opacity-50" />
            <span className="text-white/20 font-bold tracking-widest text-sm">SOTA SYSTEMS</span>
          </div>
          <p className="text-white/20 text-sm">
            © 2026 SOTA Systems. All rights reserved. by renck.
          </p>
        </div>
      </footer>
    </div>
  );
}
