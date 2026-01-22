import { useParams, useNavigate, Link } from "react-router-dom";
import { businesses } from "@/data/mockData";
import { BusinessCard } from "@/components/BusinessCard";
import { BottomNav } from "@/components/BottomNav";
import { Header } from "@/components/Header";

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
      <Header showBack title={currentCategory} />

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
