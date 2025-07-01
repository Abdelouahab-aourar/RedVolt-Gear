import NavBar from './NavBar/NavBar.tsx'
import Home from './Home/Home.tsx'
import { useState } from "react";
import type { ProductProps } from './Products/Products.tsx';
import Slides from './Slides/Slides.tsx'
import Cart from './Cart/Cart.tsx'
import Contact from './Contact/Contact.tsx';
interface CartItem extends ProductProps {
  cartId: string;
  isRemoved: boolean;
}
function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
   const handleAddToCart = (product: ProductProps) => {
  const cartItem = {
    ...product,
    cartId: crypto.randomUUID(), // Unique ID for each item
    isRemoved: false,
  };
  setCartItems(prev => [...prev, cartItem]);
};

const handleRemoveFromCart = (cartId: string) => {
  setCartItems(prev =>
    prev.map(item =>
      item.cartId === cartId ? { ...item, isRemoved: true } : item
    )
  );
};
  return (
    <>
    <NavBar/>
    <Home/>
    <Slides onAddToCart={handleAddToCart}/>
    <Cart items={cartItems.filter(item => !item.isRemoved)} onRemoveFromCart={handleRemoveFromCart} />
    <Contact/>
    </>
  )
}

export default App