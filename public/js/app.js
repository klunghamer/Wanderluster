(function() {
  angular.module('wanderluster', ['ui.router'])
    .config(AuthRouter);

    AuthRouter.$inject = ['$stateProvider', '$urlRouterProvider']

    function AuthRouter($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'home.html'
        })
        .state('signup', {
          url: '/signup',
          templateUrl: 'signup.html'
        })
        .state('login', {
          url: '/login',
          templateUrl: 'login.html'
        })
        .state('profile', {
          url: '/profile',
          templateUrl: 'profile.html'
        })
        .state('addpage', {
          url: '/addpage',
          templateUrl: 'addpage.html'
        })
        .state('tovisit', {
          url: '/tovisit',
          templateUrl: 'tovisit.html'
        })
        .state('visited', {
          url: '/visited',
          templateUrl: 'visited.html'
        })

        $urlRouterProvider.otherwise('/');

      }

})()
