import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Gamepad2, 
  Users, 
  BarChart3, 
  Globe, 
  Wifi, 
  Heart,
  BookOpen,
  Star,
  Trophy,
  Zap
} from "lucide-react";
import studentInterface from "@/assets/student-interface.png";
import teacherDashboard from "@/assets/teacher-dashboard.png";

const Features = () => {
  const studentFeatures = [
    {
      icon: Gamepad2,
      title: "Gamified Learning",
      description: "Turn every lesson into an exciting quest with points, badges, and rewards",
      color: "text-primary"
    },
    {
      icon: Star,
      title: "Interactive Stories",
      description: "Learn through culturally rich stories and adventures from rural India",
      color: "text-secondary"
    },
    {
      icon: Trophy,
      title: "Achievement System",
      description: "Unlock new levels, collect badges, and compete with friends",
      color: "text-accent"
    },
    {
      icon: Wifi,
      title: "Offline Learning",
      description: "Download lessons and continue learning without internet connection",
      color: "text-joy"
    },
    {
      icon: Globe,
      title: "Multi-Language",
      description: "Learn in your local language with support for 15+ Indian languages",
      color: "text-primary"
    },
    {
      icon: Heart,
      title: "Cultural Content",
      description: "Stories and examples rooted in Indian traditions and rural life",
      color: "text-secondary"
    }
  ];

  const teacherFeatures = [
    {
      icon: BarChart3,
      title: "Progress Analytics",
      description: "Track student engagement and learning outcomes with detailed reports",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Classroom Management",
      description: "Organize students, assign tasks, and monitor progress effortlessly",
      color: "text-primary"
    },
    {
      icon: BookOpen,
      title: "Curriculum Builder",
      description: "Create custom lessons and quizzes tailored to your students' needs",
      color: "text-secondary"
    },
    {
      icon: Zap,
      title: "Instant Feedback",
      description: "Get real-time insights into student performance and engagement",
      color: "text-joy"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Features That Make Learning Fun
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how PlayPathshaala transforms traditional education into an engaging, 
            interactive experience for both students and teachers
          </p>
        </div>

        {/* Student Features */}
        <div id="student" className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  For Students: Learn Through Play
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Make learning an adventure with our gamified approach that keeps students engaged and motivated
                </p>
              </div>

              <div className="grid gap-6">
                {studentFeatures.map((feature, index) => (
                  <Card key={index} className="border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-soft hover:scale-105">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-muted ${feature.color}`}>
                          <feature.icon className="h-5 w-5" />
                        </div>
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Button variant="playful" size="lg" className="w-full sm:w-auto">
                <Gamepad2 className="h-5 w-5" />
                Try Student Demo
              </Button>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-strong">
                <img 
                  src={studentInterface} 
                  alt="Student Learning Interface"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-3 rounded-2xl shadow-medium float">
                <Star className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Teacher Features */}
        <div id="teachers" className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="rounded-3xl overflow-hidden shadow-strong">
                <img 
                  src={teacherDashboard} 
                  alt="Teacher Dashboard"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-4 -left-4 bg-accent text-accent-foreground p-3 rounded-2xl shadow-medium bounce-in">
                <BarChart3 className="h-6 w-6" />
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  For Teachers: Empower Education
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Advanced tools to track progress, manage classrooms, and create engaging content for your students
                </p>
              </div>

              <div className="grid gap-6">
                {teacherFeatures.map((feature, index) => (
                  <Card key={index} className="border-2 border-border hover:border-accent/50 transition-all duration-300 hover:shadow-soft hover:scale-105">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-muted ${feature.color}`}>
                          <feature.icon className="h-5 w-5" />
                        </div>
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Button variant="accent" size="lg" className="w-full sm:w-auto">
                <Users className="h-5 w-5" />
                Access Teacher Portal
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
