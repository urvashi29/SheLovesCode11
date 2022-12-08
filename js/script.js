// Arrays
//index starts from 0
var num = [10, 90, 100, 80]; //array of numbers
var color = ["pink", "blue", "red", "orange"]; //array of strings
var mix = [90, "hello", null, NaN, true];

console.log(num, color, mix);

console.log(num[0]);
console.log(color[1]);
console.log(num.length); //4
console.log(color.length); //4

console.log(typeof num);

// verification of array
console.log(Array.isArray(num)); //return true, means it is an array, otherwise false

//convert array to string
console.log(num.toString()); //'10,90,100,80'

console.log(num.join("*"));
console.log(num.join(""));

// convert string to array;
var str = "hello";
console.log(str.split(""));

var strVal = "w-o-r-l-d";
console.log(strVal.split("-"));

//pop & push
num.pop(); //remove last element from an array
console.log(num);

num.push(60); //add new element in the end of an array
console.log(num);

//shift & unshift
num.shift(); //to delete element from start/beginning
console.log(num);

num.unshift(30); ////add new element at the start of an array
console.log(num);

//delete an element (wrong way)
// delete num[2];
// console.log(num);

//splice method: add, remove element from the middle of an array
color.splice(1, 2, "yellow", "white", "black"); //start of index where you want to delete/add, how many elements to be deleted,  elements to be added
console.log(color);

//only add
color.splice(1, 0, "violet");
console.log(color);

//only delete
color.splice(2, 2);
console.log(color);

//concat
var newArr = color.concat(mix, num);
console.log(newArr);

//extraction of array
var extractedArray = color.slice(0, 3); //
console.log(extractedArray);

//reverse an array
console.log(num);

num.reverse();
console.log(num);

// arrays of objects
var person = [
  {
    name: "alina",
    age: 20,
    designation: "developer",
    id: 1,
  },
  {
    name: "alex",
    age: 22,
    designation: "testing",
    id: 2,
  },
  {
    name: "harry",
    age: 26,
    designation: "developer",
    id: 3,
  },
  {
    name: "alina",
    age: 28,
    designation: "developer",
    id: 4,
  },
];

console.log(person[0].age);
console.log(person[2].designation);

// Math Object
console.log(Math.round(29.9)); //return the value round off to the nearest integer
console.log(Math.pow(2, 3)); //return 2 to the power of 3
console.log(Math.sqrt(16)); //4 * 4
console.log(Math.abs(-2.4)); //convert negative to positive value
console.log(Math.ceil(29.9)); //return the nearest integer up to he mentioned value
console.log(Math.floor(29.9)); //return the nearest integer down to he mentioned value
console.log(Math.max(10, 90, 100));
console.log(Math.min(10, 90, 100));
console.log(Math.PI);
console.log(Math.trunc(89.9));
console.log(Math.random()); //between 0 & 1

console.log(Math.floor(Math.random() * 10));

// function

// declaration of function
function add() {
  //block of code

  //local scope
  var sum = 10 + 50;
  console.log(sum);
}

//calling of function from js file
add();
add();
add();

//reusability of code
//parameterized function
function subtract(a, b) {
  //parameters
  var sub = a - b;
  console.log(sub);
}

subtract(20, 10); //arguments
subtract(30, 10);

// console.log(sub);//give error

//passing function as a value
function subtractVal(x, y) {
  var sub = x - y;
  return sub;
}

var r = subtractVal(40, 10);
console.log(r);

//self-invoking function / anonymous function
(function () {
  console.log(10 + 90);
})();

//parameterized
(function (x, y) {
  console.log(x + y);
})(100, 20);

//see html file
function getPI() {
  console.log(Math.PI);
}

function getName() {
  //to capture user input
  var n = document.getElementById("name").value;
  var a = document.getElementById("age").value;

  document.getElementById("display").innerHTML = n;
  console.log(a);

  //to manipulate css using js
  document.getElementById("display").style.backgroundColor = "pink";
  document.getElementById("display").style.color = "teal";

  document.body.style.backgroundColor = 'orange';
}
