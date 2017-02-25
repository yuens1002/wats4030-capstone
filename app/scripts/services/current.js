'use strict';

/**
 * @ngdoc service
 * @name wats4030CapstoneApp.current
 * @description
 * # current
 * Factory in the wats4030CapstoneApp.
 */
angular.module('wats4030CapstoneApp')
  .factory('current', function($resource) {
    // Service logic
    // ...
//'http://api.openweathermap.org/data/2.5/weather?q=:location&units=imperial&APPID=600ee3b60b8fe48d87def46be2f0e45f'
//'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDHcLJvjxGIE2Z3Hk3jKN2WZhB73fXAt4c'
    // Public API here
    return $resource('https://maps.googleapis.com/maps/api/geocode/json?address=:location&key=AIzaSyDHcLJvjxGIE2Z3Hk3jKN2WZhB73fXAt4c', {}, {
      query: {
        method: 'GET',
        params: {
          location: 'Seattle University, 12th Avenue, Seattle, WA'
        },
        isArray: false
      }
    });
  });
