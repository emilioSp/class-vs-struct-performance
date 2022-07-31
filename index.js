import Person from './Person.js';
import Pet from './Pet.js';
import Address from './Address.js';
import Car from './Car.js';

const peopleClasses = [];
const peopleStructs = [];

const ITEMS_COUNT = 500_000;

console.time('struct');
for (let i = 0; i < ITEMS_COUNT; i++) {
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
    pets: [{
      name: 'Mami',
      age: 4,
    }, {
      name: 'Grazia',
      age: 3,
    }, {
      name: 'Braccobaldo',
      age: 5,
    }, {
      name: 'Jenny',
      age: 10,
    }
    ],
    cars: [{
      name: 'Murcielago',
      manufacturer: 'Lamborghini',
      km: 100,
      registrationYear: 2021,
    }, {
      name: 'F40',
      manufacturer: 'Ferrari',
      km: 200,
      registrationYear: 2021,
    }, {
      name: 'Carrera GT',
      manufacturer: 'Porsche',
      km: 500,
      registrationYear: 2015,
    }]
  });
}
console.timeEnd('struct');


console.time('class');
for (let i = 0; i < ITEMS_COUNT; i++) {
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
    pets: [new Pet({
      name: 'Mami',
      age: 4,
    }), new Pet({
      name: 'Grazia',
      age: 3,
    }), new Pet({
      name: 'Braccobaldo',
      age: 5,
    }), new Pet({
      name: 'Jenny',
      age: 10,
    })],
    cars: [
      new Car({
        name: 'Murcielago',
        manufacturer: 'Lamborghini',
        km: 100,
        registrationYear: 2021,
      }),
      new Car({
        name: 'F40',
        manufacturer: 'Ferrari',
        km: 200,
        registrationYear: 2021,
      }),
      new Car({
        name: 'Carrera GT',
        manufacturer: 'Porsche',
        km: 500,
        registrationYear: 2015,
      })
    ]
  }));
}
console.timeEnd('class');
