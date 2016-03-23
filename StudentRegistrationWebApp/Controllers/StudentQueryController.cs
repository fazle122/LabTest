using StudentService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace StudentRegistrationWebApp.Controllers
{
    public class StudentQueryController : BaseController
    {
        RegistrationService regService;

        public StudentQueryController()
        {
            regService = new RegistrationService(db);
        }

        public IHttpActionResult Get()
        {
            var viewStudents = regService.GetAll();
            return Ok(viewStudents);
        }

        public IHttpActionResult Get(string id)
        {
            var viewStudent = regService.GetDetail(id);
            return Ok(viewStudent);
        }
    }
}