import { Search, MapPin } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  onSearch?: (query: string) => void;
  className?: string;
}

export const SearchBar = ({ onSearch, className }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "relative flex items-center gap-3 bg-secondary/80 backdrop-blur-sm rounded-2xl px-4 py-3 transition-all duration-300",
        isFocused && "ring-2 ring-accent/50 bg-secondary",
        className
      )}
    >
      <div className="flex items-center gap-2 text-accent">
        <MapPin size={18} className="drop-shadow-[0_0_6px_hsl(72,100%,62%)]" />
        <span className="text-sm font-medium">Downtown</span>
      </div>
      
      <div className="w-px h-5 bg-border" />
      
      <div className="flex-1 flex items-center gap-2">
        <Search size={18} className="text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search restaurants, cuisines..."
          className="flex-1 bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted-foreground"
        />
      </div>
    </form>
  );
};
