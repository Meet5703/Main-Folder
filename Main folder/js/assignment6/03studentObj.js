const student = {};
student.name = "Meet Khetani";
student.age = 21;
student.gender = "Male";
student.email = "lHJt7@example.com";

//object is extinsible by default for check status of it we will use Object.isExtensible
const extinsibleStatus1 = Object.isExtensible(student);
console.log(extinsibleStatus1);

// Prevent further additions of properties to the student object
Object.preventExtensions(student);

// Attempting to add a new property
student.address = "123 Main St"; // This addition will not take effect due to Object.preventExtensions
console.log(
  " If the student object is prevented from extension, attempting to add the 'address' property will fail.",
  student
);

const extinsibleStatus2 = Object.isExtensible(student);
console.log(extinsibleStatus2);

//new teacher object
const teacher = {};
teacher.subject = "Math";
const sealedStatus1 = Object.isSealed(teacher);
console.log(sealedStatus1);

Object.seal(teacher);

teacher.name = "Khetani"; //can not add new property in a sealed object
delete teacher.subject; //can not delete existing property in a sealed object
console.log(teacher);

const sealedStatus2 = Object.isSealed(teacher);
console.log(sealedStatus2);
