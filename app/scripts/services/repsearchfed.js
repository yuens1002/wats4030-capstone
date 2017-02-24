'use strict';

/**
 * @ngdoc service
 * @name wats4030CapstoneApp.repsearch
 * @description
 * # repsearch
 * Factory in the wats4030CapstoneApp.
 params: {
   lat: '47.625253',
   lng: '-122.29142'
 };

 */
https://congress.api.sunlightfoundation.com/legislators/locate?latitude=47.625253&longitude=-122.29142
angular.module('wats4030CapstoneApp')
  .factory('repsearch', function($http) {
    var sunAPI = 'https://congress.api.sunlightfoundation.com/legislators/locate?latitude=:lat&longitude=:lng';
    return {
      query: function(){
      /*  params: {
          method: 'GET',
          lat: '47.625253'
          lng: '-122.29142'
        };*/
        return $http.jsonp(sunAPI);

      }
    };
  });
