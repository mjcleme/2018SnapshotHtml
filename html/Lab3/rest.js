var app = angular.module('myApp', []);
app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist(['**']);
});

app.controller('myCtrl',
  function($scope, $http) {
    $scope.cities = [];
    $scope.onup = function(form) {
      console.log(form);
      var url = "http://bioresearch.byu.edu/cs260/jquery/getcity.cgi?q=" + form;
      $http.get(url).then(function(response) {
        console.log(response);
        $scope.cities = response.data;
      });
      console.log("in onup");
      var url = "https://api.github.com/users/mjcleme";
      $http.get(url).then(function(response) {
        console.log(response);
        $scope.gitdata = response.data;
      });
      console.log("Now for taste")
      url = "https://tastedive.com/api/similar?k=321657-Angular2-0PYPIS84&verbose=1&q=boston";
      $http.jsonp(url,{jsonpCallbackParam: 'callback'})
        .then(function(response) {
          console.log(response);
          console.log(response.data)
          console.log(response.data.Similar)
           console.log(response.data.Similar.Results)
        });
    };
  });
