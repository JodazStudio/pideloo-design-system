import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchBar } from "@/components/SearchBar";
import { BusinessCard } from "@/components/BusinessCard";
import { CategoryPill } from "@/components/CategoryPill";
import { BottomNav } from "@/components/BottomNav";
import { businesses, categories } from "@/data/mockData";
import pidelooLogo from "@/assets/pideloo-logo.png";
import { AppLayout } from "@/components/AppLayout";

const RestaurantRow = ({ title, items, category }: { title: string; items: any[]; category?: string }) => {
  const navigate = useNavigate();
  if (items.length === 0) return null;

  return (
    <section className="mb-10 last:mb-0">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-foreground">
          {title}
        </h3>
        {category && (
          <button 
            onClick={() => navigate(`/categories/${encodeURIComponent(category)}`)}
            className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors bg-primary/10 px-3 py-1.5 rounded-full lg:bg-transparent lg:px-0"
          >
            Ver más
          </button>
        )}
      </div>
      
      {/* Mobile: Carousel (5 items max usually) | Desktop: Grid (4 items) */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 md:hidden">
          {items.slice(0, 5).map((business) => (
            <div key={business.id} className="min-w-[280px] max-w-[280px]">
              <BusinessCard business={business} />
            </div>
          ))}
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.slice(0, 4).map((business) => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Marketplace = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredBusinesses = businesses.filter((business) => {
    const matchesSearch =
      business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      business.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const groupByCategory = (tag: string) => 
    filteredBusinesses.filter(b => b.tags.some(t => t.includes(tag)));

  const sections = [
    { title: "Dulces 🍰", items: groupByCategory("Dulces"), category: "Dulces" },
    { title: "Desayunos 🍳", items: groupByCategory("Desayunos"), category: "Desayunos" },
    { title: "Comida Rápida 🍔", items: groupByCategory("Comida Rápida"), category: "Comida Rápida" },
    { title: "Almuerzos 🍱", items: groupByCategory("Almuerzos"), category: "Almuerzos" },
    { title: "Todos los Restaurantes", items: filteredBusinesses },
  ];

  const handleCategoryClick = (category: any) => {
    if (category.id === "all") {
      setActiveCategory("all");
    } else {
      navigate(`/categories/${encodeURIComponent(category.name)}`);
    }
  };

  return (
    <div className="pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg safe-top border-b border-border/10">
        <div className="px-4 pt-4 pb-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img src={pidelooLogo} alt="Pideloo" className="w-12 h-12 rounded-[22px] shadow-lg border border-border/20" />
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">¡Hola, hambre!</p>
                <h1 className="text-lg font-extrabold text-foreground leading-tight">¿Qué pedimos hoy?</h1>
              </div>
            </div>
            <div className="w-11 h-11 rounded-2xl bg-secondary hover:bg-secondary/80 transition-colors flex items-center justify-center border border-border/30 cursor-pointer">
              <span className="text-xl">👤</span>
            </div>
          </div>

          <SearchBar onSearch={setSearchQuery} />
        </div>
      </header>

      <main className="px-4 mt-6">
        <section className="relative rounded-[32px] overflow-hidden mb-10 bg-gradient-to-br from-primary via-primary/90 to-orange-600 p-8 shadow-2xl shadow-primary/20">
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-black mb-3 text-white">
              Explora Sabores<br />
              <span className="text-accent">Sin Límites.</span>
            </h2>
            <p className="text-white/80 font-medium mb-6 max-w-xs">
              Los mejores restaurantes locales, directamente a tu puerta.
            </p>
            <button className="bg-white text-primary px-8 py-3.5 rounded-2xl font-black text-sm shadow-xl hover:scale-105 transition-transform active:scale-95">
              ¡ORDENAR AHORA!
            </button>
          </div>
          <div className="absolute right-[-10%] top-[-10%] w-64 h-64 bg-accent/20 rounded-full blur-[100px]" />
          <div className="absolute left-[-5%] bottom-[-5%] w-48 h-48 bg-white/10 rounded-full blur-[80px]" />
        </section>

        {!searchQuery && (
          <div className="mb-10 overflow-x-auto no-scrollbar -mx-4 px-4">
            <div className="flex gap-3">
              {categories.map((category) => (
                <CategoryPill
                  key={category.id}
                  {...category}
                  isActive={activeCategory === category.id}
                  onClick={() => handleCategoryClick(category)}
                />
              ))}
            </div>
          </div>
        )}

        <div className="space-y-4">
          {sections.map((section, idx) => (
            <RestaurantRow key={idx} title={section.title} items={section.items} category={section.category} />
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Marketplace;
