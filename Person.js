class Person {
  name;
  surname;
  age;
  pets;
  address;
  cars;

  constructor(props) {
    this.name = props.name;
    this.surname = props.surname;
    this.age = props.age;
    this.pets = props.pets;
    this.cars = props.cars;
  }
}

export default Person;
