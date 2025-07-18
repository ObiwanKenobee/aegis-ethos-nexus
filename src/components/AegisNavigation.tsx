import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Brain, 
  Shield, 
  Satellite, 
  Book, 
  Leaf,
  Users,
  Settings,
  Menu,
  X
} from "lucide-react";

interface NavigationProps {
  activeModule: string;
  setActiveModule: (module: string) => void;
}

export const AegisNavigation = ({ activeModule, setActiveModule }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const modules = [
    { id: 'overview', name: 'Overview', icon: Globe, description: 'System Dashboard' },
    { id: 'planetary', name: 'Planetary AI', icon: Leaf, description: 'Restoration Systems' },
    { id: 'cultural', name: 'Cultural Memory', icon: Book, description: 'Elder Wisdom' },
    { id: 'ethics', name: 'Ethics OS', icon: Shield, description: 'Moral Framework' },
    { id: 'diplomatic', name: 'Diplomatic Hub', icon: Satellite, description: 'Interstellar Relations' },
    { id: 'codex', name: 'Moral Codex', icon: Brain, description: 'Reasoning Engine' },
    { id: 'economy', name: 'Economy', icon: Users, description: 'Regenerative Systems' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-card border-border"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Navigation Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-80 bg-card border-r border-border transform transition-transform duration-300 lg:translate-x-0 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-solar rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-ubuntu font-bold text-lg">AEGIS 2077</h1>
              <p className="text-xs text-muted-foreground">v2.3.7</p>
            </div>
          </div>
          <Badge className="bg-gradient-solar text-primary-foreground">
            🌌 Simulation Mode
          </Badge>
        </div>

        <nav className="p-4 space-y-2">
          {modules.map((module) => {
            const Icon = module.icon;
            const isActive = activeModule === module.id;
            
            return (
              <Button
                key={module.id}
                variant={isActive ? "default" : "ghost"}
                className={`w-full justify-start gap-3 h-auto py-3 px-4 ${
                  isActive 
                    ? 'bg-gradient-solar text-primary-foreground shadow-solar' 
                    : 'hover:bg-muted/50'
                }`}
                onClick={() => {
                  setActiveModule(module.id);
                  setIsMobileMenuOpen(false);
                }}
              >
                <Icon className="w-5 h-5" />
                <div className="text-left">
                  <div className="font-ubuntu font-medium">{module.name}</div>
                  <div className="text-xs opacity-75">{module.description}</div>
                </div>
              </Button>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border bg-card">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="font-nunito">System Status: Active</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="font-nunito">3 Planets Online</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              <span className="font-nunito">127 AI Agents</span>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            className="w-full mt-4 hover:bg-primary hover:text-primary-foreground"
            onClick={() => setActiveModule('settings')}
          >
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};