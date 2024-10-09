export default function updateStudentGradeByCity(students, city, grades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const studentGrade = grades.find((grade) => grade.studentId === student.id);
      return { ...student, grade: studentGrade ? studentGrade.grade : NaN };
    });
}
