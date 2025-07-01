import styles from './Contact.module.css'
import icon from '../assets/icon.svg'
function Contact(){
    return (
        <>
        <h1 className={styles.title}>Contact Us</h1>
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.newsletter}>
                    <img src={icon} alt="logo" />
                    <p>Join our newsletter to stay up to date on our new products.</p>
                    <div className={styles.buttons}>
                        <input type="email"/>
                        <button>Subscribe</button>
                    </div>
                    <p>By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</p>
                </div>
                <div className={styles.contactUs}>

                </div>
                <div className={styles.followUs}>

                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.line}></div>
                <div className={styles.afterLine}>
                    <p>&copy; 2025 All rights reserved.</p>
                    <div className={styles.middle}>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies Settings</p>
                    </div>
                    <p>Developed By AOURAR ABDELOUAHAB</p>
                </div>
            </div>
        </div>
        </>
    );
}
export default Contact;