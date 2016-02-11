'use strict';

/**
 * @ngdoc function
 * @name agendaabAdminApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the agendaabAdminApp
 */
angular.module('agendaabAdminApp')
  .controller('AppCtrl', ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {
    $scope.showMenu = true;
    var correcoesRef = new Firebase('https://listaab.firebaseio.com/correcoes');
    var sugestoesRef = new Firebase('https://listaab.firebaseio.com/sugestoes');
    $scope.correcoes = $firebaseArray(correcoesRef);
    $scope.sugestoes = $firebaseArray(sugestoesRef);

    // $scope.correcoes.$loaded().then(function(){
    //   console.log($scope.correcoes);
    //   getRecord();
    // }).catch(function(e){
    //   console.error(e);
    // });


    function getRecord(){
      console.log($scope.correcoes.$getRecord('-KA1fv1HM-IijBGEji--'));
    };
  }]);
