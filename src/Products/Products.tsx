import styles from './Products.module.css'
export interface ProductProps {
  title: string;
  image: string;
}
interface ProductListProps {
  onAddToCart: (product: ProductProps) => void;
}
function Products({ title, image, onAddToCart }: ProductProps & ProductListProps){
    
    return (
        <>
            <div className={styles.card}>
                <div className={styles.top}>
                    <h1>{title}</h1>
                    <img src={image} />
                </div>
                <div className={styles.bottom}>
                    <button>Description</button>
                    <button onClick={() =>onAddToCart({ title, image })}>Add To cart</button>
                </div>
            </div>
        </>
    );
}
export default Products;