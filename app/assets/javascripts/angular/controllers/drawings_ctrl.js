'use strict';

angular.module('App').controller('DrawingsCtrl', function($scope, $http) {
  $http.get('/drawings')
    .success(function(data) {
      console.log(arguments);
      $scope.drawings = data.imagePaths;
    })
});

