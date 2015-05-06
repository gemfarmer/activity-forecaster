'use strict';

angular.module('activityForecasterApp')
  .service('Settings', function ($http, Sports) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var Settings = function(){
    	// this.hello = 'hello';
    	this.inF = true;
    	this.impUnits = true;
    	// this.sportsList = [];
    	// _.forEach(Sports.list, function(sport){
    	// 	this.sportsList.push({name: sport.name, chosen:true})
    	// });
    	// console.log('sportsList',this.sportsList)
    }
    return new Settings();
  });
