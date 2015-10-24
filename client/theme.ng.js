'use strict'

angular.module('tapstatApp')
    .config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
          .primaryPalette('pink')
          .accentPalette('lime')
    });