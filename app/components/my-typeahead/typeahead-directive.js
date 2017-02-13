'use strict';

angular.module('myApp')

.directive('myTypeahead', [function() {
  return {
    restrict: 'E',
    scope: {
    	options: '=',
    	datasets: '=',
    	model: '=ngModel',
    	required: '='
    },
    templateUrl: 'components/my-typeahead/typeahead-directive.html',
    link: function(scope, elm, attrs) {
      scope.clear = function() {
      	scope.model = '';
      }
    }
  };
}]);
