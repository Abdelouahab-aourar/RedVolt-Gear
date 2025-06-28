import styles from './Home.module.css'
import image from '../assets/3d-image.svg'
function Home(){
    return (
    <>
    <div className={styles.home}>
        <div className={styles.left}>
            <h1>RedVolt Gear<br/> Sell Pc Accessories</h1>
            <p>Welcome to RedVolt Gear — your one-stop shop for premium laptop accessories at unbeatable prices.
            Whether you're a student, professional, gamer, or tech enthusiast, we’ve got the gear to keep your setup efficient, stylish, and protected.</p>
            <p>Explore our collection and experience top-tier products backed by reliable customer service, fast shipping, and exclusive deals you won’t find anywhere else.
            <span> Upgrade your gear. Empower your workspace. Only at RedVolt.</span></p>
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