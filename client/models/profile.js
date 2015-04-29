'use strict';

angular.module('newstock')
.factory('Profile', function($rootScope, $firebaseObject, $firebaseArray){
  var fbProfile;
  var afProfile;
  var afAccount;
  var fbAccount;

  function Profile(){
  }

  Profile.init = function(){
    fbProfile = $rootScope.fbRoot.child('users/' + $rootScope.activeUser.uid + '/profile/');
    afProfile = $firebaseObject(fbProfile);
    return afProfile;
  };

  Profile.balInit = function(){
    fbAccount = $rootScope.fbUser.child('account');
    afAccount = $firebaseObject(fbAccount);
    return afAccount;
  };

  Profile.deposit = function(amount){
    if (afAccount.balance){
      afAccount.balance += amount;
    } else {
      afAccount.balance = amount;
    }
    afAccount.$save();
  };

  Profile.saveInfo = function(user){
    afProfile = user;
    afProfile.$save(user);
  };

  return Profile;
});
