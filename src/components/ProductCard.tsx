import { ArrowUp, MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  rank: number;
  title: string;
  description: string;
  logo: string;
  upvotes: number;
  comments: number;
  tags: string[];
  website?: string;
  isUpvoted?: boolean;
}

const ProductCard = ({
  rank,
  title,
  description,
  logo,
  upvotes,
  comments,
  tags,
  website,
  isUpvoted = false
}: ProductCardProps) => {
  return (
    <div className="product-card group">
      <div className="flex items-start gap-4">
        {/* Rank & Logo */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <span className="text-2xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
            {rank}
          </span>
          <div className="w-12 h-12 rounded-xl overflow-hidden border border-border flex-shrink-0">
            <img 
              src={logo} 
              alt={`${title} logo`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                {title}
              </h3>
              <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
                {description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {tags.map((tag, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="product-tag"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* Comments */}
              <div className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-medium">{comments}</span>
              </div>

              {/* Upvote Button */}
              <Button
                variant="outline"
                size="sm"
                className={`upvote-button ${isUpvoted ? 'active' : ''}`}
              >
                <ArrowUp className="w-4 h-4" />
                {upvotes}
              </Button>

              {/* External Link */}
              {website && (
                <Button variant="ghost" size="sm" className="hover-scale">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;