import Person from './Person.js';
import Address from './Address.js';
import { PEOPLE_COUNT } from './helpers.js';
import { getCarsObjects, getPetsObjects } from './helpers.js';

const peopleClasses = [];

console.time('time');
for (let i = 0; i < PEOPLE_COUNT; i++) {
  peopleClasses.push(new Person({
    id: 1,
    name: 'Emilio',
    surname: 'Spatola',
    age: 18, // 🤪,
    address: new Address({
      address: 'Via colosseo 1',
      city: 'Rome',
      country: 'Italy',
      zipCode: '00000',
    }),
    pets: getPetsObjects(),
    cars: getCarsObjects(),
  }));
}
console.timeEnd('time');
