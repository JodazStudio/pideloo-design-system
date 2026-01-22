
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LocationState {
  coords: { latitude: number; longitude: number } | null;
  isLocationSet: boolean;
  setLocation: (coords: { latitude: number; longitude: number }) => void;
  clearLocation: () => void;
}

export const useLocationStore = create<LocationState>()(
  persist(
    (set) => ({
      coords: null,
      isLocationSet: false,
      setLocation: (coords) => set({ coords, isLocationSet: true }),
      clearLocation: () => set({ coords: null, isLocationSet: false }),
    }),
    {
      name: 'pideloo-location',
    }
  )
);
