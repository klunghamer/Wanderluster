var mongoose = require('mongoose')

var PlaceSchema = new mongoose.Schema({
  city: String,
  country: String,
  weatherDesc: String,
  temp: Number,
  humidity: Number,
  icon: String
})

var Place = mongoose.model('Place', PlaceSchema);

module.exports = Place;
