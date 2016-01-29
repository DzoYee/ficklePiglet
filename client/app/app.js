angular.module('fickle', [
  'fickle.auth',
  'fickle.services',
  'fickle.search',
  'fickle.user',
  'ui.router'
])
.config(function ($stateProvider, $urlRouterProvider) {

 $urlRouterProvider.otherwise("/search");
 $stateProvider
  .state('search', {
    url: "/search",
    templateUrl: "/app/Search/search.html",
    controller: 'searchController'
  })
  .state('login', {
    url: "/login",
    templateUrl: "/app/login/login.html",
    controller: 'AuthController'
    })
  .state('user', {
    url: "/user",
    templateUrl: "/app/user/user.html",
    controller: 'userController'
  });
});
