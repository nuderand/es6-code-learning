import { EventEmitter } from 'events';

export default class Car extends EventEmitter {
  constructor(number) {
    super();
    this.number = number;
  }

  get double() {
    return this.number * 2;
  }
}

const cat = new Car(10);
console.log(cat.number);
console.log(cat.double);
