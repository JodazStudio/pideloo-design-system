// Mock data for Pideloo marketplace prototype

export interface Business {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  reviewCount: number;
  distance: string;
  deliveryTime: string;
  deliveryFee: string;
  image: string;
  featured?: boolean;
  tags: string[];
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  popular?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export const businesses: Business[] = [
  {
    id: "1",
    name: "Taco Fuego",
    cuisine: "Comida Callejera Mexicana",
    rating: 4.8,
    reviewCount: 324,
    distance: "0.5 km",
    deliveryTime: "15-25 min",
    deliveryFee: "$1.99",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop",
    featured: true,
    tags: ["🔥 Picante", "Comida Rápida", "Almuerzos"],
  },
  {
    id: "2",
    name: "Noodle House",
    cuisine: "Fusión Asiática",
    rating: 4.6,
    reviewCount: 189,
    distance: "0.8 km",
    deliveryTime: "20-30 min",
    deliveryFee: "$2.49",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
    tags: ["🍜 Fideos", "Almuerzos"],
  },
  {
    id: "3",
    name: "Burger Republic",
    cuisine: "Parrilla Americana",
    rating: 4.7,
    reviewCount: 412,
    distance: "1.2 km",
    deliveryTime: "20-35 min",
    deliveryFee: "$2.99",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    featured: true,
    tags: ["🍔 Hamburguesas", "Comida Rápida"],
  },
  {
    id: "4",
    name: "Sushi Zen",
    cuisine: "Japonesa",
    rating: 4.9,
    reviewCount: 567,
    distance: "2.0 km",
    deliveryTime: "25-40 min",
    deliveryFee: "$3.49",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop",
    tags: ["🍣 Sushi", "Almuerzos"],
  },
  {
    id: "5",
    name: "Pizza Inferno",
    cuisine: "Italiana",
    rating: 4.5,
    reviewCount: 298,
    distance: "1.0 km",
    deliveryTime: "25-35 min",
    deliveryFee: "$1.99",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
    tags: ["🍕 Pizza", "Comida Rápida", "Almuerzos"],
  },
  {
    id: "6",
    name: "Green Bowl",
    cuisine: "Saludable y Bowls",
    rating: 4.4,
    reviewCount: 156,
    distance: "0.6 km",
    deliveryTime: "15-25 min",
    deliveryFee: "$2.49",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
    tags: ["🥗 Saludable", "Almuerzos"],
  },
  {
    id: "7",
    name: "Wings & Things",
    cuisine: "Americana",
    rating: 4.3,
    reviewCount: 234,
    distance: "1.5 km",
    deliveryTime: "20-30 min",
    deliveryFee: "$2.99",
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&h=300&fit=crop",
    tags: ["🍗 Alitas", "Comida Rápida"],
  },
  {
    id: "8",
    name: "Sweet Dreams",
    cuisine: "Repostería",
    rating: 4.9,
    reviewCount: 128,
    distance: "0.4 km",
    deliveryTime: "10-20 min",
    deliveryFee: "$1.49",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
    tags: ["🍰 Dulces", "Postres"],
  },
  {
    id: "9",
    name: "Donut Heaven",
    cuisine: "Donas y Café",
    rating: 4.7,
    reviewCount: 89,
    distance: "1.1 km",
    deliveryTime: "15-25 min",
    deliveryFee: "$1.99",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400&h=300&fit=crop",
    tags: ["🍩 Dulces", "Desayunos"],
  },
  {
    id: "10",
    name: "Breakfast Club",
    cuisine: "Desayunos Americanos",
    rating: 4.6,
    reviewCount: 245,
    distance: "0.9 km",
    deliveryTime: "20-35 min",
    deliveryFee: "$2.49",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop",
    tags: ["🍳 Desayunos", "Café"],
  },
  {
    id: "11",
    name: "Arepa Power",
    cuisine: "Comida Venezolana",
    rating: 4.8,
    reviewCount: 512,
    distance: "0.3 km",
    deliveryTime: "10-20 min",
    deliveryFee: "$0.99",
    image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=400&h=300&fit=crop",
    tags: ["🫓 Desayunos", "Comida Rápida", "Almuerzos"],
  },
  {
    id: "12",
    name: "Pastry Passion",
    cuisine: "Panadería Francesa",
    rating: 4.8,
    reviewCount: 167,
    distance: "1.4 km",
    deliveryTime: "15-25 min",
    deliveryFee: "$2.99",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop",
    tags: ["🥐 Dulces", "Desayunos"],
  },
];

export const menuItems: Record<string, MenuItem[]> = {
  "1": [
    {
      id: "m1",
      name: "Tacos Callejeros",
      description: "Tres auténticas tortillas de maíz con carne asada, cilantro, cebolla y salsa verde",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=200&fit=crop",
      category: "Tacos",
      popular: true,
    },
    {
      id: "m2",
      name: "Burrito Supremo",
      description: "Enorme tortilla de harina rellena con arroz, frijoles, queso, crema agria y tu elección de proteína",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop",
      category: "Burritos",
      popular: true,
    },
    {
      id: "m3",
      name: "Nachos Cargados",
      description: "Crujientes totopos con queso fundido, jalapeños, guacamole y pico de gallo",
      price: 10.99,
      image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=300&h=200&fit=crop",
      category: "Acompañantes",
    },
    {
      id: "m4",
      name: "Quesadilla",
      description: "Tortilla de harina a la parrilla con queso fundido y tu elección de relleno",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=300&h=200&fit=crop",
      category: "Acompañantes",
    },
    {
      id: "m5",
      name: "Churros",
      description: "Masa frita crujiente cubierta de azúcar y canela con salsa de chocolate",
      price: 6.99,
      image: "https://images.unsplash.com/photo-1624371414361-e670edf4898f?w=300&h=200&fit=crop",
      category: "Postres",
    },
    {
      id: "m6",
      name: "Horchata",
      description: "Bebida tradicional de arroz con canela y vainilla",
      price: 3.99,
      image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=300&h=200&fit=crop",
      category: "Bebidas",
    },
  ],
};

export const categories = [
  { id: "all", name: "Todos", icon: "🔥" },
  { id: "mexican", name: "Mexicana", icon: "🌮" },
  { id: "asian", name: "Asiática", icon: "🍜" },
  { id: "american", name: "Americana", icon: "🍔" },
  { id: "italian", name: "Italiana", icon: "🍕" },
  { id: "healthy", name: "Saludable", icon: "🥗" },
  { id: "indian", name: "India", icon: "🍛" },
  { id: "desserts", name: "Postres", icon: "🍰" },
];

export const onboardingSteps = {
  user: [
    {
      title: "Bienvenido a Pideloo",
      subtitle: "Descubre sabores locales de tus creadores favoritos",
      icon: "👋",
    },
    {
      title: "Tu Ubicación",
      subtitle: "Encontraremos los mejores lugares cerca de ti",
      icon: "📍",
    },
    {
      title: "Tus Preferencias",
      subtitle: "Cuéntanos qué te encanta comer",
      icon: "🍽️",
    },
    {
      title: "¡Todo Listo!",
      subtitle: "Empieza a explorar y pide tu primera comida",
      icon: "🎉",
    },
  ],
  business: [
    {
      title: "Únete a Pideloo",
      subtitle: "Lleva tu negocio a miles de clientes hambrientos",
      icon: "🏪",
    },
    {
      title: "Detalles del Negocio",
      subtitle: "Cuéntanos sobre tu restaurante o negocio de comida",
      icon: "📋",
    },
    {
      title: "Configura tu Menú",
      subtitle: "Añade tus platos con fotos y precios",
      icon: "📱",
    },
    {
      title: "Configuración de Pago",
      subtitle: "Conecta tu cuenta para recibir pagos",
      icon: "💳",
    },
    {
      title: "¡En Vivo!",
      subtitle: "Tu negocio ya está listo para recibir pedidos",
      icon: "🚀",
    },
  ],
};
