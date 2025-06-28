import styles from './Products.module.css'
function Products(){
    return (
        <>
            <div className={styles.card}>
                <div className={styles.top}>
                    title and image
                </div>
                <div className={styles.bottom}>
                    buttons
                </div>
            </div>
        </>
    );
}
export default Products;