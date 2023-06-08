import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import './../app.css/app.module.css';

const App = () => {
  const initialState = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(
    getDataFromLocalStorage() || initialState
  );
  const [filter, setFilter] = useState('');

  function getDataFromLocalStorage() {
    const storedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(storedContacts);
    return Array.isArray(parsedContacts) ? parsedContacts : null;
  }

  function saveDataToLocalStorage(data) {
    localStorage.setItem('contacts', JSON.stringify(data));
  }

  const addContact = (name, number) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const updatedContacts = [newContact, ...contacts];
    setContacts(updatedContacts);
    saveDataToLocalStorage(updatedContacts);
  };

  const changeFilter = event => {
    setFilter(event.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    const updatedContacts = contacts.filter(
      contact => contact.id !== contactId
    );
    setContacts(updatedContacts);
    saveDataToLocalStorage(updatedContacts);
  };

  const visibleContacts = getVisibleContacts();

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </>
  );
};

export default App;
