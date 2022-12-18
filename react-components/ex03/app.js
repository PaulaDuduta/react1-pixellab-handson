const person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: true,
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    steven: {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    carol: {
      name: 'Carol',
      age: 29,
      surname: 'Carolson',
    },
  },
};

console.warn(
  `1.Folosind Object.values(), afiseaza o lista inversata cu numele complet inversat al prietenilor.`,
);
const friendObjects = Object.values(person.friends);
friendObjects.reverse().forEach(({ name, surname }) => {
  console.log(`${surname} ${name}`);
});

console.warn(
  `2.Afiseaza propozitia: “Prietenii mei sunt Larry, Steven si Carol.” folosind Object.values()`,
);
const message1 = Object.values(person.friends).reduce(
  (message1, friend, index, friends) => {
    const { name } = friend;
    const l = friends.length;
    let punctuation = ', ';

    if (index === l - 1) {
      punctuation = '.';
    }

    if (index === l - 2) {
      punctuation = ' si ';
    }

    message1 += `${name}${punctuation}`;

    return message1;
  },
  'Prietenii mei sunt ',
);
console.log(message1);

console.warn(
  `3.Prin aceeasi metoda, afiseaza propozitia: “Diferenta de varsta intre Larry si Dragos este de xxx ani.” etc…`,
);
const message2 = Object.values(person.friends).reduce(
  (message2, { name, age }, index, friends) => {
    const diff = person.age - age;
    let punctuation = '. ';

    if (index === friends.length - 1) {
      punctuation = '.';
    }

    message2 += `Diferenta de varsta dintre ${name} si ${person.name} este de ${diff} ani${punctuation}`;
    return message2;
  },
  '',
);
console.log(message2);

// TEMA

console.warn(
  `4.Prin aceeasi metoda, afiseaza o lista cu numele complet al prietenilor (console.log / linie). `,
);
const message4 = Object.values(person.friends).reduce(
  (message4, { name, surname }) => {
    return (message4 += name + ' ' + surname + `\n`);
  },
  '',
);
console.log(message4);

console.warn(
  `5.Afiseaza propozitia: “Prietenii mei sunt Larry Larryson, Steven Stevenson si Carol Carolson.” folosind Object.values()`,
);
const message5 = Object.values(person.friends).reduce(
  (message5, friend, index, friends) => {
    const { name, surname } = friend;

    let punctuation =
      index === friends.length - 1
        ? '.'
        : index === friends.length - 2
        ? ' si '
        : ', ';

    message5 += `${name} ${surname}${punctuation}`;
    return message5;
  },
  'Prietenii mei sunt ',
);
console.log(message5);

console.warn(
  `6.In mod similar, afiseaza propozitia  “Larry are xx ani. Steven are …”`,
);
const message6 = Object.values(person.friends).reduce(
  (message6, { name, age }) => {
    message6 += `${name} are ${age} ani.\n`;

    return message6;
  },
  '',
);
console.log(message6);
