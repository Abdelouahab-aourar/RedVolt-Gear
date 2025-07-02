import React, { useState, Suspense } from "react";
import NavBar from './NavBar/NavBar.tsx';
import Home from './Home/Home.tsx';
import { motion } from 'framer-motion';
import type { ProductProps } from './Products/Products.tsx';

const Slides = React.lazy(() => import('./Slides/Slides.tsx'));
const Cart = React.lazy(() => import('./Cart/Cart.tsx'));
const Contact = React.lazy(() => import('./Contact/Contact.tsx'));

interface CartItem extends ProductProps {
  cartId: string;
  isRemoved: boolean;
}

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (product: ProductProps) => {
    const cartItem = {
      ...product,
      cartId: crypto.randomUUID(),
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

  const fadeIn = {
    hidden: { opacity: 0, x: 400 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  };

  return (
    <>
      <NavBar />
      
      <section id="home">
        <Home />
      </section>

      <Suspense fallback={<div>Loading...</div>}>

        <motion.section
          id="products"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Slides onAddToCart={handleAddToCart} />
        </motion.section>

        <motion.section
          id="cart"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Cart
            items={cartItems.filter(item => !item.isRemoved)}
            onRemoveFromCart={handleRemoveFromCart}
          />
        </motion.section>

        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Contact />
        </motion.section>

      </Suspense>
    </>
  );
}

export default App;
