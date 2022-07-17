import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useSelector, useDispatch } from 'react-redux';
import {
  addContact,
  deleteContact,
  updateFilter,
  getContacts,
  getFilter,
  getFilteredContacts,
} from 'redux/contactsSlice';

export const usePhonebook = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = useSelector(getFilteredContacts);

  const addContactToBook = contact => {
    if (
      !contacts.find(
        ({ name }) =>
          name.toLocaleLowerCase() === contact.name.toLocaleLowerCase()
      )
    ) {
      dispatch(addContact(contact));
      return true;
    }

    Notify.failure(`${contact.name} is already in contacts`);
  };

  const deleteContactFromBook = contactId => {
    dispatch(deleteContact(contactId));
  };

  const onFilterChange = event => {
    dispatch(updateFilter(event.target.value));
  };

  return {
    filter,
    filteredContacts,
    addContactToBook,
    deleteContactFromBook,
    onFilterChange,
  };
};
