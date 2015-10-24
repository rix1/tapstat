'use strict';

angular.module('tapstatApp')
    .config(function($stateProvider) {
      $stateProvider
          .state('login', {
            url: '/',
            templateUrl: 'client/login/login.view.ng.html',
            controller: 'LoginCtrl'
          });
    });