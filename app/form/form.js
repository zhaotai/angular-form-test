'use strict';

angular.module('myApp.form', ['ngRoute', 'siyfion.sfTypeahead', 'ngFileUpload'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/form', {
    templateUrl: 'form/form.html',
    controller: 'FormCtrl'
  });
}])

.controller('FormCtrl', ['$scope', 'Upload', 'API', function($scope, Upload, API) {
  var numbers = new Bloodhound({
    datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.name); },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: [
      { name: 'Allen Albort', img: 'http://brightcove04.o.brightcove.com/1362235914001/1362235914001_4806146059001_video-still-for-video-4805957335001.jpg?pubId=1362235914001', email: '123@hotmail.com', companyName: 'Petremco' },
      { name: 'Aclen Albort', img: 'http://brightcove04.o.brightcove.com/1362235914001/1362235914001_4806146059001_video-still-for-video-4805957335001.jpg?pubId=1362235914001', email: '123@hotmail.com', companyName: 'Petremco' },
      { name: 'Adlen Albort', img: 'http://brightcove04.o.brightcove.com/1362235914001/1362235914001_4806146059001_video-still-for-video-4805957335001.jpg?pubId=1362235914001', email: '123@hotmail.com', companyName: 'Petremco' },
      { name: 'Aelen Albort', img: 'http://brightcove04.o.brightcove.com/1362235914001/1362235914001_4806146059001_video-still-for-video-4805957335001.jpg?pubId=1362235914001', email: '123@hotmail.com', companyName: 'Petremco' },
      { name: 'Aflen Albort', img: 'http://brightcove04.o.brightcove.com/1362235914001/1362235914001_4806146059001_video-still-for-video-4805957335001.jpg?pubId=1362235914001', email: '123@hotmail.com', companyName: 'Petremco' },
      { name: 'Aglen Albort', img: 'http://brightcove04.o.brightcove.com/1362235914001/1362235914001_4806146059001_video-still-for-video-4805957335001.jpg?pubId=1362235914001', email: '123@hotmail.com', companyName: 'Petremco' },
    ]
  });

  // initialize the bloodhound suggestion engine
  numbers.initialize();

  $scope.numbersDataset = {
    displayKey: 'name',
    classNames: {
      selectable: 'selectable'
    },
    source: numbers.ttAdapter(),
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
      data: {file: file, 'username': $scope.username}
    }).then(function (resp) {
      console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
    }, function (resp) {
      // assume it succeed, assign the url from response into form.
      $scope.form.templateUrl = 'https://xxx.xxx.xxx/file'; // <= this string represented the url which returned in response
      console.log('Error status: ' + resp.status);
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

      })
      .catch(function(err) {

      })
      .finally(function(res) {
        $scope.saving = false;
        $scope.$emit('loading:off');
      });
    console.log(form);
  };

}]);
