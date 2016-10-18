(function() {
  angular.module('wanderluster', ['ui.router'])
    .config(AuthRouter);

    AuthRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

    function AuthRouter($stateProvider, $urlRouterProvider, $locationProvider) {
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

        $urlRouterProvider.otherwise('/');

        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        })
      }

})()
