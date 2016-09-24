/**
 * Created by fred on 24/09/16.
 */
(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.msg = "";
        $scope.lunchMenu = "";
        $scope.cpt = 0;
        $scope.menu = function() {
            $scope.cpt = 0;
            if ($scope.lunchMenu.length == 0) {
                $scope.msg = "Please enter data first";
                $scope.style = "text-danger";
                return;
            }
            var dishes = $scope.lunchMenu.split(',');
            // console.log(dishes);
            for (var i = 0; i < dishes.length; i++)
                if (!dishes[i].trim().length == 0)
                    $scope.cpt++;
            $scope.style = "text-success";
            // console.log("# of dish: ",$scope.cpt)
            if ($scope.cpt > 3)
                $scope.msg = "Too much!";
            else
                $scope.msg = "Enjoy!";

        }

    }

})();
