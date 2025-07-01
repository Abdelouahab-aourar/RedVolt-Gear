import styles from './Contact.module.css'
function Contact(){
    return (
        <>
        <h1 className={styles.title}>Contact Us</h1>
        <div className={styles.container}>
            <div className={styles.top}>
                info
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