import { getCarsStructs, getPetsStructs } from './helpers.js';
import { PEOPLE_COUNT } from './helpers.js';

const peopleStructs = [];

console.time('struct');
for (let i = 0; i < PEOPLE_COUNT; i++) {
  peopleStructs.push({
    id: 1,
    name: 'Emilio',
    surname: 'Spatola',
    age: 18, // 🤪,
    address: {
      address: 'Via colosseo 1',
      city: 'Rome',
      country: 'Italy',
      zipCode: '00000',
    },
    pets: getPetsStructs(),
    cars: getCarsStructs(),
  });
}
console.timeEnd('struct');
