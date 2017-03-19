'use strict';

angular
    .module('customModal')
    .component('modalComponent', {
        templateUrl: 'modal/modal.template.html',
        bindings: {
          resolve: '<',
          close: '&',
          dismiss: '&'
        },
        controller: ['$scope',
            function ($scope) {
              var self = this;

              self.getChartData = function(users) {
                  var maleCount = users.reduce(function(previousValue, user, index, array) {
                      return (user.gender === 'male') ? previousValue+1 : previousValue;
                  },0);

                  var portions = [
                      {
                          name: 'male',
                          y: 100*(maleCount/users.length)
                      },
                      {
                          name: 'female',
                          y: 100*(users.length-maleCount)/users.length
                      }
                  ];

                  return portions;
              };

              self.chartData = self.getChartData(self.resolve.users);

              self.ok = function () {
                self.close();
              };

              self.cancel = function () {
                self.dismiss();
              };
        }],
        controllerAs: 'modalCtrl'
  });