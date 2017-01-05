(function () {
    'use strict';
    angular.module('cnt.home', []);
    angular.module('cnt.directives', []);
    angular.module('cnt.list', []);
    angular.module('cnt.set', []);
    angular.module('cnt.services', []);
    angular.module('cntApp', [
        // Angular modules 
        'ngRoute',

        // Custom modules 
        'cnt.home',
        'cnt.list',
        'cnt.set',
       'cnt.services',
       'cnt.directives'
    ]).run(['$rootScope', 'cntData', function ($rootScope, cntData) {

    }]);
})();