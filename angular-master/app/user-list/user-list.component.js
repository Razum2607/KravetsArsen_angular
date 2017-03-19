'use strict';

angular
    .module('userList')
    .component('userList', {
        templateUrl: 'user-list/user-list.template.html',
        controller: ['User', '$uibModal', '$log', '$document',
        function(User, $uibModal, $log, $document, customModal) {
            var self = this;
            
            User.getList(10).then(function(resp) {
                self.users = resp.data.results;
            });

            self.toggleUserDetails = function(user) {
                if(self.checkedUser === user) {
                    self.checkedUser = undefined;
                } else {
                    self.checkedUser = user;
                }
            };

            self.openComponentModal = function () {
              var modalInstance = $uibModal.open({
                component: 'modalComponent',
                size: 'lg',
                resolve: {
                    users: function() {
                        return self.users;
                    }
                }
              });
            };

        }],
        controllerAs: 'userList'
    });