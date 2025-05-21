import { FaUser, FaPhone } from "react-icons/fa";
import styles from "./Contact.module.css"

const Contact = ({ contact : { name, number, id }, handlerDeleteContact }) => {
    return <li className={styles.contact}>
        <ul>
            <li><FaUser /> {name}</li>
            <li><FaPhone /> {number}</li>
        </ul>
        <button onClick={() => handlerDeleteContact(id)}>Delete</button>
    </li>
}

export default Contact;