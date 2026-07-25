import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Smartphone, Monitor, Settings, CheckCircle } from "lucide-react";

const DownloadSection = () => {
  const downloadOptions = [
    {
      platform: "Mobile App",
      icon: Smartphone,
      description: "Download for Android devices",
      features: ["Offline learning", "Touch-friendly interface", "Voice support"],
      primary: true
    },
    {
      platform: "Web App",
      icon: Monitor,
      description: "Access through any browser",
      features: ["Cross-platform", "Real-time sync", "No installation needed"],
      primary: false
    },
    {
      platform: "Teacher Portal",
      icon: Settings,
      description: "Complete admin dashboard",
      features: ["Student management", "Analytics", "Content creation"],
      primary: false
    }
  ];

  return (
    <section id="download" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-4">
            Start Your Learning Journey Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your preferred platform and begin transforming education in your community
          </p>
        </div>

        {/* Download Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {downloadOptions.map((option, index) => (
            <Card 
              key={index} 
              className={`border-2 transition-all duration-300 hover:shadow-strong hover:scale-105 ${
                option.primary 
                  ? 'border-primary bg-gradient-to-b from-primary/5 to-primary/10 hover:border-primary' 
                  : 'border-border hover:border-accent/50'
              }`}
            >
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto p-4 rounded-2xl mb-4 ${
                  option.primary 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  <option.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">{option.platform}</CardTitle>
                <CardDescription className="text-base">{option.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={option.primary ? "hero" : "outline"} 
                  size="lg" 
                  className="w-full group"
                >
                  <Download className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  {option.primary ? "Download App" : "Access Platform"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* System Requirements */}
        <div className="bg-card border-2 border-border rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-6">System Requirements</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4 text-primary">Mobile App</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Android 6.0 or higher</li>
                <li>• 100 MB storage space</li>
                <li>• Optional: Internet for updates</li>
                <li>• Microphone for voice features</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4 text-accent">Web Platform</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Modern web browser</li>
                <li>• Stable internet connection</li>
                <li>• JavaScript enabled</li>
                <li>• 1GB RAM minimum</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Configure Section */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border-2 border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Need Help Getting Started?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our setup team can help configure PlayPathshaala for your school or village. 
            Get personalized training and ongoing support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" className="group">
              <Settings className="h-4 w-4 group-hover:scale-110 transition-transform" />
              Schedule Configuration
            </Button>
            <Button variant="outline" size="lg">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
