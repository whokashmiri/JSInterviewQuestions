//Object is a non-primitive data type in JavaScript. It is a collection of key-value pairs. It is a reference data type.
const person = {
    name:"John",
    age:30,
    age:"32"
}
console.log(person.name); // John
delete person.age;
console.log(person);

