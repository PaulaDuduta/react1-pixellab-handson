import { render } from './addContact.js';
import { clearMessages } from './notificationBar.js';
//default exports can be renamed
import stage, { clearStage } from './stage.js';

const addContactButton = document.querySelector('.add-contact-button');

addContactButton.addEventListener('click', (event) => {
  clearMessages();
  clearStage();

  stage.append(render());
});

export default addContactButton;
