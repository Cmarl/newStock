'use strict';

angular.module('newstock')
.controller('PortfoliosShowCtrl', function($scope, $state, $rootScope){
  $scope.name = $state.params.name;
  $scope.balance = $rootScope.afUser.account.balance;


  $scope.transaction = function(tx, type){
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + tx.symbol + '&callback=?';
    $.getJSON(url, function(response){
      $scope.price = response.LastPrice;
      $scope.total = $scope.price * tx.amount;
      if (type === 'buy' && ($scope.balance - $scope.total) >= 0){
        $scope.balance -= $scope.total;
      } else if (type === 'sell') {
        $scope.balance += $scope.total;
      }
      //$rootScope.afUser.$save();
      addToPortfolio(tx,type);
    });
  };



});
