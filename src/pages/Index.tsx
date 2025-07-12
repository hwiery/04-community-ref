import { Calendar, Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import Sidebar from "@/components/Sidebar";
import sampleLogo1 from "@/assets/sample-logo-1.png";
import sampleLogo2 from "@/assets/sample-logo-2.png";
import sampleLogo3 from "@/assets/sample-logo-3.png";

const Index = () => {
  // 샘플 데이터
  const sampleProducts = [
    {
      rank: 1,
      title: "TaskFlow Pro",
      description: "AI 기반 프로젝트 관리 도구로 팀의 생산성을 2배 향상시키세요. 자동 일정 조정과 스마트 알림 기능으로 업무를 효율적으로 관리할 수 있습니다.",
      logo: sampleLogo1,
      upvotes: 342,
      comments: 28,
      tags: ["생산성", "AI", "SaaS"],
      website: "https://taskflow.com",
      isUpvoted: true
    },
    {
      rank: 2,
      title: "DesignAI Studio",
      description: "몇 초 만에 전문가급 디자인을 생성하는 AI 디자인 도구입니다. 로고, 배너, 소셜미디어 포스트를 쉽고 빠르게 만들어보세요.",
      logo: sampleLogo2,
      upvotes: 287,
      comments: 45,
      tags: ["디자인", "AI", "자동화"],
      website: "https://designai.studio"
    },
    {
      rank: 3,
      title: "CodeHelper Assistant",
      description: "개발자를 위한 AI 코딩 어시스턴트. 코드 리뷰, 버그 수정, 최적화 제안까지 모든 개발 과정을 지원합니다.",
      logo: sampleLogo3,
      upvotes: 198,
      comments: 19,
      tags: ["개발", "AI", "도구"],
      website: "https://codehelper.dev"
    },
    {
      rank: 4,
      title: "MindMap Genius",
      description: "아이디어를 시각적으로 정리하고 공유할 수 있는 차세대 마인드맵 도구입니다.",
      logo: sampleLogo1,
      upvotes: 156,
      comments: 12,
      tags: ["생산성", "창의성", "협업"]
    },
    {
      rank: 5,
      title: "SocialBoost Analytics",
      description: "소셜미디어 성과를 분석하고 최적화하는 올인원 마케팅 플랫폼입니다.",
      logo: sampleLogo2,
      upvotes: 134,
      comments: 8,
      tags: ["마케팅", "분석", "소셜미디어"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section
        className="hero-gradient py-12 px-4 bg-cover bg-center"
        style={{ backgroundImage: "url('/nasa-Q1p7bh3SHj8-unsplash.jpg')" }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            오늘 런칭하는 제품들을 발견하세요
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            매일 새로운 아이디어와 혁신적인 제품들이 여러분을 기다리고 있습니다. 
            최고의 스타트업과 프로젝트를 가장 먼저 만나보세요.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Main Feed */}
          <main className="flex-1">
            {/* Date & Filter Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold text-foreground">
                  오늘의 프로젝트
                </h2>
                <Button variant="outline" size="sm" className="gap-2">
                  <Calendar className="w-4 h-4" />
                  2024년 7월 11일
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </div>
              
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="w-4 h-4" />
                필터
              </Button>
            </div>

            {/* Product List */}
            <div className="space-y-4">
              {sampleProducts.map((product) => (
                <ProductCard key={product.rank} {...product} />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                더 많은 프로젝트 보기
              </Button>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <Sidebar />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Index;
