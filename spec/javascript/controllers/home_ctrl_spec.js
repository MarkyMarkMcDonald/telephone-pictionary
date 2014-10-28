describe("HomeCtrl", function() {

  beforeEach(angular.module('App'));

  beforeEach(inject(function($rootScope, $controller) {
    this.$scope = $rootScope.$new();
    $controller({ $scope: this.$scope });
  }));

  it('should upload the caption and image');
});
