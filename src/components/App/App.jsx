import React, { useEffect, useState } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Filter } from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { ContactTitle, Container } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) || [
        { id: 'id-1', name: 'Rosie Simpson', number: '+459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '+443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '+645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '+227-91-26' },
      ]
    );
  });

  const [filter, setFilter] = useState('');

  const onAddContact = contactData => {
    const contactBook = {
      ...contactData,
      id: nanoid(),
    };

    const isInContacts = contacts.some(({ name, number }) =>
  (name.toLowerCase() === contactData.name.toLowerCase() &&
    (alert(`${contactData.name} is already in contacts`))) ||
  (number.toLowerCase() === contactData.number.toLowerCase() &&
    (alert(`${contactData.number} is already in contacts`)))
);

if (isInContacts) {
  return;
}
    setContacts([contactBook, ...contacts]);
  };

  const onRemoveContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    ) };

  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', stringifiedContacts);
  }, [contacts]);

  const filteredContacts = getFilterContacts()
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <ContactTitle>Contacts</ContactTitle>
      {contacts.length > 0 ? (
        <Filter filter={filter} onFilterChange={handleFilterChange} />
      ) : (
        <div>Your phonebook is empty. Add first contact!</div>
      )}
      {filteredContacts.length > 0 ? (
        <ContactList
          contacts={filteredContacts}
          onRemoveContact={onRemoveContact}
        />
      ) : (
        <div>No contacts found.</div>
      )}
    </Container>
  );
};
