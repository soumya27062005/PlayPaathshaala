import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Play, 
  Star, 
  Trophy, 
  BookOpen, 
  Gamepad2,
  Volume2,
  ArrowRight,
  CheckCircle,
  Target,
  Gift
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const StudentDemo = () => {
  const navigate = useNavigate();

  const demoLessons = [
    {
      subject: "Mathematics",
      title: "Number Games",
      description: "Learn counting with fun village market scenarios",
      progress: 0,
      icon: Target,
      color: "bg-primary",
      difficulty: "Beginner"
    },
    {
      subject: "Science",
      title: "Nature Explorer",
      description: "Discover plants and animals in your village",
      progress: 0,
      icon: BookOpen,
      color: "bg-secondary",
      difficulty: "Beginner"
    },
    {
      subject: "Hindi",
      title: "Story Time",
      description: "Interactive stories from Indian folklore",
      progress: 0,
      icon: Volume2,
      color: "bg-accent",
      difficulty: "Beginner"
    }
  ];

  const achievements = [
    { name: "First Step", description: "Complete your first lesson", icon: Star },
    { name: "Quick Learner", description: "Score 80% in any quiz", icon: Trophy },
    { name: "Explorer", description: "Try all three subjects", icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Welcome to Your Learning Adventure!
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Try our demo lessons and discover how fun learning can be with 
              <span className="text-primary font-bold"> PlayPathshaala</span>
            </p>
            
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <Star className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Interactive Games</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
                <Volume2 className="h-4 w-4 text-secondary" />
                <span className="text-sm font-semibold text-secondary">Audio Support</span>
              </div>
              <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                <Gift className="h-4 w-4 text-accent" />
                <span className="text-sm font-semibold text-accent">Earn Rewards</span>
              </div>
            </div>
          </div>

          {/* Demo Lessons */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center">Try Demo Lessons</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {demoLessons.map((lesson, index) => (
                <Card 
                  key={index} 
                  className="border-2 hover:shadow-strong hover:scale-105 transition-all duration-300 cursor-pointer group"
                >
                  <CardHeader className="text-center pb-4">
                    <div className={`mx-auto p-4 rounded-2xl mb-4 ${lesson.color} text-white group-hover:scale-110 transition-transform`}>
                      <lesson.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl">{lesson.title}</CardTitle>
                    <CardDescription className="text-base">{lesson.description}</CardDescription>
                    <div className="inline-block px-3 py-1 bg-muted rounded-full text-xs font-medium mt-2">
                      {lesson.difficulty}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span className="text-muted-foreground">{lesson.progress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${lesson.color} transition-all duration-500`}
                          style={{ width: `${lesson.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <Button variant="hero" size="lg" className="w-full group">
                      <Play className="h-4 w-4 group-hover:scale-110 transition-transform" />
                      Start Demo
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievement Preview */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border-2 border-primary/20">
            <h3 className="text-2xl font-bold text-center mb-6">Unlock Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center space-y-3">
                  <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                    <achievement.icon className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold">{achievement.name}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Demo Features */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gamepad2 className="h-5 w-5 text-primary" />
                  Game-Based Learning
                </CardTitle>
                <CardDescription>
                  Experience how we make learning fun through interactive games
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/50 rounded-xl p-4 text-center">
                  <p className="text-lg font-semibold mb-2">Math Village Market</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Help Raja buy fruits and vegetables while learning addition and subtraction
                  </p>
                  <Button variant="playful" size="sm">
                    <Play className="h-4 w-4" />
                    Try Mini Game
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Volume2 className="h-5 w-5 text-secondary" />
                  Audio Learning
                </CardTitle>
                <CardDescription>
                  Perfect for students who learn better by listening
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/50 rounded-xl p-4 text-center">
                  <p className="text-lg font-semibold mb-2">Story Narration</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Listen to folk tales while learning new words and concepts
                  </p>
                  <Button variant="accent" size="sm">
                    <Volume2 className="h-4 w-4" />
                    Listen to Story
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-6 p-8 bg-card border-2 border-border rounded-2xl">
            <h3 className="text-3xl font-bold">Ready to Start Your Journey?</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of students already learning with PlayPathshaala
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" onClick={() => navigate('/download')}>
                <Play className="h-5 w-5" />
                Download Full App
              </Button>
              <Button variant="outline" size="xl" onClick={() => navigate('/dashboard')}>
                Teacher Dashboard
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StudentDemo;
