import { useState } from 'react'
import {nanoid} from 'nanoid'
import "./App.css";
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList' 
import {useLocalStorage} from './hooks/useLocalStorage'



function App() {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useLocalStorage("contacts",initialContacts);
  const [searchContact, setSearchContact] = useState("");

  const handleDeleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const getFilterData = () => {
    return contacts.filter((contact) =>
      contact.name
        .toLocaleLowerCase()
        .includes(searchContact.toLocaleLowerCase())
    );
  };
  const handleAddContact = (data) => {
    const newContact = { ...data, id: nanoid() };
    setContacts((prev) => [...prev, newContact]);
  };

  const filterContacts = getFilterData();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />
      <SearchBox setSearchContact={setSearchContact} />
      <ContactList contacts={filterContacts} 
      deleteContact={handleDeleteContact}/>
    </div>
  );
};

export default App
