import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Marketplace from "./pages/Marketplace";
import RestaurantDetail from "./pages/RestaurantDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import UserOnboarding from "./pages/UserOnboarding";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import CategoryDetail from "./pages/CategoryDetail";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

import { AppLayout } from "./components/AppLayout";
import { BottomNav } from "./components/BottomNav";

const MainLayout = () => (
  <AppLayout className="pb-24">
    <Outlet />
    <BottomNav />
  </AppLayout>
);

import { useEffect } from "react";
import { useLocationStore } from "./store/useLocationStore";

const LocationSync = () => {
  const { setLocation } = useLocationStore();

  useEffect(() => {
    // Attempt to get location if permission was already granted
    if ("geolocation" in navigator) {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "granted") {
          navigator.geolocation.getCurrentPosition((position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          });
        }
      });
    }
  }, [setLocation]);

  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LocationSync />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<MainLayout />}>
            <Route path="/" element={<Marketplace />} />
            <Route path="/restaurant/:id" element={<RestaurantDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/onboarding" element={<UserOnboarding />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/categories/:categoryName" element={<CategoryDetail />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
