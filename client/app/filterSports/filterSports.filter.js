'use strict';

angular.module('activityForecasterApp')
  .filter('filterSports', ['ipCookie','Sports',function (ipCookie, Sports) {



    return function (day) {
    	console.log(day, sports, Sports)
      
      var sports = Sports.list;
      // filter chosen sports
      sports = _.filter(sports, function(sport){
      	
      	if(sport.chosen){
			return sport;
		}
      });
      // filter high and low temps
      sports = _.filter(sports, function(sport){
      	var high = parseInt(day.high.fahrenheit);
      	var low = parseInt(day.low.fahrenheit);
      	if(sport.tempHighF >= high && sport.tempLowF <= low){
			return sport;
		}
      });
      // filter wind
      sports = _.filter(sports, function(sport){
      	var maxwind = parseInt(day.maxwind.mph);
      	var avewind = parseInt(day.avewind.mph);
      	if(sport.requiredWind <= avewind && sport.maxWind >= maxwind){
			return sport;
		}
      });

      // filter rain
      sports = _.filter(sports, function(sport){
      	var rainDayIn = parseInt(day.qpf_day.in);
      	var rainTotalIn = parseInt(day.qpf_allday.in);
      	if (rainDayIn === 0){
      		if (sport.betterInRain){

      		} else {
      			return sport;
      		}
      	} else if(rainDayIn > 0 && sport.playInRain){
      		if(sport.rainEnjoyability >= 10){
				return sport;
      		}
      	} else if(rainDayIn >= .1 && sport.playInRain){
      		if(sport.rainEnjoyability >= 20){
				return sport;
      		}
			
		} else if (rainDayIn >= .5 && sport.playInRain){
			if(sport.rainEnjoyability >= 50){
				return sport;
      		}
		} else if (rainDayIn >= 1 && sport.playInRain){
			if(sport.rainEnjoyability >= 75){
				return sport;
      		}
		}
      });

      // filter snow
      sports = _.filter(sports, function(sport){
      	var snowDayIn = parseInt(day.snow_day.in);
      	var snowTotalIn = parseInt(day.snow_allday.in);
      	if (snowDayIn === 0 && !sport.needSnow && !sport.betterInSnow){
      		return sport;
      		
      	} else if(snowDayIn > 0 && sport.needSnow){
      		if(sport.snowEnjoyability >= 10){
				return sport;
      		}
      	} else if(snowDayIn >= .1 && sport.needSnow){
      		if(sport.snowEnjoyability >= 20){
				return sport;
      		}
			
		} else if (snowDayIn >= .5 && sport.needSnow){
			if(sport.snowEnjoyability >= 50){
				return sport;
      		}
		} else if (snowDayIn >= 1 && sport.needSnow){
			if(sport.snowEnjoyability >= 75){
				return sport;
      		}
		}
      });


      // format to string
      var formattedString = '';
      console.log('returnedSports', sports)
      sports = _.forEach(sports, function(sport, n){
      	console.log('sport name',sport.name)
      	if (n === 0){
      		formattedString = formattedString + sport.name;
      	} else {
      		formattedString = formattedString + ", " + sport.name;
      	}
      	return sport.name;
      });
	  console.log('return',formattedString)
	
	  return formattedString;
    };
  }]);
