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

  showDetail() {
    console.log(
      `The ${this.name} school owned by ${this.owner} and located at ${
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
mySchool.showDetail();

console.log();
console.log(mySchool.getOwner());

console.log(mySchool.getName());

console.log(mySchool.getLocation());

console.log();
// extends
class MarketingSchool extends School {
  constructor({ owner, name, location, method, price }) {
    super(owner, name, location);
    this.method = method;
    this.price = price;
  }

  // get method
  getmethod() {
    return this.method;
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
  method: "Bootcamp",
  price: "1000"
});

console.log(bestSchool);
