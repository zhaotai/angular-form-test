'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.form',
  'angularSpinner',
  'ngNotify'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/form'});
}])
.controller('AppCtrl', ['$scope', 'ngNotify', 'usSpinnerService', function($scope, ngNotify, usSpinnerService) {
  $scope.showSpinner = false;
  $scope.$on('loading:on', function() {
    $scope.showSpinner = true;
  });
  $scope.$on('loading:off', function() {
    $scope.showSpinner = false;
  });
}]);
