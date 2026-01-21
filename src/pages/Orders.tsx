import { BottomNav } from "@/components/BottomNav";
import { Clock, Package, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const orders = [
  {
    id: "PD2847",
    restaurant: "Taco Fuego",
    status: "delivered",
    date: "Today, 2:45 PM",
    total: 41.95,
    items: ["2x Street Tacos", "1x Burrito Supreme"],
  },
  {
    id: "PD2831",
    restaurant: "Sushi Zen",
    status: "in_progress",
    date: "Today, 12:30 PM",
    total: 52.99,
    items: ["1x Dragon Roll", "2x Salmon Nigiri"],
  },
  {
    id: "PD2798",
    restaurant: "Burger Republic",
    status: "delivered",
    date: "Yesterday",
    total: 28.50,
    items: ["1x Classic Burger", "1x Fries"],
  },
];

const statusConfig = {
  in_progress: {
    label: "In Progress",
    icon: Clock,
    color: "text-accent",
    bg: "bg-accent/10",
  },
  delivered: {
    label: "Delivered",
    icon: CheckCircle,
    color: "text-primary",
    bg: "bg-primary/10",
  },
};

const Orders = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg px-4 py-4 safe-top">
        <h1 className="text-2xl font-bold">Your Orders</h1>
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
