'use strict';

describe('myApp', function() {
  var $httpBackend;

  beforeEach(module('ngRoute'));
  beforeEach(module('myApp'));
  beforeEach(module('myApp.form'));

  beforeEach(inject(function(_$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.when('POST', 'upload/url').respond(200, { errorCode: 0, data: { url: 'abc' } });
  }));
  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('scope should be initialized', inject(function($controller, $rootScope, _API_) {
    var scope = $rootScope.$new();
    var FormCtrl = $controller('FormCtrl', {
      $scope: scope,
      API: _API_
    });
    expect(FormCtrl).toBeDefined();
    expect(scope.form).toEqual({
      priority: 'Medium'
    });
  }));


  it('upload function should be invoked correctly', inject(function($controller, $rootScope, _API_) {
    var scope = $rootScope.$new();
    $controller('FormCtrl', {
      $scope: scope,
      API: _API_
    });
    var mockFile = { a: 1 };
    scope.upload(mockFile);
    $httpBackend.flush();
    expect(scope.form.templateUrl).toBe('abc');
  }));
});
