"use strict";

// Глобальные переменные и параметры функций в JavaScript

// №1
// Определите, не запуская код, что выведется в консоль:

function func(localNum) {
	console.log(localNum);
}

func(1); // 1

// ========================================
// №2
// Определите, не запуская код, что выведется в консоль:

function func(localNum) {
	console.log(localNum);
}

let num = 1;
func(num); // 1

// ========================================
// №3
// Определите, не запуская код, что выведется в консоль:

function func(localNum) {
	console.log(localNum);
}

let num = 1;
func(num); // 1
num = 2;

// =========================================
// №4

// Определите, не запуская код, что выведется в консоль:

let num = 1;

function func(localNum) {
	console.log(localNum);
}

num = 2;
func(num); // 2

// ===========================================
// №5

// Определите, не запуская код, что выведется в консоль:

function func(localNum) {
	localNum = 2;
}

let num = 1;
func(num); 
console.log(num); // 1

// ============================================
// №6
// Определите, не запуская код, что выведется в консоль:

function func(localNum) {
	num = 2;
}

let num = 1;
func(num);
console.log(num); // 2 Если правильно понимаю то после вызова функции значение num изменили на num = 2 внутри функции

// ============================================

// №7
// Определите, не запуская код, что выведется в консоль:

function func(localNum) {
	let num = 2;
}

let num = 1;
func(num);
console.log(num); // 1 
