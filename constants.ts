import { Category, MenuItem } from './types';

export const RESTAURANT_NAME = "AURUM";
export const KITCHEN_WHATSAPP = "15550123456"; // Replace with actual number
export const CURRENCY_SYMBOL = "$";

export const CATEGORIES: Category[] = [
  { id: 1, name: "Featured", slug: "featured" },
  { id: 2, name: "Starters", slug: "starters" },
  { id: 3, name: "Main Course", slug: "main-course" },
  { id: 4, name: "Desserts", slug: "desserts" },
  { id: 5, name: "Drinks", slug: "drinks" },
];

export const MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    id: 101,
    name: "Truffle Arancini",
    description: "Crispy risotto balls infused with black truffle oil, served with garlic aioli.",
    price: 14.00,
    image: "https://picsum.photos/800/600?random=1",
    veg: true,
    categoryId: 2,
    isFeatured: true
  },
  {
    id: 102,
    name: "Wagyu Beef Carpaccio",
    description: "Thinly sliced raw wagyu, parmesan shavings, capers, and truffle balsamico.",
    price: 22.00,
    image: "https://picsum.photos/800/600?random=2",
    veg: false,
    categoryId: 2
  },
  {
    id: 103,
    name: "Golden Calamari",
    description: "Tempura battered squid rings, dusted with paprika, lemon zest dip.",
    price: 16.00,
    image: "https://picsum.photos/800/600?random=3",
    veg: false,
    categoryId: 2
  },

  // Main Course
  {
    id: 201,
    name: "Lobster Thermidor",
    description: "Whole lobster grilled with herb butter, creamy cognac sauce, and seasonal greens.",
    price: 45.00,
    image: "https://picsum.photos/800/600?random=4",
    veg: false,
    categoryId: 3,
    isFeatured: true
  },
  {
    id: 202,
    name: "Wild Mushroom Risotto",
    description: "Arborio rice, porcini mushrooms, parmesan crisp, and truffle oil drizzle.",
    price: 26.00,
    image: "https://picsum.photos/800/600?random=5",
    veg: true,
    categoryId: 3
  },
  {
    id: 203,
    name: "Herb Crusted Lamb Rack",
    description: "Served pink with fondant potatoes, pea purée, and red wine jus.",
    price: 38.00,
    image: "https://picsum.photos/800/600?random=6",
    veg: false,
    categoryId: 3
  },

  // Desserts
  {
    id: 301,
    name: "24K Chocolate Dome",
    description: "Dark chocolate sphere, gold leaf, warm caramel sauce pour-over.",
    price: 18.00,
    image: "https://picsum.photos/800/600?random=7",
    veg: true,
    categoryId: 4,
    isFeatured: true
  },
  {
    id: 302,
    name: "Classic Tiramisu",
    description: "Savoiardi biscuits soaked in espresso, mascarpone cream, cocoa dust.",
    price: 12.00,
    image: "https://picsum.photos/800/600?random=8",
    veg: true,
    categoryId: 4
  },

  // Drinks
  {
    id: 401,
    name: "Aurum Signature Cocktail",
    description: "Vodka, elderflower liqueur, lemon, topped with champagne and gold dust.",
    price: 16.00,
    image: "https://picsum.photos/800/600?random=9",
    veg: true,
    categoryId: 5
  },
  {
    id: 402,
    name: "Sparkling Water (750ml)",
    description: "San Pellegrino",
    price: 6.00,
    image: "https://picsum.photos/800/600?random=10",
    veg: true,
    categoryId: 5
  }
];