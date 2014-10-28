'use strict';

angular.module('App').controller('HomeCtrl', function($scope, $upload, $location) {
  $scope.drawing = {};

  $scope.submit = function() {
    $upload.upload({
      url: '/drawings',
      method: 'POST',
      data: $scope.drawing,
      file: $scope.file,
      headers: {
        'X-Transaction': 'POST Example',
        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
      }
    }).progress(function(event) {

    }).success(function(data, status, headers, config) {
      $location.path('drawings')
    });
  };
});

