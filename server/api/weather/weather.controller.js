'use strict';

var _ = require('lodash');
var request = require('request');
var mockWeather = require('./mockWeather.json')
// mockWeather.mock = true;
var forecastData = {};

request('http://api.wunderground.com/api/68fc40cc59b03c11/geolookup/q/autoip.json', function(err,data){

    var locationData = JSON.parse(data.body);

    request('http://api.wunderground.com/api/68fc40cc59b03c11/forecast10day/q/'+locationData.location.zip+'.json', function(e,d){
      // console.log('d',JSON.parse(d.body));
      forecastData = JSON.parse(d.body);
      forecastData.locationData = locationData.location;


      request('http://api.wunderground.com/api/68fc40cc59b03c11/hourly/q/'+locationData.location.zip+'.json', function(error,weather){
        
        var hourlyData = JSON.parse(weather.body);
        forecastData.hourlyData = hourlyData;

        request('http://api.wunderground.com/api/68fc40cc59b03c11/conditions/q/'+locationData.location.zip+'.json',function(errMsg, conditions){
          var conditionsData = JSON.parse(conditions.body);
          forecastData.conditionsData = conditionsData.current_observation;
          // return res.send('/forecastData', forecastData);
        });
        
      });
    });


});


// Get list of weathers
exports.index = function(req, res) {
  res.json(200, forecastData);
};