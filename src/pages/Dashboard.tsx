import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  BookOpen, 
  Trophy, 
  BarChart3, 
  Download, 
  Settings,
  Bell,
  Star,
  TrendingUp,
  Calendar,
  MapPin,
  Heart
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const handleDownloadReport = () => {
    // Create a sample report data
    const reportData = {
      schoolName: "Rural Learning Center",
      generatedDate: new Date().toLocaleDateString(),
      totalStudents: 156,
      activeStudents: 143,
      completedLessons: 2847,
      averageScore: 87.5,
      topPerformers: [
        { name: "Priya Sharma", score: 98, village: "Rampur" },
        { name: "Arjun Kumar", score: 96, village: "Sitapur" },
        { name: "Meera Patel", score: 94, village: "Krishnanagar" }
      ],
      subjectProgress: [
        { subject: "Mathematics", completion: 89 },
        { subject: "Science", completion: 76 },
        { subject: "Hindi", completion: 92 },
        { subject: "English", completion: 68 }
      ]
    };

    // Convert to CSV format
    const csvContent = `PlayPathshaala Learning Report
Generated: ${reportData.generatedDate}
School: ${reportData.schoolName}

OVERVIEW
Total Students,${reportData.totalStudents}
Active Students,${reportData.activeStudents}
Completed Lessons,${reportData.completedLessons}
Average Score,${reportData.averageScore}%

TOP PERFORMERS
Name,Score,Village
${reportData.topPerformers.map(p => `${p.name},${p.score}%,${p.village}`).join('\n')}

SUBJECT PROGRESS
Subject,Completion %
${reportData.subjectProgress.map(s => `${s.subject},${s.completion}%`).join('\n')}`;

    // Download the file
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `PlayPathshaala_Report_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const stats = [
    { title: "Total Students", value: "156", icon: Users, color: "text-primary" },
    { title: "Active Lessons", value: "42", icon: BookOpen, color: "text-secondary" },
    { title: "Achievements", value: "89", icon: Trophy, color: "text-accent" },
    { title: "Villages Reached", value: "12", icon: MapPin, color: "text-joy" }
  ];

  const recentActivity = [
    { student: "Priya Sharma", action: "Completed Mathematics Level 5", time: "2 hours ago" },
    { student: "Arjun Kumar", action: "Earned Science Master Badge", time: "4 hours ago" },
    { student: "Meera Patel", action: "Started English Adventure Quest", time: "6 hours ago" },
    { student: "Rahul Singh", action: "Achieved 100% in Hindi Quiz", time: "1 day ago" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Teacher Dashboard
              </h1>
              <p className="text-muted-foreground mt-2">
                Monitor student progress and manage your rural classroom
              </p>
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4" />
                Notifications
              </Button>
              <Button 
                variant="hero" 
                size="sm"
                onClick={handleDownloadReport}
                className="group"
              >
                <Download className="h-4 w-4 group-hover:scale-110 transition-transform" />
                Download Report
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="border-2 hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm font-medium">{stat.title}</p>
                      <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                    </div>
                    <div className={`p-3 rounded-2xl bg-muted ${stat.color}`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Student Progress */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    Learning Progress Overview
                  </CardTitle>
                  <CardDescription>
                    Subject-wise completion rates across all students
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { subject: "Mathematics", progress: 89, color: "bg-primary" },
                    { subject: "Science", progress: 76, color: "bg-secondary" },
                    { subject: "Hindi", progress: 92, color: "bg-accent" },
                    { subject: "English", progress: 68, color: "bg-joy" }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{item.subject}</span>
                        <span className="text-muted-foreground">{item.progress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${item.color} transition-all duration-500`}
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-accent" />
                    Top Performers This Week
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "Priya Sharma", score: 98, badge: "Mathematics Master", village: "Rampur" },
                      { name: "Arjun Kumar", score: 96, badge: "Science Explorer", village: "Sitapur" },
                      { name: "Meera Patel", score: 94, badge: "Hindi Champion", village: "Krishnanagar" }
                    ].map((student, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                            index === 0 ? 'bg-primary' : index === 1 ? 'bg-secondary' : 'bg-accent'
                          }`}>
                            {index + 1}
                          </div>
                          <div>
                            <p className="font-semibold">{student.name}</p>
                            <p className="text-sm text-muted-foreground">{student.village} • {student.badge}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-joy" />
                          <span className="font-bold text-foreground">{student.score}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-secondary" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="h-4 w-4" />
                    Create New Lesson
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="h-4 w-4" />
                    Manage Students
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="h-4 w-4" />
                    Class Settings
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <TrendingUp className="h-4 w-4" />
                    View Analytics
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="space-y-1">
                      <p className="text-sm font-medium">{activity.student}</p>
                      <p className="text-xs text-muted-foreground">{activity.action}</p>
                      <p className="text-xs text-accent">{activity.time}</p>
                      {index < recentActivity.length - 1 && <hr className="border-border" />}
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-2 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-6 text-center">
                  <Heart className="h-8 w-8 text-joy mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Impact Summary</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    This month you've helped 156 students learn and grow across 12 villages!
                  </p>
                  <Button variant="joy" size="sm" className="w-full">
                    View Full Impact Report
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

export default Dashboard;
