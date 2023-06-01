import { Component } from 'react';
import PropTypes from 'prop-types';
import { Contact, Deskr, DelBtn } from './ContactItem.styled';
import { BsTrash } from 'react-icons/bs';

export class ContactItem extends Component {
  static propTypes = {
    deleteContact: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  };
  render() {
    const { id, name, number, deleteContact } = this.props;

    return (
      <Contact>
        <Deskr>{name}</Deskr>
        <Deskr>{number}</Deskr>
        <DelBtn aria-label="Delete" onClick={() => deleteContact(id)}>
          <BsTrash />
        </DelBtn>
      </Contact>
    );
  }
}
