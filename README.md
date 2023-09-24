function allStudentMarks() {
  var studentMarks = [];
  var numberOfStudents = parseInt(prompt("Enter the number of students:"));

  if (isNaN(numberOfStudents) || numberOfStudents <= 0) {
    console.log("Please enter a valid number of students.");
    return;
  }

  for (var i = 0; i < numberOfStudents; i++) {
    var studentName = prompt("Enter student name:");
    var studentMark = parseFloat(prompt("Enter " + studentName + "'s mark:"));

    if (isNaN(studentMark) || studentMark < 0 || studentMark > 100) {
      console.log("Invalid mark for " + studentName + ". Please enter a valid mark between 0 and 100.");
      return;
    }

    studentMarks.push({ name: studentName, mark: studentMark });
  }

  console.log("Student marks entered:");
  for (var j = 0; j < studentMarks.length; j++) {
    console.log(studentMarks[j].name + ": " + studentMarks[j].mark);
  }
}





























































