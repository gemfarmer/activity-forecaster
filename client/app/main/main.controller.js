'use strict';

angular.module('activityForecasterApp')
  .controller('MainCtrl', function ($scope, $http, ipCookie, Sports, Settings) {
    $scope.details = false;
    $scope.showDetails = function(){
    	$scope.details = !$scope.details;
    }
   	$scope.Settings = Settings;

	  	$http.get('/api/weathers').success(function(weatherData) {
	      // console.log(weatherData)

	      $scope.forecastDays = weatherData.forecast.simpleforecast.forecastday;
	      $scope.forecastSummary = weatherData.forecast.simpleforecast.txt_forecast;
	      $scope.forecast = weatherData.forecast;
	      // console.log($scope.forecast)
	      $scope.currentConditions = weatherData.conditionsData;
	      // console.log($scope.forecastDays)
	      $scope.location = weatherData.locationData;
	    });
	  // }
	// console.log('ipCookie',ipCookie('sports'))
    if(ipCookie('sports')){
    	// console.log('sports', sports)
    	$scope.sports = ipCookie('sports');

    	Sports.list = ipCookie('sports');
    	console.log(Sports)
    } else {
    	$http.get('/api/sports').success(function(sports){
	    	// console.log('sports', sports)
	    	$scope.sports = sports;
	    	ipCookie('sports', $scope.sports);
	    	Sports.list = sports;
	    	// console.log(Sports)
	    	
	    });
    }
    $scope.updateSports = function(){
		Sports.list = $scope.sports;
		ipCookie('sports', $scope.sports);
	
	}
	$scope.selectAll = function(){
		// console.log('sports',$scope.sports)
		_.forEach($scope.sports, function(sport){
			sport.chosen = true;
		});
		$scope.updateSports();
	}



  });
