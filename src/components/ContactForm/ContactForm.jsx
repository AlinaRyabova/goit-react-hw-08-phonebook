import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import style from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactNameId = nanoid();
  const contactNumberId = nanoid();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
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

    onSubmit(name, number);
    reset();
  };

  const reset = () => {
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
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={style.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
