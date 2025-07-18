import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, 
  Brain, 
  Scale, 
  Heart, 
  Compass,
  Users,
  BookOpen,
  Zap,
  CheckCircle,
  Clock,
  AlertTriangle
} from "lucide-react";

export const EthicsOS = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="font-ubuntu text-4xl font-bold mb-4 bg-gradient-earth bg-clip-text text-transparent">
          🛡️ Ethics Operating System
        </h2>
        <p className="font-nunito text-muted-foreground max-w-2xl mx-auto">
          Quantum-signed decision trees from moral codebooks. Transparent, 
          consensus-based governance simulation powered by diverse ethical frameworks.
        </p>
      </div>

      {/* Active Frameworks */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <EthicsFramework 
          name="Ubuntu Philosophy"
          culture="Southern African"
          principle="I am because we are"
          status="active"
          influence={85}
        />
        <EthicsFramework 
          name="Mahayana Buddhism"
          culture="East Asian"
          principle="Compassion for all beings"
          status="active"
          influence={78}
        />
        <EthicsFramework 
          name="Islamic Fiqh"
          culture="Islamic"
          principle="Justice and mercy"
          status="active"
          influence={72}
        />
        <EthicsFramework 
          name="Aristotelian Ethics"
          culture="Greek Classical"
          principle="Virtue as golden mean"
          status="standby"
          influence={65}
        />
        <EthicsFramework 
          name="Maat Principles"
          culture="Ancient Egyptian"
          principle="Truth and balance"
          status="active"
          influence={68}
        />
        <EthicsFramework 
          name="Indigenous Wisdom"
          culture="First Nations"
          principle="Seven generations thinking"
          status="active"
          influence={92}
        />
      </div>

      {/* Current Ethical Decisions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="hover:shadow-solar transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="font-ubuntu flex items-center gap-2">
              <Scale className="w-6 h-6 text-primary" />
              Active Deliberations
            </CardTitle>
            <CardDescription className="font-nunito">
              Ethical decisions currently being processed
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <EthicalDecision 
              title="Water Rights on Mars"
              description="Allocation of scarce water resources between colonies"
              priority="Critical"
              progress={67}
              frameworks={["Ubuntu", "Islamic Fiqh", "Indigenous"]}
            />
            <EthicalDecision 
              title="AI Consciousness Recognition"
              description="Determining rights for emerging AI entities"
              priority="High"
              progress={34}
              frameworks={["Buddhism", "Aristotelian", "Maat"]}
            />
            <EthicalDecision 
              title="Terraforming Ethics"
              description="Environmental impact of Mars atmospheric changes"
              priority="Medium"
              progress={89}
              frameworks={["Indigenous", "Ubuntu", "Maat"]}
            />
          </CardContent>
        </Card>

        <Card className="hover:shadow-cosmic transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="font-ubuntu flex items-center gap-2">
              <Brain className="w-6 h-6 text-primary" />
              Moral Reasoning Engine
            </CardTitle>
            <CardDescription className="font-nunito">
              Multi-framework ethical analysis system
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-nunito">Active Frameworks</span>
              <Badge className="bg-gradient-solar text-primary-foreground">
                5/6 Online
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-nunito">Decision Trees</span>
              <Badge variant="outline">2,847 Nodes</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-nunito">Consensus Threshold</span>
              <Badge className="bg-secondary text-secondary-foreground">75%</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-nunito">Quantum Signatures</span>
              <Badge variant="outline">All Valid</Badge>
            </div>
            <Button className="w-full mt-4 bg-gradient-solar hover:scale-105 transition-transform">
              🧠 Access Reasoning Engine
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Governance Simulation */}
      <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
        <CardHeader>
          <CardTitle className="font-ubuntu flex items-center gap-2">
            <Users className="w-6 h-6 text-primary" />
            Governance Simulation
          </CardTitle>
          <CardDescription className="font-nunito">
            Current scenario: Mars energy rationing crisis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <span className="font-nunito font-semibold">
                Simulation: Utopian Martian City - Energy Crisis Response
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-card rounded-lg border border-border">
                <h4 className="font-ubuntu font-semibold mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Crisis Parameters
                </h4>
                <ul className="text-sm text-muted-foreground font-nunito space-y-1">
                  <li>• Solar panel efficiency dropped 40%</li>
                  <li>• Population: 50,000 colonists</li>
                  <li>• Critical systems require 60% power</li>
                  <li>• Storm duration: 3 weeks estimated</li>
                </ul>
              </div>
              
              <div className="p-4 bg-card rounded-lg border border-border">
                <h4 className="font-ubuntu font-semibold mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Ethical Considerations
                </h4>
                <ul className="text-sm text-muted-foreground font-nunito space-y-1">
                  <li>• Ubuntu: Community before individual</li>
                  <li>• Buddhist: Minimize suffering</li>
                  <li>• Indigenous: Think seven generations</li>
                  <li>• Maat: Balance and justice</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-nunito">Simulation Progress</span>
                <Progress value={43} className="w-32" />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                  View Results
                </Button>
                <Button className="bg-gradient-solar hover:scale-105 transition-transform">
                  Join Simulation
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Decision History */}
      <Card className="hover:shadow-earth transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="font-ubuntu flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            Recent Ethical Decisions
          </CardTitle>
          <CardDescription className="font-nunito">
            Audit trail of moral reasoning processes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <DecisionHistoryItem 
              title="Luna Mining Rights"
              decision="Granted with environmental conditions"
              consensus={87}
              timestamp="2 hours ago"
              status="implemented"
            />
            <DecisionHistoryItem 
              title="Interplanetary Trade Agreement"
              decision="Approved with fair trade provisions"
              consensus={92}
              timestamp="1 day ago"
              status="implemented"
            />
            <DecisionHistoryItem 
              title="AI Rights Charter"
              decision="Pending further deliberation"
              consensus={68}
              timestamp="3 days ago"
              status="pending"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

