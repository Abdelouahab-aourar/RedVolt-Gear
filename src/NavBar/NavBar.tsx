import styles from './NavBar.module.css'
import logo from '../assets/icon.svg'
function NavBar(){
 return (
    <>
    <nav className={styles.nav}>
      <div className={styles.left}>
         <img src={logo} alt="logo"/>
         <p>RedVolt Gear</p>
      </div>
      <div className={styles.right}>
         <label>
            <input type="radio" name="nav" defaultChecked />
            <a href="#home"><p>HOME</p></a>
         </label>
         <label>
            <input type="radio" name="nav"/>
            <a href="#products"><p>PRODUCTS</p></a>
         </label>
         <label>
            <input type="radio" name="nav"/>
            <a href="#cart"><p>MY CART</p></a>
         </label>
         <label>
            <input type="radio" name="nav"/>
            <a href="#contact"><p>CONTACT US</p></a>
         </label>
      </div>
    </nav>
    </>
 );   
}
export default NavBar;