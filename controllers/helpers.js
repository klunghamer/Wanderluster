var express = require('express');
var router = express.Router();
var request = require('request');

//helpers/get-user
router.get('/get-user', function(req, res) {
  var user = req.user // it adds the user to the request object
  res.json({user: user})
})

router.post('/get-weather', function (req, res) {
  var queryCity = req.body.city
  request(`http://api.openweathermap.org/data/2.5/weather?q=${queryCity}&appid=74136e42b44bd02393d5ad566f3e74a3`, function (error, response, body) {
    if(!error && response.statusCode == 200) {
      var parse = JSON.parse(body);
      res.json(parse);
    }
  })
})

module.exports = router;
