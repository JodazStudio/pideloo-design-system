import { Star, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Business } from "@/data/mockData";
import { cn } from "@/lib/utils";

interface BusinessCardProps {
  business: Business;
  className?: string;
}

export const BusinessCard = ({ business, className }: BusinessCardProps) => {
  return (
    <Link
      to={`/restaurant/${business.id}`}
      className={cn(
        "group block bg-card rounded-2xl overflow-hidden card-hover border border-border/50",
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={business.image}
          alt={business.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Featured badge */}
        {business.featured && (
          <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full glow-primary-subtle">
            Featured
          </div>
        )}
        
        {/* Tags */}
        <div className="absolute bottom-3 left-3 flex gap-2">
          {business.tags.map((tag) => (
            <span
              key={tag}
              className="bg-background/80 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
              {business.name}
            </h3>
            <p className="text-sm text-muted-foreground">{business.cuisine}</p>
          </div>
          
          {/* Rating */}
          <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-lg">
            <Star size={14} className="text-primary fill-primary" />
            <span className="text-sm font-bold text-primary">{business.rating}</span>
          </div>
        </div>

        {/* Meta info */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock size={12} />
            <span>{business.deliveryTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={12} className="text-accent" />
            <span>{business.distance}</span>
          </div>
          <span className="text-accent font-medium">{business.deliveryFee}</span>
        </div>
      </div>
    </Link>
  );
};
