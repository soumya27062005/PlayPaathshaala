import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  MessageSquare, 
  Trophy, 
  BookOpen, 
  Heart,
  Star,
  MapPin,
  Calendar,
  Share2,
  ThumbsUp,
  Award
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Community = () => {
  const communityStats = [
    { title: "Active Members", value: "2,500+", icon: Users, color: "text-primary" },
    { title: "Villages Connected", value: "150+", icon: MapPin, color: "text-secondary" },
    { title: "Success Stories", value: "500+", icon: Trophy, color: "text-accent" },
    { title: "Study Groups", value: "80+", icon: BookOpen, color: "text-joy" }
  ];

  const successStories = [
    {
      name: "Priya Sharma",
      village: "Rampur, Uttar Pradesh",
      story: "From struggling with basic math to becoming the village math champion! PlayPathshaala's games made numbers my friends.",
      achievement: "Mathematics Master",
      likes: 45,
      timeAgo: "2 days ago"
    },
    {
      name: "Teacher Rajesh Kumar",
      village: "Sitapur, Bihar",
      story: "My classroom engagement increased by 80% after introducing PlayPathshaala. Students now ask for 'extra math time'!",
      achievement: "Community Leader",
      likes: 67,
      timeAgo: "1 week ago"
    },
    {
      name: "Meera Patel",
      village: "Krishnanagar, Gujarat",
      story: "Learning Hindi through stories helped me express myself better. Now I write my own stories for younger children!",
      achievement: "Storyteller Badge",
      likes: 32,
      timeAgo: "3 days ago"
    }
  ];

  const studyGroups = [
    {
      name: "Math Mavericks",
      members: 156,
      description: "Solving math problems together and sharing tips",
      category: "Mathematics",
      activity: "Very Active"
    },
    {
      name: "Science Explorers",
      members: 89,
      description: "Discovering the wonders of science through experiments",
      category: "Science",
      activity: "Active"
    },
    {
      name: "Hindi Storytellers",
      members: 234,
      description: "Creating and sharing stories in Hindi",
      category: "Language",
      activity: "Very Active"
    },
    {
      name: "Teacher Connect",
      members: 67,
      description: "Teachers sharing best practices and resources",
      category: "Education",
      activity: "Active"
    }
  ];

  const upcomingEvents = [
    {
      title: "Monthly Math Challenge",
      date: "March 15, 2024",
      participants: "500+ students",
      description: "Compete with students across rural India"
    },
    {
      title: "Teacher Training Workshop",
      date: "March 20, 2024",
      participants: "50+ teachers",
      description: "Advanced features and classroom integration"
    },
    {
      title: "Community Showcase",
      date: "March 25, 2024",
      participants: "All community",
      description: "Share your learning journey and inspire others"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent">
              PlayPathshaala Community
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with fellow learners, teachers, and families transforming education across rural India
            </p>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {communityStats.map((stat, index) => (
              <Card key={index} className="border-2 hover:shadow-medium transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className={`mx-auto p-3 rounded-2xl bg-muted mb-3 ${stat.color} w-fit`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.title}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Success Stories */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Success Stories</h2>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4" />
                  Share Your Story
                </Button>
              </div>
              
              <div className="space-y-6">
                {successStories.map((story, index) => (
                  <Card key={index} className="border-2 hover:shadow-medium transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-lg">{story.name}</h3>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {story.village}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
                          <Award className="h-3 w-3 text-primary" />
                          <span className="text-xs font-medium text-primary">{story.achievement}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        "{story.story}"
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Button variant="ghost" size="sm" className="text-muted-foreground">
                            <ThumbsUp className="h-4 w-4" />
                            {story.likes}
                          </Button>
                          <Button variant="ghost" size="sm" className="text-muted-foreground">
                            <MessageSquare className="h-4 w-4" />
                            Reply
                          </Button>
                        </div>
                        <span className="text-xs text-muted-foreground">{story.timeAgo}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Study Groups */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-secondary" />
                    Study Groups
                  </CardTitle>
                  <CardDescription>
                    Join groups to learn together
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {studyGroups.map((group, index) => (
                    <div key={index} className="p-3 bg-muted/50 rounded-xl hover:bg-muted transition-colors cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-sm">{group.name}</h4>
                        <span className="text-xs text-primary font-medium">{group.activity}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{group.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{group.members} members</span>
                        <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">{group.category}</span>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="w-full">
                    View All Groups
                  </Button>
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-accent" />
                    Upcoming Events
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="p-3 border border-border rounded-xl">
                      <h4 className="font-semibold text-sm mb-1">{event.title}</h4>
                      <p className="text-xs text-muted-foreground mb-2">{event.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-primary">{event.date}</span>
                        <span className="text-xs text-muted-foreground">{event.participants}</span>
                      </div>
                    </div>
                  ))}
                  <Button variant="accent" size="sm" className="w-full">
                    View All Events
                  </Button>
                </CardContent>
              </Card>

              {/* Community Guidelines */}
              <Card className="border-2 bg-gradient-to-br from-heart/5 to-joy/5">
                <CardContent className="p-6 text-center">
                  <Heart className="h-8 w-8 text-joy mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Community Guidelines</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Be respectful, supportive, and celebrate each other's learning journey
                  </p>
                  <Button variant="joy" size="sm" className="w-full">
                    Read Guidelines
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Join Community CTA */}
          <div className="text-center space-y-6 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border-2 border-primary/20">
            <h3 className="text-3xl font-bold">Join Our Growing Community</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with thousands of learners and educators making a difference in rural education
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Users className="h-5 w-5" />
                Join Community
              </Button>
              <Button variant="outline" size="lg">
                <MessageSquare className="h-5 w-5" />
                Start Discussion
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Community;
