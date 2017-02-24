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
 Reference: https://docs.angularjs.org/api/ng/service/$http
 JSONP requests must specify a callback to be used in the response from the server.
 This callback is passed as a query parameter in the request.
 You must specify the name of this parameter by setting the jsonpCallbackParam
 property on the request config object.
$http.jsonp('some/trusted/url', {jsonpCallbackParam: 'callback'})

 */

//congress.api.sunlightfoundation.com/legislators/locate?latitude=47.625253&longitude=-122.29142
angular.module('wats4030CapstoneApp')
  .factory('repsearchfed', function($http) {
    var sunAPI = 'https://congress.api.sunlightfoundation.com/legislators/locate';
    return {
      query: function(coords){//Turn prams into objects. This function will serialize
        //Latitude & Longitude + the var lat lng and append them to the url as get parameters

        return $http.jsonp(sunAPI, {  //
          jsonpCallbackParam: 'callback',
          params: {
            latitude: coords.lat,//Turn lat into an object
            longitude: coords.lng
          }
        });
      }
    };
  });
