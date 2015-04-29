'use strict';

angular.module('newstock')
.controller('ProfileCtrl', function($scope, Profile){
  $scope.afProfile = $scope.user = Profile.init();
  $scope.afAccount = $scope.account = Profile.balInit();

  $scope.saveInfo = function(user){
    Profile.saveInfo(user);
  };

  $scope.syncInfo = function(){
    $scope.afProfile = $scope.user = Profile.init();
  };

  $scope.deposit = function(amount){
    Profile.deposit(amount);
  };

});
