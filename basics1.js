/*a = 5; //same as var a=5 .scope is also same
var a = 10; //var is a global scope variable. Re declaration possible
let b = 10;
console.log(b);
{
  let b = 8; //let is  a bolck scope variable.Redeclaration not possible within the same block
  console.log(b);
}
console.log(b);
b = 20;
console.log(b);
const pi = 3.14;
//const pi = 4;
console.log(pi);
{
  const pi = 10; //possible block scope.can't redeclare it
}
console.log(typeof a);
var name = "Uma";
console.log(name);
console.log(typeof name);*/

//Array operations

/*var a = ["uma", "lakshmi", 10];
console.log(a.length);
console.log(a[3]);
// undefined and null also data types in js [array,object,number,string]
a.push("orange");
console.log(a);
console.log(a.pop());
console.log(a);
console.log(a.indexOf("lakshmi"));
*/

//obect using object literal
let car = {
  model: "punch",
  color: "Brown",
  manufacturer: "Tata",
};
console.log(car.color);
console.log(car["model"]);
let person = {
  name: "Uma K J",
  age: 27,
  location: "Pune",
};
console.log(person.name);
console.log(person);
console.log(person["age"]);

//object using New()

// var person = new Object();
// person.name = "Lakshmi";
// person.age = 20;
// console.log(person);

//operators

// functions
// /*
// var sum = 2;
// function addition(num1, num2) {
//   //function definition
//   var sum = 10;
//   console.log(sum);
//   sum = num1 + num2;
//   return sum;
// }
// let result = addition(3, 5); //function declaration
// console.log(result);
// console.log(sum); //undefine
// function multiplication(a, b) {
//   var result = a * b;
//   console.log(result);
// }

// function division(a, b) {
//   var result = a / b;
//   console.log(result);
// }

// multiplication(2, 3);
// division(5, 10);
// // */

// let a = 1;
// let b = a++;
// console.log(b);
// let c = ++a;
// console.log(c);
// console.log((a %= 4));
