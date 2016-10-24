myBlog.config(["$routeProvider",function($routeProvider){
    $routeProvider
        .when('/github',{
            "templateUrl":"view/github.html",
            "controller":"githubController"
        })
        .when('/profile',{
            "templateUrl":"view/profile.html",
            "controller":"profileController"
        })
        .when('/text',{
            "templateUrl":"view/text.html",
            "controller":"textController"
        })
        .otherwise({
            redirectTo: '/profile'
        });
}])
