"use strict";

app.controller("MainCtrl", function($scope, DataFactory, AuthFactory) {
   // console.log("check");

   // $scope.userID = AuthFactory.getUser();

   // if (AuthFactory.isAuthenticated()) {
   //    DataFactory.getAlbums()
   //       .then((itemCollection) => {
   //          $scope.items = itemCollection;
   //       });
   // } else {}

   DataFactory.getAlbums();




});