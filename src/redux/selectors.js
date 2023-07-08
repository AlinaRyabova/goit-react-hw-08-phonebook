import { createSelector } from '@reduxjs/toolkit';

// export const selectIsLoading = state => state.contacts.isLoading;

// export const selectError = state => state.contacts.error;

export const selectContact = state => state.contacts.items;

export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContact, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
