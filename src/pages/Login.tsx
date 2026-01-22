
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import pidelooLogo from "@/assets/pideloo-logo.png";

import { useAuthStore } from "@/store/useAuthStore";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login with mock user
    login({
      id: "1",
      name: "John Doe",
      email: email,
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-4 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full animate-float" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/20 blur-[120px] rounded-full animate-float" style={{ animationDelay: '-1.5s' }} />
      
      <Card className="w-full max-w-md border-none bg-transparent shadow-none relative z-10">
        <CardHeader className="space-y-2 pb-8 text-center">
          <div className="flex justify-center mb-6">
            <img 
              src={pidelooLogo} 
              alt="Pideloo" 
              className="w-20 h-20 rounded-[32px] shadow-2xl border border-white/10 animate-float" 
            />
          </div>
          <CardTitle className="text-4xl font-black tracking-tight text-foreground">
            Bienvenido
          </CardTitle>
          <CardDescription className="text-muted-foreground text-lg">
            Ingresa a tu cuenta de Pideloo
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4 px-8">
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground/80 font-semibold ml-1">Correo electrónico</Label>
              <Input
                id="email"
                type="email"
                placeholder="nombre@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-secondary/50 backdrop-blur-md border-border/50 h-12 rounded-2xl focus:ring-primary/20 transition-all"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <Label htmlFor="password" className="text-foreground/80 font-semibold">Contraseña</Label>
                <button
                  type="button"
                  className="text-xs text-primary hover:underline transition-colors font-medium"
                  onClick={() => {/* Handle forgot password */}}
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-secondary/50 backdrop-blur-md border-border/50 h-12 rounded-2xl pr-12 focus:ring-primary/20 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <Button 
              type="submit" 
              className="w-full h-12 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl shadow-lg shadow-primary/20 mt-2 transition-all active:scale-[0.98]"
            >
              Iniciar Sesión
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </CardContent>
        
        <CardFooter className="flex flex-col space-y-4 pb-8 pt-6 px-8 text-center">
          <p className="text-sm text-muted-foreground">
            ¿No tienes una cuenta?{" "}
            <button
              onClick={() => navigate("/onboarding")}
              className="text-primary hover:underline font-bold"
            >
              Regístrate aquí
            </button>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
