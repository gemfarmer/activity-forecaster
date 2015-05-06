'use strict';

angular.module('activityForecasterApp')
  .controller('MainCtrl', function ($scope, $http, ipCookie) {
    $scope.inF = true;
   	$scope.impUnits = true;
   	console.log(ipCookie())
   // 	if (ipCookie('weatherDatum')){
   // 		// $scope.forecastDays = ipCookie('forecastDays');
	  //   // $scope.forecastSummary = ipCookie('forecastSummary');
	  //   $scope.forecast = ipCookie('forecast');
	  //   $scope.currentConditions = ipCookie('currentConditions');
	  //   console.log($scope.forecastDays)
	  //   $scope.location = ipCookie('location');
	  //   $scope.weatherData = ipCookie('weatherData');
	  // } else {
	  	$http.get('/api/weathers').success(function(weatherData) {
	 	  // ipCookie('weatherDatum', weatherData);
	      console.log(weatherData)

	      $scope.forecastDays = weatherData.forecast.simpleforecast.forecastday;
	      // ipCookie('forecastDays', $scope.forecastDays);
	      $scope.forecastSummary = weatherData.forecast.simpleforecast.txt_forecast;
	      // ipCookie('forecastSummary', $scope.forecastSummary);
	      $scope.forecast = weatherData.forecast;
	      // ipCookie('forecast', weatherData.forecast);
	      $scope.currentConditions = weatherData.conditionsData;
	      // ipCookie('currentConditions', $scope.currentConditions);
	      console.log($scope.forecastDays)
	      $scope.location = weatherData.locationData;
	      // ipCookie('location', $scope.location);
	    });
	  // }
    $http.get('/api/sports').success(function(sports){
    	console.log('sports', sports)
    	$scope.sports = sports;


    });

  });
