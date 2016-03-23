using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentModel
{
    public class Student : Entity
    {
        public string Name { get; set; }
        [StringLength(11, MinimumLength = 11, ErrorMessage = "phone number must be 11 digit")]
        public string Phone { get; set; }
        public string Email { get; set; }
        public string City { get; set; }
        public string Address { get; set; }
    }
}
