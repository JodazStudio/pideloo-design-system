import { Plus, Minus } from "lucide-react";
import { MenuItem as MenuItemType } from "@/data/mockData";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface MenuItemCardProps {
  item: MenuItemType;
  quantity?: number;
  onAdd?: () => void;
  onRemove?: () => void;
  className?: string;
}

export const MenuItemCard = ({
  item,
  quantity = 0,
  onAdd,
  onRemove,
  className,
}: MenuItemCardProps) => {
  return (
    <div
      className={cn(
        "flex gap-4 bg-card rounded-2xl p-4 border border-border/50 transition-all duration-300 hover:border-primary/30",
        className
      )}
    >
      {/* Image */}
      <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        {item.popular && (
          <div className="absolute top-1 left-1 bg-accent text-accent-foreground text-[10px] font-bold px-1.5 py-0.5 rounded">
            Popular
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between min-w-0">
        <div>
          <h4 className="font-bold text-foreground truncate">{item.name}</h4>
          <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
            {item.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-2">
          <span className="text-lg font-bold text-primary">
            ${item.price.toFixed(2)}
          </span>

          {/* Quantity controls */}
          <div className="flex items-center gap-2">
            {quantity > 0 ? (
              <>
                <Button
                  size="icon"
                  variant="outline"
                  className="h-8 w-8 rounded-xl border-border"
                  onClick={onRemove}
                >
                  <Minus size={14} />
                </Button>
                <span className="w-6 text-center font-bold">{quantity}</span>
                <Button
                  size="icon"
                  className="h-8 w-8 rounded-xl glow-primary-subtle"
                  onClick={onAdd}
                >
                  <Plus size={14} />
                </Button>
              </>
            ) : (
              <Button
                size="sm"
                className="rounded-xl glow-primary-subtle"
                onClick={onAdd}
              >
                <Plus size={14} />
                Agregar
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
