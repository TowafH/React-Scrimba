// CSS
import styles from '../TravelJournal.module.css'

function Entry(props){
    return(
        <>
        <div className={styles.entryContainer}>
            <div className={styles.photoContainer}>
                <img src={props.photo} alt={props.altImg}/>
            </div>

            <div className={styles.titleContainer}>
                <img src={props.icon}/>
                <p className={styles.countryText}>{props.country}</p>
                <a target="_blank" rel='noreferrer' href={props.location}><span>View on Google Maps</span></a>
                <h1>{props.landmark}</h1>
                <p className={styles.dateText}>{props.date}</p>
                <p className={styles.descText}>{props.desc}</p>
            </div>
        </div>
        </>
    )
}

export default Entry