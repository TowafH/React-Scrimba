// Images
import cat1 from './images/cat1.png'
import cat2 from './images/cat2.png'
import cat3 from './images/cat3.png'
import cat4 from './images/cat4.png'

// CSS
import styles from './CatContact.module.css'

// Component
import Contact from './Contact'

function CatContact() {
    return(
    <>
        <div className={styles.contacts}>
            <Contact 
                img={cat1}
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact
                img={cat2}
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact
                img={cat3}
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact
                img={cat4}
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>  
    </>
    )
}

export default CatContact