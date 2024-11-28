// Images
import phone from './images/phone.png'
import mail from './images/mail.png'

// CSS
import styles from './CatContact.module.css'

// Pass 'props' as a parameter, later used for method
    // Can also do Contact({img, name, phone, eail}) instead of props
    // You would just remove props. from every instance of it in the curly braces
function Contact(props) {
    return(
        <article className={styles.contactCard}>
                <img 
                    src={props.img} // '.img' is located in CatContact.js, where we passed the attribute img='{cat1}'
                                    // Reusable component
                    alt="Photo of Mr. Whiskerson"
                />
                <h3>{props.name}</h3>
                <div className={styles.infoGroup}>
                    <img 
                        src={phone}
                        alt="phone icon" 
                    />
                    <p>{props.phone}</p>
                </div>
                <div className={styles.infoGroup}>
                    <img 
                        src={mail} 
                        alt="mail icon"
                    />
                    <p>{props.email}</p>
                </div>
            </article>
    )
}

export default Contact