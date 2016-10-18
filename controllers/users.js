var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user');

// router.get('/', function (req, res) {
//   res.render('index')
// })

router.post('/signup', function(req,res) {
  console.log('signup');
  console.log(req.body);
  User.register(new User({
    username: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email}),
  req.body.password, function(err, user) {
    if (err) {
      console.log(err);
    } else {
      console.log(user);
     res.json({ user : user });
   }
  });
})

router.post('/login', passport.authenticate('local'), function(req, res) {
  req.session.save(function (err) {
    if (err) return next(err);
    // res.re('/todos')
    res.json({status: 200, message: 'ok', user: req.user});
  });
});

router.post('/', function(req, res){
  // console.log(req.body);
  var user = req.session.passport.user;
  User.find({username: user}).exec()
  .then(function(user){
    // console.log(user);
    user[0].placesToVisit.push({
      city: req.body.city,
      country: req.body.country,
      weatherDesc: req.body.weatherDesc,
      temp: req.body.temp,
      humidity: req.body.humidity
    })
    return user[0].save();
  })
  .then(function(response){
    console.log('response', response);
  })
})

router.put('/:placeId', function(req, res){
  // console.log(req);
  console.log('put req.body ', req.body);
  // console.log('placeId', req.params.placeId);
  User.findOne({username: req.session.passport.user}).exec()
  .then(function(user){
    console.log(user);
  })

})

module.exports = router;
