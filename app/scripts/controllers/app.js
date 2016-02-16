'use strict';

/**
 * @ngdoc function
 * @name agendaabAdminApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the agendaabAdminApp
 */
angular.module('agendaabAdminApp')
  .controller('AppCtrl', ['$scope', '$firebaseArray', '$notification', function ($scope, $firebaseArray, $notification) {
    $scope.showMenu = true;
    $scope.hasNotification = false;
    var correcoesRef = new Firebase('https://listaab.firebaseio.com/correcoes');
    var sugestoesRef = new Firebase('https://listaab.firebaseio.com/sugestoes');
    $scope.correcoes = $firebaseArray(correcoesRef);
    $scope.sugestoes = $firebaseArray(sugestoesRef);
    $scope.ano = new Date().getFullYear();

    $scope.correcoes.$watch(function(){
      // $scope.correcoes.length > 0 ? hasNotification = true : hasNotification = false;
      $notification('Agenda Água Boa', {
        body: 'Você possui um novo pedido de correção!',
        icon: 'images/icon.png',
        delay: 4000
      });
    });

    $scope.sugestoes.$watch(function(){
      // $scope.sugestoes.length > 0 ? hasNotification = true : hasNotification = false;
      $notification('Agenda Água Boa', {
        body: 'Você possui uma nova sugestão de número!',
        icon: 'images/icon.png',
        delay: 4000
      });
    });


    function getRecord(){
      console.log($scope.correcoes.$getRecord('-KA1fv1HM-IijBGEji--'));
    };
  }]);
