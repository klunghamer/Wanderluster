var express = require('express');
var router = express.Router();
var request = require('request');

//helpers/get-user
router.get('/get-user', function(req, res) {
  var user = req.user // it adds the user to the request object
  res.json({user: user})
})

router.post('/get-weather', function (req, res) {
  console.log(req.body);
  res.json({weather: 'good'})
  // request('http://api.openweathermap.org/data/2.5/weather')
})

module.exports = router;
