var App;
(function (App) {
    var RegistrationService = (function () {
        function RegistrationService($http, $q) {
            this.$http = $http;
            this.$q = $q;
            this.httpService = $http;
            this.qService = $q;
        }
        RegistrationService.prototype.Save = function (data) {
            var self = this;
            var deffered = this.qService.defer();
            var successCallback = function (result) {
                console.log(result);
                return deffered.resolve(result);
            };
            var errorCallback = function (error) {
                console.log(error);
                return deffered.reject(error);
            };
            self.httpService.post("/api/student", data)
                .then(successCallback, errorCallback);
            return deffered.promise;
        };
        RegistrationService.prototype.Get = function () {
            var self = this;
            var deffered = this.qService.defer();
            var successCallback = function (result) {
                console.log(result);
                return deffered.resolve(result);
            };
            var errorCallback = function (error) {
                console.log(error);
                return deffered.reject(error);
            };
            self.httpService.get("/api/studentquery")
                .then(successCallback, errorCallback);
            return deffered.promise;
        };
        RegistrationService.prototype.GetDetail = function (id) {
            var self = this;
            var deffered = this.qService.defer();
            var successCallback = function (result) {
                console.log(result);
                return deffered.resolve(result);
            };
            var errorCallback = function (error) {
                console.log(error);
                return deffered.reject(error);
            };
            self.httpService.get("/api/studentquery?id=" + id)
                .then(successCallback, errorCallback);
            return deffered.promise;
        };
        RegistrationService.$inject = ["$http", "$q"];
        return RegistrationService;
    })();
    App.RegistrationService = RegistrationService;
    angular.module("app").service("RegistrationService", RegistrationService);
})(App || (App = {}));
//# sourceMappingURL=StudentService.js.map