import { Button } from "@/components/ui/button";
import { Menu, Star, Trophy, Bell } from "lucide-react";
import logo from "@/assets/playpathshaala-logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="PlayPathshaala" className="h-12 w-auto" />
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium">
              Features
            </a>
            <a href="#student" className="text-foreground hover:text-primary transition-colors font-medium">
              For Students
            </a>
            <a href="#teachers" className="text-foreground hover:text-primary transition-colors font-medium">
              For Teachers
            </a>
            <a href="#download" className="text-foreground hover:text-primary transition-colors font-medium">
              Download
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="hidden sm:flex" onClick={() => navigate('/teacher-login')}>
              Teacher Login
            </Button>
            <Button variant="hero" size="sm" onClick={() => navigate('/student-demo')}>
              Get Started
            </Button>
            
            {/* Mobile Menu */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
