'use strict';

describe('Service: repsearchfed', function () {

  // load the service's module
  beforeEach(module('wats4030CapstoneApp'));

  // instantiate service
  var repsearchfed;
  beforeEach(inject(function (_repsearchfed_) {
    repsearchfed = _repsearchfed_;
  }));

  it('should do something', function () {
    expect(!!repsearchfed).toBe(true);
  });

});
