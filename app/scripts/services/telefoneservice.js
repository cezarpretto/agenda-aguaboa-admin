'use strict';

/**
 * @ngdoc service
 * @name agendaabAdminApp.TelefoneService
 * @description
 * # TelefoneService
 * Service in the agendaabAdminApp.
 */
angular.module('agendaabAdminApp')
  .service('TelefoneService', function() {
    var self = this;

    this.setTelefones = function(telefones) {
      window.localStorage.setItem('telefones', JSON.stringify(telefones));
    };

    this.search = function(searchTerm, telefones) {
      var number = false;
      if (parseInt(searchTerm)) {
        number = true;
      }
      searchTerm = self.clearString(searchTerm);
      var arr = telefones;
      var filtered = arr.filter(function(str) {
        str.editar = false;
        if (number) {
          return self.clearString(str.telefone).toUpperCase().indexOf(searchTerm.toUpperCase()) != -1;
        } else {
          return self.clearString(str.nome).toUpperCase().indexOf(searchTerm.toUpperCase()) != -1;
        }
      });
      return self.sortArray(filtered);
    };

    this.clearString = function(str) {
      str = str.toString();
      str = str.replace(/[ÀÁÂÃÄÅ]/, "A");
      str = str.replace(/[àáâãäå]/, "a");
      str = str.replace(/[ÈÉÊË]/, "E");
      str = str.replace(/[Ç]/, "C");
      str = str.replace(/[ç]/, "c");
      return str.replace(/[^a-z0-9]/gi, '');
    };

    this.sortArray = function(array){
      array.sort(function(a, b){
        if(a.nome < b.nome) return -1;
        if(a.nome > b.nome) return 1;
        return 0;
      });
      return array;
    };
  });
