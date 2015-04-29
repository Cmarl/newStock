'use strict';

angular.module('newstock')
.controller('PortfoliosListCtrl', function($scope){
  $scope.afUser.$loaded(function(){
    $scope.names = $scope.afUser.names ? $scope.afUser.names.split(',') : [];
  });
});
