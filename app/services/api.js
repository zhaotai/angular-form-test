'use strict';
angular.module('myApp')
.factory('API', ['$q', '$timeout', '$http', function($q, $timeout, $http) {
	return {
		save: function(form) {
			var deferred = $q.defer();
			$timeout(function() {
				//deferred.resolve({ errorCode: 0, data: form });
				deferred.reject({ errorCode: 1, data: 'failed' });
			}, 1000);
			return deferred.promise;
		},
		getUsers: function() {
			return $http.get('/data/users.json');
		}
	};
}]);