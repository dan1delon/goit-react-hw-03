import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <ContactItem contact={contact} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
