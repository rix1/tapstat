'use strict';

angular.module('tapstatApp')
    .controller('statcardCtrl', function ($scope) {
        var ctrl = this;

        console.log(ctrl.data);

        $scope.btnClick = function () {
            console.log("clock");
            ctrl.data.count += 1;
        };
    });