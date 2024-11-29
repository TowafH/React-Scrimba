// CSS
import styles from './JokesApp.module.css'

function Jokes(props) {
    return(
        <>
        <div className={styles.jokeCard}>
            {props.jokeSetup && <h3>{props.jokeSetup}</h3>}
            <h4>{props.jokePunchLine}</h4>  
        </div>
        </>
    )
}

export default Jokes