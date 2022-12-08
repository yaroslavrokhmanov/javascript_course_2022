"use strict";

// Область видимости вложенных функций в JavaScript

// №1
// Определите, не запуская код, что выведется в консоль:

function test() {
	let num = 1;
	
	function func() {
		console.log(num); // 1
	}
	
	func();
}

test();

// ======================================
// №2
// Определите, не запуская код, что выведется в консоль:

function test() {
	let num = 1;
	
	function func() {
		console.log(num); // Ничего не выведется (underfined)
	}
}

test();
// ======================================
// №3
// Определите, не запуская код, что выведется в консоль:

function test() {
	let num = 1;
	
	function func() {
		console.log(num); // underfined
	}
	
	func();
}
// ======================================
// №4
// Определите, не запуская код, что выведется в консоль:

function test() {
	let num;
	
	function func() {
		console.log(num);
	}
	
	num = 1
	func(); // 1
	
	num = 2
	func(); // 2
}

test();
// ======================================
// №5
// Определите, не запуская код, что выведется в консоль:

function test(num1, num2) {
	function func() {
		console.log(num1 + num2); //3
	}
	
	func();
}

test(1, 2);
// ======================================
// №6
// Определите, не запуская код, что выведется в консоль:

function test(num1, num2) {
	function func() {
		console.log(num1 + num2); // 4
	}
	
	num1 = 2;
	func();
}

test(1, 2);
// ======================================
// №7
// Определите, не запуская код, что выведется в консоль:

function test(num) {
	function func(localNum) {
		console.log(localNum); // 1
	}
	
	func(num);
}

test(1);  
// ======================================
// №8
// Определите, не запуская код, что выведется в консоль:

function test(num) {
	function func(localNum) {
		console.log(localNum); // 2
	}
	
	func(num + 1);
}

test(1);
// ======================================
// №9
// Определите, не запуская код, что выведется в консоль:

function test(num) {
	function func(localNum) {
		console.log(num); // 1
	}
	
	func(num + 1);
}

test(1);
// ======================================
// №10
// Определите, не запуская код, что выведется в консоль:

function test(num) {
	function func(localNum) {
		localNum = 2;
	}
	
	func(num);
	console.log(num); // 1
}

test(1);
// ======================================
// №11
// Определите, не запуская код, что выведется в консоль:

function test(num) {
	function func(localNum) {
		localNum = 2;
	}
	
	func(num);
	console.log(localNum); // ошибка 
}

test(1);
// ======================================
// №12
// Определите, не запуская код, что выведется в консоль:

function test(num) {
	function func(localNum) {
		num = 2;
	}
	
	func(num);
	console.log(num); // 2
}

test(1);
// ======================================
// №13
// Определите, не запуская код, что выведется в консоль:

function test(num) {
	function func(num) {
		console.log(num); // 1
	}
	
	func(num);
}

test(1);
// ======================================
// №14
// Определите, не запуская код, что выведется в консоль:

function test(num) {
	function func(num) {
		num = 2;
	}
	
	func(num);
	console.log(num); // 1
}

test(1);
// ======================================
// №15
// Определите, не запуская код, что выведется в консоль:

function test(num) {
	function func(num) {
		console.log(num); // 2
	}
	
	num = 2;
	func(num);
}

test(1);
// ======================================
// №16
// Определите, не запуская код, что выведется в консоль:

function test(num) {
	function func(num) {
		console.log(num); // 1
	}
	
	func(num);
	num = 2;
}

test(1);