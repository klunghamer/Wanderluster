(function() {
  angular.module('wanderluster', ['ui.router'])
    .config(AuthRouter);

    AuthRouter.$inject = ['$stateProvider', '$urlRouterProvider']

    function AuthRouter($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: '../partials/_home.html'
        })
        .state('signup', {
          url: '/signup',
          templateUrl: '../partials/_signup.html'
        })
        .state('login', {
          url: '/login',
          templateUrl: '../partials/_login.html'
        })
        .state('profile', {
          url: '/profile',
          templateUrl: '../partials/_profile.html'
        })
        .state('addpage', {
          url: '/addpage',
          templateUrl: '../partials/_addpage.html'
        })
        .state('tovisit', {
          url: '/tovisit',
          templateUrl: '../partials/_tovisit.html'
        })
        .state('visited', {
          url: '/visited',
          templateUrl: '../partials/_visited.html'
        })
        .state('editplace', {
          url: '/editplace',
          templateUrl: '../partials/_editplace.html',
          params: {
            place: null
          }
        })

        $urlRouterProvider.otherwise('/');

      }

})()
