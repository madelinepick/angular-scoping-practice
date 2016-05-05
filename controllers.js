angular.module('scopeApp')
.controller('FirstController', function($scope, $http, $log) {
  $scope.vm = {};
  $scope.vm.argument = 'this only shows up in first controller scope'
})
.controller('SecondController', function($scope, $http, $log) {
  $scope.vm = {};
  $scope.vm.argument = 'this only shows up in second controller scope'
});
