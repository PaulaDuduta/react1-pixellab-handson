export default (message = '', type = 'success') => {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('alert', `alert-${type}`);

  messageContainer.innerHTML = message;

  return messageContainer;
};
