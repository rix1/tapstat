'use strict';

angular.module('tapstatApp')
    .controller('MainCtrl', function($scope, $meteor) {


        var names = ['Kaffe', 'Cola', 'Dobesøk', 'Redbull', 'YOs'];
        var localtions = ['P15', 'Drivhuset', 'Realfagskantina', 'Stripa'];

        function getRand(limit) {
            return Math.floor((Math.random() * limit) + 1);
        };


        function generateNew() {
            return {
                count: 0,
                name: names[getRand(names.length)],
                location: localtions[getRand(localtions.length)],
                createdAt: new Date()
            };
        }

        $scope.temp = $meteor.collection(function(){
            return Things.find();
        });

        $scope.things = [];

        $scope.temp.forEach(function(obj){
            $scope.things.push(obj);
        });

        $scope.addCard = function () {
            var object = generateNew();
            $scope.things.push(object);
        };

        $scope.isEmpty = function () {
            return false;
        };

        $scope.addData = function (data) {
            console.log("legger til data...");
            data.count += 1;
            // todo:
        };
    });