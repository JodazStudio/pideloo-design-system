import React from "react";
import { cn } from "@/lib/utils";
import { BottomNav } from "./BottomNav";

interface AppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const AppLayout = ({ children, className }: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div
        className={cn(
          "container mx-auto min-h-screen bg-background relative flex flex-col pt-6 lg:pt-10 pb-24",
          className
        )}
      >
        {children}
      </div>
      <BottomNav />
    </div>
  );
};
