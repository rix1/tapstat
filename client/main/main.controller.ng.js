'use strict';

angular.module('tapstatApp')
    .controller('MainCtrl', function($scope, $meteor) {


        //$scope.$meteorSubscribe('things');

        var totalCount = 0;

        $scope.things = $meteor.collection(Things);

        function updateThingsCount(){
            Meteor.call('getThingsCount', function (err, count) {
                totalCount = count;
            });
        }

        Things.find().observe({
            added: updateThingsCount,
            removed: updateThingsCount
        });

        //$scope.things = $meteor.collection(function() {
        //    return Things.find($scope.getReactively('query'), {sort: {createdAt: -1}})
        //});

        //$scope.things =  $meteor.collection( function() {
        //    return Things.find({}, { sort: { createdAt: -1 } })
        //});

        console.log($scope.things);

        $scope.addCard = function () {
            console.log(totalCount);
            console.log("legger til kort");

            var navn = "Drikke" + totalCount;

            $scope.things.push( {
                    text: navn,
                    createdAt: new Date(),
                    pos: "Drivhuset, NTNU"
                }
            );
        };

        $scope.isEmpty = function () {
            return (totalCount < 1);
        };

        $scope.addData = function (data) {
            console.log("legger til data...");
            data.count += 1;
            // todo:
        };
    });