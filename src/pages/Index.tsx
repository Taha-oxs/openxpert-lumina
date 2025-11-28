import { Server, ShoppingCart, Shield, Wrench, Users, Globe } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import { FloatingShape } from "@/components/FloatingShape";
import openxpertLogo from "@/assets/openxpert-logo.jpg";

const Index = () => {
  const services = [
    {
      icon: Server,
      title: "ERP Systems",
      description: "Enterprise Resource Planning solutions tailored to streamline your business operations with cutting-edge technology.",
    },
    {
      icon: ShoppingCart,
      title: "Custom E-Commerce",
      description: "Bespoke e-commerce platforms designed to deliver exceptional user experiences and drive conversions.",
    },
    {
      icon: Shield,
      title: "RMM Services",
      description: "Remote Monitoring and Management services ensuring your IT infrastructure operates at peak performance.",
    },
    {
      icon: Wrench,
      title: "AMC Support",
      description: "Comprehensive Annual Maintenance Contracts providing reliable, ongoing technical support and system optimization.",
    },
    {
      icon: Users,
      title: "Community Projects",
      description: "Innovative technology initiatives that empower communities and create lasting social impact.",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Premium web solutions combining elegant design with powerful functionality for modern digital experiences.",
    },
  ];

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      {/* Floating decorative shapes */}
      <FloatingShape 
        className="top-20 left-10 w-96 h-96 bg-accent/30"
        delay={0}
      />
      <FloatingShape 
        className="top-40 right-20 w-80 h-80 bg-primary/10"
        delay={2}
      />
      <FloatingShape 
        className="bottom-20 left-1/3 w-72 h-72 bg-accent/20"
        delay={4}
      />
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header with logo */}
        <header className="text-center mb-24 animate-slide-in-up">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img 
                src={openxpertLogo} 
                alt="OpenXpert Solutions - Enterprise IT Solutions Provider" 
                className="h-24 w-auto object-contain"
              />
              {/* Subtle glow behind logo */}
              <div className="absolute inset-0 blur-2xl opacity-30 bg-primary/20 -z-10 scale-110" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
            Enterprise Digital
            <span className="block mt-2 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transforming businesses through innovative technology, security, and excellence
          </p>
        </header>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Footer tagline */}
        <footer className="mt-32 text-center animate-slide-in-up" style={{ animationDelay: "600ms" }}>
          <div className="glass-card inline-block px-8 py-4 rounded-full">
            <p className="text-sm text-muted-foreground font-medium">
              Secure • Innovative • Sophisticated
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
