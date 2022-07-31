import Car from './Car.js';
import Pet from './Pet.js';

export const PEOPLE_COUNT = 30_000;
const PETS_COUNT = 1000;
const CARS_COUNT = 1000;

export const getPetsStructs = () => {
  const petsStructs = [];
  for (let i = 0; i < PETS_COUNT; i++) {
    petsStructs.push({
      name: 'Braccobaldo',
      age: 5
    });
  }
  return petsStructs;
}

export const getPetsObjects = () => {
  const petsObjects = [];
  for (let i = 0; i < PETS_COUNT; i++) {
    petsObjects.push(new Pet({
      name: 'Braccobaldo',
      age: 5,
    }));
  }
  return petsObjects;
}

export const getCarsStructs = () => {
  const catsStructs = [];
  for (let i = 0; i < CARS_COUNT; i++) {
    catsStructs.push({
      name: 'Murcielago',
      manufacturer: 'Lamborghini',
      km: 100,
      registrationYear: 2021,
    });
  }
  return catsStructs;
}

export const getCarsObjects = () => {
  const carsObjects = [];
  for (let i = 0; i < CARS_COUNT; i++) {
    carsObjects.push(new Car({
      name: 'Murcielago',
      manufacturer: 'Lamborghini',
      km: 100,
      registrationYear: 2021,
    }));
  }
  return carsObjects;
}
