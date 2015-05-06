'use strict';

describe('Directive: settingsModal', function () {

  // load the directive's module and view
  beforeEach(module('activityForecasterApp'));
  beforeEach(module('app/settingsModal/settingsModal.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<settings-modal></settings-modal>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the settingsModal directive');
  }));
});