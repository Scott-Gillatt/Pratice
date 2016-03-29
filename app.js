var app = angular.module("GitHub", [])

app.factory("GitHubService", function ($http){
    return {
        fetchUsers: function (){
            return $http.get("https://api.github.com/users?since=16550260")
        }
    }
})

app.controller("GitHubController", function($scope, GitHubService){
    GitHubService.fetchUsers().success(function (users){
        $scope.users = users
    })
})