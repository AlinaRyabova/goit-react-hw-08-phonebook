import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { fetchContacts } from '../redux/operations';
import { selectContacts } from '../redux/selectors';

const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList contacts={contacts} />
    </>
  );
};

export default App;
