import NavBar from '../NavBar/NavBar.tsx'
import Home from '../Home/Home.tsx'
// import Products from '../Products/Products.tsx'
import styles from './App.module.css'
import Slides from '../Slides/Slides.tsx'
// import airbuds from '../assets/airbuds.png'
// import hdd from '../assets/hdd.png'
// import headset from '../assets/headset.png'
// import keyboard from '../assets/keyboard.png'
// import mouse from '../assets/mouse.png'
// import smartWatch from '../assets/smart-watch.png'
function App() {

  return (
    <>
    <NavBar/>
    <Home/>
    <h1 className={styles.OurProducts}>Our Products</h1>
    {/* <div className={styles.productsContainer}>
      <Products title={"Wireless Earbuds"} image = {airbuds}/>
      <Products title={"1TB External Hard Drive"} image = {hdd}/>
      <Products title={"Wireless Gaming Headset"} image = {headset}/>
      <Products title={"Wired Gaming Keyboard"} image = {keyboard}/>
      <Products title={"Razer Basilisk Gaming Mouse"} image = {mouse}/>
      <Products title={"Smart Watch"} image = {smartWatch}/>
    </div> */}
    <Slides/>

    </>
  )
}

export default App
