'use strict';

/**
 * @ngdoc service
 * @name wats4030CapstoneApp.geodata
 * @description
 * # geodata
 * Factory in the wats4030CapstoneApp.
 */
angular.module('wats4030CapstoneApp')
.factory('current', function($resource) {
  // Service logic
  // ...

  // Public API here
  return $resource('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDHcLJvjxGIE2Z3Hk3jKN2WZhB73fXAt4c', {}, {
    query: {
      method: 'GET',
      params: {
        address: '901 12th Ave, Seattle, WA 98122' // Seattle U.
      },
      isArray: false
    }
  });
});
