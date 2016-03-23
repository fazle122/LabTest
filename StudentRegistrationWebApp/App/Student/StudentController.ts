module App {

    export class StudentController {

        Student: Student;
        private studentService: RegistrationService;
        private stateParamService: angular.ui.IStateParamsService;

        static $inject = ["RegistrationService","$stateParams"]

        constructor(studentService: RegistrationService, stateParams: angular.ui.IStateParamsService) {
            this.Student = new Student();
            this.studentService = studentService;
            this.stateParamService = stateParams;

            if (this.stateParamService["id"] != null) {
                var id = this.stateParamService["id"];
                this.studentService.GetDetail(id)
                    .then((success: any): void => {
                        console.log(success);
                        this.Student = success.data;
                    }, error => {
                        console.log(error);
                    });
            }
        }

        Save() {
            console.log(this.Student);
            var self = this;

            var successCallback = result => {
                console.log(result);
            };
            var errorCallback = error => {
                console.log(error);
            };

            self.studentService.Save(self.Student)
                .then(successCallback, errorCallback);
        }
    }

    angular.module("app").controller("StudentController", StudentController);

}