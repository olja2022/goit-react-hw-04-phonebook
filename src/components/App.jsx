import { UserForm } from './UserForm/UserForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
import { useEffect, useState } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsFromLS = localStorage.getItem('contacts');
    const contactsFromLSParced = JSON.parse(contactsFromLS);
    contactsFromLSParced && setContacts(contactsFromLSParced);
  }, []);

  useEffect(() => {
    contacts.length &&
      localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const createUser = userData => {
    const isExist = contacts.find(contact => {
      return contact.name === userData.name;
    });

    if (isExist) {
      alert(`${userData.name} is already in contacts`);
    } else {
      setContacts(prevState => {
        return [...prevState, userData];
      });

      return true;
    }
  };

  const getInput = ({ target: { value } }) => {
    setFilter(value);
  };

  const deleteContact = contactId => {
    setContacts(prevState => {
      return prevState.filter(contact => contact.id !== contactId);
    });
  };

  return (
    <div className={css.mainContainer}>
      <h1>Phonebook</h1>
      <UserForm createUser={createUser}></UserForm>

      <h2>Contacts</h2>
      <Filter filter={filter} getInput={getInput}></Filter>

      <Contacts
        contacts={
          filter
            ? contacts.filter(({ name }) =>
                name.toLowerCase().includes(filter.toLowerCase())
              )
            : contacts
        }
        deleteContact={deleteContact}
      ></Contacts>
    </div>
  );
};
