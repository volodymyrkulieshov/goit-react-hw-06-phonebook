import css from './ContactList.module.css';
const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <li className={css.contact} key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            <button
              className={css.deleteButton}
              type="button"
              name="delete"
              onClick={() => onRemoveContact(contact.id)}
            >
              delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
