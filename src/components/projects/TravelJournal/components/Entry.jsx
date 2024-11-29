// CSS
import styles from '../TravelJournal.module.css'

function Entry(props){
    // Now here in every instance we add a .entry infront of props to call the object with data - #2
    return(
        <>
        <div className={styles.entryContainer}>
            <div className={styles.photoContainer}>
                <img src={props.entry.photo} alt={props.entry.alt}/>
            </div>

            <div className={styles.titleContainer}>
                <img src={props.entry.icon}/>
                <p className={styles.countryText}>{props.entry.country}</p>
                <a target="_blank" rel='noreferrer' href={props.entry.googleMapsLink}><span>View on Google Maps</span></a>
                <h1>{props.entry.title}</h1>
                <p className={styles.dateText}>{props.entry.dates}</p>
                <p className={styles.descText}>{props.entry.text}</p>
            </div>
        </div>
        </>
    )
}

export default Entry