import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Search, 
  BookOpen, 
  Video, 
  MessageCircle, 
  Phone, 
  Mail,
  FileText,
  Users,
  Settings,
  Download,
  Star,
  ChevronRight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";

const HelpCenter = () => {
  const helpCategories = [
    {
      title: "Getting Started",
      icon: BookOpen,
      description: "Basic setup and first steps",
      articles: [
        "How to download and install PlayPathshaala",
        "Creating your first student account",
        "Setting up offline learning",
        "Understanding the interface"
      ]
    },
    {
      title: "For Teachers",
      icon: Users,
      description: "Classroom management and tools",
      articles: [
        "Creating and managing student accounts",
        "Tracking student progress",
        "Generating progress reports",
        "Setting up assignments"
      ]
    },
    {
      title: "Technical Support",
      icon: Settings,
      description: "Troubleshooting and technical issues",
      articles: [
        "App not loading or crashing",
        "Audio/video playback issues",
        "Offline mode problems",
        "Device compatibility"
      ]
    },
    {
      title: "Learning Features",
      icon: Star,
      description: "Using games and interactive content",
      articles: [
        "How gamification works",
        "Earning badges and rewards",
        "Voice learning features",
        "Multi-language support"
      ]
    }
  ];

  const faqs = [
    {
      question: "How do I use PlayPathshaala without internet?",
      answer: "PlayPathshaala supports offline learning. Download lessons when connected to WiFi, then access them anytime without internet."
    },
    {
      question: "What languages are supported?",
      answer: "We support 15+ Indian languages including Hindi, English, Tamil, Telugu, Bengali, Marathi, and more regional languages."
    },
    {
      question: "Can multiple students use one device?",
      answer: "Yes! Each student can have their own profile on a shared device, with individual progress tracking."
    },
    {
      question: "How do I track my child's progress?",
      answer: "Parents and teachers can view detailed progress reports through the teacher dashboard or parent app."
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
              Help Center
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers, guides, and support for PlayPathshaala
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-3 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search for help articles, guides, or FAQs..."
                className="pl-12 h-12 text-lg"
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 hover:shadow-medium transition-all duration-300 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <Video className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold mb-2">Video Tutorials</h3>
                <p className="text-sm text-muted-foreground">Step-by-step video guides</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-medium transition-all duration-300 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-8 w-8 text-secondary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold mb-2">Live Chat</h3>
                <p className="text-sm text-muted-foreground">Get instant help from our team</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-medium transition-all duration-300 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold mb-2">Call Support</h3>
                <p className="text-sm text-muted-foreground">Speak with our support team</p>
              </CardContent>
            </Card>
          </div>

          {/* Help Categories */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center">Browse by Category</h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {helpCategories.map((category, index) => (
                <Card key={index} className="border-2 hover:shadow-strong hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-primary/10">
                        <category.icon className="h-6 w-6 text-primary" />
                      </div>
                      {category.title}
                    </CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    {category.articles.map((article, articleIndex) => (
                      <div key={articleIndex} className="flex items-center gap-3 p-2 hover:bg-muted/50 rounded-lg cursor-pointer group">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm group-hover:text-primary transition-colors">{article}</span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:translate-x-1 transition-transform" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
            
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border-2 border-primary/20">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold">Still Need Help?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our dedicated support team is here to help you make the most of PlayPathshaala
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Card className="border-2">
                  <CardContent className="p-6 text-center">
                    <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h4 className="font-bold mb-2">Email Support</h4>
                    <p className="text-sm text-muted-foreground mb-4">Get detailed help via email</p>
                    <Button variant="outline" className="w-full">
                      Send Email
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-2">
                  <CardContent className="p-6 text-center">
                    <Phone className="h-8 w-8 text-secondary mx-auto mb-3" />
                    <h4 className="font-bold mb-2">Phone Support</h4>
                    <p className="text-sm text-muted-foreground mb-4">Talk to our experts directly</p>
                    <Button variant="secondary" className="w-full">
                      Call Now
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HelpCenter;
