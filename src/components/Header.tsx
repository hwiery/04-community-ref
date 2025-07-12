import { Search, Bell, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PH</span>
              </div>
              <h1 className="text-xl font-bold text-foreground">
                ProductHunt
              </h1>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-foreground hover:text-primary font-medium transition-colors">
                런칭
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary font-medium transition-colors">
                프로젝트
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary font-medium transition-colors">
                뉴스
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary font-medium transition-colors">
                포럼
              </a>
            </nav>
          </div>

          {/* Search Bar */}
          <div className="hidden sm:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="제품, 스타트업 검색..."
                className="pl-10 pr-4 w-full border-border focus:border-primary"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden sm:flex">
              <Bell className="w-4 h-4 mr-2" />
              알림
            </Button>
            
            <Button variant="default" className="bg-primary hover:bg-primary/90">
              런칭하기
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>

            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;