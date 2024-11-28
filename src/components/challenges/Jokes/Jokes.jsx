// CSS
import styles from './JokesApp.module.css'

function Jokes(props) {
    return(
        <>
        <div className={styles.jokeCard}>
            <h1>Joke #{props.jokeNumber}</h1>
            <h3>{props.jokeSetup}</h3>
            <h4>{props.jokePunchLine}</h4>
        </div>
        </>
    )
}

export default Jokes