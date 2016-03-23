var App;
(function (App) {
    var StudentQueryController = (function () {
        function StudentQueryController(studentService) {
            this.Students = [];
            this.studentService = studentService;
            this.Get();
        }
        StudentQueryController.prototype.Get = function () {
            var self = this;
            var successCallback = function (result) {
                self.Students = result.data;
            };
            var errorCallback = function (error) {
                console.log(error);
            };
            self.studentService.Get()
                .then(successCallback, errorCallback);
        };
        StudentQueryController.$inject = ["RegistrationService"];
        return StudentQueryController;
    })();
    App.StudentQueryController = StudentQueryController;
    angular.module("app").controller("StudentQueryController", StudentQueryController);
})(App || (App = {}));
//# sourceMappingURL=StudentQueryController.js.map