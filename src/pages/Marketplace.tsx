import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { BusinessCard } from "@/components/BusinessCard";
import { CategoryPill } from "@/components/CategoryPill";
import { BottomNav } from "@/components/BottomNav";
import { businesses, categories } from "@/data/mockData";
import pidelooLogo from "@/assets/pideloo-logo.png";

const Marketplace = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBusinesses = businesses.filter((business) => {
    const matchesSearch =
      business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      business.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const featuredBusinesses = filteredBusinesses.filter((b) => b.featured);
  const regularBusinesses = filteredBusinesses.filter((b) => !b.featured);

  return (
    <div className="pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background safe-top">
        <div className="px-4 pt-4 pb-2">
          {/* Logo & Welcome */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img src={pidelooLogo} alt="Pideloo" className="w-10 h-10 rounded-xl" />
              <div>
                <p className="text-sm text-muted-foreground">Buenas noches,</p>
                <h1 className="font-bold text-foreground">¿Tienes hambre?</h1>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
              <span className="text-lg">👤</span>
            </div>
          </div>

          {/* Search */}
          <SearchBar onSearch={setSearchQuery} />
        </div>

        {/* Categories */}
        <div className="px-4 py-3 overflow-x-auto no-scrollbar">
          <div className="flex gap-2">
            {categories.map((category) => (
              <CategoryPill
                key={category.id}
                {...category}
                isActive={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              />
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4">
        {/* Hero Banner */}
        <section className="relative rounded-3xl overflow-hidden mb-6 bg-gradient-to-br from-primary/20 via-card to-accent/10 p-6">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-2">
              Descubre Sabores Locales.
              <br />
              <span className="text-gradient-primary">Apoya a los Creadores Locales.</span>
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Pide de los mejores restaurantes cerca de ti
            </p>
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-2xl font-bold text-sm glow-primary transition-all hover:scale-105">
              Explora Ahora
            </button>
          </div>
          <div className="absolute right-0 bottom-0 w-32 h-32 opacity-30">
            <div className="w-full h-full bg-accent rounded-full blur-3xl" />
          </div>
        </section>

        {/* Featured Section */}
        {featuredBusinesses.length > 0 && (
          <section className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">
                🔥 <span className="text-gradient-primary">Destacados</span>
              </h3>
              <button className="text-sm text-primary font-medium">Ver todos</button>
            </div>
            <div className="grid gap-4">
              {featuredBusinesses.map((business) => (
                <BusinessCard key={business.id} business={business} />
              ))}
            </div>
          </section>
        )}

        {/* All Restaurants */}
        <section className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">Todos los Restaurantes</h3>
            <button className="text-sm text-primary font-medium">Filtrar</button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {regularBusinesses.map((business) => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Marketplace;
