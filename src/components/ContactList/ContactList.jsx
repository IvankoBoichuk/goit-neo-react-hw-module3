import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css"

const ContactList = ({ contacts, handlerDeleteContact }) => {
    return <ul className={styles.contacts}>
        {contacts.map(contact => <Contact key={contact.id} contact={contact} handlerDeleteContact={handlerDeleteContact} />)}
    </ul>
}

export default ContactList;