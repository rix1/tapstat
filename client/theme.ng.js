'use strict'

angular.module('tapstatApp')
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
  .primaryPalette('deep-orange')
  .accentPalette('lime');
});