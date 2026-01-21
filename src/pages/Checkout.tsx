import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, CreditCard, Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const paymentMethods = [
  { id: "card", name: "Tarjeta de Crédito", icon: "💳", last4: "4242" },
  { id: "apple", name: "Apple Pay", icon: "🍎" },
  { id: "cash", name: "Efectivo al recibir", icon: "💵" },
];

const Checkout = () => {
  const [selectedPayment, setSelectedPayment] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
    }, 2000);
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
        <div className="animate-scale-in text-center">
          <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
            <Check size={48} className="text-accent" />
          </div>
          <h1 className="text-3xl font-bold mb-2">¡Pedido Confirmado!</h1>
          <p className="text-muted-foreground mb-8">
            Tu deliciosa comida se está preparando
          </p>
          
          <div className="bg-card rounded-2xl p-6 border border-border/50 mb-8 text-left max-w-sm mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">🍔</span>
              </div>
              <div>
                <p className="font-bold">Taco Fuego</p>
                <p className="text-sm text-muted-foreground">Pedido #PD2847</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Llegada estimada</span>
                <span className="font-medium text-accent">15-25 min</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total pagado</span>
                <span className="font-bold text-primary">$41.95</span>
              </div>
            </div>
          </div>

          <Link to="/">
            <Button className="rounded-2xl px-8 glow-primary">
              Volver al Inicio
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg px-4 py-4 safe-top">
        <div className="flex items-center gap-4">
          <Link
            to="/cart"
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center"
          >
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-xl font-bold">Finalizar Pedido</h1>
        </div>
      </header>

      <main className="px-4 space-y-6">
        {/* Delivery Address */}
        <section className="bg-card rounded-2xl p-5 border border-border/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold">Dirección de Envío</h3>
            <button className="text-primary text-sm font-medium">Cambiar</button>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
              <MapPin size={20} className="text-accent" />
            </div>
            <div>
              <p className="font-medium">Casa</p>
              <p className="text-sm text-muted-foreground">
                Calle Principal 123, Apt 4B
              </p>
              <p className="text-sm text-muted-foreground">
                Centro, CA 90210
              </p>
            </div>
          </div>
        </section>

        {/* Payment Method */}
        <section className="bg-card rounded-2xl p-5 border border-border/50">
          <h3 className="font-bold mb-4">Método de Pago</h3>
          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => setSelectedPayment(method.id)}
                className={cn(
                  "w-full flex items-center gap-4 p-4 rounded-xl border transition-all",
                  selectedPayment === method.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                )}
              >
                <span className="text-2xl">{method.icon}</span>
                <div className="flex-1 text-left">
                  <p className="font-medium">{method.name}</p>
                  {method.last4 && (
                    <p className="text-sm text-muted-foreground">
                      •••• {method.last4}
                    </p>
                  )}
                </div>
                <div
                  className={cn(
                    "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                    selectedPayment === method.id
                      ? "border-primary bg-primary"
                      : "border-muted-foreground"
                  )}
                >
                  {selectedPayment === method.id && (
                    <Check size={12} className="text-primary-foreground" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Order Summary */}
        <section className="bg-card rounded-2xl p-5 border border-border/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold">Resumen del Pedido</h3>
            <Link to="/cart" className="text-primary text-sm font-medium">
              Editar
            </Link>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">2x Tacos Callejeros</span>
              <span>$25.98</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">1x Burrito Supremo</span>
              <span>$14.99</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Costo de Envío</span>
              <span>$2.99</span>
            </div>
            <div className="flex justify-between text-accent">
              <span>Descuento (10%)</span>
              <span>-$4.10</span>
            </div>
            <div className="border-t border-border pt-3 flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-primary">$39.86</span>
            </div>
          </div>
        </section>
      </main>

      {/* Order Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-lg border-t border-border safe-bottom">
        <Button
          onClick={handleOrder}
          disabled={isProcessing}
          className="w-full py-6 rounded-2xl text-lg font-bold glow-primary animate-pulse-glow disabled:animate-none"
        >
          {isProcessing ? (
            <span className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
              Procesando...
            </span>
          ) : (
            "Pedir Ahora · $39.86"
          )}
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
