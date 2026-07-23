import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  User, 
  Lock, 
  School, 
  BookOpen, 
  Users, 
  BarChart3,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/playpathshaala-logo.png";

const TeacherLogin = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes, redirect to dashboard
    navigate('/dashboard');
  };

  const features = [
    {
      icon: Users,
      title: "Student Management",
      description: "Track progress of all your students across multiple villages"
    },
    {
      icon: BookOpen,
      title: "Lesson Planning",
      description: "Create and customize lessons for your rural classroom"
    },
    {
      icon: BarChart3,
      title: "Progress Analytics",
      description: "View detailed reports on student engagement and learning"
    },
    {
      icon: School,
      title: "Multi-Class Support",
      description: "Manage multiple classes and grade levels efficiently"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Login Form */}
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <img src={logo} alt="PlayPathshaala" className="h-16 w-auto mx-auto" />
              <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Teacher Portal
              </h1>
              <p className="text-muted-foreground">
                Access your classroom dashboard and empower rural education
              </p>
            </div>

            <Card className="border-2 shadow-strong">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl">Welcome Back</CardTitle>
                <CardDescription>Sign in to your teacher account</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email or Teacher ID</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="email" 
                        type="text" 
                        placeholder="teacher@school.com"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="password" 
                        type="password" 
                        placeholder="Enter your password"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-muted-foreground">Remember me</span>
                    </label>
                    <a href="#forgot" className="text-primary hover:underline">
                      Forgot password?
                    </a>
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <School className="h-4 w-4" />
                    Access Dashboard
                  </Button>
                </form>

                <div className="text-center space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">New Teacher?</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="lg" className="w-full">
                    Request Access
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Support Information */}
            <Card className="border border-border">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3 text-center">Need Help?</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-3 w-3 text-primary" />
                    <span>playpathshaala@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-3 w-3 text-primary" />
                    <span>+91 98791 52484</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-3 w-3 text-primary" />
                    <span>24/7 Rural Education Support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Features */}
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-foreground">
                Empower Your Classroom
              </h2>
              <p className="text-muted-foreground">
                Everything you need to transform rural education
              </p>
            </div>

            <div className="grid gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="border-2 hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-xl bg-primary/10">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Demo Access */}
            <Card className="border-2 border-accent/50 bg-gradient-to-r from-accent/5 to-secondary/5">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-lg mb-2">Try Demo Access</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Explore the platform with sample student data and features
                </p>
                <Button 
                  variant="accent" 
                  size="sm" 
                  onClick={() => navigate('/student-demo')}
                  className="w-full"
                >
                  <BookOpen className="h-4 w-4" />
                  View Student Demo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherLogin;
