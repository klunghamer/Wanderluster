(function(){
  angular.module('wanderluster')
    .controller('usersController', usersController);

  function usersController($http, $state){
    var self = this;

    $http.get('/helpers/get-user')
      .then(function(response) {
        console.log(response)
        self.currentUser = response.data.user;
      })
      .catch(function(err){
        console.log('err', err)
      })

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
        $state.go('login', {url: '/login'});
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
        self.user = response.data.user;
        $state.go('profile', {url: '/profile'});
        // console.log('self', self);
        console.log(self.user.firstName);
      })
      .catch(function(err) {
        console.log(err);
      })
    }

    this.add = function(vacation){
      console.log(vacation);
      return $http({
        url: '/users',
        method: 'POST',
        data: vacation
      })
      .then(function(response){
        console.log(response);
      })
    }
  };
})()
