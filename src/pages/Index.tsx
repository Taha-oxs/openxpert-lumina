import { Server, ShoppingCart, Shield, Wrench, Users, Globe, ArrowRight } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import { FloatingShape } from "@/components/FloatingShape";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

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
      <Navigation />
      
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
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <header className="text-center mb-32 animate-slide-in-up">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 tracking-tight leading-none">
            Precision. Innovation.
            <span className="block mt-3 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
              Open Solutions.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            Empowering businesses with secure, future-ready technology that drives growth and digital transformation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="glass-card hover:glow-effect px-8 py-6 text-lg group">
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="glass-card hover:glow-effect px-8 py-6 text-lg">
                Talk to an Expert
              </Button>
            </Link>
          </div>
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

        {/* Trust Badges */}
        <div className="mt-32 text-center animate-slide-in-up" style={{ animationDelay: "600ms" }}>
          <div className="glass-card inline-block px-12 py-6 rounded-full">
            <p className="text-sm text-muted-foreground font-medium flex items-center gap-6">
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                Secure
              </span>
              <span className="text-border">•</span>
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" />
                Innovative
              </span>
              <span className="text-border">•</span>
              <span className="flex items-center gap-2">
                <Server className="w-4 h-4 text-primary" />
                Trusted
              </span>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
