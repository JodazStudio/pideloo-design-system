import React from "react";
import { cn } from "@/lib/utils";

interface AppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const AppLayout = ({ children, className }: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <div
        className={cn(
          "container mx-auto max-w-md min-h-screen bg-background relative shadow-none sm:shadow-2xl sm:border-x border-border/50 px-0 flex flex-col",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
