export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  veg: boolean;
  categoryId: number;
  isFeatured?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface OrderContextType {
  tableNumber: string;
  setTableNumber: (num: string) => void;
  cart: CartItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
  cartTotal: number;
  itemCount: number;
}
