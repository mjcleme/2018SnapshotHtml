var app=angular.module('News',[]);
app.controller('mainCtrl', function($scope, $http) {
   $scope.posts = [{title:"Post 1",upvotes:0}, {title:"Post 2",upvotes:0}];
   $scope.test = "Hello World";
   $scope.addPost = function() {
       $scope.posts.push({
           title:$scope.formContent,upvotes:0
       })
   }
});