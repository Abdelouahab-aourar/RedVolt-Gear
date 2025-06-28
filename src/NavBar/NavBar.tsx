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
            <p>Home</p>
         </label>
         <label>
            <input type="radio" name="nav"/>
            <p>PRODUCTS</p>
         </label>
         <label>
            <input type="radio" name="nav"/>
            <p>MY CART</p>
         </label>
         <label>
            <input type="radio" name="nav"/>
            <p>CONTACT US</p>
         </label>
      </div>
    </nav>
    </>
 );   
}
export default NavBar;