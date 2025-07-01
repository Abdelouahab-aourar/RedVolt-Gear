import NavBar from './NavBar/NavBar.tsx'
import Home from './Home/Home.tsx'
import React, { useState } from "react";
import type { ProductProps } from './Products/Products.tsx';
import Slides from './Slides/Slides.tsx'
import Cart from './Cart/Cart.tsx'
function App() {
  const [cartItems, setCartItems] = useState<ProductProps[]>([]);
  const handleAddToCart = (product: ProductProps) => {
    setCartItems((prevItems) => [...prevItems, product]);};

  return (
    <>
    <NavBar/>
    <Home/>
    <Slides onAddToCart={handleAddToCart}/>
    <Cart items={cartItems}/>
    </>
  )
}

export default App