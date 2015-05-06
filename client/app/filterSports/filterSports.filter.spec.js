'use strict';

describe('Filter: filterSports', function () {

  // load the filter's module
  beforeEach(module('activityForecasterApp'));

  // initialize a new instance of the filter before each test
  var filterSports;
  beforeEach(inject(function ($filter) {
    filterSports = $filter('filterSports');
  }));

  it('should return the input prefixed with "filterSports filter:"', function () {
    var text = 'angularjs';
    expect(filterSports(text)).toBe('filterSports filter: ' + text);
  });

});
