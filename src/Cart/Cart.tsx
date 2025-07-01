import styles from './Cart.module.css'
import type { ProductProps } from '../Products/Products';
interface CartProps {
  items: ProductProps[];
}
function Cart({ items }: CartProps){
    return (
        <>
        <h1 className={styles.MyCart}>My Cart</h1>
        <div className={styles.orders}>
             {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          items.map((item, index) => (
            <div key={index} className={styles.cartItem}>
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))
        )}
        </div>
        </>
    );
}
export default Cart;