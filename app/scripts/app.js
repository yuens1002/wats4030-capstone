'use strict';

/**
 * @ngdoc overview
 * @name wats4030CapstoneApp
 * @description
 * # wats4030CapstoneApp
 *
 * Main module of the application.
 */
angular
  .module('wats4030CapstoneApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from our assets domain.  Notice the difference between * and **.
      'https://congress.api.sunlightfoundation.com/**'
    ]);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/social', {
        templateUrl: 'views/social.html',
        controller: 'SocialCtrl',
        controllerAs: 'social'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
