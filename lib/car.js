import { EventEmitter } from 'events';
import _ from 'lodash';

export default class Car extends EventEmitter {
  constructor(opts) {
    super();
    this.number(opts.number || 100);
    this.size(opts.size || [100, 200]);
  }

  get double() {
    return this._number * 2;
  }

  number(v) {
    if (!arguments.length) return _number;
    this._number = v;
    return this;
  }

  size(v) {
    if (!arguments.length) return _size;
    this._size = _.map(v, n => {
      return n * 10;
    });
    return this;
  }
}

const opts = { number: 10, size: [10, 20] };
const cat = new Car(opts);
