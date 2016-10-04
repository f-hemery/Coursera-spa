/**
 * Created by hemery on 03/10/2016.
 */


(function () {
    'use strict';

    angular.module('Data')
        .service(MenuDataService,'MenuDataService') ;

    MenuDataService.$inject = ['$http', 'ApiBasePath'];

    function MenuDataService($http, ApiBasePath) {
        var service = this;


        service.getAllCategories = function ($http, ApiBasePath) {
            console.log('In getAllCategories')
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/categories.json")
            });
            console.log('categories reçues');
            return response;
        }

        service.getItemsForCategory = function (shortName) {
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "menu_items.json?category="),
                params: {
                    category: shortName
                }
            });
            return response;
        }
    }

})();

