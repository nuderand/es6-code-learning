import express from 'express';
import util from 'util';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const router = express.Router();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const users = [
  { name: 'tobi' },
  { name: 'loki' },
  { name: 'jane' }
];

router.get('/', function (req, res) {
  res.json({ error: false, message: 'Hello' });
});

router.post('/add',function(req,res){
  res.json({"error" : false, "message" : "success", "data" : req.body.num1 + req.body.num2});
});


router.get('/api/users', function (req, res, next) {
  res.send(users);
  console.log(res._header);
  console.log(res.statusCode);
  console.log(res.statusMessage);
});

app.use('/', router);

app.listen(3000, function() {
  console.log('Express server is running');
});

