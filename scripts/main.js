let Name = 'harshita' // variables
console.log(Name); 
// console.log('Hello World'); 

const hh = 4;
// hh = 1;
console.log(hh); //constant


let name ='hori';
let age = 22;
let status = false;
let fname = undefined; // same as just declaring without assigning any variable
let lname = null;
let selectedColor = null; //objec - reference type

console.log(typeof(age));
//primitive/ value types    and other type is reference type 
/* literals
string 
number
boolean
undefinex
null
*/

//obj dot, bracket notation

// 21.9.22  ---->
// like structure in cpp
// boject literal
let person ={
  name: 'haha',
  age: 30
};

//dot notation
person.name = 'Jaja';

//brackeet Notation
person['name'] = 'MMaa';

//dynamic
let s ='name';
person[s] = 'kkkk';

/*
reference type
Objects array and function
*/


let selectedColorl = ['red','blue'];  
selectedColorl[2] = 1;
console.log(selectedColorl.length);
console.log(selectedColorl[2],selectedColorl[0]);

function greet(name,lname  = 'nosurname')
{
  console.log('hello', name, lname);
  console.log('hello '+ name +' '+ lname);
}
greet('John','Verma');

//calculating a value
function square (number)
{
  return number*number;
}
console.log(square(4));

// ----> 21.9.22



// alert('123');
// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';
// console.log(myHeading);
// console.log("Hello, World!");


/*
Option 2 - Using the onload event:

HTML

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Javascript 01</title>
    <script type="text/javascript" src="scripts/main.js"></script>
  </head>
  <body onload="executar()">
    <h1>Teste</h1>
  </body>
</html>
JS

function executar() {
  alert('123');
  var myHeading = document.querySelector('h1');
  myHeading.textContent = 'Hello world!';
}
    
25.11.2016 / 13:26
0
Another option is to put the code in onload :

window.onload = function(){
    var myHeading = document.querySelector('h1');
    myHeading.textContent = 'Hello world!';
}
*/

//https://itqna.net/questions/27255/hello-word-javascript
