(function(){
  angular.module('wanderluster')
    .controller('usersController', usersController);

  function usersController($http, $state){
    var self = this;

    $http.get('/helpers/get-user')
      .then(function(response) {
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

        $state.go('login', {url: '/login'});
      })
      .catch(function(err){
        console.log(err);
      })
    }

    this.login = function(user) {
      return $http({
        url: '/users/login',
        method: 'POST',
        data: user
      })
      .then(function(response) {
        $state.go('profile', {url: '/profile'});
        console.log('self', self);
      })
      .catch(function(err) {
        console.log(err);
      })
    }

    this.logout = function(user) {
      return $http({
        url:'/users/logout',
        method: 'DELETE',
        data: user
      })
      .then(function(response) {
        console.log(response);
      })
    }

    this.add = function(place){
      return $http({
        url: '/users',
        method: 'POST',
        data: place
      })
      .then(function(response){
        console.log(response);
        $state.go('tovisit', {url: '/tovisit'});
      })
      .catch(function(err) {
        console.log(err);
      })
    }

    this.delete = function(place){
      return $http({
        url: `/users/delete/${$state.params.place._id}`,
        method: 'DELETE',
        data: place
      })
      .then(function(response){
        console.log(response);
        $state.go('tovisit', {url: '/tovisit'});
      })
    }

    /// EDIT ///
    this.edit = function(place){
      return $http({
        url: `/users/${$state.params.place._id}`,
        method: 'PUT',
        data: place
      })
      .then(function(response){
        $state.go('tovisit', {url: '/tovisit'});
      })
      .catch(function(err) {
        console.log(err);
      })
    }

    this.addToVisited = function(place){
      console.log($state.params.place);
      return $http({
        url: `/users/moveToVisited/${$state.params.place._id}`,
        method: 'PUT',
        data: place
      })
      .then(function(response){
        $state.go('visited', {url: '/visited'});
      })
      .catch(function(err) {
        console.log(err);
      })
    }
  };
})()
