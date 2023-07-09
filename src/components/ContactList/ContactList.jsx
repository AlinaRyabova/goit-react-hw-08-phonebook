import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';
import style from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul className={style.list}>
      {contacts.map(({ id, name, phone }) => (
        <li key={id} className={style.item}>
          {name + ' : ' + phone}
          <button
            className={style.button}
            type="button"
            name="delete"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
