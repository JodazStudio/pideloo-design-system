
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";
import { useLocationStore } from "@/store/useLocationStore";
import { useAuthStore } from "@/store/useAuthStore";

export const LocationModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLocationSet, setLocation } = useLocationStore();
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    // Show only if location is not set and user is not authenticated
    if (!isLocationSet && !isAuthenticated) {
      setIsOpen(true);
    }
  }, [isLocationSet, isAuthenticated]);

  const requestLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setIsOpen(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          // If error, we still close the modal but maybe we should show a message
          setIsOpen(false);
        }
      );
    } else {
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md rounded-[32px] border-none bg-card/95 backdrop-blur-xl">
        <DialogHeader className="flex flex-col items-center pt-6">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
            <MapPin className="text-primary w-8 h-8" />
          </div>
          <DialogTitle className="text-2xl font-black text-center">¿Donde entregamos?</DialogTitle>
          <DialogDescription className="text-center text-muted-foreground pt-2">
            Permítenos conocer tu ubicación para mostrarte los mejores restaurantes cerca de ti.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-col sm:flex-col gap-3 pb-6 pt-2">
          <Button 
            onClick={requestLocation}
            className="w-full h-12 rounded-2xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground flex gap-2"
          >
            <Navigation size={18} />
            Usar mi ubicación actual
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => setIsOpen(false)}
            className="w-full h-12 rounded-2xl font-semibold text-muted-foreground"
          >
            Ahora no, gracias
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
