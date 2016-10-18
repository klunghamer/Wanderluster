(function(){
  angular.module('wanderluster')
    .controller('usersController', usersController);

  function usersController($http, $state){
    var self = this;

    this.createUser = function(user) {
      return $http({
        url: '/users/signup',
        method: "POST",
        data: user
      })
      .then(function(response){
        console.log('res');
        console.log(response);
        // self.user = response.data.user
      })
      .catch(function(err){
        console.log(err);
      })
    }

    this.login = function(user) {
      console.log(user);
      return $http({
        url: '/users/login',
        method: 'POST',
        data: user
      })
      .then(function(response) {
        console.log('response', response);
        console.log(response.data);
      })
      .catch(function(err) {
        console.log(err);
      })
    }

  };
})()
