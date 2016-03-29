app.factory("GitHubService", function ($http){
    return {
        fetchUsers: function (){
            return $http.get("https://api.github.com/users?since=16550260")
        }
    }
})