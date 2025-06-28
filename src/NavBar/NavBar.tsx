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
         <p>HOME</p>
         <p>PRODUCTS</p>
         <p>MY CART</p>
         <p>CONTACT US</p>
      </div>
    </nav>
    </>
 );   
}
export default NavBar;