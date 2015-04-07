'use strict';

/**
 * @ngdoc function
 * @name delCookieStoreExampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the delCookieStoreExampleApp
 */
angular.module('delCookieStoreExampleApp')
  .controller('MainCtrl', function ($scope, $cookies, $cookieStore) {


        console.log('$cookies ', $cookies);

      var someSessionObj = { 'innerObj' : 'somesessioncookievalue'};




        $scope.event = {id: 1, name:"My Event"};

        $scope.saveEventToCookie = function(event) {
            // $cookies.put('event', event);

            $cookieStore.put('obj', someSessionObj);
        };

        $scope.getEventFromCookie = function() {
            // console.log($cookies.get('event'));

            console.log($cookies.get('obj'));            

        };

        $scope.removeEventCookie = function() {
            $cookies.remove('event');
        };



  });
