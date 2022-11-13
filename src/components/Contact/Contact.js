import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ContactWrap, ContactBtn } from './Contact.styled';
import { deleteContact } from 'redux/operations';

export const Contact = ({ contact }) => {
  const { name, phone, id } = contact;
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ContactWrap>
      <p>{name}:</p>
      <p>{phone} </p>
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
      phone: PropTypes.string.isRequired,
    })
  ),
};
