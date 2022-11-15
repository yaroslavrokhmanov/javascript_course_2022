"use strict";

// Lesson 168

// №1
// Дана следующая функция:

// function func(a, b) {
// 	if (a == b) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// Перепишите ее код в сокращенной форме согласно изученной теории.

function func(a, b) {
	if (a == b) {
		return true;
	} 
}

console.log(func(10, 10)); //true
console.log(func(10, 20)); //undefined
// ---------------------------------------

// №2
// Дана следующая функция:

// function func(a, b) {
// 	if (a != b) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// Перепишите ее код в сокращенной форме согласно изученной теории.

function func(a, b) {
	if (a != b) {
		return true;
	} 
}
console.log(func(1, 5)); //true
console.log(func(10, 10)); //undefined
// ------------------------------------------

// №3

// function func(a, b) {
// 	if (a + b >= 10) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// Перепишите ее код в сокращенной форме согласно изученной теории.

function func(a, b) {
	if (a + b >= 10) {
		return true;
	} 
}
  
console.log(func(8, 2)); //true
console.log(func(5, 2)); //undefined
// ----------------------------------------------

// №4

// Дана следующая функция:

// function func(num) {
// 	if (num >= 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// Перепишите ее код в сокращенной форме согласно изученной теории.

function func(num) {
	if (num >= 0) {
		return true;
	} 
}
  
console.log(func(-4)); //undefined
console.log(func(5)); //true