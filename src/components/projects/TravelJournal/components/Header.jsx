// Images
import globe from '../images/globe.png'

// CSS
import styles from '../TravelJournal.module.css'

function Header() {
    return(
        <>
        <div>
            <header>
            <img src={globe} alt="globe icon" />
            <h1>Travel Journal</h1>
            </header>
        </div>
        </>
    )
}

export default Header