import createMessage from './message.js';

const notificationBar = document.querySelector('.notification-bar');

export const addMessage = (messageElement) => {
  notificationBar.append(messageElement);
};

export const clearMessages = () => {
  notificationBar.innerHTML = '';
};

// HOMEWORK REMOVE MESSAGE CONTAINER VIA EVENT DELEGATION
notificationBar.addEventListener('click', (event) => {
  if (event.target.tagName !== 'BUTTON') {
    return;
  }

  event.target.parentNode.remove(event.target);
});

export default notificationBar;
