import { cn } from "@/lib/utils";

interface CategoryPillProps {
  id: string;
  name: string;
  icon: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const CategoryPill = ({
  name,
  icon,
  isActive,
  onClick,
}: CategoryPillProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-4 py-2.5 rounded-2xl whitespace-nowrap transition-all duration-300 font-medium text-sm",
        isActive
          ? "bg-primary text-primary-foreground glow-primary-subtle"
          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
      )}
    >
      <span>{icon}</span>
      <span>{name}</span>
    </button>
  );
};
