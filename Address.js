class Address {
  address;
  city;
  country;
  zipCode;

  constructor(props) {
    this.address = props.address;
    this.city = props.city;
    this.country = props.country;
    this.zipCode = props.zipCode;
  }
}

export default Address;
