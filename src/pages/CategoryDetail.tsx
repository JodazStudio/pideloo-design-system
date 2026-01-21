import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { businesses } from "@/data/mockData";
import { BusinessCard } from "@/components/BusinessCard";
import { BottomNav } from "@/components/BottomNav";

const CategoryDetail = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const navigate = useNavigate();

  // React Router decodes params automatically
  const currentCategory = categoryName || "";
  
  // Filter businesses that have a tag matching the category name
  const filteredBusinesses = businesses.filter((business) =>
    business.tags.some((tag) => 
      tag.toLowerCase().includes(currentCategory.toLowerCase()) || 
      currentCategory.toLowerCase().includes(tag.toLowerCase().replace(/[^\w\s]/gi, '').trim())
    )
  );

  return (
    <div className="pb-24 animate-in fade-in duration-500">
      {/* Header with Breadcrumb Pattern */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg safe-top border-b border-border/10">
        <div className="px-4 py-4 flex items-center gap-3">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-secondary hover:bg-secondary/80 transition-colors"
          >
            <ArrowLeft className="text-foreground" size={20} />
          </button>
          
          <nav className="flex items-center gap-2 text-sm font-medium">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="text-muted-foreground/30" />
            <span className="text-primary font-bold">
              {currentCategory}
            </span>
          </nav>
        </div>
      </header>

      <main className="px-4 mt-6">
        <div className="mb-8">
          <h1 className="text-2xl font-black text-foreground">
            {currentCategory}
          </h1>
          <p className="text-muted-foreground">
            {filteredBusinesses.length} {filteredBusinesses.length === 1 ? 'restaurante disponible' : 'restaurantes disponibles'}
          </p>
        </div>

        {filteredBusinesses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBusinesses.map((business) => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-4 text-3xl">
              🔍
            </div>
            <h2 className="text-xl font-bold mb-2">No se encontraron resultados</h2>
            <p className="text-muted-foreground max-w-xs mx-auto">
              No encontramos negocios en la categoría "{currentCategory}" por el momento.
            </p>
            <Link 
              to="/" 
              className="mt-6 bg-primary text-primary-foreground px-6 py-2 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform"
            >
              Volver al inicio
            </Link>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default CategoryDetail;
