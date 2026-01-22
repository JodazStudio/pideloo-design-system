import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, CreditCard, Check, ChevronRight, Truck, Store, Info, Phone, User, Hash, Loader2, Clock, Calendar as CalendarIcon, Gift } from "lucide-react";
import { format, addDays } from "date-fns";
import { es } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Map, MapMarker, MapControls, MarkerContent } from "@/components/ui/map";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const paymentMethods = [
  { id: "pago_movil", name: "Pago Móvil", icon: "📱", description: "Transferencia rápida" },
  { id: "cash", name: "Efectivo", icon: "💵", description: "Paga al recibir" },
];

const commerceInfo = {
  name: "Desayunate - Sabana Grande",
  minPurchase: "$1",
  address: "Edificio ARGUI, Avenida Los Jabillos, Caracas, Distrito Capital",
  phone: "0412-1234567",
  coordinates: { lng: -66.8785, lat: 10.4915 },
  pagoMovil: {
    bank: "Banesco (0134)",
    phone: "0412-1234567",
    id: "V-20123456"
  }
};

const Checkout = () => {
  const [selectedPayment, setSelectedPayment] = useState("pago_movil");
  const [orderType, setOrderType] = useState<"delivery" | "pickup">("delivery");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showPMDialog, setShowPMDialog] = useState(false);
  const [showScheduleDialog, setShowScheduleDialog] = useState(false);
  const [orderTimeType, setOrderTimeType] = useState<"now" | "scheduled">("now");
  const [scheduledDate, setScheduledDate] = useState<string>(format(addDays(new Date(), 1), "yyyy-MM-dd"));
  const [scheduledTime, setScheduledTime] = useState<string>("15:30");
  const [tempDate, setTempDate] = useState(scheduledDate);
  const [tempTime, setTempTime] = useState(scheduledTime);
  const [reference, setReference] = useState("");
  const [isValidating, setIsValidating] = useState(false);

  const deliveryFee = 2.99;
  const subtotal = 40.97;
  const discount = 4.10;
  
  const total = subtotal - discount + (orderType === "delivery" ? deliveryFee : 0);

  const handleOrderAction = () => {
    if (selectedPayment === "pago_movil") {
      setShowPMDialog(true);
    } else {
      handleOrder();
    }
  };

  const handlePMSubmit = () => {
    if (!reference) return;
    setIsValidating(true);
    // Simulate commerce validation
    setTimeout(() => {
      setIsValidating(false);
      setShowPMDialog(false);
      handleOrder();
    }, 3000);
  };

  const handleScheduleConfirm = () => {
    setScheduledDate(tempDate);
    setScheduledTime(tempTime);
    setOrderTimeType("scheduled");
    setShowScheduleDialog(false);
  };

  const handleTimeTypeChange = (type: "now" | "scheduled") => {
    if (type === "scheduled") {
      setShowScheduleDialog(true);
    } else {
      setOrderTimeType("now");
    }
  };

  const handleOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
    }, 2000);
  };

  if (isComplete) {
    return (
      <div className="flex flex-col items-center justify-center px-4">
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
    <div>
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

      <main className="px-4 space-y-6 pb-20">
        {/* Commerce Info Header */}
        <section className="bg-card rounded-2xl p-4 border border-border/50 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold overflow-hidden">
            <img src="https://api.dicebear.com/7.x/initials/svg?seed=DS&backgroundColor=ffedd5&textColor=ea580c" alt="Logo" className="w-full h-full" />
          </div>
          <div>
            <h2 className="font-bold text-lg">{commerceInfo.name}</h2>
            <p className="text-sm text-muted-foreground">Mínimo de compra {commerceInfo.minPurchase}</p>
          </div>
        </section>

        {/* Order Type Toggle */}
        <section className="space-y-4">
          <h3 className="font-bold px-1 text-xl">¿Cómo te lo entregamos?</h3>
          <div className="flex bg-secondary/30 p-1.5 rounded-3xl gap-1">
            <button
              onClick={() => setOrderType("delivery")}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-3 rounded-[22px] transition-all font-bold",
                orderType === "delivery" ? "bg-background shadow-lg scale-[1.02]" : "text-muted-foreground hover:bg-secondary/20"
              )}
            >
              <Truck size={18} />
              Delivery
            </button>
            <button
              onClick={() => setOrderType("pickup")}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-3 rounded-[22px] transition-all font-bold",
                orderType === "pickup" ? "bg-foreground text-background shadow-lg scale-[1.02]" : "text-muted-foreground hover:bg-secondary/20"
              )}
            >
              <Store size={18} />
              Pick up
            </button>
          </div>
        </section>

        {/* Map Section */}
        <section className="relative h-[250px] rounded-3xl overflow-hidden border border-border/50 shadow-sm bg-muted">
          <Map 
            center={[commerceInfo.coordinates.lng, commerceInfo.coordinates.lat]} 
            zoom={15}
            interactive={false}
          >
            <MapMarker 
              longitude={commerceInfo.coordinates.lng} 
              latitude={commerceInfo.coordinates.lat}
            >
              <MarkerContent>
                <div className="bg-foreground text-background p-2 rounded-xl shadow-xl animate-bounce">
                  <Store size={20} fill="currentColor" />
                </div>
              </MarkerContent>
            </MapMarker>
            <MapControls position="bottom-right" className="bottom-2 right-2" />
          </Map>
          <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-2 border border-border/10">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Abierto ahora
          </div>
        </section>

        {/* Delivery/Pickup Location Detail */}
        <section className="bg-card rounded-2xl p-5 border border-border/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold">{orderType === "delivery" ? "Dirección de Envío" : "Dirección del comercio"}</h3>
            <button className="text-primary text-sm font-medium">Cambiar</button>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0">
              <MapPin size={24} className="text-foreground" />
            </div>
            <div>
              <p className="font-bold text-base">{orderType === "delivery" ? "Casa" : commerceInfo.name}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {orderType === "delivery" 
                  ? "Calle Principal 123, Apt 4B, Centro, CA 90210" 
                  : commerceInfo.address}
              </p>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="space-y-4">
          <h3 className="font-bold px-1 text-xl">Hora de entrega</h3>
          <div className="flex bg-secondary/30 p-1.5 rounded-3xl gap-1">
            <button
              onClick={() => handleTimeTypeChange("now")}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-3 rounded-[22px] transition-all font-bold",
                orderTimeType === "now" ? "bg-background shadow-lg scale-[1.02]" : "text-muted-foreground hover:bg-secondary/20"
              )}
            >
              <Clock size={18} />
              Ahora
            </button>
            <button
              onClick={() => handleTimeTypeChange("scheduled")}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-3 rounded-[22px] transition-all font-bold",
                orderTimeType === "scheduled" ? "bg-foreground text-background shadow-lg scale-[1.02]" : "text-muted-foreground hover:bg-secondary/20"
              )}
            >
              <CalendarIcon size={18} />
              Programada
            </button>
          </div>
          
          {orderTimeType === "scheduled" && (
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 flex items-center justify-between animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-bold uppercase">Programado para</p>
                  <p className="font-bold">
                    {format(new Date(scheduledDate + "T00:00:00"), "EEEE, d 'de' MMMM", { locale: es })} a las {scheduledTime}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setShowScheduleDialog(true)}
                className="text-primary text-sm font-bold bg-primary/10 px-3 py-1.5 rounded-full"
              >
                Cambiar
              </button>
            </div>
          )}
        </section>

        {/* Gift Option */}
        <section className="bg-card rounded-2xl p-5 border border-border/50 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
              <Gift size={24} className="text-foreground" />
            </div>
            <p className="font-bold text-lg">Se trata de un regalo</p>
          </div>
          <div className="w-12 h-6 bg-secondary rounded-full relative p-1 cursor-pointer">
            <div className="w-4 h-4 bg-background rounded-full" />
          </div>
        </section>

        {/* Payment Method */}
        <section className="bg-card rounded-2xl p-5 border border-border/50">
          <h3 className="font-bold mb-4">Método de Pago</h3>
          <div className="grid grid-cols-1 gap-3">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => setSelectedPayment(method.id)}
                className={cn(
                  "w-full flex items-center gap-4 p-5 rounded-2xl border-2 transition-all group",
                  selectedPayment === method.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/30"
                )}
              >
                <span className="text-3xl">{method.icon}</span>
                <div className="flex-1 text-left">
                  <p className="font-bold">{method.name}</p>
                  <p className="text-xs text-muted-foreground">{method.description}</p>
                </div>
                <div
                  className={cn(
                    "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors",
                    selectedPayment === method.id
                      ? "border-primary bg-primary"
                      : "border-muted-foreground group-hover:border-primary/50"
                  )}
                >
                  {selectedPayment === method.id && (
                    <Check size={14} className="text-primary-foreground stroke-[3]" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Order Summary */}
        <section className="bg-card rounded-2xl p-5 border border-border/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg">Resumen del Pedido</h3>
            <Link to="/cart" className="text-primary text-sm font-semi-bold">
              Editar
            </Link>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between font-medium">
              <span className="text-muted-foreground">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            
            {orderType === "delivery" && (
              <div className="flex justify-between items-center bg-orange-50/50 p-2 rounded-lg text-orange-700">
                <span className="flex items-center gap-2"><Truck size={14}/> Costo de Envío</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
            )}
            
            <div className="flex justify-between text-green-600 font-medium">
              <span>Descuento aplicado</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
            
            <div className="border-t border-dashed border-border mt-2 pt-4 flex justify-between items-center">
              <span className="text-lg font-bold">Total a pagar</span>
              <span className="text-2xl font-black text-primary animate-scale-in" key={total}>
                ${total.toFixed(2)}
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Pago Movil Dialog */}
      <Dialog open={showPMDialog} onOpenChange={setShowPMDialog}>
        <DialogContent className="rounded-3xl max-w-[90vw] md:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black text-center">Detalles de Pago</DialogTitle>
            <DialogDescription className="text-center pt-2">
              Por favor realiza el Pago Móvil a los siguientes datos y proporciona la referencia.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="bg-secondary/40 rounded-2xl p-5 space-y-4 border border-border/50">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Info size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Banco</p>
                  <p className="font-bold">{commerceInfo.pagoMovil.bank}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Phone size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Teléfono</p>
                  <p className="font-bold">{commerceInfo.pagoMovil.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <User size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">RIF / Cédula</p>
                  <p className="font-bold">{commerceInfo.pagoMovil.id}</p>
                </div>
              </div>
              <div className="pt-2 border-t border-border/50">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground font-medium">Monto a pagar</span>
                  <span className="text-xl font-black text-primary">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 px-1">
              <Label htmlFor="reference" className="font-bold text-base flex items-center gap-2">
                <Hash size={16} /> Número de Referencia (últimos 4-6 dígitos)
              </Label>
              <Input
                id="reference"
                placeholder="Ej. 123456"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
                className="rounded-2xl py-6 text-lg font-bold border-2 focus-visible:ring-primary h-14"
              />
            </div>
          </div>

          <DialogFooter className="sm:justify-center">
            <Button
              onClick={handlePMSubmit}
              disabled={!reference || isValidating}
              className="w-full py-8 rounded-2xl text-lg font-bold glow-primary disabled:opacity-50 h-14"
            >
              {isValidating ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="animate-spin" />
                  Validando con el comercio...
                </span>
              ) : (
                "Confirmar Pago"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Scheduling Dialog */}
      <Dialog open={showScheduleDialog} onOpenChange={setShowScheduleDialog}>
        <DialogContent className="rounded-3xl max-w-[90vw] md:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black text-center">Programar entrega</DialogTitle>
          </DialogHeader>

          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <Label className="font-bold text-base">Fecha de entrega</Label>
              <Select value={tempDate} onValueChange={setTempDate}>
                <SelectTrigger className="rounded-2xl py-6 text-lg font-bold border-2 h-14">
                  <SelectValue placeholder="Selecciona fecha" />
                </SelectTrigger>
                <SelectContent className="rounded-2xl">
                  <SelectItem value={format(new Date(), "yyyy-MM-dd")} className="font-medium">Hoy, {format(new Date(), "d 'de' MMMM", { locale: es })}</SelectItem>
                  <SelectItem value={format(addDays(new Date(), 1), "yyyy-MM-dd")} className="font-medium">Mañana, {format(addDays(new Date(), 1), "d 'de' MMMM", { locale: es })}</SelectItem>
                  <SelectItem value={format(addDays(new Date(), 2), "yyyy-MM-dd")} className="font-medium">{format(addDays(new Date(), 2), "EEEE, d 'de' MMMM", { locale: es })}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="font-bold text-base">Hora de entrega</Label>
              <Select value={tempTime} onValueChange={setTempTime}>
                <SelectTrigger className="rounded-2xl py-6 text-lg font-bold border-2 h-14">
                  <SelectValue placeholder="Selecciona hora" />
                </SelectTrigger>
                <SelectContent className="rounded-2xl">
                  {["11:00", "12:00", "13:00", "14:00", "15:00", "15:30", "16:00", "17:00", "18:00", "19:00", "20:00"].map((t) => (
                    <SelectItem key={t} value={t} className="font-medium">
                      {t} {parseInt(t) >= 12 ? "pm" : "am"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter className="flex flex-col gap-3 sm:flex-col sm:justify-center">
            <Button
              onClick={handleScheduleConfirm}
              className="w-full py-7 rounded-2xl text-lg font-bold glow-primary h-14"
            >
              Listo
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                setShowScheduleDialog(false);
                if (orderTimeType === "now") setOrderTimeType("now");
              }}
              className="w-full py-7 rounded-2xl text-lg font-bold h-14"
            >
              Cancelar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Order Button - Shifted up for BottomNav */}
      <div className="fixed bottom-[80px] left-0 right-0 z-40 flex justify-center px-4 pointer-events-none mb-safe">
        <div className="w-full max-w-lg pointer-events-auto">
          <Button
            onClick={handleOrderAction}
            disabled={isProcessing}
            className="w-full py-7 rounded-[24px] text-lg font-bold glow-primary disabled:animate-none group h-14 shadow-2xl"
          >
            {isProcessing ? (
              <span className="flex items-center gap-2">
                <Loader2 className="animate-spin" />
                Procesando...
              </span>
            ) : (
              <span className="flex items-center justify-between w-full px-2">
                <span>{orderType === "delivery" ? "Pedir Ahora" : "Confirmar Retiro"}</span>
                <span>${total.toFixed(2)}</span>
              </span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
