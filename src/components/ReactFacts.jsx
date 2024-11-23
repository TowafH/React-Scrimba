// CSS
import styles from './css/ReactFacts.module.css'
// Images
import reactLogo from '../assets/reactLogo.png'


function Static(){
    return(
        <div className={styles.parentDiv}>
            <div className={styles.header}>
                <img src={reactLogo} className={styles.reactLogo}/>
                <h1 className={styles.headerTitle}>ReactFacts</h1>
            </div>

            <div className={styles.container}>
                <h1 className={styles.containerTitle}>Fun Facts about React</h1>
                <ul className={styles.listContainer}>
                    <li>Released in 2013</li>
                    <li>Created by Jordan Walke</li>
                    <li>100k+ Stars on GitHub</li>
                    <li>Maintained by Meta</li>
                    <li>Powers thousands of Enterprise Apps and Mobile Apps</li>
                </ul>
            </div>
        </div>
)
}

export default Static