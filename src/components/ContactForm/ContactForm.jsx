import React, { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import style from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { getVisibleContacts } from '../../redux/selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactNameId = nanoid();
  const contactNumberId = nanoid();

  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (name === '') {
      alert(`Введіть, будь ласка, ім'я контакту.`);
      return;
    }

    if (number === '') {
      alert(`Введіть, будь ласка, номер телефону контакту`);
      return;
    }
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label className={style.label} htmlFor={contactNameId}>
        Name
        <input
          className={style.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          id={contactNameId}
        />
      </label>
      <label className={style.label} htmlFor={contactNumberId}>
        Number
        <input
          className={style.input}
          type="text"
          name="number"
          value={number}
          onChange={handleChange}
          id={contactNumberId}
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          // required
        />
      </label>

      <button className={style.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
