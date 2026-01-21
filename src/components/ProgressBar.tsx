import { cn } from "@/lib/utils";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

export const ProgressBar = ({
  currentStep,
  totalSteps,
  className,
}: ProgressBarProps) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className={cn("w-full", className)}>
      {/* Progress bar */}
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-accent transition-all duration-500 ease-out rounded-full glow-accent"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Step indicators */}
      <div className="flex justify-between mt-3">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold transition-all duration-300",
              index < currentStep
                ? "bg-accent text-accent-foreground"
                : index === currentStep
                ? "bg-accent/20 text-accent border-2 border-accent"
                : "bg-secondary text-muted-foreground"
            )}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};
