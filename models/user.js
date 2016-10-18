var mongoose = require('mongoose');
// var validate = require('mongoose-validate');
var PlaceSchema = require('./place').schema;
var passportLocalMongoose = require('passport-local-mongoose');


var UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: Number,
  createdAt: Date,
  updatedAt: Date,
  placesToVisit: [PlaceSchema],
  placesVisited: [PlaceSchema]
})

UserSchema.plugin(passportLocalMongoose);
var User = mongoose.model('User', UserSchema);

module.exports = User;
