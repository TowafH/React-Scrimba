// CSS
import styles from '../ChefClaude.module.css'

// Images
import Chef from '../images/Chef.png'

function Header(){
return(
    <>
    <div className={styles.headerContainer}>
        <div className={styles.header}>
            <img src={Chef}/>
            <h1>ChefClaude</h1>
        </div>
    </div>
    </>
    )
}

export default Header