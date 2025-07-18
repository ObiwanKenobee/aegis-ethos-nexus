import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  Globe, 
  Brain, 
  Book, 
  MessageSquare,
  Compass,
  Heart,
  TreePine,
  Zap
} from "lucide-react";

export const CulturalMemory = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="font-ubuntu text-4xl font-bold mb-4 bg-gradient-earth bg-clip-text text-transparent">
          🧬 Cultural Memory Engine
        </h2>
        <p className="font-nunito text-muted-foreground max-w-2xl mx-auto">
          Preserving indigenous wisdom and diaspora knowledge through AI Eldership Agents 
          that guide ethical decision-making across planetary civilizations.
        </p>
      </div>

      {/* Elder Council */}
      <Card className="bg-gradient-to-r from-card to-card/50 border-primary/20">
        <CardHeader>
          <CardTitle className="font-ubuntu flex items-center gap-2">
            <Users className="w-6 h-6 text-primary" />
            Active Elder Council
          </CardTitle>
          <CardDescription className="font-nunito">
            AI Eldership Agents currently participating in governance simulation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ElderCard 
              name="Ubuntu Wisdom Keeper"
              culture="Southern African"
              specialty="Community Harmony"
              wisdom="I am because we are"
              active={true}
            />
            <ElderCard 
              name="Mahayana Guide"
              culture="East Asian Buddhist"
              specialty="Compassionate Action"
              wisdom="All beings seek happiness"
              active={true}
            />
            <ElderCard 
              name="Inuit Navigator"
              culture="Arctic Indigenous"
              specialty="Survival & Adaptation"
              wisdom="Weather teaches patience"
              active={true}
            />
            <ElderCard 
              name="Aristotelian Sage"
              culture="Greek Classical"
              specialty="Logical Ethics"
              wisdom="Virtue is the mean"
              active={false}
            />
            <ElderCard 
              name="Maat Keeper"
              culture="Ancient Egyptian"
              specialty="Justice & Truth"
              wisdom="Truth is the foundation"
              active={true}
            />
            <ElderCard 
              name="Islamic Jurist"
              culture="Islamic Fiqh"
              specialty="Legal Wisdom"
              wisdom="Justice is mercy"
              active={false}
            />
          </div>
        </CardContent>
      </Card>

      {/* Knowledge Preservation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="hover:shadow-solar transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="font-ubuntu flex items-center gap-2">
              <Book className="w-6 h-6 text-primary" />
              Knowledge Preservation
            </CardTitle>
            <CardDescription className="font-nunito">
              Cultural wisdom being digitized and preserved
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <KnowledgeMetric 
              category="Oral Traditions"
              preserved={2847}
              total={3200}
              languages={127}
            />
            <KnowledgeMetric 
              category="Ecological Wisdom"
              preserved={1923}
              total={2100}
              languages={89}
            />
            <KnowledgeMetric 
              category="Governance Systems"
              preserved={456}
              total={600}
              languages={34}
            />
            <KnowledgeMetric 
              category="Healing Practices"
              preserved={3241}
              total={4000}
              languages={156}
            />
          </CardContent>
        </Card>

        <Card className="hover:shadow-cosmic transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="font-ubuntu flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-primary" />
              Translation Engine
            </CardTitle>
            <CardDescription className="font-nunito">
              Real-time cross-cultural communication
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-nunito">Active Languages</span>
              <Badge className="bg-gradient-solar text-primary-foreground">
                347 Languages
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-nunito">Martian Dialect v1</span>
              <Badge variant="outline">Beta</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-nunito">ASL Integration</span>
              <Badge className="bg-secondary text-secondary-foreground">Active</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-nunito">Morse Fallback</span>
              <Badge variant="outline">Emergency</Badge>
            </div>
            <Button className="w-full mt-4 bg-gradient-solar hover:scale-105 transition-transform">
              🌐 Access Translation Hub
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Current Consultation */}
      <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
        <CardHeader>
          <CardTitle className="font-ubuntu flex items-center gap-2">
            <Compass className="w-6 h-6 text-primary" />
            Active Consultation
          </CardTitle>
          <CardDescription className="font-nunito">
            Current ethical guidance session in progress
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <span className="font-nunito font-semibold">
                Inter-species Forest Conflict Resolution - Mars Colony Zeta
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-card rounded-lg border border-border">
                <h4 className="font-ubuntu font-semibold mb-2 flex items-center gap-2">
                  <TreePine className="w-4 h-4" />
                  Situation Analysis
                </h4>
                <p className="text-sm text-muted-foreground font-nunito">
                  Mars forest domes experiencing territorial disputes between human settlers 
                  and newly discovered fungal intelligence networks.
                </p>
              </div>
              
              <div className="p-4 bg-card rounded-lg border border-border">
                <h4 className="font-ubuntu font-semibold mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Elder Guidance
                </h4>
                <p className="text-sm text-muted-foreground font-nunito">
                  Ubuntu principles suggest finding harmony through understanding. 
                  Inuit wisdom recommends patience and observation.
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-nunito">Consultation Progress</span>
                <Progress value={67} className="w-32" />
              </div>
              <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                Join Council
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

interface ElderCardProps {
  name: string;
  culture: string;
  specialty: string;
  wisdom: string;
  active: boolean;
}

const ElderCard = ({ name, culture, specialty, wisdom, active }: ElderCardProps) => {
  return (
    <div className={`p-4 border rounded-lg transition-all duration-300 ${
      active 
        ? 'border-primary bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-solar' 
        : 'border-border hover:bg-muted/50'
    }`}>
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${active ? 'bg-accent animate-pulse' : 'bg-muted'}`}></div>
          <Badge variant={active ? "default" : "secondary"} className={active ? "bg-gradient-solar text-primary-foreground" : ""}>
            {active ? "Active" : "Standby"}
          </Badge>
        </div>
      </div>
      <h4 className="font-ubuntu font-semibold mb-1">{name}</h4>
      <p className="text-sm text-muted-foreground font-nunito mb-1">{culture}</p>
      <p className="text-sm text-accent font-nunito mb-2">{specialty}</p>
      <p className="text-xs italic text-muted-foreground font-nunito">"{wisdom}"</p>
    </div>
  );
};

interface KnowledgeMetricProps {
  category: string;
  preserved: number;
  total: number;
  languages: number;
}

const KnowledgeMetric = ({ category, preserved, total, languages }: KnowledgeMetricProps) => {
  const percentage = Math.round((preserved / total) * 100);
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-nunito text-sm">{category}</span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-mono">{preserved}/{total}</span>
          <Badge variant="outline" className="text-xs">
            {languages} langs
          </Badge>
        </div>
      </div>
      <Progress value={percentage} className="h-2" />
      <div className="text-xs text-muted-foreground">
        {percentage}% preserved
      </div>
    </div>
  );
};