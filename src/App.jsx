import { usePhonebook } from 'hooks/usePhonebook';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

export const App = () => {
  const {
    filter,
    filteredContacts,
    addContactToBook,
    deleteContactFromBook,
    onFilterChange,
  } = usePhonebook();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContactToBook} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={onFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDelete={deleteContactFromBook}
      />
    </div>
  );
};
