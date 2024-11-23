// React Imports
import { Link } from "react-router-dom";

// CSS
import styles from './css/Header.module.css'

function Header(){
return(
        <div className={styles.navBar}>
            <Link to='/ReactFacts'>ReactFacts</Link>
        </div>
    )
}

export default Header