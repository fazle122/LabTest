module App {

    export class StudentQueryController {
        Students: Student[];
        private studentService: RegistrationService;

        static $inject = ["RegistrationService"]

        constructor(studentService: RegistrationService) {
            this.Students = [];
            this.studentService = studentService;
            this.Get();

        }

        Get() {
            var self = this;

            var successCallback = result => {
                self.Students = result.data as Student[];
            };
            var errorCallback = error => {
                console.log(error);
            };

            self.studentService.Get()
                .then(successCallback, errorCallback);
        }

    }

    angular.module("app").controller("StudentQueryController", StudentQueryController);

}