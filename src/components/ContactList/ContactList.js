import { Contact } from '../Contact/Contact';
import { ContactSection, ContactItem } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <ContactSection>
      {filteredContacts().map(contact => {
        return (
          <ContactItem key={contact.id}>
            <Contact contact={contact} />
          </ContactItem>
        );
      })}
    </ContactSection>
  );
};
