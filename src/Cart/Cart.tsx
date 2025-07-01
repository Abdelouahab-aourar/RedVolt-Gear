import styles from './Cart.module.css';
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
          <h2 className={styles.empty}>Your cart is empty.</h2>
        ) : (
          items.map((item, index) => (
            <div key={index} className={styles.cartItem}>
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <div className={styles.buttons}>
                <button>Checkout</button>
                <button>Remove</button>
              </div>
            </div>
          ))
        )}
        </div>
        </>
    );
}
export default Cart;