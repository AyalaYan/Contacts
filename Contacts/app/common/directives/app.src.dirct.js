(function () {
    'use strict';

    angular
        .module('app.directives')
        .directive('checkImage', checkImage);

    checkImage.$inject = ['$window'];

    checkImage.directive('checkImage', function ($http) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                attrs.$observe('ngSrc', function (ngSrc) {
                    $http.get(ngSrc).error(function () {
                        alert('image not exist');
                        element.attr('src', '/assets/images/avatars/default.jpg'); // set default image
                    });
                });
            }
        }
    });
})();