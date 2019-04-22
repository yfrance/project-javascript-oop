// Project Javascript OOP
class School {
  constructor(
    owner = "Unknown Owner",
    name = "Unknown Name",
    location = "Unknown Location"
  ) {
    this.owner = owner;
    this.name = name;
    this.location = location;
  }

  schoolMap() {
    console.log(
      `The ${this.name} school owned by ${this.name} and located at ${
        this.location
      } city.`
    );
  }

  getOwner() {
    return this.owner;
  }

  getName() {
    return this.name;
  }

  getLocation() {
    return this.location;
  }
}

const mySchool = new School("Habibie", "Airplanet", "Jakarta");

console.log(mySchool);

console.log();
// console
mySchool.schoolMap();

console.log();
console.log(mySchool.getOwner());

console.log(mySchool.getName());

console.log(mySchool.getLocation());

console.log();
// extends
class MarketingSchool extends School {
  constructor({ owner, name, location, metode, price }) {
    super(owner, name);
    this.name = name;
    this.location;
    this.metode = metode;
    this.price = price;
  }

  // get metode
  getMetode() {
    return this.metode;
  }

  // get price
  getPrice() {
    const formattedPrice = new Intl.NumberFormat("ID", {
      style: "currency",
      currency: "IDR",
      minimunFractionDigits: 0
    }).format(this.price);

    return formattedPrice;
  }

  getCity() {
    return this.city;
  }
}

const bestSchool = new MarketingSchool({
  owner: "Pakde",
  name: "SEO Max",
  location: "Jakarta",
  metode: "Bootcamp",
  price: "1000"
});

console.log(bestSchool);
