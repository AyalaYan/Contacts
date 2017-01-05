(function () {
    'use strict';
    angular
        .module('cnt.set')
        .controller('cntSetCtrl', cntSetCtrl);

    cntSetCtrl.$inject = ['cntData', '$location', '$routeParams'];

    function cntSetCtrl(cntData, $location, $routeParams) {
        /****************************************************
               VARIABLES
   **************************************************** */
        var vm = this;
        vm.listContacts = null;
        vm.contactId = $routeParams.contactId;
        vm.AddNewcontact = false;
        /*****************************************************
    *                  METHODS                          *
    *****************************************************/
        vm.saveContactData = function () {
           cntData.setContact(vm.contactObj);
           $location.path('/list');
        }
        /*****************************************************
    *               METHODS - PRIVATE                   *
    *****************************************************/
        function init() {
            vm.contactObj = cntData.getContactById(vm.contactId);
            if (vm.contactObj) {
                vm.AddNewcontact = true;
            }
        }
        /*****************************************************
            *                  EXECUTIONS                       *
            *****************************************************/
        init();
    }
})();
