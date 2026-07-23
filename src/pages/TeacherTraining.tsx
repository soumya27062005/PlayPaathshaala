import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  GraduationCap, 
  BookOpen, 
  Video, 
  Users, 
  Clock,
  Award,
  CheckCircle,
  PlayCircle,
  Download,
  Calendar,
  Star,
  Target
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TeacherTraining = () => {
  const trainingModules = [
    {
      title: "Getting Started with PlayPathshaala",
      duration: "45 minutes",
      level: "Beginner",
      description: "Learn the basics of navigating and setting up your classroom",
      topics: [
        "Platform overview and navigation",
        "Creating student accounts",
        "Setting up your first class",
        "Understanding the dashboard"
      ],
      completed: false,
      color: "bg-primary"
    },
    {
      title: "Gamification in Rural Education",
      duration: "60 minutes",
      level: "Intermediate",
      description: "Master the art of engaging students through game-based learning",
      topics: [
        "Psychology of gamified learning",
        "Setting up rewards and badges",
        "Creating healthy competition",
        "Motivating reluctant learners"
      ],
      completed: false,
      color: "bg-secondary"
    },
    {
      title: "Progress Tracking & Assessment",
      duration: "50 minutes",
      level: "Intermediate",
      description: "Monitor student progress and generate meaningful reports",
      topics: [
        "Understanding analytics dashboard",
        "Generating progress reports",
        "Identifying learning gaps",
        "Parent communication strategies"
      ],
      completed: false,
      color: "bg-accent"
    },
    {
      title: "Offline Learning Management",
      duration: "40 minutes",
      level: "Advanced",
      description: "Maximize learning opportunities in low-connectivity environments",
      topics: [
        "Setting up offline content",
        "Managing device sharing",
        "Sync strategies",
        "Troubleshooting connectivity issues"
      ],
      completed: false,
      color: "bg-joy"
    }
  ];

  const upcomingWorkshops = [
    {
      title: "Regional Teacher Meetup - North India",
      date: "March 20, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Virtual & Selected Centers",
      attendees: 150,
      type: "Workshop"
    },
    {
      title: "Multilingual Content Creation",
      date: "March 25, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Online",
      attendees: 75,
      type: "Masterclass"
    },
    {
      title: "Community Building for Educators",
      date: "March 30, 2024",
      time: "11:00 AM - 1:00 PM",
      location: "Online",
      attendees: 200,
      type: "Seminar"
    }
  ];

  const certificationLevels = [
    {
      title: "PlayPathshaala Certified Educator",
      requirements: "Complete 4 basic modules",
      benefits: "Official certificate, priority support",
      icon: Award,
      color: "text-primary"
    },
    {
      title: "Rural Education Specialist",
      requirements: "Complete all modules + 1 project",
      benefits: "Advanced certificate, mentorship opportunities",
      icon: Star,
      color: "text-secondary"
    },
    {
      title: "Community Training Leader",
      requirements: "Train 5+ other teachers",
      benefits: "Leadership badge, training stipend",
      icon: Target,
      color: "text-accent"
    }
  ];

  const resources = [
    {
      title: "Teacher Handbook",
      type: "PDF Guide",
      size: "2.5 MB",
      description: "Complete guide to using PlayPathshaala effectively"
    },
    {
      title: "Lesson Plan Templates",
      type: "Document Pack",
      size: "1.8 MB",
      description: "Ready-to-use lesson plans for rural classrooms"
    },
    {
      title: "Parent Engagement Kit",
      type: "Resource Pack",
      size: "3.2 MB",
      description: "Materials to involve parents in their child's learning"
    },
    {
      title: "Troubleshooting Guide",
      type: "Quick Reference",
      size: "0.8 MB",
      description: "Solutions to common technical issues"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-secondary bg-clip-text text-transparent">
              Teacher Training Hub
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empower yourself with the skills and knowledge to transform rural education through PlayPathshaala
            </p>
            
            <div className="flex items-center justify-center gap-6 mt-6">
              <div className="flex items-center gap-2 text-primary">
                <GraduationCap className="h-5 w-5" />
                <span className="font-semibold">Self-Paced Learning</span>
              </div>
              <div className="flex items-center gap-2 text-secondary">
                <Video className="h-5 w-5" />
                <span className="font-semibold">Interactive Videos</span>
              </div>
              <div className="flex items-center gap-2 text-accent">
                <Award className="h-5 w-5" />
                <span className="font-semibold">Certification</span>
              </div>
            </div>
          </div>

          {/* Training Modules */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center">Training Modules</h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {trainingModules.map((module, index) => (
                <Card key={index} className="border-2 hover:shadow-strong hover:scale-105 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{module.title}</CardTitle>
                        <CardDescription className="text-base">{module.description}</CardDescription>
                      </div>
                      <div className={`p-3 rounded-2xl ${module.color} text-white ml-4`}>
                        <BookOpen className="h-6 w-6" />
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {module.duration}
                      </div>
                      <div className="px-2 py-1 bg-muted rounded-full">
                        {module.level}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Topics Covered:</h4>
                      <ul className="space-y-1">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-3 w-3 text-primary" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button 
                      variant={module.completed ? "outline" : "hero"} 
                      size="lg" 
                      className="w-full group"
                    >
                      {module.completed ? (
                        <>
                          <CheckCircle className="h-4 w-4" />
                          Completed
                        </>
                      ) : (
                        <>
                          <PlayCircle className="h-4 w-4 group-hover:scale-110 transition-transform" />
                          Start Module
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Upcoming Workshops */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold">Upcoming Workshops</h2>
              
              <div className="space-y-4">
                {upcomingWorkshops.map((workshop, index) => (
                  <Card key={index} className="border-2 hover:shadow-medium transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-1">{workshop.title}</h3>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              {workshop.date} • {workshop.time}
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4" />
                              {workshop.attendees} registered • {workshop.location}
                            </div>
                          </div>
                        </div>
                        <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                          {workshop.type}
                        </div>
                      </div>
                      
                      <Button variant="default" size="sm">
                        Register Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Certification Levels */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Certification Levels
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {certificationLevels.map((cert, index) => (
                    <div key={index} className="p-3 border border-border rounded-xl">
                      <div className="flex items-center gap-3 mb-2">
                        <cert.icon className={`h-5 w-5 ${cert.color}`} />
                        <h4 className="font-semibold text-sm">{cert.title}</h4>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{cert.requirements}</p>
                      <p className="text-xs text-primary">{cert.benefits}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Resources */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Download className="h-5 w-5 text-secondary" />
                    Resources
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {resources.map((resource, index) => (
                    <div key={index} className="p-3 bg-muted/50 rounded-xl hover:bg-muted transition-colors cursor-pointer">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-semibold text-sm">{resource.title}</h4>
                        <Download className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">{resource.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-accent">{resource.type}</span>
                        <span className="text-xs text-muted-foreground">{resource.size}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Support */}
              <Card className="border-2 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Need Help?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get personalized support from our training team
                  </p>
                  <Button variant="default" size="sm" className="w-full">
                    Get Training Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-6 p-8 bg-gradient-to-r from-secondary/5 to-accent/5 rounded-2xl border-2 border-secondary/20">
            <h3 className="text-3xl font-bold">Ready to Transform Your Classroom?</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of teachers already making a difference in rural education
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                <GraduationCap className="h-5 w-5" />
                Start Training Now
              </Button>
              <Button variant="outline" size="xl">
                <Calendar className="h-5 w-5" />
                Schedule 1-on-1 Support
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TeacherTraining;
