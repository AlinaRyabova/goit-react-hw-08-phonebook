import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';
import { deleteContacts } from '../../redux/operations';

export default function ContactList() {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button
            type="button"
            name="delete"
            onClick={() => dispatch(deleteContacts(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
