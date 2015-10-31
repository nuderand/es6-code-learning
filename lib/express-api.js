import express from 'express';

const app = express();

// db
var animals = [
  { name: 'cat', country: 'ja' },
  { name: 'dob', country: 'en' },
  { name: 'bird', country: 'chi' }
];

var users = [
  { name: 'john', age: 20 },
  { name: 'smith', age: 25 },
  { name: 'brown', age: 23 }
];

// api
app.use('/api/animals', function (req, res, next) {
  console.log('Access animals');
  res.send(animals);
});

app.use('/api/users', function (req, res, next) {
  console.log('Access users');
  res.send(users);
});

app.listen(5000);
console.log('Express started on http://localhost:5000');
