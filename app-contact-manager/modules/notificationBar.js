import createMessage from './message.js';

const notificationBar = document.querySelector('.notification-bar');

const closeButton = document.createElement('button');

closeButton.classList.add(
  'closeButton',
  'position-absolute',
  'btn-close',
  'top-0',
  'start-100',
  'translate-middle',
);
closeButton.style.backgroundColor = 'aquamarine';
closeButton.style.borderRadius = '50%';
closeButton.style.opacity = '1';

export const addMessage = (messageElement) => {
  notificationBar.append(messageElement);
  notificationBar.append(closeButton);
};

//---->>>HOMEWORK notification bar close button <<<----
closeButton.addEventListener('click', () => {
  // clearMessages();
  closeButton.parentNode.remove(createMessage);
});

export const clearMessages = () => {
  notificationBar.innerHTML = '';
};

export default notificationBar;
