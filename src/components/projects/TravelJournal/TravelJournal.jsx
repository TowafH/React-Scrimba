// CSS
import styles from './TravelJournal.module.css'

// Images
import fuji from './images/fuji.jpg'
import marker from './images/marker.webp'

// Component
import Header from './components/Header'
import Entry from './components/Entry.jsx'

function TravelJournal(){
    return(
        <>
        <Header/>
        <Entry 
        photo={fuji} 
        altImg="Mt. Fuji" 
        icon={marker} 
        country="Japan" 
        location="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu" 
        landmark="Mount Fuji"
        date="12 Jan, 2021 - 24 Jan, 20" 
        desc="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."/>
        <Entry/>
        <Entry/>
        </>
    )
}

export default TravelJournal