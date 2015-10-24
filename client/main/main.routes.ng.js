'use strict'

angular.module('tapstatApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('second', {
                url: '/main',
                templateUrl: 'client/main/main.view.ng.html',
                controller: 'MainCtrl',
                controllerAs: 'ctrl'
            });
    });