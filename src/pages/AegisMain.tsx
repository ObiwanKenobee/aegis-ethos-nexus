import { useState } from "react";
import { AegisNavigation } from "@/components/AegisNavigation";
import { AegisHero } from "@/components/AegisHero";
import { PlanetaryDashboard } from "@/components/PlanetaryDashboard";
import { CulturalMemory } from "@/components/CulturalMemory";
import { EthicsOS } from "@/components/EthicsOS";

export const AegisMain = () => {
  const [activeModule, setActiveModule] = useState("overview");

  const renderModule = () => {
    switch (activeModule) {
      case "overview":
        return <AegisHero />;
      case "planetary":
        return <PlanetaryDashboard />;
      case "cultural":
        return <CulturalMemory />;
      case "ethics":
        return <EthicsOS />;
      case "diplomatic":
        return <div className="p-8 text-center">
          <h2 className="font-ubuntu text-3xl font-bold mb-4">🛰️ Interstellar Diplomatic Hub</h2>
          <p className="text-muted-foreground">Coming soon: Treaty simulation between Mars and Lunar colonies</p>
        </div>;
      case "codex":
        return <div className="p-8 text-center">
          <h2 className="font-ubuntu text-3xl font-bold mb-4">🧠 Moral Codex Architect</h2>
          <p className="text-muted-foreground">Coming soon: Multi-agent LLM interaction for policy generation</p>
        </div>;
      case "economy":
        return <div className="p-8 text-center">
          <h2 className="font-ubuntu text-3xl font-bold mb-4">🌱 Regenerative Economy Builder</h2>
          <p className="text-muted-foreground">Coming soon: Value-aligned token design and quadratic voting</p>
        </div>;
      case "settings":
        return <div className="p-8 text-center">
          <h2 className="font-ubuntu text-3xl font-bold mb-4">⚙️ System Settings</h2>
          <p className="text-muted-foreground">Coming soon: Configuration and preferences</p>
        </div>;
      default:
        return <AegisHero />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-parchment">
      <AegisNavigation activeModule={activeModule} setActiveModule={setActiveModule} />
      
      <div className="lg:ml-80 transition-all duration-300">
        <main className="min-h-screen">
          {renderModule()}
        </main>
      </div>
    </div>
  );
};