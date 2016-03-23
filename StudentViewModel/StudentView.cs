using StudentModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentViewModel
{
    public class StudentView
    {
        public StudentView(Student student)
        {
            Id = student.ID;
            Name = student.Name;
            Phone = student.Phone;
            Email = student.Email;
            City = student.City;
            Address = student.Address;
        }

        public string Id { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string City { get; set; }
        public string Address { get; set; }
    }
}
