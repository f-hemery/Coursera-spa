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
                templateUrl: 'src/menuApp/templates/all-categories.template.html',
                controller: 'CategoriesController as catList',
                resolve: {
                    items: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
            .state('items', {
                url: '/items/{categorie}',
                templateUrl: 'src/menuApp/templates/items-of-categorie.template.html',
                controller: 'ItemsController as itemsList',
                resolve: {
                    items: ['MenuDataService','$stateParams', function (MenuDataService, $stateParams) {
                        return MenuDataService.getItemsForCategory($stateParams.categorie);
                    }]
                }
            })
    };

})();