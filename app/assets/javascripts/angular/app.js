'use strict';

var app = angular.module('app', ['ngRoute', 'templates']);

app.config(function($routeProvider) {
  $routeProvider.
    otherwise({
      templateUrl: 'home.html',
      controller: 'HomeCtrl'
    })
});
