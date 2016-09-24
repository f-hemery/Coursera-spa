/**
 * Created by fred on 24/09/16.
 */
(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyShoppingController', ToBuyShoppingController)
        .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
        var boughtList = this;
        boughtList.items = ShoppingListCheckOffService.getItemsBought();
    }

    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyShoppingController(ShoppingListCheckOffService) {
        var toBuyList = this;

        toBuyList.items = ShoppingListCheckOffService.getItemsToBuy();
        toBuyList.boughtItem = function (index) {
            ShoppingListCheckOffService.boughtItem(index);
        }
    }

    function ShoppingListCheckOffService() {
        var service = this;

        var itemsToBuy  = [
            {
                name: "Milk",
                quantity: "2"
            },
            {
                name: "Donuts",
                quantity: "200"
            },
            {
                name: "Cookies",
                quantity: "300"
            },
            {
                name: "Coffee",
                quantity: "18"
            },
            {
                name: "Tea",
                quantity: "12"
            },
            {
                name: "Chocolate",
                quantity: "5"
            }
        ];
        var itemsBought  = [];

        service.boughtItem = function (itemIdex) {
            var item = itemsToBuy.splice(itemIdex, 1);
            console.log("item bought:",item);
            itemsBought.push(item[0]);
        };

        service.getItemsToBuy = function () {
            return itemsToBuy;
        };
        service.getItemsBought = function () {
            return itemsBought;
        };
    }

})();
