'use strict';

angular.module('tapstatApp')
    .controller('LoginCtrl', function($scope, $meteor) {

        $scope.login = function (user) {
            //console.log(Meteor.user().username);
            Meteor.loginWithPassword(user.name, user.password);
            //console.log(Meteor.user().username);
        };
    });