/**
 * Created by fred on 24/09/16.
 */
(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
        .directive('foundItems', FoundItems);


    function FoundItems() {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                items: '<',
                onRemove: '&'
            },
        };

        return ddo;
    }


    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {
        var narrowCtrl = this;

        narrowCtrl.itemSearched = "";
        narrowCtrl.found = [{}];

        narrowCtrl.setFoundItems = function () {
            if (narrowCtrl.itemSearched.trim().length == 0) {
                narrowCtrl.found = [];
                return;
            }
            var promise = MenuSearchService.getMatchedMenuItems(narrowCtrl.itemSearched);

            promise.then(function (response) {
                console.log("response " + response);
                narrowCtrl.found = response;
            }).catch(function (error) {
                // console.log(error.message);
                narrowCtrl.found = [];
            });
        }

        narrowCtrl.removeItem = function (index) {
            narrowCtrl.found.splice(index, 1);
        }


    }


    MenuSearchService.$inject = ['$q', '$http', 'ApiBasePath']
    function MenuSearchService($q, $http, ApiBasePath) {
        var service = this;
        service.found = [];
        service.getMatchedMenuItems = function (searchTerm) {
            var deferred = $q.defer();
            var foundItems = [];
            $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            }).then(function (result) {
                result.data.menu_items.forEach(function (item) {
                    if (item.description.indexOf(searchTerm) >= 0)
                        foundItems.push(item);
                });
                console.log(foundItems);
                deferred.resolve(foundItems);
            }).catch(function (errorResponse) {
                // console.log(errorResponse);
                deferred.reject(foundItems);
            });
            return deferred.promise;
        }
    }


})();
