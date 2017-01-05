(function () {
    'use strict';
    angular
        .module('cnt.home')
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['cntData','$location'];

    function homeCtrl(cntData, $location) {
        /****************************************************
               VARIABLES
   **************************************************** */
        var vm = this;
        vm.countContacts = null;
        /*****************************************************
    *                  METHODS                          *
    *****************************************************/
        vm.goToListOfContacts = function () {
            $location.path('/list');
        }

        /*****************************************************
    *               METHODS - PRIVATE                   *
    *****************************************************/
        function init() {
            if (cntData.contactsList) {
                vm.countContacts = cntData.contactsList.data.length;
            }
            else {
                cntData.getContacts().then(
                   function (contacts) {
                       if (contacts) {
                           vm.countContacts = contacts.data.length;
                       }
                   });
            }
        }
        /*****************************************************
            *                  EXECUTIONS                       *
            *****************************************************/
        init();
    }
})();
