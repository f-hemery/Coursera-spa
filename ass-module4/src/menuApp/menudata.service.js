(function () {
    'use strict';

    angular.module('Data')
        .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];

    function MenuDataService($http) {
        var service = this;

        service.getAllCategories = function () {
            var response = $http({
                method: "GET",
                url: ("https://davids-restaurant.herokuapp.com/categories.json")
            }).then(function (result) {
                return result.data;
            });
            return response;
        }

        service.getItemsForCategory = function (shortName) {
            var response = $http({
                method: "GET",
                url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category="),
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

