/**
 * Created by hemery on 02/10/2016.
 */
(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // *** Set up UI states ***
        $stateProvider

        // Home page
            .state('home', {
                url: '/',
                templateUrl: 'src/menuApp/templates/home.template.html'
            })

            .state('categories', {
                url: '/categories',
                templateUrl: 'src/manuApp/templates/categories.template.html',
                controller: 'MainShoppingListController as mainList',
                resolve: {
                    items: ['ShoppingListService', function (ShoppingListService) {
                        return ShoppingListService.getItems();
                    }]
                }
            })

    };

})();