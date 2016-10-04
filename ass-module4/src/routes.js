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
/*
                template: '<h3>Les catégories</h3>',
*/
                templateUrl: 'src/menuApp/templates/all-categories.template.html',
                controller: 'CategoriesController as catList',
                resolve: {
                    items: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })

    };

})();