import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  MessageSquare, 
  Star, 
  Heart, 
  Send,
  CheckCircle,
  Lightbulb,
  Bug,
  ThumbsUp,
  Users,
  TrendingUp
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [feedbackType, setFeedbackType] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const feedbackTypes = [
    { id: "suggestion", label: "Feature Suggestion", icon: Lightbulb, color: "text-primary" },
    { id: "bug", label: "Bug Report", icon: Bug, color: "text-destructive" },
    { id: "praise", label: "Appreciation", icon: ThumbsUp, color: "text-joy" },
    { id: "general", label: "General Feedback", icon: MessageSquare, color: "text-secondary" }
  ];

  const recentFeedback = [
    {
      user: "Priya S.",
      type: "suggestion",
      message: "Could we have more story-based math problems? My students love the current ones!",
      status: "Under Review",
      likes: 12
    },
    {
      user: "Teacher Raj",
      type: "praise",
      message: "The offline feature has been a game-changer for our remote village school. Thank you!",
      status: "Acknowledged",
      likes: 24
    },
    {
      user: "Meera P.",
      type: "bug",
      message: "Audio sometimes doesn't play on older Android devices during Hindi lessons.",
      status: "Fixed",
      likes: 8
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the feedback to your backend
  };

  const handleRating = (stars: number) => {
    setRating(stars);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 pt-24 pb-12 flex items-center justify-center">
          <Card className="border-2 max-w-2xl w-full text-center shadow-strong">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                
                <div>
                  <h1 className="text-3xl font-bold mb-3">Thank You!</h1>
                  <p className="text-xl text-muted-foreground">
                    Your feedback has been submitted successfully. We really appreciate you taking the time to help us improve PlayPathshaala.
                  </p>
                </div>
                
                <div className="bg-primary/5 p-4 rounded-xl">
                  <p className="text-sm text-muted-foreground">
                    We review all feedback within 2-3 business days. If you've reported a bug or requested support, we'll get back to you soon!
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="default" onClick={() => setSubmitted(false)}>
                    Submit Another Feedback
                  </Button>
                  <Button variant="outline" onClick={() => window.location.href = '/'}>
                    Back to Home
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Share Your Feedback
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Help us make PlayPathshaala even better for rural education. Your voice matters in shaping the future of learning.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Feedback Form */}
            <div className="lg:col-span-2">
              <Card className="border-2 shadow-medium">
                <CardHeader>
                  <CardTitle className="text-2xl">Tell Us What You Think</CardTitle>
                  <CardDescription>
                    Your feedback helps us improve the learning experience for thousands of students
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Overall Rating */}
                    <div className="space-y-3">
                      <Label className="text-lg">How would you rate your overall experience?</Label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => handleRating(star)}
                            className="focus:outline-none"
                          >
                            <Star 
                              className={`h-8 w-8 transition-colors ${
                                star <= rating 
                                  ? 'text-joy fill-joy' 
                                  : 'text-muted-foreground hover:text-joy'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Feedback Type */}
                    <div className="space-y-3">
                      <Label className="text-lg">What type of feedback do you have?</Label>
                      <div className="grid grid-cols-2 gap-3">
                        {feedbackTypes.map((type) => (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => setFeedbackType(type.id)}
                            className={`p-4 rounded-xl border-2 transition-all text-left ${
                              feedbackType === type.id
                                ? 'border-primary bg-primary/5'
                                : 'border-border hover:border-primary/50'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <type.icon className={`h-5 w-5 ${type.color}`} />
                              <span className="font-medium">{type.label}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name (Optional)</Label>
                        <Input id="name" placeholder="Your name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="role">Your Role</Label>
                        <select 
                          id="role" 
                          className="w-full p-3 border border-border rounded-xl bg-background"
                        >
                          <option value="">Select your role</option>
                          <option value="student">Student</option>
                          <option value="teacher">Teacher</option>
                          <option value="parent">Parent</option>
                          <option value="admin">School Administrator</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Feedback Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Your Feedback</Label>
                      <Textarea 
                        id="message"
                        placeholder="Tell us about your experience, suggestions, or any issues you've encountered..."
                        className="min-h-32"
                        required
                      />
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-2">
                      <Label htmlFor="email">Email (Optional)</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your@email.com" 
                      />
                      <p className="text-xs text-muted-foreground">
                        Provide your email if you'd like us to follow up on your feedback
                      </p>
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      <Send className="h-4 w-4" />
                      Submit Feedback
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Stats */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Community Impact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">2,847</div>
                    <div className="text-sm text-muted-foreground">Feedback submissions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">1,023</div>
                    <div className="text-sm text-muted-foreground">Improvements made</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">95%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction rate</div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Feedback */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-secondary" />
                    Recent Community Feedback
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentFeedback.map((feedback, index) => (
                    <div key={index} className="p-3 bg-muted/50 rounded-xl">
                      <div className="flex items-start justify-between mb-2">
                        <span className="font-semibold text-sm">{feedback.user}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          feedback.status === 'Fixed' ? 'bg-primary/20 text-primary' :
                          feedback.status === 'Under Review' ? 'bg-secondary/20 text-secondary' :
                          'bg-accent/20 text-accent'
                        }`}>
                          {feedback.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {feedback.message}
                      </p>
                      <div className="flex items-center gap-2">
                        <ThumbsUp className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{feedback.likes}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="border-2 bg-gradient-to-br from-heart/5 to-primary/5">
                <CardContent className="p-6 text-center">
                  <Heart className="h-8 w-8 text-joy mx-auto mb-3" />
                  <h3 className="font-bold mb-2">We Love Hearing From You!</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Every piece of feedback helps us create better learning experiences for rural students
                  </p>
                  <Button variant="joy" size="sm" className="w-full">
                    <MessageSquare className="h-4 w-4" />
                    Live Chat Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Feedback;
