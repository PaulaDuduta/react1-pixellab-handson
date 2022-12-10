export default (message = '', type = 'success') => {
  const messageContainer = document.createElement('div');
  const closeButton = document.createElement('button');

  messageContainer.classList.add('alert', `alert-${type}`);

  messageContainer.innerHTML = message;
  // messageContainer.append(closeButton);

  // closeButton.classList.add(
  //   'closeButton',
  //   'position-absolute',
  //   'btn-close',
  //   'top-0',
  //   'start-100',
  //   'translate-middle',
  // );
  // closeButton.style.backgroundColor = 'aquamarine';
  // closeButton.style.borderRadius = '50%';
  // closeButton.style.opacity = '1';

  // closeButton.addEventListener('click', () => {
  //   closeButton.parentNode.remove(messageContainer);
  // });

  return messageContainer;
};
