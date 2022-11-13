import { ContactWrap, ContactBtn } from './Contact.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const Contact = ({ contact }) => {
  const { name, number, id } = contact;
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ContactWrap>
      <p>{name}:</p>
      <p>{number} </p>
      <ContactBtn type="button" onClick={handleDelete}>
        Delete
      </ContactBtn>
    </ContactWrap>
  );
};

Contact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
