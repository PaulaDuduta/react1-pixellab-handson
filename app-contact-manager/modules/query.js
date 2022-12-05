import contacts from './data.js';

export const findContacts = (needle = 'query') => {
  const results = contacts.filter((contact) => {
    // return needle.trim() === contact.name;
    const values = Object.values(contact);
    // [1, 'Carol', 'Carolson', '074...', 'carol@gmail.com']

    const haystack = values.reduce((haystack, value) => {
      if (typeof value === 'string') {
        haystack += value;
      }

      return haystack;
    }, '');

    if (haystack.includes(needle)) {
      return true;
    }

    return false;
  });

  return results;
};

export const createContact = (contact) => {
  // push mutates, which means that the array that results is not the same as the initial contact one
  contacts.push(contact);
};
