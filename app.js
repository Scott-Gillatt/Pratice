angular.module("GitHub", [])
//this is totally cool
// Hello World!!
angular.module("GitHub")
.controller("GitHubController", function($scope, GitHubService){
    GitHubService.fetchUsers().success(function (users){
        $scope.users = users
    })
})
angular.module("GitHub")
.factory("GitHubService", function ($http){
    return {
        fetchUsers: function (){
            return $http.get("https://api.github.com/users?since=16550260")
        }
    }
})