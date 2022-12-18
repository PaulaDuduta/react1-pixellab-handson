const person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(
  `1.Folosind obiectul person si reduce, afiseaza in consola un string care contine skill-urile de pe pozitiile pare ale arrayului, separate prin virgula`,
);
const skillArray1 = person.skills.reduce((skillArray1, skill, index) => {
  if (index % 2 === 0) {
    skillArray1.push(skill);
  }
  return skillArray1;
}, []);
console.log(skillArray1.toString());

//
console.warn(`In mod similar, afiseaza skill-urile care NU incep cu j.`);
const skillArray2 = person.skills.reduce((skillArray2, skill) => {
  if (!skill.toLowerCase().startsWith('j')) {
    skillArray2.push(skill);
  }

  return skillArray2;
}, []);
console.log(skillArray2.join());

//
console.warn(
  `2.Folosind reduce afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy."`,
);
const message1 = person.friends.reduce(
  (message1, { name, surname }, index, friends) => {
    let punctuation = ', ';

    if (index === friends.length - 1) {
      punctuation = '.';
    }

    message1 += `${name} ${surname}${punctuation}`;

    return message1;
  },
  'Prietenii mei se numesc ',
);
console.log(message1);

console.warn(
  `3.Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ", doar daca varsta prietenului este impara. `,
);
const message2 = person.friends.reduce((message2, friend) => {
  const { age, name } = friend;
  const diff = person.age - age;

  message2 += `Intre ${person.name} si ${name} este o diferenta de ${diff} ani.`;
  return message2;
}, '');
console.log(message2);

console.warn(
  `6.Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ". Repeta pentru tot arrayul friends.`,
);
const message6 = person.friends.reduce((message6, friend) => {
  const { age, name } = friend;
  const diff = person.age - age;

  if (age % 2 !== 0) {
    message6 += `Intre ${person.name} si ${name} este o diferenta de ${diff} ani.`;
  }

  return message6;
}, '');
console.log(message6);

// TEMA
console.warn(
  `4.Folosind reduce, afiseaza numarul total de ani pe care il au persoanele din arrayul friends, doar daca varsta este mai mare sau egala cu 30 de ani.`,
);
const message3 = person.friends.reduce((message3, friend) => {
  const { age } = friend;

  message3 += age >= 30 ? age : 0;

  return message3;
}, 0);
console.log(message3);

console.warn(
  `5.Folosind reduce, afiseaza suma anilor de nastere a persoanelor.`,
);
const message4 = person.friends.reduce((message4, friend) => {
  const { age } = friend;

  message4 += new Date().getFullYear() - age;

  return message4;
}, 0);
console.log(message4);

console.warn(
  `7.Folosind obiectul person si reduce, afiseaza in consola un string care contine skillurile persoanei, separate prin virgula`,
);
const message7 = person.skills.reduce((message7, skill, index) => {
  punctuation = index === person.skills.length - 1 ? '.' : ', ';

  message7 += skill + punctuation;

  return message7;
}, '');
console.log(message7);

console.warn(`8. In mod similar, afiseaza skillurile care incep cu c`);
const message8 = person.skills.reduce((message8, skill, index) => {
  if (skill.toLowerCase().startsWith('c')) {
    message8.push(skill);
  }

  return message8;
}, []);
console.log(message8.join());

console.warn(
  `9.Folosind reduce, afiseaza propozitia: "Numele de familie ale prietenilor mei sunt: xxx, xxx , xxx."`,
);
const message9 = person.friends.reduce((message9, friend, index) => {
  const { surname } = friend;
  let punctuation =
    index === person.friends.length - 1
      ? '.'
      : index === person.friends.length - 2
      ? ' si '
      : ', ';

  message9 += surname + punctuation;

  return message9;
}, 'Numele de familie ale prietenilor mei sunt: ');

console.log(message9);

console.warn(
  `10.Folosind reduce, afiseaza numarul total de ani pe care il au persoanele din arrayul friends `,
);
const message10 = person.friends.reduce((message10, friend) => {
  const { age } = friend;

  return (message10 += Math.abs(new Date().getFullYear() - age));
}, 0);
console.log(message10);

console.warn(`11. Folosind reduce, afiseaza suma anilor  persoanelor. `);
const message11 = person.friends.reduce((message11, friend) => {
  const { age } = friend;

  return (message11 += age);
}, 0);
console.log(message11);

console.warn(
  `12. Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends. `,
);
const message12 = person.friends.reduce((message12, friend) => {
  const { age } = friend;
  const diff = Math.abs(person.age - age);

  message12.push(diff);

  return message12;
}, []);
console.log(message12.join(', '));

console.warn(
  `13. Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ". Repeta pentru tot arrayul friends.`,
);
const message13 = person.friends.reduce((message13, friend) => {
  const { name, age } = friend;
  const diff = Math.abs(person.age - age);
  message13 += `Intre ${person.name} si ${name} este o diferenta de ${diff} ani.\n`;

  return message13;
}, '');
console.log(message13);
