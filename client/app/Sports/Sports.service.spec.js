'use strict';

describe('Service: Sports', function () {

  // load the service's module
  beforeEach(module('activityForecasterApp'));

  // instantiate service
  var Sports;
  beforeEach(inject(function (_Sports_) {
    Sports = _Sports_;
  }));

  it('should do something', function () {
    expect(!!Sports).toBe(true);
  });

});
