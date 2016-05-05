angular.module('scopeApp')
.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'FirstController'
      })
      .when('/second', {
        templateUrl: 'views/second.html',
        controller: 'SecondController'
      })
});
