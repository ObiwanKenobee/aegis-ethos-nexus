import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Leaf, 
  Droplets, 
  Thermometer, 
  Wind, 
  TreePine, 
  Fish,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Brain
} from "lucide-react";

export const PlanetaryDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="font-ubuntu text-4xl font-bold mb-4 bg-gradient-earth bg-clip-text text-transparent">
          🌍 Planetary Restoration AI
        </h2>
        <p className="font-nunito text-muted-foreground max-w-2xl mx-auto">
          Real-time ecosystem monitoring and regenerative healing protocols 
          for Earth, Mars, and the Lunar colonies.
        </p>
      </div>

      {/* Crisis Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <CrisisCard 
          icon={<Thermometer className="w-6 h-6" />}
          title="Climate Stability"
          value={67}
          trend="improving"
          status="warning"
        />
        <CrisisCard 
          icon={<Droplets className="w-6 h-6" />}
          title="Water Security"
          value={43}
          trend="declining"
          status="critical"
        />
        <CrisisCard 
          icon={<TreePine className="w-6 h-6" />}
          title="Biodiversity"
          value={78}
          trend="improving"
          status="good"
        />
        <CrisisCard 
          icon={<Wind className="w-6 h-6" />}
          title="Air Quality"
          value={82}
          trend="stable"
          status="good"
        />
      </div>

      {/* Planetary Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Earth */}
        <PlanetCard 
          name="Earth"
          emoji="🌍"
          status="Active Healing"
          metrics={[
            { name: "Forest Cover", value: 72, target: 85 },
            { name: "Ocean Health", value: 58, target: 75 },
            { name: "Species Recovery", value: 65, target: 80 }
          ]}
        />
        
        {/* Mars */}
        <PlanetCard 
          name="Mars"
          emoji="🔴"
          status="Terraforming"
          metrics={[
            { name: "Atmosphere Density", value: 23, target: 60 },
            { name: "Water Cycle", value: 45, target: 70 },
            { name: "Soil Biome", value: 38, target: 65 }
          ]}
        />
        
        {/* Luna */}
        <PlanetCard 
          name="Luna"
          emoji="🌙"
          status="Dome Systems"
          metrics={[
            { name: "Habitat Integrity", value: 94, target: 95 },
            { name: "Air Recycling", value: 88, target: 90 },
            { name: "Food Production", value: 76, target: 85 }
          ]}
        />
      </div>

      {/* AI Recommendations */}
      <Card className="bg-gradient-to-r from-card to-card/50 border-primary/20">
        <CardHeader>
          <CardTitle className="font-ubuntu flex items-center gap-2">
            <Brain className="w-6 h-6 text-primary" />
            AI Restoration Recommendations
          </CardTitle>
          <CardDescription className="font-nunito">
            Current priority actions based on ethical Ubuntu principles
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RecommendationItem 
              priority="Critical"
              action="Deploy mycelial networks in Amazon Basin"
              impact="Forest regeneration +15%"
              timeline="6 months"
            />
            <RecommendationItem 
              priority="High"
              action="Activate Mars atmospheric processors"
              impact="Oxygen production +8%"
              timeline="3 months"
            />
            <RecommendationItem 
              priority="Medium"
              action="Expand coral reef restoration zones"
              impact="Marine biodiversity +12%"
              timeline="12 months"
            />
            <RecommendationItem 
              priority="Medium"
              action="Optimize Lunar water recycling"
              impact="Resource efficiency +7%"
              timeline="2 months"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

interface CrisisCardProps {
  icon: React.ReactNode;
  title: string;
  value: number;
  trend: 'improving' | 'declining' | 'stable';
  status: 'critical' | 'warning' | 'good';
}

const CrisisCard = ({ icon, title, value, trend, status }: CrisisCardProps) => {
  const statusColors = {
    critical: 'bg-destructive text-destructive-foreground',
    warning: 'bg-primary text-primary-foreground',
    good: 'bg-secondary text-secondary-foreground'
  };

  const trendIcons = {
    improving: <TrendingUp className="w-4 h-4 text-accent" />,
    declining: <TrendingDown className="w-4 h-4 text-destructive" />,
    stable: <div className="w-4 h-4 bg-muted rounded-full" />
  };

  return (
    <Card className="hover:shadow-solar transition-shadow duration-300">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="text-muted-foreground">{icon}</div>
          <Badge className={statusColors[status]} variant="secondary">
            {status}
          </Badge>
        </div>
        <div className="space-y-2">
          <h3 className="font-ubuntu font-semibold text-sm">{title}</h3>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">{value}%</span>
            {trendIcons[trend]}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface PlanetCardProps {
  name: string;
  emoji: string;
  status: string;
  metrics: Array<{
    name: string;
    value: number;
    target: number;
  }>;
}

const PlanetCard = ({ name, emoji, status, metrics }: PlanetCardProps) => {
  return (
    <Card className="hover:shadow-cosmic transition-shadow duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="font-ubuntu flex items-center gap-2">
          <span className="text-2xl">{emoji}</span>
          {name}
        </CardTitle>
        <CardDescription className="font-nunito">
          <Badge variant="outline">{status}</Badge>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {metrics.map((metric, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-nunito">{metric.name}</span>
              <span className="font-mono">{metric.value}%</span>
            </div>
            <Progress value={metric.value} className="h-2" />
            <div className="text-xs text-muted-foreground">
              Target: {metric.target}%
            </div>
          </div>
        ))}
        <Button variant="outline" className="w-full mt-4">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

interface RecommendationItemProps {
  priority: string;
  action: string;
  impact: string;
  timeline: string;
}

const RecommendationItem = ({ priority, action, impact, timeline }: RecommendationItemProps) => {
  const priorityColors = {
    Critical: 'bg-destructive text-destructive-foreground',
    High: 'bg-primary text-primary-foreground',
    Medium: 'bg-secondary text-secondary-foreground'
  };

  return (
    <div className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors duration-200">
      <div className="flex items-start justify-between mb-2">
        <Badge className={priorityColors[priority as keyof typeof priorityColors]} variant="secondary">
          {priority}
        </Badge>
        <span className="text-sm text-muted-foreground">{timeline}</span>
      </div>
      <h4 className="font-ubuntu font-semibold mb-1">{action}</h4>
      <p className="text-sm text-accent font-nunito">{impact}</p>
    </div>
  );
};