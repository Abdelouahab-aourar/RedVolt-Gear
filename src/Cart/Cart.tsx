import styles from './Cart.module.css';
import type { ProductProps } from '../Products/Products';
interface CartItem extends ProductProps {
  cartId: string;
  isRemoved: boolean;
}
interface CartProps {
  items: CartItem[];
  onRemoveFromCart: (cartId: string) => void;
}
function Cart({ items, onRemoveFromCart }: CartProps){
    return (
        <>
        <h1 className={styles.MyCart}>My Cart</h1>
        <div className={styles.orders}>
             {items.length === 0 ? (
          <h2 className={styles.empty}>Your cart is empty.</h2>
        ) : (
          items.map((item) => (
            <div  key={item.cartId}
              className={`${styles.cartItem} ${item.isRemoved ? styles.remove : ''}`}>
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <div className={styles.buttons}>
                <button>Checkout</button>
                <button onClick={() => onRemoveFromCart(item.cartId)}>Remove</button>
              </div>
            </div>
          ))
        )}
        </div>
        </>
    );
}
export default Cart;