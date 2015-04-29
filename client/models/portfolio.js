'use strict';

angular.module('newstock')
.factory('Portfolio', function($rootScope, $firebaseArray,$firebaseObject,$window){

  function Portfolio(){
  }

  Portfolio.getStocks = function(portfolio){
    var fbPortfolios = $rootScope.fbUser.child('portfolios/' + portfolio);
    return $firebaseArray(fbPortfolios);
  };

  Portfolio.addStock = function(stock, portfolio){
    var fbPortfolios = $rootScope.fbUser.child('portfolios/' + portfolio);
    var afPortfolios = $firebaseArray(fbPortfolios);

    stock.purchasedOn = $window.Firebase.ServerValue.TIMESTAMP;
    return afPortfolios.$add(stock);
  };

  Portfolio.add = function(name){
    var names = $rootScope.afUser.names ? $rootScope.afUser.names.split(',') : [];
    names.push(name);
    $rootScope.afUser.names = names.join(',');
    return $rootScope.afUser.$save();
  };

  Portfolio.removeStock = function(stock, portfolio, idx, key){
    var fbPortfolio = $rootScope.fbUser.child('portfolios/' + portfolio);
    var fbStock = fbPortfolio.child(key);
    var afStock = $firebaseObject(fbStock);
    //console.log($rootScope.afUser.portfolios[portfolio][key]);
    afStock.$loaded().then(function(){
      afStock.$remove();
    });
  };
  return Portfolio;
});
