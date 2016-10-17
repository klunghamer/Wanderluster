(function() {
  angular.module('wanderluster', ['ui.router'])
    .config(AuthRouter)

    AuthRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

    function AuthRouter($stateProvider, $urlRouterProvider, $locationProvider) {

      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: 'login.html'
          // controller: 'MainCtrl',
          // controllerAs: 'vm'
        })

        $urlRouterProvider.otherwise('/');

        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        })
      }

})()
