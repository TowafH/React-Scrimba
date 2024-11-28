// CSS
import styles from './JokesApp.module.css'

// Component
import Jokes from './Jokes'


function JokesApp(props) {
    return(
        <>
            <div className={styles.container}>
            <Jokes 
            jokeNumber="1"
            jokeSetup="I got my daughter a fridge for her birthday."
            jokePunchLine="I can't wait to see her face light up when she opens it."
            />
            <Jokes
            jokeNumber="2"
            jokeSetup="How did the hacker escape the police?"
            jokePunchLine="He just ransomware!"
            />
            <Jokes
            jokeNumber="3"
            jokeSetup="Why don't pirates travel on mountain roads?"
            jokePunchLine="Scurvy."
            />
            <Jokes
            jokeNumber="4"
            jokeSetup="Why do bees stay in the hive in the winter?"
            jokePunchLine="Swarm."
            />
            </div>
        </>
    )
}

export default JokesApp