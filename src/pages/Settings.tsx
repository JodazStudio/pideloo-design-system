import { BottomNav } from "@/components/BottomNav";
import { ChevronRight, Moon, Bell, Globe, Shield, Trash2 } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg px-4 py-4 safe-top">
        <h1 className="text-2xl font-bold">Ajustes</h1>
      </header>

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
            <Switch defaultChecked />
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

        {/* Preferences */}
        <section className="bg-card rounded-2xl border border-border/50 overflow-hidden">
          <h3 className="font-bold px-4 pt-4 pb-2 text-sm text-muted-foreground uppercase tracking-wide">
            Preferencias
          </h3>
          <button className="w-full flex items-center justify-between p-4 border-t border-border/50 hover:bg-secondary/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                <Globe size={20} />
              </div>
              <div className="text-left">
                <span className="font-medium block">Idioma</span>
                <span className="text-sm text-muted-foreground">Español</span>
              </div>
            </div>
            <ChevronRight size={20} className="text-muted-foreground" />
          </button>
        </section>

        {/* Account */}
        <section className="bg-card rounded-2xl border border-border/50 overflow-hidden">
          <h3 className="font-bold px-4 pt-4 pb-2 text-sm text-muted-foreground uppercase tracking-wide">
            Cuenta
          </h3>
          <button className="w-full flex items-center justify-between p-4 border-t border-border/50 hover:bg-secondary/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                <Shield size={20} />
              </div>
              <span className="font-medium">Privacidad y Seguridad</span>
            </div>
            <ChevronRight size={20} className="text-muted-foreground" />
          </button>
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

        {/* Version */}
        <p className="text-center text-sm text-muted-foreground">
          Pideloo v1.0.0
        </p>
      </main>

      <BottomNav />
    </div>
  );
};

export default Settings;
