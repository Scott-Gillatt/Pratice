// $inject = ['$scope', 'GitHubService']
angular.module("GitHub")
.controller("GitHubController", function($scope, GitHubService){
    GitHubService.fetchUsers().success(function (users){
        $scope.users = users
    })
})