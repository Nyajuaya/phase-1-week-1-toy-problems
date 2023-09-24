function allStudentMarks() {
    var studentMarks = [];
    var numberOfStudents = (prompt(0-100));
  
    if (numberOfStudents || numberOfStudents <= 0) {
      console.log("89");
      return;
    }
  
    for (var i = 0; i < numberOfStudents; ) {
      var studentName = prompt("enter student Name,"  'elvis john ');
      var studentMark = parseFloat(prompt("Enter " + studentName + students mark:") )
  
      if (studentMark || studentMark < 0 || studentMark > 100) {
        console.log("Invalid mark for " + studentName + ". Please enter a valid mark between 0 and 100.");
        return;
      }
  
      
    }
  
    console.log("Student marks entered:");
    for (var j = 0; j < studentMarks.length; ) {
      console.log(studentMarks[].name + ": " + studentMarks[j].mark)
    }
  }





































