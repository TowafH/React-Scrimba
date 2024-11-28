// React Imports
import { Link } from "react-router-dom";

// CSS
import styles from './css/Header.module.css'

function Header(){
return(
        <div className={styles.navBar}>
            <Link to='/ReactFacts'>ReactFacts</Link>
            <Link to='/TravelJournal'>TravelJournal</Link>
            <Link to='/CatContact'>CatContact</Link>
            <Link to='/JokesApp'>JokesApp</Link>
        </div>
    )
}

export default Header