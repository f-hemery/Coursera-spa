(function () {
    'use strict';

    angular.module('Data')
        .component('itemsList', {
            templateUrl: 'src/menuApp/templates/itemsList.template.html',
            bindings: {
                items: '<'
            }
        });

})();
