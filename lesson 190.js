"use strict";

// Лексическое окружение функций в JavaScript
// №1
// Определите, не запуская код, что выведется в консоль:

function test() {
	let num1 = 1;
	let num2 = 2;
	
	return function() {
		return num1 + num2;
	}
}

let func = test();
console.log(func()); // 3
// ===========================================
// №2
// Определите, не запуская код, что выведется в консоль:

function test() {
	let num1 = 1;
	let num2 = 2;
	
	return function() {
		return num1 + num2;
	}
}

console.log(test()()); // 3
// ===========================================
// №3
// Определите, не запуская код, что выведется в консоль:

function test() {
	let num1 = 1;
	
	return function() {
		return num1 + num2;
	}
}

let num2 = 2;
let func = test();
console.log(func()); //3
// ===========================================
// №4
// Определите, не запуская код, что выведется в консоль:

function test() {
	let num = 1;
	
	return function() {
		return num;
	}
}

let num = 2;
let func = test();
console.log(func()); // 1