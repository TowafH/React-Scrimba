// CSS
import styles from './JokesApp.module.css'

// Component
import Jokes from './Jokes'
import jokesData from './jokesData'

function JokesApp() {

    const jokeElements = jokesData.map((jokeObject) => {
        // Turns Array of Regular JS Objects, turning them into an Array of Joke Elements
        return <Jokes
        // jokeSetup --> prop
        // jokeObject.setup --> Render data from the jokesData.js file
        jokeSetup={jokeObject.setup}
        jokePunchLine={jokeObject.punchline}
        />
    }) 

    return(
        <>
            <div className={styles.container}>
                {jokeElements}
            </div>
        </>
    )
}

// 1. What does the `.map()` array method do?
//      Returns a new array. Whatever gets returned from the callback
//      function provided is placed at the same index in the new array.
//      Usually we take the items from the original array and modify them
//      in some way.


// 2. What do we usually use `.map()` for in React?
//      Convert an array of raw data into an array of JSX elements
//      that can be displayed on the page.


// 3. Critical thinking: why is using `.map()` better than just
//    creating the components manually by typing them out?
//          1. We often don't have the data ahead of time when we're building
//             the app, so we simply can't manually type them out.
//          2. It makes our code more "self-sustaining" - not requiring additional
//             changes to the code whenever the data changes.




export default JokesApp

            {/* Utilization of Props */}
            {/* <Jokes 
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
            jokeSetup="How did the hacker escape the police?"
            jokePunchLine="He just ransomware!"
            isPun={true}
            />
            <Jokes
            jokeSetup="Why don't pirates travel on mountain roads?"
            jokePunchLine="Scurvy."
            isPun={true}
            />
            <Jokes
            jokeSetup="Why do bees stay in the hive in the winter?"
            jokePunchLine="Swarm."
            isPun={false}
            /> */}