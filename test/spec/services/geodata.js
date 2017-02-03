'use strict';

describe('Service: geodata', function () {

  // load the service's module
  beforeEach(module('wats4030CapstoneApp'));

  // instantiate service
  var geodata;
  beforeEach(inject(function (_geodata_) {
    geodata = _geodata_;
  }));

  it('should do something', function () {
    expect(!!geodata).toBe(true);
  });

});
