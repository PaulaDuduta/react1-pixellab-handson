import { addMessage, clearMessages } from './notificationBar.js';
import { findContacts } from './query.js';
import createMessage from './message.js';
import { pluralize } from './utils.js';
import { render } from './contact.js';
import stage, { clearStage } from './stage.js';

const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  //currentTarget este elementul pe care am rulat addEventListener
  const form = event.currentTarget;
  const queryInput = form.q;
  // const queryString = queryInput.value.trim();

  // method 2 for space elimination
  const queryString = queryInput.value.toLowerCase().replace(/\s/g, '').trim();

  // // ----->>> HOMEWORK - SPACE ELIMINATION <<<<<-----
  // const contactInputArray = queryString.split(' ');
  // const contactInputSearch = contactInputArray.reduce((accumulator, value) => {
  //   if (typeof value === 'string') {
  //     accumulator += value;
  //   }

  //   return accumulator;
  // }, '');

  // if (queryString.length <= 3) {
  //   return;
  // }

  // const contacts = findContacts(contactInputSearch.toLowerCase()); //v1 of space elimination
  const contacts = findContacts(queryString);
  const contactsCount = contacts.length;
  const fragment = new DocumentFragment();

  contacts.forEach((contact) => {
    fragment.append(render(contact));
  });

  clearMessages();
  clearStage();

  if (contactsCount < 1) {
    addMessage(createMessage('No contacts found!', 'warning'));
  } else {
    const petsCount = contacts.reduce((petsCount, contact) => {
      petsCount += contact?.pets?.length || 0;

      return petsCount;
    }, 0);

    addMessage(
      createMessage(
        `Found ${pluralize(contactsCount, {
          one: 'contact',
          many: 'contacts',
        })} with ${
          petsCount > 0
            ? pluralize(petsCount, { one: 'pet', many: 'pets' })
            : 'no pets'
        }.`,
      ),
    );
  }

  queryInput.value = '';
  stage.append(fragment);
});

export default searchForm;
