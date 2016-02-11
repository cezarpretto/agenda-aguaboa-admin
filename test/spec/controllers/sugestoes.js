'use strict';

describe('Controller: SugestoesCtrl', function () {

  // load the controller's module
  beforeEach(module('agendaabAdminApp'));

  var SugestoesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SugestoesCtrl = $controller('SugestoesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SugestoesCtrl.awesomeThings.length).toBe(3);
  });
});
