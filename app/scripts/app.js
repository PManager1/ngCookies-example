'use strict';

/**
 * @ngdoc overview
 * @name delCookieStoreExampleApp
 * @description
 * # delCookieStoreExampleApp
 *
 * Main module of the application.
 */
angular
  .module('delCookieStoreExampleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
