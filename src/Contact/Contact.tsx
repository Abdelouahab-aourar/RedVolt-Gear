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
                    <form className={styles.buttons}>
                        <input type="email" placeholder='Enter Your Email' required/>
                        <input type="submit" value="Subscribe"/>
                    </form>
                    <p>By subscribing you agree to our Privacy Policy and provide consent to receive updates from our company.</p>
                </div>
                <div className={styles.contactUs}>
                    <h4>Contact Us</h4>
                    <div className={styles.email}>
                        <div></div>
                        <p>contact@redvoltgear.com</p>
                    </div>
                    <div className={styles.phone}>
                        <div></div>
                        <p>+213 555 000-0000</p>
                    </div>
                </div>
                <div className={styles.followUs}>
                    <h4>Follow Us</h4>
                    <div className={styles.Facebook}>
                        <div></div>
                        <p>Facebook</p>
                    </div>
                    <div className={styles.Instagram}>
                        <div></div>
                        <p>Instagram</p>
                    </div>
                    <div className={styles.Youtube}>
                        <div></div>
                        <p>Youtube</p>
                    </div>
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