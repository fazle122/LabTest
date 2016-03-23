var App;
(function (App) {
    var AppConfig = (function () {
        function AppConfig($stateProvider, $urlRouterProvider) {
            this.stateProvider = $stateProvider;
            this.urlProvider = $urlRouterProvider;
            $stateProvider
                .state("root", {
                abstract: true,
                url: "",
                template: "<div ui-view></div>",
            })
                .state("root.home", {
                url: "/",
                templateUrl: "partials/home/home.html",
                controller: "HomeController",
                controllerAs: "std"
            })
                .state("root.student-entry", {
                url: "/student-entry/",
                templateUrl: "partials/student/student-entry.html",
                controller: "StudentController",
                controllerAs: "std"
            })
                .state("root.student-list", {
                url: "/student-list/",
                templateUrl: "partials/student/student-list.html",
                controller: "StudentQueryController",
                controllerAs: "std"
            });
        }
        AppConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
        return AppConfig;
    })();
    App.AppConfig = AppConfig;
    angular.module("app", ["ui.router", "ngResource"]);
    angular.module("app").config(AppConfig);
})(App || (App = {}));
//# sourceMappingURL=App.Config.js.map