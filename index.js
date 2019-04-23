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

// extendsget
// Marketing School
class MarketingSchool extends School {
  constructor({ owner, name, location, method, price }) {
    super(owner, name, location);
    this.method = method;
    this.price = price;
  }

  // get method
  getMethod() {
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

const bestMarketingSchool = new MarketingSchool({
  owner: "Pakde",
  name: "SEO Max",
  location: "Jakarta",
  method: "Bootcamp",
  price: "10000000"
});

console.log(bestMarketingSchool);

console.log();
// ArmySchool
class ArmySchool extends School {
  constructor({ owner, name, location, method, price }) {
    super(owner, name, location);
    this.method = method;
    this.price = price;
  }
}

const bestArmySchool = new ArmySchool({
  owner: "Rambo",
  name: "SWAT Academy",
  location: "Sahara Desert",
  method: "Boarding School",
  price: "50000000"
});

console.log(bestArmySchool);

console.log();
// CookingSchool
class CookingSchool extends School {
  constructor({ owner, name, location, method, price }) {
    super(owner, name, location);
    this.method = method;
    this.price = price;
  }
}

const bestCookingSchool = new CookingSchool({
  owner: "Gordon Ramsay",
  name: "Master Class",
  location: "Bali",
  method: "Boarding School",
  price: "15000000"
});

console.log(bestCookingSchool);

console.log();
// Music School
class MusicSchool extends School {
  constructor({ owner, name, location, method, price }) {
    super(owner, name, location);
    this.method = method;
    this.price = price;
  }
}

const bestMusicSchool = new MusicSchool({
  owner: "Lawrence Berk",
  name: "Berklee College of Music",
  location: "Boston",
  method: "Academy",
  price: "750000000"
});

console.log(bestCookingSchool);
