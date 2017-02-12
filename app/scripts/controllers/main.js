'use strict';

/**
 * @ngdoc function
 * @name wats4030CapstoneApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wats4030CapstoneApp
 */
angular.module('wats4030CapstoneApp')
  .controller('MainCtrl', function($scope, current, repsearch) {
    $scope.current = current.query();

      $scope.refreshCurrent = function() {
        $scope.current = current.query({
          location: $scope.location
        });
      };
      
    $scope.current.$promise.then(function(data) {
      $scope.repsearch = repsearch.query({
        lat: data.results, //
        lon: data.results //
      });
    });

  /*  $scope.refreshCurrent = function() {
      $scope.current = current.query({
        location: $scope.location
      });
    };
    $scope.repsearch = repsearch.query();
    $scope.refreshReps = function() {
      $scope.repsearch = repsearch.query({
        locate: $scope.lat + $scope.lng
      });
    };*/

  });
