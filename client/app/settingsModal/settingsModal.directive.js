

'use strict';

angular.module('activityForecasterApp')
  .directive('settingsModal', [ '$modal', 'Settings', 'Sports', function ($modal, Settings, Sports) {
    return {
      templateUrl: "app/settingsModal/settingsModal.html",
      restrict: 'EA',
      link: function (scope, element, attrs) {
      	var settingsModalConfig = {
	          	templateUrl: 'app/settingsModal/settingsModal.modal.html',
	          	scope: scope,
	          	controller: 'settingsModalInstanceController',
	          	backdrop: true,
	          	keyboard: true
	    }, modalInstance;

      	scope.openModal = function(){
      		console.log('open modal', $modal)

	        modalInstance = $modal.open(settingsModalConfig);
      	}
      }
    };
  }]).controller('settingsModalInstanceController', [ '$scope',function ($scope) {

  }]);