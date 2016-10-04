/**
 * Created by hemery on 03/10/2016.
 */
(function () {
    'use strict';

    angular.module('Data')
        .component('categories', {
            templateUrl: 'src/menuApp/templates/categories.template.html',
            bindings: {
                items: '<'
            }
        });

})();
