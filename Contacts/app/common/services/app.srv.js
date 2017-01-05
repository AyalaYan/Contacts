(function () {
    'use strict';

    angular
        .module('cnt.services')
        .factory('cntData', cntData);

    cntData.$inject = ['$http', '$q'];


    function cntData($http, $q) {

        /****************************************************
                  VARIABLES
      **************************************************** */
        var service = {
            contactsList: null,
            getContacts: getContacts,
            getContactById: getContactById,
            setContact: setContact
        };

        /*****************************************************
       *                  METHODS                          *
       *****************************************************/
        function getContacts() {
            var defered = $q.defer();
            $http.get('/app/common/contacts.json').then(
                function (response) {
                    service.contactsList = response.data;
                    defered.resolve(response.data);
                },
                function (error) { defered.resolve(false); });
            return defered.promise;
        }

        function getContactById(contactId) {
            if (contactId == 0)
                return null; 
            return _.find(service.contactsList.data, { id: contactId });
        }

        function setContact(contact) {
            if (!contact.id) {
                contact.id = "111"+contact.name;
                service.contactsList.data.push(contact);
            }
        }

        /*****************************************************
    *               METHODS - PRIVATE                   *
    *****************************************************/

        function init() {

        }

        /*****************************************************
             *                  EXECUTIONS                       *
             *****************************************************/
        init();

        return service;

    }
})();