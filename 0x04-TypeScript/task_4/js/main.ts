/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

const cp =["const cpp = new Cpp()"]
const jv =["const java = new Java()"]
const rt =["const react = new React()"] 

export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

// Create teacher with C experience
export const cTeacher: Subjects.Teacher = {
  firstName: "Mary",
  lastName: "Johnson",
  experienceTeachingC: 10,
};
const tea =["cTeacher: Teacher"]
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log("React");
react.setTeacher(cTeacher);