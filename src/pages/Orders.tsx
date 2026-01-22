import { BottomNav } from "@/components/BottomNav";
import { Clock, Package, CheckCircle, ShoppingBag, LogIn } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/useAuthStore";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const orders = [
  {
    id: "PD2847",
    restaurant: "Taco Fuego",
    status: "delivered",
    date: "Hoy, 2:45 PM",
    total: 41.95,
    items: ["2x Tacos Callejeros", "1x Burrito Supremo"],
  },
  {
    id: "PD2831",
    restaurant: "Sushi Zen",
    status: "in_progress",
    date: "Hoy, 12:30 PM",
    total: 52.99,
    items: ["1x Dragon Roll", "2x Salmon Nigiri"],
  },
  {
    id: "PD2798",
    restaurant: "Burger Republic",
    status: "delivered",
    date: "Ayer",
    total: 28.50,
    items: ["1x Classic Burger", "1x Papas Fritas"],
  },
];

const statusConfig = {
  in_progress: {
    label: "En Proceso",
    icon: Clock,
    color: "text-accent",
    bg: "bg-accent/10",
  },
  delivered: {
    label: "Entregado",
    icon: CheckCircle,
    color: "text-primary",
    bg: "bg-primary/10",
  },
};

const Orders = () => {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return (
      <div className="min-h-[100dvh] flex flex-col bg-background">
        <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg px-4 py-4 safe-top">
          <h1 className="text-2xl font-bold">Tus Pedidos</h1>
        </header>

        <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150" />
            <div className="relative w-24 h-24 bg-card rounded-3xl flex items-center justify-center border border-border/50 shadow-2xl rotate-3">
              <ShoppingBag className="w-12 h-12 text-primary -rotate-3" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-accent rounded-2xl flex items-center justify-center border-4 border-background shadow-lg -rotate-6">
              <LogIn className="w-5 h-5 text-accent-foreground" />
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-3">¡Hambre de seguimiento!</h2>
          <p className="text-muted-foreground mb-10 max-w-[280px]">
            Inicia sesión para rastrear tus pedidos en tiempo real y ver tu historial de banquetes.
          </p>

          <Link to="/login" className="w-full max-w-[280px]">
            <Button className="w-full h-14 rounded-2xl text-lg font-bold glow-primary shadow-xl shadow-primary/20">
              Iniciar Sesión
            </Button>
          </Link>
          
          <Link to="/" className="mt-6 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Volver al inicio
          </Link>
        </main>

        <BottomNav />
      </div>
    );
  }

  return (
    <div className="pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg px-4 py-4 safe-top">
        <h1 className="text-2xl font-bold">Tus Pedidos</h1>
      </header>


      <main className="px-4 space-y-4">
        {orders.map((order) => {
          const status = statusConfig[order.status as keyof typeof statusConfig];
          const StatusIcon = status.icon;

          return (
            <div
              key={order.id}
              className="bg-card rounded-2xl p-5 border border-border/50"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold">{order.restaurant}</h3>
                  <p className="text-sm text-muted-foreground">
                    Order #{order.id}
                  </p>
                </div>
                <div
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium",
                    status.bg,
                    status.color
                  )}
                >
                  <StatusIcon size={14} />
                  {status.label}
                </div>
              </div>

              <div className="text-sm text-muted-foreground mb-3">
                {order.items.join(", ")}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-border">
                <span className="text-sm text-muted-foreground">
                  {order.date}
                </span>
                <span className="font-bold text-primary">
                  ${order.total.toFixed(2)}
                </span>
              </div>
            </div>
          );
        })}
      </main>

      <BottomNav />
    </div>
  );
};

export default Orders;
