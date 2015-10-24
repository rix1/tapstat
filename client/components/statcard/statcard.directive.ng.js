'use strict';

angular.module('tapstatApp')
    .directive('statCard', function() {
      return {
        scope: {
        },
        bindToController: {
          data: '='
        },
        controller: 'statcardCtrl',
        controllerAs: 'ctrl',
        templateUrl: 'client/components/statcard/statcard.view.ng.html'
      }});