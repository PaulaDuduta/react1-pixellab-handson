export default (message = '', type = 'success') => {
  const closeButton = document.createElement('button');
  const messageContainer = document.createElement('div');

  messageContainer.classList.add('alert', `alert-${type}`);

  messageContainer.innerHTML = message;

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

  messageContainer.append(closeButton);

  setTimeout(() => {
    closeButton.parentNode.remove(messageContainer);
  }, 2000);

  return messageContainer;
};
