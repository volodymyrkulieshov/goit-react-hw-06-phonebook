import { useEffect, useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
import css from './App.module.css';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? defaultContacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    return localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    console.log(contact);
    console.log(contacts);
    const isInContacts = contacts.some(
      ({ name }) =>
        name.toLowerCase().trim() === contact.name.toLowerCase().trim()
    );
    if (isInContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    setContacts(prevState => [...prevState, { id: nanoid(), ...contact }]);
  };

  const changeFilter = event => {
    setFilter(event.target.value.trim());
  };

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(el =>
      el.name.toLowerCase().trim().includes(normalizedFilter)
    );
  };

  const removeContact = contactId => {
    setContacts(prevState => {
      return prevState.filter(({ id }) => id !== contactId);
    });
  };

  const visibleContacts = filteredContacts();

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2 className={css.subTitle}>Contacts</h2>

      {contacts.length > 0 && (
        <Filter value={filter} changeFilter={changeFilter} />
      )}
      {contacts.length > 0 && (
        <ContactList
          contacts={visibleContacts}
          onRemoveContact={removeContact}
        />
      )}
    </div>
  );
};

export default App;

// import { Component } from 'react';
// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
// import { nanoid } from 'nanoid';
// import css from './App.module.css';

// class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };
//   componentDidMount = () => {
//     const contacts = localStorage.getItem('contacts');
//     if (JSON.parse(contacts)) {
//       this.setState({ contacts: JSON.parse(contacts) });
//     }
//   };
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }
//   addContact = contact => {
//     const isInContacts = this.state.contacts.some(
//       ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
//     );
//     if (isInContacts) {
//       alert(`${contact.name} is already in contacts`);
//       return;
//     }
//     this.setState(prevState => ({
//       contacts: [{ id: nanoid(), ...contact }, ...prevState.contacts],
//     }));
//   };

//   changeFilter = event => {
//     this.setState({ filter: event.target.value });
//   };

//   filteredContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   removeContact = contactId => {
//     this.setState(prevState => {
//       return {
//         contacts: prevState.contacts.filter(({ id }) => id !== contactId),
//       };
//     });
//   };

//   render() {
//     const visibleContacts = this.filteredContacts();
//     const { filter } = this.state;
//     return (
//       <div className={css.container}>
//         <h1 className={css.title}>Phonebook</h1>
//         <ContactForm onSubmit={this.addContact} />
//         <h2 className={css.subTitle}>Contacts</h2>

//         {this.state.contacts.length > 0 && (
//           <Filter value={filter} changeFilter={this.changeFilter} />
//         )}
//         {this.state.contacts.length > 0 && (
//           <ContactList
//             contacts={visibleContacts}
//             onRemoveContact={this.removeContact}
//           />
//         )}
//       </div>
//     );
//   }
// }

// export default App;
