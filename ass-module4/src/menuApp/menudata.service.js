/**
 * Created by hemery on 03/10/2016.
 */


(function () {
    'use strict';

    angular.module('Data')
        .service(MenuDataService,'MenuDataService') ;

    MenuDataService.$inject = [];

    function MenuDataService() {
        var service = this;


        service.getAllCategories = function () {

        }

        service.getItemsForCategory = function () {

        }
    }

})();

