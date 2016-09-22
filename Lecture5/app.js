/**
 * Created by hemery on 11/09/2016.
 */
(function () {
    'use strict';

    angular.module('myFirstApp', [])

        .controller('MyFirstController', function ($scope) {
            $scope.name = 'Fred.H';
            $scope.sayHello = function () {
                return 'Hello Monde ';
            }
        });

})();
