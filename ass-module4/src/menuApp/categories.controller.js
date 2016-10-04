/**
 * Created by hemery on 04/10/2016.
 */
(function () {
    'use strict';

    angular.module('Data')
        .controller('CategoriesController', CategoriesController);


    CategoriesController.$inject = ['items'];
    function CategoriesController(items) {
        var catList = this;
        catList.items = items;
    }

})();
