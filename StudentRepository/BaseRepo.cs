using StudentModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentRepository
{
    public class BaseRepo
    {
        public BaseRepo(StudentDBContext db)
        {
            this.DB = db;
        }

        public StudentDBContext DB { get; set; }
    }
}
