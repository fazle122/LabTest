using StudentModel;
using StudentService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace StudentRegistrationWebApp.Controllers
{
    public class StudentController : BaseController
    {
        public IHttpActionResult Post(Student student)
        {
            RegistrationService regService = new RegistrationService(db);

            if(string.IsNullOrWhiteSpace(student.ID))
            {
                student.ID = Guid.NewGuid().ToString();
            }

            string add = regService.Add(student);
            return Ok(add);
        }
    }
}