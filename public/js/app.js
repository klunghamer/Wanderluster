(function() {
  var app = angular.module('wanderluster')

  app.controller('MainCtrl', function($http) {

    $http.get('/login')
      .then(function(response) {
        console.log(response);
      })
      .catch(function(err) {
        console.log(err);
      })
  })


})()
