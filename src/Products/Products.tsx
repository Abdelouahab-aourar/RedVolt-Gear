import styles from './Products.module.css'
interface ProductProps {
  title: string;
  image: string;
}
function Products({title, image}: ProductProps){
    
    return (
        <>
            <div className={styles.card}>
                <div className={styles.top}>
                    <h1>{title}</h1>
                    <img src={image} />
                </div>
                <div className={styles.bottom}>
                    <button>Description</button>
                    <input type="number" />
                    <button>Add To cart</button>
                </div>
            </div>
        </>
    );
}
export default Products;