'use strict';

angular.module('newstock')
.controller('PortfoliosNewCtrl', function($scope, $state, Portfolio){
  $scope.add = function(name){
    Portfolio.add(name)
    .then(function(){
      $state.go('portfolios.list', name);
    });
  };
});
