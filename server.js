//Express
var express = require('express');
var app = express();


// Models
// var User = require('./models/user');
// var Clothing = require('./models/clothing');

//Debugging
var logger = require('morgan');
app.use(logger('dev'));


//Handle forms
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

//Static Assets
app.use(express.static(__dirname + '/public'));

//Mongoose
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/closet');
var db = mongoose.connection;
db.on('error', function(err) {
  console.log(err);
})
db.once('open', function() {
  console.log('database connected!');
})

//Config heroku
var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/wanderluster';
mongoose.connect(mongoURI);


//Passport
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

app.use(require('express-session')({
  secret: 'victorious',
  resave: false,
  saveUninitialized: false
}))

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(User.createStrategy());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

//Controllers
var userController = require('./controllers/userController');
// var clothingController = require('./controllers/closet');

//Routing
app.use('/', userController);
// app.use('/closet', clothingController);


app.listen(process.env.PORT || 3000);
