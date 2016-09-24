/**
 * Created by fred on 24/09/16.
 */
(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyShoppingController', ToBuyShoppingController)
        .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    AlreadyBoughtShoppingController.$inject = ['$scope'];

    function AlreadyBoughtShoppingController($scope) {

    }

    ToBuyShoppingController.$inject = ['$scope'];

    function ToBuyShoppingController($scope) {

    }

    function ShoppingListCheckOffService() {
        var service = this;

        // List of shopping items
        var items = [];

        service.addItem = function (itemName, quantity) {
            var item = {
                name: itemName,
                quantity: quantity
            };
            items.push(item);
        };

        service.removeItem = function (itemIdex) {
            items.splice(itemIdex, 1);
        };

        service.getItems = function () {
            return items;
        };

    }

})();
