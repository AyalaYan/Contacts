(function () {
    'use strict';
    angular.module('cntApp')
    .config(['$routeProvider', function config($routeProvider) {
        $routeProvider
         .when('/home', {
             controller: 'homeCtrl',
             templateUrl: 'contactsHome/home.tpl.html',
             controllerAs: 'homeVm'
         })
               .when('/list', {
                   controller: 'cntListCtrl',
                   controllerAs: 'cntListVm',
                   templateUrl: 'contactsList/cntList.tpl.html'
               })
            .when('/set/:contactId', {
                controller: 'cntSetCtrl',
                templateUrl: 'setContacts/cntSet.tpl.html',
                controllerAs: 'cntSetVm'
            })

            .otherwise({
                redirectTo: '/home'
            });

    }]);

})();
