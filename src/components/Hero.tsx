import { Button } from "@/components/ui/button";
import { Play, Download, Star, Sparkles, Trophy } from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-primary/5 relative overflow-hidden pt-20">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-joy animate-bounce">
        <Star className="h-8 w-8 star-sparkle" />
      </div>
      <div className="absolute top-40 right-20 text-secondary animate-pulse">
        <Trophy className="h-6 w-6" />
      </div>
      <div className="absolute bottom-40 left-20 text-accent float">
        <Sparkles className="h-7 w-7" />
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent leading-tight">
                Welcome to
                <br />
                <span className="font-black">PlayPathshaala</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium leading-relaxed max-w-2xl">
                Transforming rural education through 
                <span className="text-primary font-bold"> gamified learning</span>, 
                interactive adventures, and 
                <span className="text-secondary font-bold"> cultural storytelling</span>
              </p>
            </div>

            {/* Key Features */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <Star className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Gamified Learning</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
                <Trophy className="h-4 w-4 text-secondary" />
                <span className="text-sm font-semibold text-secondary">Offline Support</span>
              </div>
              <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                <Sparkles className="h-4 w-4 text-accent" />
                <span className="text-sm font-semibold text-accent">Multi-Language</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group" onClick={() => navigate('/student-demo')}>
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Start Learning Journey
              </Button>
              <Button variant="outline" size="xl" className="group" onClick={() => navigate('/dashboard')}>
                <Download className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Download App
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">500+</div>
                <div className="text-sm text-muted-foreground">Villages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">15+</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-strong glow-pulse">
              <img 
                src={heroImage} 
                alt="Children learning with PlayPathshaala" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating UI Elements */}
            <div className="absolute -top-4 -right-4 bg-joy text-joy-foreground p-3 rounded-2xl shadow-medium float">
              <Star className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground p-3 rounded-2xl shadow-medium bounce-in">
              <Trophy className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
