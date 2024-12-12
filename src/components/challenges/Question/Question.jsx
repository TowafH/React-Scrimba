// React
import { useState } from "react"

// CSS
import styles from './Question.module.css'

function Question(){
    const [val, setVal] = useState("Yes")

    const handleClick = () => {
        setVal("Heck yes")
    }

    const [num, setNum] = useState(0)

    /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */

    const handleAddNum = () => {
        // Allows us to add old value + new value
        setNum(num => num + 1)
    }

    const handleSubtractNum = () => {
        // If we just do this, if we repeated setNum(num - 1) 3 times, it will continue to subtract 1 everytime
        setNum(num - 1)
    }

    return(
        <>
        <h1 className={styles.title}>Is State Important to Know?</h1>
        <button onClick={handleClick} className={styles.btn}>{val}</button>
        <h1 className={styles.title}>Number: {num}</h1>
        <div className={styles.calculator}>
            <button onClick={handleAddNum}>+</button>
            <button onClick={handleSubtractNum}>-</button>
        </div>
        </>
    )
}

export default Question