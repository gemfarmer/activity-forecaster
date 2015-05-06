'use strict';

angular.module('activityForecasterApp')
  .service('Sports', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var Sports = function(){
    	// this.hello = 'hello';
    	this.list = [];
    }
    return new Sports();
  });
