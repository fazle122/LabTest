using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentModel
{
    public class StudentDBContext : DbContext
    {
        public StudentDBContext() : base("StudentDBContest")
        {

        }

        public DbSet<Student> Students { get; set; }
    }
}
