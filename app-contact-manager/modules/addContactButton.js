import { render } from './addContact.js';
import { clearMessages } from './notificationBar.js';
//default exports can be renamed
import stage from './stage.js';

const addContactButton = document.querySelector('.add-contact-button');

addContactButton.addEventListener('click', (event) => {
  clearMessages();
  stage.innerHTML = '';

  stage.append(render());
});

export default addContactButton;
