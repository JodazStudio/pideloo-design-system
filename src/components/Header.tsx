
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SearchBar } from "@/components/SearchBar";
import pidelooLogo from "@/assets/pideloo-logo.png";
import { cn } from "@/lib/utils";

interface HeaderProps {
  showSearch?: boolean;
  onSearch?: (query: string) => void;
  showBack?: boolean;
  title?: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
}

export const Header = ({ 
  showSearch, 
  onSearch, 
  showBack, 
  title, 
  subtitle, 
  className,
  children 
}: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className={cn(
      "sticky top-0 z-40 bg-background/80 backdrop-blur-lg safe-top border-b border-border/10 px-4 py-3",
      className
    )}>
      <div className="flex items-center gap-3">
        {showBack && (
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-secondary hover:bg-secondary/80 transition-colors shrink-0"
          >
            <ArrowLeft className="text-foreground" size={20} />
          </button>
        )}

        {!showBack && !title && !subtitle && (
          <div className="shrink-0">
            <img src={pidelooLogo} alt="Pideloo" className="w-11 h-11 rounded-[20px] shadow-lg border border-border/20" />
          </div>
        )}

        {(title || subtitle) && !showBack && (
          <div className="flex items-center gap-3 shrink-0">
            <img src={pidelooLogo} alt="Pideloo" className="w-11 h-11 rounded-[20px] shadow-lg border border-border/20" />
            <div className="hidden xs:block">
              {subtitle && <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.1em] leading-none mb-1">{subtitle}</p>}
              {title && <h1 className="text-base font-black text-foreground leading-none">{title}</h1>}
            </div>
          </div>
        )}

        {children}

        {showSearch && (
          <div className="flex-1 min-w-0">
            <SearchBar onSearch={onSearch} />
          </div>
        )}
      </div>
    </header>
  );
};
