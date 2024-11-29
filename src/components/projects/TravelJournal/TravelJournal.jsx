// Component
import Header from './components/Header'
import Entry from './components/Entry.jsx'

// Data
import travelData from './TravelJournalData.js'

function TravelJournal(){
const entryElements = travelData.map((entry)=>{
    return <Entry
                // travelData.map((dataObject, index)=>{ 
                // key={index}
                // This will also work, not reccomended
                key={entry.id}
            // Using this method allows us to call the entire object and just modify the Component - #1
                entry={entry}
                //Also Written as: {...entry}
                //Must remove .entry within the component #2.5


            // When not passing Objects as props
                // photo={entry.photo}
                // alt={entry.alt}
                // icon={entry.icon}
                // title={entry.title}
                // country={entry.country}
                // googleMapsLink={entry.googleMapsLink}
                // dates={entry.dates}
                // text={entry.text}
    />
})

    return(
        <>
        <Header/>
        {entryElements}
        </>
    )
}

export default TravelJournal

        {/* <Entry 
        photo={fuji} 
        alt="Mt. Fuji" 
        icon={marker} 
        country="Japan" 
        googleMapsLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu" 
        title="Mount Fuji"
        dates="12 Jan, 2021 - 24 Jan, 20" 
        text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."/>
        <Entry/>
        <Entry/> */}