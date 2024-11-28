// CSS
import styles from './JokesApp.module.css'

// Component
import Jokes from './Jokes'


function JokesApp() {
    return(
        <>
            <div className={styles.container}>
            <Jokes 
            jokeNumber="1"
            jokeSetup="I got my daughter a fridge for her birthday."
            jokePunchLine="I can't wait to see her face light up when she opens it."
            upvotes={1}
            isPun={true}
            // Array Of Comments
            comments={[
                // Object of Comments
                {author: "", text: "", title: ""},
                {author: "", text: "", title: ""}
            ]}
            />
            <Jokes
            jokeNumber="2"
            jokeSetup="How did the hacker escape the police?"
            jokePunchLine="He just ransomware!"
            isPun={true}
            />
            <Jokes
            jokeNumber="3"
            jokeSetup="Why don't pirates travel on mountain roads?"
            jokePunchLine="Scurvy."
            isPun={true}
            />
            <Jokes
            jokeNumber="4"
            jokeSetup="Why do bees stay in the hive in the winter?"
            jokePunchLine="Swarm."
            isPun={false}
            />
            </div>
        </>
    )
}

export default JokesApp