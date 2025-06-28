import styles from './Home.module.css'
import image from '../assets/3d-image.svg'
function Home(){
    return (
    <>
    <div className={styles.home}>
        <div className={styles.left}>
            <h1>RedVolt Gear<br/> Sell Pc Accessories</h1>
            <p>Welcome to RedVolt Gar Ecommerce website, in which we provide the highest quality of accessories that you need with the best price the market.</p>
            <div className={styles.buttons}>
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        </div>
        <div className={styles.right}>
            <img src={image} alt="" />
        </div>
    </div>
    </>);
}
export default Home;