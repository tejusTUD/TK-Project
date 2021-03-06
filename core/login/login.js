'use strict';

/* Controllers */
angular.module('myApp.login', ['ngRoute']).controller('LoginCtrl', [
  '$scope', '$location', '$http', 'localStorageService' ,function($scope, $location, $http, localStorageService) {

    localStorageService.clearAll();
    $scope.loginForm = {};
    $scope.errors = {};
    return $scope.loginFnc = function() {
      if (!$scope.loginForm.email || !$scope.loginForm.password) {
        $scope.errors = {
          missingParameters: 1
        };
        return;
      }
      return $http({
        url: "/authenticate",
        method: "POST",
        data: JSON.stringify({
          'email': $scope.loginForm.email,
          'password': $scope.loginForm.password
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).success(function(data, status, headers, config) {
        localStorageService.set("session", data);

      })
    };
  }
]);

// ---
// generated by coffee-script 1.9.2
