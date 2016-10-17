var mongoose = require('mongoose');
var mongooseValidate = require('mongoose-validate');
var PlaceSchema = require('./place').schema;
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String, required: true, validate: [validate.email, 'invalid email address']
  password: Number,
  createdAt: Date,
  updatedAt: Date,
  placesToVisit: [PlaceSchema],
  placesVisited: [PlaceSchema]
})

UserSchema.plugin(passportLocalMongoose);
var User = mongoose.model('User', UserSchema);

module.exports = User;
