import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, Clock, MapPin, Heart } from "lucide-react";
import { businesses, menuItems } from "@/data/mockData";
import { MenuItemCard } from "@/components/MenuItemCard";
import { FloatingCart } from "@/components/FloatingCart";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CartItem {
  id: string;
  quantity: number;
  price: number;
}

const RestaurantDetail = () => {
  const { id } = useParams();
  const business = businesses.find((b) => b.id === id) || businesses[0];
  const items = menuItems[business.id] || menuItems["1"];
  
  const [cart, setCart] = useState<Record<string, CartItem>>({});
  const [activeCategory, setActiveCategory] = useState("all");
  const [isLiked, setIsLiked] = useState(false);

  const menuCategories = ["all", ...new Set(items.map((item) => item.category))];

  const filteredItems =
    activeCategory === "all"
      ? items
      : items.filter((item) => item.category === activeCategory);

  const addToCart = (itemId: string, price: number) => {
    setCart((prev) => ({
      ...prev,
      [itemId]: {
        id: itemId,
        quantity: (prev[itemId]?.quantity || 0) + 1,
        price,
      },
    }));
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[itemId]?.quantity > 1) {
        newCart[itemId].quantity -= 1;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const cartItemCount = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = Object.values(cart).reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Hero Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={business.image}
          alt={business.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        
        {/* Top Actions */}
        <div className="absolute top-4 left-4 right-4 flex justify-between safe-top">
          <Link
            to="/"
            className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center"
          >
            <ArrowLeft size={20} />
          </Link>
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center"
          >
            <Heart
              size={20}
              className={cn(
                "transition-colors",
                isLiked && "fill-primary text-primary"
              )}
            />
          </button>
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="px-4 -mt-8 relative z-10">
        <div className="bg-card rounded-3xl p-5 border border-border/50">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h1 className="text-2xl font-bold">{business.name}</h1>
              <p className="text-muted-foreground">{business.cuisine}</p>
            </div>
            <div className="flex items-center gap-1 bg-primary/10 px-3 py-1.5 rounded-xl">
              <Star size={16} className="text-primary fill-primary" />
              <span className="font-bold text-primary">{business.rating}</span>
              <span className="text-xs text-muted-foreground">
                ({business.reviewCount})
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              <span>{business.deliveryTime}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={14} className="text-accent" />
              <span>{business.distance}</span>
            </div>
            <span className="text-accent font-medium">{business.deliveryFee} delivery</span>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="px-4 py-4 overflow-x-auto no-scrollbar">
        <div className="flex gap-2">
          {menuCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              )}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-4 space-y-4">
        {filteredItems.map((item) => (
          <MenuItemCard
            key={item.id}
            item={item}
            quantity={cart[item.id]?.quantity || 0}
            onAdd={() => addToCart(item.id, item.price)}
            onRemove={() => removeFromCart(item.id)}
          />
        ))}
      </div>

      {/* Floating Cart */}
      <FloatingCart itemCount={cartItemCount} total={cartTotal} />
    </div>
  );
};

export default RestaurantDetail;
