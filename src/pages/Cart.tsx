import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Minus, Plus, Trash2, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { menuItems } from "@/data/mockData";

// Mock cart data for prototype
const initialCartItems = [
  { ...menuItems["1"][0], quantity: 2 },
  { ...menuItems["1"][1], quantity: 1 },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = 2.99;
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const total = subtotal + deliveryFee - discount;

  const applyPromo = () => {
    if (promoCode.toLowerCase() === "pideloo10") {
      setPromoApplied(true);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg px-4 py-4 safe-top">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center"
          >
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-xl font-bold">Tu Carrito</h1>
        </div>
      </header>

      {/* Cart Items */}
      <main className="px-4">
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-xl font-bold mb-2">Tu carrito está vacío</h2>
            <p className="text-muted-foreground mb-6">
              Añade algunos platos deliciosos para comenzar
            </p>
            <Link to="/">
              <Button className="rounded-2xl glow-primary">
                Ver Restaurantes
              </Button>
            </Link>
          </div>
        ) : (
          <>
            {/* Items List */}
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 bg-card rounded-2xl p-4 border border-border/50"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold">{item.name}</h3>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <p className="text-primary font-bold mt-1">
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 rounded-xl bg-secondary flex items-center justify-center"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="font-bold w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 rounded-xl bg-primary text-primary-foreground flex items-center justify-center"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Promo Code */}
            <div className="bg-card rounded-2xl p-4 border border-border/50 mb-6">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <Tag
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />
                  <Input
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Introduce código promo"
                    className="pl-10 rounded-xl bg-secondary border-none"
                    disabled={promoApplied}
                  />
                </div>
                <Button
                  onClick={applyPromo}
                  variant="outline"
                  className="rounded-xl"
                  disabled={promoApplied}
                >
                  {promoApplied ? "¡Aplicado!" : "Aplicar"}
                </Button>
              </div>
              {promoApplied && (
                <p className="text-accent text-sm mt-2 font-medium">
                  🎉 ¡10% de descuento aplicado!
                </p>
              )}
            </div>

            {/* Order Summary */}
            <div className="bg-card rounded-2xl p-5 border border-border/50">
              <h3 className="font-bold mb-4">Resumen del Pedido</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Costo de Envío</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-accent">
                    <span>Descuento (10%)</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="border-t border-border pt-3 flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </>
        )}
      </main>

      {/* Checkout Button */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-lg border-t border-border safe-bottom">
          <Link to="/checkout">
            <Button className="w-full py-6 rounded-2xl text-lg font-bold glow-primary animate-pulse-glow">
              Finalizar Pedido · ${total.toFixed(2)}
            </Button>
          </Link>
        </div>
      )}

    </div>
  );
};

export default Cart;
