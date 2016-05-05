angular.module('scopeApp')
.directive('asMain', ['$http', '$log', function($http,$log) {
  return {
    restrict: 'E',
    templateUrl: 'directives/main/main.html',
    scope: {
      variable: '='
    },
    link: function(scope, element, attrs, fn){
    }
  }
}]);
