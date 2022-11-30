import { addMessage, clearMessages } from './notificationBar.js';
import { findContacts } from './query.js';
import createMessage from './message.js';
import { pluralize } from './utils.js';

const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  //currentTarget este elementul pe care am rulat addEventListener
  const form = event.currentTarget;
  const queryInput = form.q;
  const queryString = queryInput.value;

  const contacts = findContacts(queryString);
  const contactsCount = contacts.length;

  clearMessages();

  if (contactsCount < 1) {
    addMessage(createMessage('No contacts found!', 'warning'));
  } else {
    addMessage(
      createMessage(
        `Found ${pluralize(contactsCount, {
          one: 'contact',
          many: 'contacts',
        })}.`,
      ),
    );
  }

  queryInput.value = '';
});

export default searchForm;
