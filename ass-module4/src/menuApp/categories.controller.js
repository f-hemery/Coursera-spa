/**
 * Created by hemery on 04/10/2016.
 */
(function () {
    'use strict';

    angular.module('Data')
        .controller('CategoriesController', CategoriesController);


   CategoriesController.$inject = ['items'];
   function CategoriesController(items) {
//     CategoriesController.$inject = ['MenuDataService'];
//     function CategoriesController(MenuDataService) {
        var catList = this;
//       catList.items = [];
       catList.items = items;

/*
        catList.$onInit = function () {
            MenuDataService.getAllCategories()
                .then(function (result) {
                    catList.items = result.data;
                    console.log(catList.items);
                });
        };
*/

    }


})();


