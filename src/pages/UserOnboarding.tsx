import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/ProgressBar";
import { onboardingSteps } from "@/data/mockData";
import pidelooLogo from "@/assets/pideloo-logo.png";
import { cn } from "@/lib/utils";

const cuisinePreferences = [
  { id: "mexican", name: "Mexicana", icon: "🌮" },
  { id: "asian", name: "Asiática", icon: "🍜" },
  { id: "italian", name: "Italiana", icon: "🍕" },
  { id: "american", name: "Americana", icon: "🍔" },
  { id: "indian", name: "India", icon: "🍛" },
  { id: "healthy", name: "Saludable", icon: "🥗" },
  { id: "desserts", name: "Postres", icon: "🍰" },
  { id: "coffee", name: "Café", icon: "☕" },
];

const UserOnboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);
  const steps = onboardingSteps.user;

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/");
    }
  };

  const togglePreference = (id: string) => {
    setSelectedPreferences((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="text-center animate-fade-in">
            <img
              src={pidelooLogo}
              alt="Pideloo"
              className="w-32 h-32 mx-auto mb-8 rounded-3xl animate-float"
            />
            <h1 className="text-3xl font-bold mb-4">
              Bienvenido a <span className="text-gradient-primary">Pideloo</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Descubre sabores locales de tus creadores favoritos
            </p>
          </div>
        );

      case 1:
        return (
          <div className="animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-8">
              <MapPin size={40} className="text-accent" />
            </div>
            <h1 className="text-2xl font-bold text-center mb-4">
              Tu Ubicación
            </h1>
            <p className="text-muted-foreground text-center mb-8">
              Encontraremos los mejores lugares cerca de ti
            </p>
            <button className="w-full flex items-center gap-4 p-4 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <MapPin size={24} className="text-accent" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-medium">Activar Ubicación</p>
                <p className="text-sm text-muted-foreground">
                  Permite que Pideloo acceda a tu ubicación
                </p>
              </div>
              <ChevronRight size={20} className="text-muted-foreground" />
            </button>
          </div>
        );

      case 2:
        return (
          <div className="animate-fade-in">
            <h1 className="text-2xl font-bold text-center mb-4">
              ¿Qué te encanta comer?
            </h1>
            <p className="text-muted-foreground text-center mb-8">
              Selecciona tus cocinas favoritas
            </p>
            <div className="grid grid-cols-2 gap-3">
              {cuisinePreferences.map((cuisine) => (
                <button
                  key={cuisine.id}
                  onClick={() => togglePreference(cuisine.id)}
                  className={cn(
                    "flex items-center gap-3 p-4 rounded-2xl border transition-all",
                    selectedPreferences.includes(cuisine.id)
                      ? "border-primary bg-primary/10"
                      : "border-border bg-card hover:border-primary/50"
                  )}
                >
                  <span className="text-2xl">{cuisine.icon}</span>
                  <span className="font-medium">{cuisine.name}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="text-center animate-fade-in">
            <div className="text-8xl mb-8 animate-float">🎉</div>
            <h1 className="text-3xl font-bold mb-4">¡Todo Listo!</h1>
            <p className="text-muted-foreground text-lg">
              Empieza a explorar y pide tu primera comida
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Progress Bar */}
      <div className="px-6 pt-8 safe-top">
        <ProgressBar currentStep={currentStep + 1} totalSteps={steps.length} />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12">
        {renderStepContent()}
      </div>

      {/* Actions */}
      <div className="px-6 pb-8 safe-bottom">
        <Button
          onClick={nextStep}
          className="w-full py-6 rounded-2xl text-lg font-bold glow-primary"
        >
          {currentStep === steps.length - 1 ? "¡Vamos!" : "Continuar"}
        </Button>
        {currentStep > 0 && currentStep < steps.length - 1 && (
          <button
            onClick={nextStep}
            className="w-full py-4 text-muted-foreground text-sm"
          >
            Omitir por ahora
          </button>
        )}
      </div>
    </div>
);

};

export default UserOnboarding;
