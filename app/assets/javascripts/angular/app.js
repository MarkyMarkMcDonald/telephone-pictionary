'use strict';

var app = angular.module('App', ['angularFileUpload', 'ngRoute', 'templates']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/drawings',{
      templateUrl: 'pictures.html',
      controller: 'DrawingsCtrl'
    })
    .otherwise({
      templateUrl: 'home.html',
      controller: 'HomeCtrl'
    })
});