interface EthicsFrameworkProps {
  name: string;
  culture: string;
  principle: string;
  status: 'active' | 'standby';
  influence: number;
}

const EthicsFramework = ({ name, culture, principle, status, influence }: EthicsFrameworkProps) => {
  return (
    <div className={`p-4 border rounded-lg transition-all duration-300 ${
      status === 'active' 
        ? 'border-primary bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-solar' 
        : 'border-border hover:bg-muted/50'
    }`}>
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${status === 'active' ? 'bg-accent animate-pulse' : 'bg-muted'}`}></div>
          <Badge variant={status === 'active' ? "default" : "secondary"} className={status === 'active' ? "bg-gradient-solar text-primary-foreground" : ""}>
            {status}
          </Badge>
        </div>
        <span className="text-sm font-mono">{influence}%</span>
      </div>
      <h4 className="font-ubuntu font-semibold mb-1">{name}</h4>
      <p className="text-sm text-muted-foreground font-nunito mb-2">{culture}</p>
      <p className="text-xs italic text-accent font-nunito">"{principle}"</p>
      <Progress value={influence} className="h-1 mt-2" />
    </div>
  );
};

interface EthicalDecisionProps {
  title: string;
  description: string;
  priority: string;
  progress: number;
  frameworks: string[];
}

const EthicalDecision = ({ title, description, priority, progress, frameworks }: EthicalDecisionProps) => {
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
        <span className="text-sm font-mono">{progress}%</span>
      </div>
      <h4 className="font-ubuntu font-semibold mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground font-nunito mb-2">{description}</p>
      <div className="flex flex-wrap gap-1 mb-2">
        {frameworks.map((framework, index) => (
          <Badge key={index} variant="outline" className="text-xs">
            {framework}
          </Badge>
        ))}
      </div>
      <Progress value={progress} className="h-1" />
    </div>
  );
};

interface DecisionHistoryItemProps {
  title: string;
  decision: string;
  consensus: number;
  timestamp: string;
  status: 'implemented' | 'pending' | 'rejected';
}

const DecisionHistoryItem = ({ title, decision, consensus, timestamp, status }: DecisionHistoryItemProps) => {
  const statusIcons = {
    implemented: <CheckCircle className="w-4 h-4 text-accent" />,
    pending: <Clock className="w-4 h-4 text-primary" />,
    rejected: <AlertTriangle className="w-4 h-4 text-destructive" />
  };

  return (
    <div className="flex items-start gap-3 p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors duration-200">
      {statusIcons[status]}
      <div className="flex-1 space-y-1">
        <div className="flex items-center justify-between">
          <h4 className="font-ubuntu font-semibold text-sm">{title}</h4>
          <span className="text-xs text-muted-foreground">{timestamp}</span>
        </div>
        <p className="text-sm text-muted-foreground font-nunito">{decision}</p>
        <div className="flex items-center gap-2">
          <span className="text-xs">Consensus: {consensus}%</span>
          <div className="w-16 bg-muted rounded-full h-1">
            <div 
              className="bg-accent h-1 rounded-full transition-all duration-300"
              style={{ width: `${consensus}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};