var App;
(function (App) {
    var StudentController = (function () {
        function StudentController(studentService, stateParams) {
            var _this = this;
            this.Student = new App.Student();
            this.studentService = studentService;
            this.stateParamService = stateParams;
            if (this.stateParamService["id"] != null) {
                var id = this.stateParamService["id"];
                this.studentService.GetDetail(id)
                    .then(function (success) {
                    console.log(success);
                    _this.Student = success.data;
                }, function (error) {
                    console.log(error);
                });
            }
        }
        StudentController.prototype.Save = function () {
            console.log(this.Student);
            var self = this;
            var successCallback = function (result) {
                console.log(result);
            };
            var errorCallback = function (error) {
                console.log(error);
            };
            self.studentService.Save(self.Student)
                .then(successCallback, errorCallback);
        };
        StudentController.$inject = ["RegistrationService", "$stateParams"];
        return StudentController;
    })();
    App.StudentController = StudentController;
    angular.module("app").controller("StudentController", StudentController);
})(App || (App = {}));
//# sourceMappingURL=StudentController.js.map