var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
var app = express(); 

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

User = require('./models').User;


var router = express.Router(); 

router.get('/ping', function(req, res) {
  res.send('pong');
});

// TODO: Use an specific controller
router.post('/login', function(req, res, next) {

  User.findOne({email: req.body.email}).then(function (user) {
      
    if (user.password == req.body.password) {
      res.status(200).json({ message: 'ok' });
      next();
    } else {
      res.status(403).json({ message: 'error' });
      next();
    }
    
  }) 
});

// TODO: Use an specific controller
router.post('/user', function(req, res, next) {
  let user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password
  })

  user.save(function(err){
    if (err) {
      return next(err);
    }
    res.send('User Created successfully')
  })
});

app.use('/api', router);

var port = process.env.PORT || 4000;        


app.listen(port, function() {
  console.log('Aplicación ejemplo, escuchando el puerto' + port + '!');
});

