


const class07Students = [];
function addStudentToClass(studentName) 
{
  if(class07Students.length < 6 || studentName === "Queen")
{
  class07Students.push(studentName);
  return studentName;
}

else
{
  return "Cannot add more students to class 07!!!";
}

}

function getNumberOfStudents() 
{
  return class07Students.length;
}

console.log(addStudentToClass("Student-1"));
console.log(addStudentToClass("Student-2"));
console.log(addStudentToClass("Student-3"));
console.log(addStudentToClass("Student-4"));
console.log(addStudentToClass("Student-5"));
console.log(addStudentToClass("Student-6"));
console.log(addStudentToClass("Student-7"));
console.log(addStudentToClass("Student-8"));
console.log(addStudentToClass("Queen"));
console.log(addStudentToClass("Student-9"));














