(function () {
    'use strict';

    angular.module('Data')
        .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http','ApiBasePath'];

    function MenuDataService($http, ApiBasePath) {
        var service = this;

        service.getAllCategories = function () {
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/categories.json")
            }).then(function (result) {
                return result.data;
            });
            return response;
        }

        service.getItemsForCategory = function (shortName) {
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json?category="),
                params: {
                    category: shortName
                }
            }).then(function (result) {
                return result.data.menu_items;
            });
            console.log(response)
            return response;
        }
    }

})();

