import { Component } from 'react';
import initialContacs from '../contacts.json';
import { Box } from './Box/Box.styled';
import { PhoneBook } from './PhoneBook/PhoneBook.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';

export class App extends Component {
  state = { contacts: initialContacs, filter: '' };

  addContact = newContact => {
    const { name, number } = newContact;
    const { contacts } = this.state;
    if (
      contacts.some(contact => contact.name === name) ||
      contacts.some(contact => contact.number === number)
    ) {
      alert(`This one is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    return (
      <Box>
        <PhoneBook>
          <ContactForm addContact={this.addContact} />
          <Filter value={this.state.value} onChange={this.changeFilter} />
          <ContactsList
            items={this.getFilteredContacts()}
            deleteContact={this.deleteContact}
          />
        </PhoneBook>
      </Box>
    );
  }
}
