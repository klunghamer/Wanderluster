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
      }).then(function(response){
        console.log('res');
        console.log(response);
        // self.user = response.data.user
      })
      .catch(function(err){
        console.log(err);
      })
    }

  };
})()
