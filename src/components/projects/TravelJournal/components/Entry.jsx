// CSS
import styles from '../TravelJournal.module.css'

// Images
import fuji from '../images/fuji.jpg'
import marker from '../images/marker.webp'

function Entry(){
    return(
        <>
        <div className={styles.entryContainer}>
            <div className={styles.photoContainer}>
                <img src={fuji} alt="Mt. Fuji"/>
            </div>

            <div className={styles.titleContainer}>
                <img src={marker} alt="Marker"/>
                <p className={styles.countryText}>Japan</p>
                <a target="_blank" rel='noreferrer' href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"><span>View on Google Maps</span></a>
                <h1>Mount Fuji</h1>
                <p className={styles.dateText}>12 Jan, 2021 - 24 Jan, 2021</p>
                <p className={styles.descText}>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). 
                   Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
        </>
    )
}

export default Entry