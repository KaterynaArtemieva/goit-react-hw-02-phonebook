import { ContactItem } from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';
import { ContactList } from './ContactsList.styled';

export const ContactsList = ({ items, deleteContact }) => {
  return (
    <ContactList>
      {items.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
          />
        );
      })}
    </ContactList>
  );
};

ContactsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
