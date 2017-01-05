
(function () {
    'use strict';
    angular
        .module('cnt.directives')
        .directive('contactData', contactData);

    contactData.$inject = ['$window'];

    function contactData($window) {

        var directive = {
            restrict: 'EA',
            templateUrl: '/app/common/directives/contractData.dirct.html',
            scope: { contact: '=' },
            replace: true,
            controller: function ($scope, $location) {
                $scope.collapsed = false;
                $scope.editContact = function () {
                    $location.path('/set/' + $scope.contact.id);
                };
            }
        };
        return directive;
    }
})();