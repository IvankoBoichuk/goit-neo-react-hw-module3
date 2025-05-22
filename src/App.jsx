import { useEffect, useState } from 'react'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
import { nanoid } from 'nanoid'

const getContacts = () => {
  const contacts = localStorage.getItem("contacts")
  if (contacts) {
    return JSON.parse(contacts);
  }
  return [];
}

function App() {
  const [contacts, setContacts] = useState(getContacts)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts])

  // Контакти, що відповідають пошуку
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery)
  );

  const handlerDeleteContact = (id) => {
    const result = contacts.filter(c => c.id != id)
    setContacts(result)
  }

  const handleSubmit = (values, { resetForm }) => {
    setContacts(prev => [...prev, { ...values, id: nanoid() }]);
    resetForm();
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <SearchBox handlerFilter={(e) => setSearchQuery(e.target.value.toLowerCase())} />
      <ContactList contacts={filteredContacts} handlerDeleteContact={handlerDeleteContact} />
    </>
  )
}

export default App
