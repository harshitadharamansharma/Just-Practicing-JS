
import "./styles.css";

// functional programming language
// Everything in JS is an Object

//Primitive
// String
// Number
// Boolean
// Null
// Undefined

// var a = "it is a string";

// console.log(a);

// var b = 2;

// console.log(b);

// var c = true;

// console.log(c);

// var d = null;
// console.log(d);

// // var e;
// // console.log(e);

// // console.log(typeof(a));
// // console.log(typeof(b));
// // console.log(typeof(c));
// // console.log(typeof(d));
// // console.log(typeof typeof(e));

// //js is a loosely typed language
// // implicit and explicit

// var a = 2;
// var b = "2";
// console.log(a==b);
// console.log(a===b);

// var c = "3";
// console.log(+c); // explicit coercion

// console.log(b + c);

// console.log("hey" + "hello");

// console.log((1 + "abc") + 2);
// console.log(6 + "6");
// console.log(6 + 2 + "abc" + 3);
// console.log(6 + +"6");// 6+6
// console.log(-"6"); // explicit coercion

// console.log(+"abc");

// console.log(typeof(NaN));
// var l = +"abc";
// var d = +"lgf";
// console.log(l == d);

// console.log(null == undefined);
// console.log(null === undefined);

// Arrays

var a = [];

var b = new Array(6); // constructor function Array;

var d = [1, 2, 3, "hello world"]; // internally stored as an object

console.log(d);

console.log(typeof d);

var e = [
  1,
  2,
  function a() {
    console.log("hi");
  },
  3,
  4
];

console.log(e[2]());
var a = [1, 2, 3];
console.log(a.length);

for (var i = 0; i < a.length; i++) {
  console.log(i);
  console.log(a[i]);
}

var q = a.map(function (num, index) {
  console.log(index);
  return num * 4;
});
console.log(q);

var p = [1, 3, 4];

console.log(p.push(5));


//___________________

import "./styles.css";

// // functional programming language
// // Everything in JS is an Object

// //Primitive
// // String
// // Number
// // Boolean
// // Null
// // Undefined

// // var a = "it is a string";

// // console.log(a);

// // var b = 2;

// // console.log(b);

// // var c = true;

// // console.log(c);

// // var d = null;
// // console.log(d);

// // // var e;
// // // console.log(e);

// // // console.log(typeof(a));
// // // console.log(typeof(b));
// // // console.log(typeof(c));
// // // console.log(typeof(d));
// // // console.log(typeof typeof(e));

// // //js is a loosely typed language
// // // implicit and explicit

// // var a = 2;
// // var b = "2";
// // console.log(a==b);
// // console.log(a===b);

// // var c = "3";
// // console.log(+c); // explicit coercion

// // console.log(b + c);

// // console.log("hey" + "hello");

// // console.log((1 + "abc") + 2);
// // console.log(6 + "6");
// // console.log(6 + 2 + "abc" + 3);
// // console.log(6 + +"6");// 6+6
// // console.log(-"6"); // explicit coercion

// // console.log(+"abc");

// // console.log(typeof(NaN));
// // var l = +"abc";
// // var d = +"lgf";
// // console.log(l == d);

// // console.log(null == undefined);
// // console.log(null === undefined);

// // Arrays

// var a = [];

// var b = new Array(6); // constructor function Array;

// var d = [1, 2, 3, "hello world"]; // internally stored as an object

// console.log(d);

// console.log(typeof d);

// var e = [
//   1,
//   2,
//   function a() {
//     console.log("hi");
//   },
//   3,
//   4
// ];

// console.log(e[2]());
// var a = [1, 2, 3];
// console.log(a.length);

// for (var i = 0; i < a.length; i++) {
//   console.log(i);
//   console.log(a[i]);
// }

// var q = a.map(function (num, index) {
//   console.log(index);
//   return num * 4;
// });
// console.log(q);

// var p = [1, 3, 4];
// p.push(5);
// console.log(p);

// p.unshift(0);
// console.log(p);
// p.shift();
// console.log(p);

//Functions

// function abc() {
//   console.log("Hey Hello I am a function");
// }

// abc();

// // function expression
// var a = function () {
//   console.log("Hey I am an expression");
// }
// a();

// function d(a,b) {
//   console.log(a,b);
// }
// d(1,2);

// function cb(fn){
//   fn();
// }

// cb(function(){console.log("Hey I was passed")})

// function df1() {
//   return 1;
// }

// console.log(df1());

// function df() {
//   return (function() {
//     console.log("I was returned");
//   })
// }

// var m = df();

// // var m = function() {
//     //console.log("I was returned");
//  // }
// m();

// annoymous functions

// var a = function(){
//   console.log("hi");
// }

// a();

// (function() {
//   console.log("called");
// })();
// a-> [1,2,3]  <-b//

// a-> []
// b-> [1,2,3]
// var a = [1,2,3];

// var b = a;
// a.length = 0;

// console.log(a);
// console.log(b);

// a -> []  <- b
// a-> [1,12,3]
//b-> []
// var a = [];
// var b = a;
// a = [1,12,3];
// console.log(a);
// console.log(b);
// is this also copy a to b

// var a = [1,2,3];
// console.log()

// false == '0'  false === '0'

// var obj = {};
// var obj1 = new Object();

var dog = {
  name: "Pluto",
  breed: "pom"
};

console.log(dog.name);
console.log(dog["name"]);

var b = "name";

console.log(dog[b]);

console.log(dog.t);

/// dog["name"];

console.log(dog.breed);
// var b = "name";
// console.log(dog[b]);
// console.log(dog["name"]);
