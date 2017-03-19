'use strict';

angular
    .module('userList')
    .factory('User', ['$http', function($http) {
        return {
            getList: getList
        } 

        function getList(limit){
            return $http({
                method: 'GET',
                params: {
                    results: limit
                },
                url: 'https://randomuser.me/api'
            });
            
        }

    }]);