import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface FloatingCartProps {
  itemCount: number;
  total: number;
  className?: string;
}

export const FloatingCart = ({ itemCount, total, className }: FloatingCartProps) => {
  if (itemCount === 0) return null;

  return (
    <div className="fixed bottom-24 left-0 right-0 z-40 flex justify-center pointer-events-none">
      <div className="container max-w-screen-xl pointer-events-auto px-4">
        <Link
          to="/cart"
          className={cn(
            "flex items-center justify-between",
            "bg-primary text-primary-foreground",
            "px-5 py-4 rounded-2xl",
            "glow-primary animate-fade-in",
            "transition-all duration-300 hover:scale-[1.02]",
            className
          )}
        >
      <div className="flex items-center gap-3">
        <div className="relative">
          <ShoppingCart size={22} />
          <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
            {itemCount}
          </span>
        </div>
        <span className="font-medium">Ver Carrito</span>
      </div>
      
      <span className="font-bold text-lg">${total.toFixed(2)}</span>
        </Link>
      </div>
    </div>
  );
};
