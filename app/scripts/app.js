'use strict';

/**
 * @ngdoc overview
 * @name agendaabAdminApp
 * @description
 * # agendaabAdminApp
 *
 * Main module of the application.
 */
angular
  .module('agendaabAdminApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/correcoes', {
        templateUrl: 'views/correcoes.html',
        controller: 'CorrecoesCtrl',
        controllerAs: 'correcoes'
      })
      .when('/sugestoes', {
        templateUrl: 'views/sugestoes.html',
        controller: 'SugestoesCtrl',
        controllerAs: 'sugestoes'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
