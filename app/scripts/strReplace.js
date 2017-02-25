'use strict';

/**
 * @ngdoc function
 * @name wats4030CapstoneApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wats4030CapstoneApp
 */

angular.module('wats4030CapstoneApp').filter('strReplace', function () {
  return function (input, from, to) {
    input = input || '';
    from = from || '';
    to = to || '';
    return input.replace(new RegExp(from, 'g'), to);
  };
});



// Use in html like this:
//{{ addText | strReplace:'_':' ' }}
