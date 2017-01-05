(function () {
    'use strict';
    angular
        .module('cnt.list')
        .controller('cntListCtrl', cntListCtrl);

    cntListCtrl.$inject = ['cntData', '$location'];

    function cntListCtrl(cntData, $location) {
        /****************************************************
               VARIABLES
   **************************************************** */
        var vm = this;
        vm.listContacts = null;
        /*****************************************************
    *                  METHODS                          *
    *****************************************************/
        vm.addNewContact = function () {
            $location.path('/set/0');
       };
        
        /*****************************************************
    *               METHODS - PRIVATE                   *
    *****************************************************/
        function init() {
            if (cntData.contactsList) {
                vm.listContacts = cntData.contactsList.data;
            }
        }
        /*****************************************************
            *                  EXECUTIONS                       *
            *****************************************************/
        init();
    }
})();
