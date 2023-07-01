import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contactsSlice';
import { getVisibleContacts } from '../../redux/selectors';
import style from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(removeContact(contactId));
  };

  return (
    <ul className={style.list}>
      {contacts.map(contact => {
        return (
          <li className={style.listItem} key={contact.id}>
            <span className={style.listItemText}>{contact.name}</span>
            <span className={style.listItemText}>{contact.number}</span>
            <button
              className={style.button}
              type="button"
              onClick={() => onDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
