/*global angular*/

  'use strict';

  angular.module('wats4030CapstoneApp', [
    'ngRoute',
    'social'
  ])

  .controller('social', ['$scope', '$timeout', 'Socialshare', function socialController($scope, $timeout, Socialshare) {
    var that = this;
    //Call service to trigger immediately the sharing method
    /*Socialshare.share({
      'provider': 'twitter',
      'attrs': {
        'socialshareUrl': 'http://720kb.net',
        'socialshareHashtags': '720kb,angular, socialshare'
      }
    });*/
    $timeout(function scopeValueTimeout() {

      that.testValue = '720kb';
    }, 3000);
  }]);
