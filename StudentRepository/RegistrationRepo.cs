using StudentModel;
using StudentViewModel;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentRepository
{
    public class RegistrationRepo : BaseRepo
    {
        public RegistrationRepo(StudentDBContext db) : base(db)
        {

        }

        public IQueryable<Student> GetAll()
        {
            return DB.Students.AsQueryable();
        }


        public string Add(Student student)
        {
            Student addStudent = DB.Students.Add(student);
            DB.SaveChanges();
            return addStudent.ID;
        }

        public bool Exists(string id)
        {
            return DB.Students.Any(x => x.ID == id);
        }

        public bool CheckEmail(string email)
        {
            return DB.Students.Any(x => x.Email == email);
        }

        public StudentView GetDetail(string id)
        {
            Student student = DB.Students.Find(id);
            StudentView viewModel = new StudentView(student);
            return viewModel;
        }

        public string Update(Student student)
        {
            DB.Entry(student).State = EntityState.Modified;
            DB.SaveChanges();
            return student.ID;
        }
    }
}
