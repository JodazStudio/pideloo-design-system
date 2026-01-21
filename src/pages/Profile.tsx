import { BottomNav } from "@/components/BottomNav";
import { ChevronRight, User, MapPin, CreditCard, Heart, Bell, HelpCircle, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  { icon: User, label: "Account Settings", path: "/settings" },
  { icon: MapPin, label: "Saved Addresses", path: "/settings" },
  { icon: CreditCard, label: "Payment Methods", path: "/settings" },
  { icon: Heart, label: "Favorites", path: "/settings" },
  { icon: Bell, label: "Notifications", path: "/settings" },
  { icon: HelpCircle, label: "Help & Support", path: "/settings" },
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="px-4 pt-8 pb-6 safe-top">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl">
            👤
          </div>
          <div>
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-muted-foreground">john.doe@email.com</p>
          </div>
        </div>
      </header>

      {/* Stats */}
      <div className="px-4 mb-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-card rounded-2xl p-4 text-center border border-border/50">
            <p className="text-2xl font-bold text-primary">12</p>
            <p className="text-xs text-muted-foreground">Orders</p>
          </div>
          <div className="bg-card rounded-2xl p-4 text-center border border-border/50">
            <p className="text-2xl font-bold text-accent">5</p>
            <p className="text-xs text-muted-foreground">Favorites</p>
          </div>
          <div className="bg-card rounded-2xl p-4 text-center border border-border/50">
            <p className="text-2xl font-bold">$342</p>
            <p className="text-xs text-muted-foreground">Total Spent</p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <main className="px-4">
        <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
          {menuItems.map((item, index) => (
            <Link
              key={item.label}
              to={item.path}
              className="flex items-center gap-4 p-4 hover:bg-secondary/50 transition-colors border-b border-border/50 last:border-b-0"
            >
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                <item.icon size={20} className="text-foreground" />
              </div>
              <span className="flex-1 font-medium">{item.label}</span>
              <ChevronRight size={20} className="text-muted-foreground" />
            </Link>
          ))}
        </div>

        {/* Logout */}
        <button className="w-full mt-6 flex items-center justify-center gap-2 p-4 rounded-2xl border border-destructive/50 text-destructive hover:bg-destructive/10 transition-colors">
          <LogOut size={20} />
          <span className="font-medium">Log Out</span>
        </button>
      </main>

      <BottomNav />
    </div>
  );
};

export default Profile;
