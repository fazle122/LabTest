using StudentModel;
using StudentRepository;
using StudentViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentService
{
    public class RegistrationService : BaseService
    {
        RegistrationRepo regRepo;

        public RegistrationService(StudentDBContext db) : base(db)
        {
            regRepo = new RegistrationRepo(DbContext);
        }

        public List<StudentView> GetAll()
        {
            IQueryable<Student> que = regRepo.GetAll();
            var pvm = que.ToList().Select(x => new StudentView(x)).ToList();
            return pvm;
        }


        public string Add(Student student)
        {
            bool exists = regRepo.Exists(student.ID);
            bool emailCheck = regRepo.CheckEmail(student.Email);


            if (exists)
            {
                return regRepo.Update(student);
            }
            if (emailCheck)
            {
                return "this email already exist";
            }

            return regRepo.Add(student);
        }

        public StudentView GetDetail(string id)
        {
            return regRepo.GetDetail(id);
        }
    }
}
