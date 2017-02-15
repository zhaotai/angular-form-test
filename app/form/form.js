'use strict';

angular.module('myApp.form', ['siyfion.sfTypeahead', 'ngFileUpload'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/form', {
    templateUrl: '/form/form.html',
    controller: 'FormCtrl'
  });
}])

.controller('FormCtrl', ['$scope', 'Upload', 'API', 'ngNotify', function($scope, Upload, API, ngNotify) {
  $scope.numbersDataset = {
    displayKey: 'name',
    classNames: {
      selectable: 'selectable'
    },
    limit: 3,
    source: function(query, syncResults, asyncResults) {
      if (query.length > 3) {
        API.getUsers().then(function(res) {
          var data = res.data;
          asyncResults(data);
        });
      }
    },
    templates: {
      suggestion: Handlebars.compile(
        '<div class="media" style="color: #666;">' +
          '<div class="media-left">' +
            '<div style="width: 40px; height: 40px;">' +
              '<a href="">' +
                '<img class="media-object" style="width: 40px; height: 40px; border-radius: 20px;" src="{{img}}" alt="{{name}}">' +
              '</a>' +
            '</div>' +
          '</div>' +
          '<div class="media-body">' +
            '<h4 class="media-heading" style="font-size: 16px; color: #444;">{{name}}</h4>' +
            '<span style="font-size: 14px;">{{email}}</span>' +
          '</div>' +
          '<div class="media-right">' +
            '<span style="font-size: 14px;">{{companyName}}</span>' +
          '</div>' +
        '</div>'
      ),
      empty: '<div class="tt-suggestion tt-empty-message">' +
        'No results were found ...' +
        '</div>'
    }
  };

  $scope.$on('typeahead:select', function(suggestion, dataset) {
    $scope.form.companyName = dataset.companyName;
    $scope.$digest();
  });

  $scope.form = {
    priority: 'Medium'
  };

  // upload on file select or drop
  $scope.upload = function (file) {
    Upload.upload({
      url: 'upload/url',
      data: { file: file }
    }).then(function (resp) {
      $scope.form.templateUrl = resp.data.data.url; // <= this string represented the url which returned in response
      console.log('Success Upload');
    }, function (resp) {
      // assume it succeed, assign the url from response into form.
      console.log('Error status: ' + resp.errorCode);
    }, function (evt) {
      var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
      console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
    });
  };

  $scope.save = function(form) {
    $scope.saving = true;
    $scope.$emit('loading:on');
    API.save(form)
      .then(function(res) {
        ngNotify.set('save succeed!', 'success');
      }, function(err) {
        ngNotify.set('save failed', 'error');
      })
      .finally(function(res) {
        $scope.saving = false;
        $scope.$emit('loading:off');
      });
  };

}]);
