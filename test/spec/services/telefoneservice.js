'use strict';

describe('Service: TelefoneService', function () {

  // load the service's module
  beforeEach(module('agendaabAdminApp'));

  // instantiate service
  var TelefoneService;
  beforeEach(inject(function (_TelefoneService_) {
    TelefoneService = _TelefoneService_;
  }));

  it('should do something', function () {
    expect(!!TelefoneService).toBe(true);
  });

});
