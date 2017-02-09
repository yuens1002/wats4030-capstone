'use strict';

describe('Service: repsearch', function () {

  // load the service's module
  beforeEach(module('wats4030CapstoneApp'));

  // instantiate service
  var repsearch;
  beforeEach(inject(function (_repsearch_) {
    repsearch = _repsearch_;
  }));

  it('should do something', function () {
    expect(!!repsearch).toBe(true);
  });

});
