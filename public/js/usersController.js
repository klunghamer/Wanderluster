(function(){
  angular.module('wanderluster')
    .controller('usersController', usersController);

  function usersController($http, $state){
    var self = this;

    this.createUser = function(user) {
      console.log(user);
      $http.post('/users/signup', {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password
      })
      .then(function(response){
        self.user = response.data.user
      })
      .catch(function(err){
        console.log(err);
      })
    }

  };
})()
