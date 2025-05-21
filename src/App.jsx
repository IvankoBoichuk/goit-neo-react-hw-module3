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
  const [filtredContacts, setFiltredContacts] = useState(contacts)

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts))
    setFiltredContacts(contacts)
  }, [contacts])

  const handlerFilter = (e) => {
    const query = e.target.value.toLowerCase();
    const filtred = contacts.filter(c => c.name.toLowerCase().includes(query))
    setFiltredContacts(filtred)
  }

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
      <SearchBox handlerFilter={handlerFilter} />
      <ContactList contacts={filtredContacts} handlerDeleteContact={handlerDeleteContact} />
    </>
  )
}

export default App
