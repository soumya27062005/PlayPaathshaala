import { Button } from "@/components/ui/button";
import { Heart, Mail, Phone, MapPin, Star } from "lucide-react";
import logo from "@/assets/playpathshaala-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <img src={logo} alt="PlayPathshaala" className="h-12 w-auto" />
            <p className="text-muted-foreground leading-relaxed">
              Transforming rural education through gamified learning, 
              making education accessible, engaging, and culturally relevant 
              for every child in India.
            </p>
            <div className="flex items-center gap-2 text-primary">
              <Heart className="h-4 w-4" />
              <span className="text-sm font-medium">Made with love for rural India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-foreground">Platform</h3>
            <div className="space-y-3">
              <a href="#features" className="block text-muted-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#student" className="block text-muted-foreground hover:text-primary transition-colors">
                Student App
              </a>
              <a href="#teachers" className="block text-muted-foreground hover:text-primary transition-colors">
                Teacher Portal
              </a>
              <a href="#download" className="block text-muted-foreground hover:text-primary transition-colors">
                Download
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-foreground">Support</h3>
            <div className="space-y-3">
              <a href="/help-center" className="block text-muted-foreground hover:text-primary transition-colors">
                Help Center
              </a>
              <a href="/teacher-training" className="block text-muted-foreground hover:text-primary transition-colors">
                Teacher Training
              </a>
              <a href="/community" className="block text-muted-foreground hover:text-primary transition-colors">
                Community
              </a>
              <a href="/feedback" className="block text-muted-foreground hover:text-primary transition-colors">
                Feedback
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">playpathshaala@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+91 98791 52484</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">Rural Education Hub, India</span>
              </div>
            </div>
            
            <Button variant="outline" className="w-full">
              <Mail className="h-4 w-4" />
              Get in Touch
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © 2025 PlayPathshaala. Empowering rural education across India.
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Terms of Service
              </a>
              <div className="flex items-center gap-1 text-joy">
                <Star className="h-4 w-4" />
                <span className="text-sm font-medium">Rural Education Initiative</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
