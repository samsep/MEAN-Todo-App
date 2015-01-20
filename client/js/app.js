todoApp = angular.module('todoApp', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/todo.html',
        controller: 'TodoCtrl'
      })
      .when('/electronics', {
        templateUrl: '/partials/electronics.html',
        controller: 'electronicsCtrl'
      })

      // .otherwise({
      //   redirectTo: '/'
      // });
  });
