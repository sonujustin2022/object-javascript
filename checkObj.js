let student = {
    name:"bobin",
    age:22,
    place:"kollam",
    attendence:56
}


//to check a key is present in the object 

console.log('age' in student);

console.log(student.hasOwnProperty("age"))

console.log(Object.hasOwn(student,"place")) //==> new modern pratice 