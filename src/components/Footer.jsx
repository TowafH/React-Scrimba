// CSS
import styles from './css/Footer.module.css'

function Footer(){
    return(
        <>
        <p className={styles.footerText}>&copy; {(new Date().getFullYear())} Towaf Hossain</p>
        </>
    )
}

export default Footer