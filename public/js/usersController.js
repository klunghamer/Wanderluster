(function(){
  angular.module('wanderluster')
    .controller('usersController', usersController);

  function usersController($http, $state){
    var self = this;

    // this.editedPlace = null;

    // this.setPlaceToEdit = function(place) {
    //   self.editedPlace = place;
    //   console.log(this.editedPlace);
    // }

    $http.get('/helpers/get-user')
      .then(function(response) {
        // console.log(response)
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
        // console.log('res');
        // console.log(response);
        // self.user = response.data.user
        $state.go('login', {url: '/login'});
      })
      .catch(function(err){
        console.log(err);
      })
    }

    this.login = function(user) {
      // console.log(user);
      return $http({
        url: '/users/login',
        method: 'POST',
        data: user
      })
      .then(function(response) {
        // self.currentUser = response.data.user;
        $state.go('profile', {url: '/profile'});
        console.log('self', self);
        // console.log(self.user.firstName);
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
      // console.log(place);
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
      // console.log($state.params.place);
      return $http({
        url: `/users/delete/${$state.params.place._id}`,
        method: 'DELETE',
        data: place
      })
      .then(function(response){
        console.log(response);
        $state.go('tovisit', {url: '/tovisit'});
        // console.log('id', place._id);
      })
    }

    /// EDIT ///
    this.edit = function(place){
      // console.log(place);
      // console.log($state.params.place);
      // return $http.put(`/users/${$state.params.place._id}`, place)
      return $http({
        url: `/users/${$state.params.place._id}`,
        method: 'PUT',
        data: place
      })
      .then(function(response){
        // console.log(response);
        $state.go('tovisit', {url: '/tovisit'});
        // console.log('id', place._id);
      })
      .catch(function(err) {
        console.log(err);
      })
    }
  };
})()
