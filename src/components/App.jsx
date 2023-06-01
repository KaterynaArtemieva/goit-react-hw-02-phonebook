import { Component } from 'react';
import initialContacs from '../contacts.json';
import { Box } from './Box/Box.styled';
import { PhoneBook } from './PhoneBook/PhoneBook.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';

export class App extends Component {
  state = { contacts: initialContacs };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <Box>
        <PhoneBook>
          <ContactForm addContact={this.addContact} />
          <ContactsList
            items={this.state.contacts}
            deleteContact={this.deleteContact}
          />
        </PhoneBook>
      </Box>
    );
  }
}
