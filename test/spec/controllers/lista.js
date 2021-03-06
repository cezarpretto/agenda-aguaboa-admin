'use strict';

describe('Controller: ListaCtrl', function () {

  // load the controller's module
  beforeEach(module('agendaabAdminApp'));

  var ListaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListaCtrl = $controller('ListaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListaCtrl.awesomeThings.length).toBe(3);
  });
});
