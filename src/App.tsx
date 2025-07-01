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
    <section id='home'>
      <Home/>
    </section>
    <section id='products'>
      <Slides onAddToCart={handleAddToCart}/>
    </section>
    <section id='cart'>
      <Cart items={cartItems.filter(item => !item.isRemoved)} onRemoveFromCart={handleRemoveFromCart} />
    </section>
    <section id='contact'>      
    <Contact/>
    </section>
    </>
  )
}

export default App