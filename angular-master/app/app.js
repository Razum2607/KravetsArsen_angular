'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'userList'
])

angular.module('myApp').config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
        .when('/users', {
            template: '<user-list></user-list>'
        })
        .otherwise('/users');
}]);