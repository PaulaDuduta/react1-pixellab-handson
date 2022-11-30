import contacts from './data.js';

export const findContacts = (needle = 'query') => {
  const results = contacts.filter((contact) => {
    return needle.trim() === contact.name;
  });

  return results;
};
