import { TrendingUp, Calendar, Users, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Sidebar = () => {
  const trendingTopics = [
    { title: "AI 도구", posts: 24 },
    { title: "디자인 시스템", posts: 18 },
    { title: "개발자 도구", posts: 15 },
    { title: "SaaS 스타트업", posts: 12 },
    { title: "노코드 플랫폼", posts: 9 }
  ];

  const upcomingLaunches = [
    { name: "DesignAI Pro", date: "내일", category: "디자인" },
    { name: "CodeHelper", date: "2일 후", category: "개발" },
    { name: "TaskFlow", date: "3일 후", category: "생산성" }
  ];

  return (
    <div className="w-80 space-y-6">
      {/* Newsletter Subscription */}
      <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Mail className="w-5 h-5 text-primary" />
            일일 뉴스레터
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            매일 오전 최고의 신제품들을 받아보세요
          </p>
          <Button className="w-full bg-primary hover:bg-primary/90">
            구독하기
          </Button>
        </CardContent>
      </Card>

      {/* Trending Topics */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            인기 토픽
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {trendingTopics.map((topic, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-accent cursor-pointer transition-colors"
            >
              <span className="text-sm font-medium">{topic.title}</span>
              <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                {topic.posts}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Upcoming Launches */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            예정된 런칭
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {upcomingLaunches.map((launch, index) => (
            <div 
              key={index}
              className="flex items-start justify-between p-3 rounded-lg border border-border hover:border-primary/30 transition-colors cursor-pointer"
            >
              <div>
                <h4 className="text-sm font-medium">{launch.name}</h4>
                <p className="text-xs text-muted-foreground">{launch.category}</p>
              </div>
              <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                {launch.date}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Community Stats */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            커뮤니티
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">총 멤버</span>
            <span className="text-sm font-bold">1,247</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">온라인</span>
            <span className="text-sm font-bold text-green-600">342</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">오늘 런칭</span>
            <span className="text-sm font-bold text-primary">12</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sidebar;