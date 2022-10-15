// import "./styles.css";

//functional programming language 
//everything in JS is an object
//dynamically typed language
//run time
//loosely typed language
// implicit type coersion 

//console is used for debugging to print something on the console

var a = 2;
var b = '2';

console.log (a==b); //true
console.log (a===b); //false

var c= "2";
// consol.log(+c); // explicit type conversion/coersion //donno why it is shoowing error
console.log(b+c); // output 22 // bothe are sting , if i"M not doing type conversion
 // _______

//Primitive
// String
// number
// Boolean

// null
// Undefined

var ab = "It is a string";
console.log(ab);
console.log(typeof(ab));

//typeof alwyas returns a string 
// console.log(c);

// var d =null
console.log(typeof(NaN)); //number
console.log(typeof typeof(NaN)); //string

// console.log(typeof(a)); 
// console.log(typeof(b))

// //typeof always return a string

// document.write("haha");
//3. concatenate and implicit coersion
console.log("hey"+"hello"); //without space
console.log("hey","hello"); //with space

console.log((1 +"abc")+2); //1abc2
console.log(6+"6"); //66
console.log(6+'6'); //66
console.log(1 +2+"abc"+3); //3abc2


console.log(typeof(NaN));//number

console.log(+"abc") //Nan



//_______

var l = +"abc";
var d = +"lgf"; 
console.log(l); //NaN
console.log(typeof(l)); //number
console.log(l==l);//false
console.log(l==d);//false

console.log(null == undefined);//true


// console.


//________

// 4. construcor function oof js ; as a class 
//array creation with anyu type
var aa = new Array() //memory allocation predefined Array
var bb = [1,2,function a(){console.log("hi")},3,'rr',4];
console.log(bb[2]()); // hi undefined
console.log(bb[2]); //[Function: a]
console.log(typeof(bb)) //object
console.log(bb.length) //6


// ______
// 5. loop by a simple for 
// and map

var arr = [1,2,3,4,5,6,7]

for (var i=0; i<arr.length; i++)
{
    console.log(i); //0
    console.log(arr[i]);//1
}

var q = arr.map(function(num,index){
    console.log(index);
    return num*4;
});
/*
0
1
2
3
4
5
6 */
    console.log(arr);//[1, 2, 3, 4, 5, 6, 7 ]
/*
[
  1, 2, 3, 4,
  5, 6, 7
]
*/
// _________
// 6. push for append shift ubshift pop
//7. functions 
/*..function define([
    'require',
    'dependency'
], function(require, factory) {
    'use strict';
    
});*/

//function definition, declaration, expression 
function ddd(a,b,c)
{
    console.log(a,b);
}
ddd(2,5,4,7); //2 5

// dynamic
// function programming language
/*
function cb(fn)
{
   return fn;
}
console.log(cb(1));
*/
//define function without func name 
// parameter to internal function yes

function cb(fn)
{
   fn();
}
// console.log(cb(1));
cb(function(){console.log("Hey I was pissed of")});

// function fd1();

var m = function(){
    console.log("hi");
};

(function()
{
    console.log("just called this is imidiately invoked function");
})();

// anonymous function ; without name  

// a-> [1,2,3]  <- b
var a = [1,2,3]; // ifi?
var b = a; //this is by reference // not by value
a = []; // now a ---> [] an empty arrays
a.pop();
b.length = 2;
console.log(b); // [ 1, 2 ]
b.length =0;
console.log(b);// []

console.log(a);//[]
console.log(b);//  [] now        //[1,2,3] earlier
 // == coersion     ===

 //8.
var obj = {};
var obj1 = new Object();

var dog ={
    name: "null",
    breed: "Object"
}
console.log(dog.name);
console.log(dog.breed);

var b = "name";
console.log(dog[b]);
console.log(dog["name"]);



/*DOUBT
1. DOUBLE AND SINGLE QUOTED STRING
2. concatenate and append? 
3. explicit 
// shift:- add in beg of array
//  unshift :- remove from beg of an array

4. q array predefined?
5. q. by definition an array is an a collection of same data type, so why are we calling it array
    ans. but in js it is not
6. type of an array
7. in map function why are we multiplying with 
-- 
Is there any named and positional parameters in js function?
someone said something si=omething map
yesinx 
fnx
recuetion 
this
javas
Is it enought to learn HTML, CSS, Javascript and Angular and MOngoDB to get a job Doi I need to learn anything else to get a job? Please teach this keyword concept
Aaray:- splice method
angular vs react
next js
linq
typeof('0')
8. that map in for loop 
*/


//10. DOM document object model html in javascript