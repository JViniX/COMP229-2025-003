class Vehicle {
  constructor(wheels) {
     this.wheels = wheels;
  }
  toString() {
     return 'Wheels: ' + this.wheels + ' ';
  }
}

class Car extends Vehicle {
  constructor(color) {
     super(4);
     this.color = color;
  }
  toString() {
     return super.toString() + ' colored: ' + this.color;
  }
}

let motorcycle = new Vehicle(2);
console.log(motorcycle.toString());

let car = new Car('blue');
console.log(car.toString());

console.log(car instanceof Car);
console.log(car instanceof Vehicle);
console.log(typeof car);

let item = "true";
console.log(typeof item);

item = true;
console.log(typeof item);

item = 10;
let item2 = "10"
console.log(typeof item);
console.log(typeof item2);

let result = item === item2;
console.log(result);