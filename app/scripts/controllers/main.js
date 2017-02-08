'use strict';

/**
 * @ngdoc function
 * @name wats4030CapstoneApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wats4030CapstoneApp
 */
angular.module('wats4030CapstoneApp')
  .controller('MainCtrl', function($scope, current) {
    $scope.current = current.query();

    $scope.refreshCurrent = function() {
      $scope.current = current.query({
        location: $scope.location
      });
    };
  });
