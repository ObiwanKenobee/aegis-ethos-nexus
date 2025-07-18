import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, Brain, Shield, Satellite, Book, Leaf } from "lucide-react";
import heroImage from "@/assets/aegis-hero.jpg";

export const AegisHero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-parchment overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background/90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-solar text-primary-foreground px-4 py-2">
            🪐 AEGIS 2077 Protocol
          </Badge>
          
          <h1 className="font-ubuntu text-6xl md:text-7xl font-bold mb-6 bg-gradient-earth bg-clip-text text-transparent">
            Ethical OS for Multi-Planetary Civilization
          </h1>
          
          <p className="font-nunito text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            A resilient, modular system for AI-powered governance, cultural memory, 
            interstellar diplomacy, and environmental sentience. Built for post-scarcity 
            societies across Earth and beyond.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-gradient-solar hover:scale-105 transition-transform duration-300 shadow-solar px-8 py-3 text-lg">
              🌌 Enter Simulation Mode
            </Button>
            <Button variant="outline" className="border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-3 text-lg">
              📚 Cultural Codex
            </Button>
          </div>
        </div>
        
        {/* Module Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <ModuleCard
            icon={<Leaf className="w-8 h-8" />}
            title="Planetary Restoration AI"
            description="Ecological healing simulation with biodiversity alerts"
            status="Active"
          />
          <ModuleCard
            icon={<Book className="w-8 h-8" />}
            title="Cultural Memory Engine"
            description="Indigenous knowledge models with AI Eldership Agents"
            status="Active"
          />
          <ModuleCard
            icon={<Shield className="w-8 h-8" />}
            title="Ethics Operating System"
            description="Quantum-signed moral decision trees"
            status="Active"
          />
          <ModuleCard
            icon={<Satellite className="w-8 h-8" />}
            title="Interstellar Diplomatic Hub"
            description="Treaty simulation between Mars and Lunar colonies"
            status="Simulation"
          />
          <ModuleCard
            icon={<Brain className="w-8 h-8" />}
            title="Moral Codex Architect"
            description="Multi-agent ethical reasoning with audit trails"
            status="Active"
          />
          <ModuleCard
            icon={<Globe className="w-8 h-8" />}
            title="Regenerative Economy"
            description="Value-aligned token design and governance"
            status="Active"
          />
        </div>
        
        {/* Status Bar */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-earth">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-ubuntu text-xl font-semibold">System Status</h3>
            <Badge className="bg-gradient-solar text-primary-foreground">
              🌌 Simulation Mode
            </Badge>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span>6 Modules Active</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span>3 Planets Connected</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              <span>127 AI Agents</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span>Ubuntu Ethics Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ModuleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  status: string;
}

const ModuleCard = ({ icon, title, description, status }: ModuleCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-cosmic transition-all duration-300 hover:scale-105 cursor-pointer">
      <div className="flex items-start gap-4">
        <div className="text-primary">{icon}</div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-ubuntu font-semibold text-lg">{title}</h3>
            <Badge 
              variant={status === 'Active' ? 'default' : 'secondary'}
              className={status === 'Active' ? 'bg-gradient-solar text-primary-foreground' : ''}
            >
              {status}
            </Badge>
          </div>
          <p className="text-muted-foreground font-nunito">{description}</p>
        </div>
      </div>
    </div>
  );
};