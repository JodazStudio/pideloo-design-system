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
    cuisine: "Mexican Street Food",
    rating: 4.8,
    reviewCount: 324,
    distance: "0.3 mi",
    deliveryTime: "15-25 min",
    deliveryFee: "$1.99",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop",
    featured: true,
    tags: ["🔥 Hot", "⭐ Top Rated"],
  },
  {
    id: "2",
    name: "Noodle House",
    cuisine: "Asian Fusion",
    rating: 4.6,
    reviewCount: 189,
    distance: "0.5 mi",
    deliveryTime: "20-30 min",
    deliveryFee: "$2.49",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
    tags: ["🍜 Noodles"],
  },
  {
    id: "3",
    name: "Burger Republic",
    cuisine: "American Grill",
    rating: 4.7,
    reviewCount: 412,
    distance: "0.8 mi",
    deliveryTime: "20-35 min",
    deliveryFee: "$2.99",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    featured: true,
    tags: ["🍔 Burgers", "🆕 New"],
  },
  {
    id: "4",
    name: "Sushi Zen",
    cuisine: "Japanese",
    rating: 4.9,
    reviewCount: 567,
    distance: "1.2 mi",
    deliveryTime: "25-40 min",
    deliveryFee: "$3.49",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop",
    tags: ["🍣 Sushi", "⭐ Top Rated"],
  },
  {
    id: "5",
    name: "Pizza Inferno",
    cuisine: "Italian",
    rating: 4.5,
    reviewCount: 298,
    distance: "0.6 mi",
    deliveryTime: "25-35 min",
    deliveryFee: "$1.99",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
    tags: ["🍕 Pizza"],
  },
  {
    id: "6",
    name: "Green Bowl",
    cuisine: "Healthy & Bowls",
    rating: 4.4,
    reviewCount: 156,
    distance: "0.4 mi",
    deliveryTime: "15-25 min",
    deliveryFee: "$2.49",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
    tags: ["🥗 Healthy", "🌱 Vegan"],
  },
  {
    id: "7",
    name: "Wings & Things",
    cuisine: "American",
    rating: 4.3,
    reviewCount: 234,
    distance: "0.9 mi",
    deliveryTime: "20-30 min",
    deliveryFee: "$2.99",
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&h=300&fit=crop",
    tags: ["🍗 Wings"],
  },
  {
    id: "8",
    name: "Curry Palace",
    cuisine: "Indian",
    rating: 4.7,
    reviewCount: 378,
    distance: "1.0 mi",
    deliveryTime: "25-40 min",
    deliveryFee: "$2.49",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
    tags: ["🍛 Curry", "🌶️ Spicy"],
  },
];

export const menuItems: Record<string, MenuItem[]> = {
  "1": [
    {
      id: "m1",
      name: "Street Tacos",
      description: "Three authentic corn tortillas with carne asada, cilantro, onions, and salsa verde",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=200&fit=crop",
      category: "Tacos",
      popular: true,
    },
    {
      id: "m2",
      name: "Burrito Supreme",
      description: "Massive flour tortilla stuffed with rice, beans, cheese, sour cream, and your choice of protein",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop",
      category: "Burritos",
      popular: true,
    },
    {
      id: "m3",
      name: "Loaded Nachos",
      description: "Crispy tortilla chips with melted cheese, jalapeños, guacamole, and pico de gallo",
      price: 10.99,
      image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=300&h=200&fit=crop",
      category: "Sides",
    },
    {
      id: "m4",
      name: "Quesadilla",
      description: "Grilled flour tortilla with melted cheese and your choice of filling",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=300&h=200&fit=crop",
      category: "Sides",
    },
    {
      id: "m5",
      name: "Churros",
      description: "Crispy fried dough coated in cinnamon sugar with chocolate dipping sauce",
      price: 6.99,
      image: "https://images.unsplash.com/photo-1624371414361-e670edf4898f?w=300&h=200&fit=crop",
      category: "Desserts",
    },
    {
      id: "m6",
      name: "Horchata",
      description: "Traditional rice drink with cinnamon and vanilla",
      price: 3.99,
      image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=300&h=200&fit=crop",
      category: "Drinks",
    },
  ],
};

export const categories = [
  { id: "all", name: "All", icon: "🔥" },
  { id: "mexican", name: "Mexican", icon: "🌮" },
  { id: "asian", name: "Asian", icon: "🍜" },
  { id: "american", name: "American", icon: "🍔" },
  { id: "italian", name: "Italian", icon: "🍕" },
  { id: "healthy", name: "Healthy", icon: "🥗" },
  { id: "indian", name: "Indian", icon: "🍛" },
  { id: "desserts", name: "Desserts", icon: "🍰" },
];

export const onboardingSteps = {
  user: [
    {
      title: "Welcome to Pideloo",
      subtitle: "Discover local flavors from your favorite creators",
      icon: "👋",
    },
    {
      title: "Set Your Location",
      subtitle: "We'll find the best eats near you",
      icon: "📍",
    },
    {
      title: "Your Preferences",
      subtitle: "Tell us what you love to eat",
      icon: "🍽️",
    },
    {
      title: "You're All Set!",
      subtitle: "Start exploring and order your first meal",
      icon: "🎉",
    },
  ],
  business: [
    {
      title: "Join Pideloo",
      subtitle: "Bring your business to thousands of hungry customers",
      icon: "🏪",
    },
    {
      title: "Business Details",
      subtitle: "Tell us about your restaurant or food business",
      icon: "📋",
    },
    {
      title: "Set Up Your Menu",
      subtitle: "Add your delicious items with photos and prices",
      icon: "📱",
    },
    {
      title: "Payment Setup",
      subtitle: "Connect your bank to receive payments",
      icon: "💳",
    },
    {
      title: "Go Live!",
      subtitle: "Your business is ready to accept orders",
      icon: "🚀",
    },
  ],
};
