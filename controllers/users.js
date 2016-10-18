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


module.exports = router;
