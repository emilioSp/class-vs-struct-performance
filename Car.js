class Car {
  name;
  manufacturer;
  km;
  registrationYear;

  constructor(props) {
    this.name = props.name;
    this.manufacturer = props.manufacturer;
    this.km = props.km;
    this.registrationYear = props.registrationYear;
  }
}

export default Car;
