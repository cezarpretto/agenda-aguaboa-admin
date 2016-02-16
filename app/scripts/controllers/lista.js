'use strict';

/**
 * @ngdoc function
 * @name agendaabAdminApp.controller:ListaCtrl
 * @description
 * # ListaCtrl
 * Controller of the agendaabAdminApp
 */
angular.module('agendaabAdminApp')
  .controller('ListaCtrl', ['$scope', 'TelefoneService', '$firebaseArray', 'growl', function ($scope, telefoneService, $firebaseArray, growl) {
    $scope.telefones = [];
    $scope.query = undefined;
    $scope.disableBusca = true;
    $scope.tels = [];
    $scope.telefone = {};
    $scope.isNew = false;
    $scope.newTelefone = {};
    var telefonesRef = new Firebase('https://listaab.firebaseio.com/telefones');
    (function(){
      $scope.tels = $firebaseArray(telefonesRef);
      $scope.tels.$loaded().then(function(){
        $scope.disableBusca = false;
        //telefoneService.setTelefones($scope.tels);
      }).catch(function(e){
        console.error(e);
      });
    }());

    $scope.pesquisar = function(){
      $scope.isNew = false;
      $scope.telefones = telefoneService.search($scope.query, $scope.tels);
      $scope.query = undefined;
    };

    $scope.update = function(tel){
      var t = angular.copy($scope.telefone);
      delete t.editar;
      console.log(t);
      $scope.tels.$save($scope.telefone).then(function(){
        growl.success('O Telefone foi atualizado!', {ttl: 4000});
        tel.editar = false;
      }).catch(function(e){
        console.error(e);
        growl.error('Não foi possível atualizar. Tente mais tarde', {ttl: 4000});
        $scope.telefones = [];
      });
    };

    $scope.salvar = function(){
      $scope.tels.$add($scope.newTelefone).then(function(){
        growl.success('O Telefone foi salvo!', {ttl: 4000});
        $scope.isNew = false;
      }).catch(function(e){
        $scope.isNew = false;
        console.error(e);
        growl.error('Não foi possível salvar. Tente mais tarde', {ttl: 4000});
      });
    };

    $scope.selecionaTelefone = function(telefone){
      $scope.telefone = telefone;
      telefone.editar = true;
    };

    $scope.novo = function(){
      $scope.isNew = true;
      $scope.telefones = [];
      $scope.newTelefone = {nome: undefined, telefone: undefined};
    };

    $scope.delete = function(telefone){
      if(window.confirm('Deseja realmente excluir esse telefone?')){
        $scope.tels.$remove(telefone).then(function(){
          growl.success('O Telefone foi deletado!', {ttl: 4000});
          $scope.telefones = [];
        }).catch(function(e){
          growl.error('Não foi possível deletar. Tente mais tarde', {ttl: 4000});
        });
      }
    };

    $scope.cancelar = function(){
      $scope.isNew = false;
    };
  }]);
