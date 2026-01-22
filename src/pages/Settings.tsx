import { Header } from "@/components/Header";
import { ChevronRight, Moon, Bell, Globe, Shield, Trash2, Instagram, ExternalLink, Cookie } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Settings = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return document.documentElement.classList.contains("dark") || 
           (!document.documentElement.classList.contains("light") && 
            window.matchMedia("(prefers-color-scheme: dark)").matches);
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div>
      <Header title="Ajustes" />

      <main className="px-4 space-y-6">
        {/* Appearance */}
        <section className="bg-card rounded-2xl border border-border/50 overflow-hidden">
          <h3 className="font-bold px-4 pt-4 pb-2 text-sm text-muted-foreground uppercase tracking-wide">
            Apariencia
          </h3>
          <div className="flex items-center justify-between p-4 border-t border-border/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                <Moon size={20} />
              </div>
              <span className="font-medium">Modo Oscuro</span>
            </div>
            <Switch checked={isDarkMode} onCheckedChange={toggleTheme} />
          </div>
        </section>

        {/* Notifications */}
        <section className="bg-card rounded-2xl border border-border/50 overflow-hidden">
          <h3 className="font-bold px-4 pt-4 pb-2 text-sm text-muted-foreground uppercase tracking-wide">
            Notificaciones
          </h3>
          <div className="flex items-center justify-between p-4 border-t border-border/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                <Bell size={20} />
              </div>
              <div>
                <span className="font-medium block">Notificaciones Push</span>
                <span className="text-sm text-muted-foreground">
                  Actualizaciones de pedidos y promociones
                </span>
              </div>
            </div>
            <Switch defaultChecked />
          </div>
        </section>


        {/* Account */}
        <section className="bg-card rounded-2xl border border-border/50 overflow-hidden">
          <h3 className="font-bold px-4 pt-4 pb-2 text-sm text-muted-foreground uppercase tracking-wide">
            Cuenta
          </h3>
          <Link 
            to="/privacy"
            className="w-full flex items-center justify-between p-4 border-t border-border/50 hover:bg-secondary/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                <Shield size={20} />
              </div>
              <span className="font-medium">Privacidad y Seguridad</span>
            </div>
            <ChevronRight size={20} className="text-muted-foreground" />
          </Link>
          <Link 
            to="/cookies"
            className="w-full flex items-center justify-between p-4 border-t border-border/50 hover:bg-secondary/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                <Cookie size={20} />
              </div>
              <span className="font-medium">Política de Cookies</span>
            </div>
            <ChevronRight size={20} className="text-muted-foreground" />
          </Link>
          <button className="w-full flex items-center justify-between p-4 border-t border-border/50 hover:bg-destructive/10 transition-colors text-destructive">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                <Trash2 size={20} />
              </div>
              <span className="font-medium">Eliminar Cuenta</span>
            </div>
            <ChevronRight size={20} />
          </button>
        </section>

        {/* Social */}
        <section className="bg-card rounded-2xl border border-border/50 overflow-hidden">
          <h3 className="font-bold px-4 pt-4 pb-2 text-sm text-muted-foreground uppercase tracking-wide">
            Síguenos
          </h3>
          <a 
            href="https://instagram.com/pideloo.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between p-4 border-t border-border/50 hover:bg-secondary/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center text-white">
                <Instagram size={20} />
              </div>
              <div className="text-left">
                <span className="font-medium block">Instagram</span>
                <span className="text-sm text-muted-foreground">@pideloo.app</span>
              </div>
            </div>
            <ExternalLink size={18} className="text-muted-foreground" />
          </a>
        </section>

        {/* Version & Footer */}
        <div className="text-center space-y-1 py-4">
          <p className="text-sm text-muted-foreground">
            Pideloo v1.0.0
          </p>
          <p className="text-xs text-muted-foreground/60">
            Desarrollado por{" "}
            <a 
              href="https://jodaz.xyz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Jodaz Studio
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Settings;
