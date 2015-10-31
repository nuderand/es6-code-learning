import request from 'request';
import fs from 'fs';
import { EventEmitter } from 'events';

const config = {
  uri: {
    animals: 'http://localhost:5000/api/animals',
    users: 'http://localhost:5000/api/users'
  }
}

export default class PromiseRequest extends EventEmitter {
  constructor() {
    super();
  }

  animals() {
    request
      .get(config.uri.animals)
      .on('response', (response) => {
        if (response.statusCode == 200) {
          console.log(response.headers['content-type']);
        }
      })
      .pipe(fs.createWriteStream('./../data/animal.json'));
  }

  users() {
    return new Promise(function (resolve, reject) {
      request(config.uri.users, function (error, response, body) {
        if (!error || response.statusCode == 200) {
          console.log(JSON.parse(body));
          resolve(JSON.parse(body));
        }
        reject(new Error(response.statusCode));
      });
    });
  }

  static ageList(value) {
    let ages = [];
    value.forEach(function(element, index, array) {
      ages.push(element.age);
    });
    return ages;
  }
}

var ageAverage = function (value) {
  let sum = value.reduce(function(a, b) { return a + b });
  return Math.floor(sum / value.length);
}

var pr = new PromiseRequest();
pr.animals();

pr.users()
  .then(PromiseRequest.ageList)
  .then(ageAverage)
  .then(function (value) {
    console.log('Avarage age is', value);
  })
  .catch(function (error) {
    console.error(error);
  });
