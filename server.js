//Express
var express = require('express');
var app = express();

var path = require('path');


// Models
var User = require('./models/user');
var Place = require('./models/place');

//Debugging
var logger = require('morgan');
app.use(logger('dev'));


//Handle forms
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

//Static Assets
app.use(express.static(__dirname + '/public'));
// app.use(express.static(path.join(__dirname,'public')));


//Mongoose
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', function(err) {
  console.log(err);
})
db.once('open', function() {
  console.log('Database Connected!');
})

//Config heroku
var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/wanderluster';
mongoose.connect(mongoURI);

//Config dotenv
// require('dotenv').config();
// const GOOGLE_KEY = process.env.GOOGLE_KEY;


//Passport
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
//
app.use(require('express-session')({
  secret: 'victorious',
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Controllers
var usersController = require('./controllers/users.js');
var helpersController = require('./controllers/helpers.js')
// var clothingController = require('./controllers/closet');

//Routing
app.use('/users', usersController);
app.use('/helpers', helpersController)
// app.use('/closet', clothingController);

app.listen(process.env.PORT || 3000, function(){
  console.log("=============================");
  console.log("SERVER LISTENING ON PORT 3000");
  console.log("=============================");
});
