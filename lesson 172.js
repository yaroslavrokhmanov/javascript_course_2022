"use strict";

// Глобальные переменные в функциях в JavaScript

// Lesson 172

// №1
// Определите, не запуская код, что выведется в консоль:

let num = 1;
		
function func() {
	console.log(num);
}

func(); //1

// ==========================

// №2
// Определите, не запуская код, что выведется в консоль:

let num = 1;
		
function func() {
	console.log(num);
}

num = 2;
func(); //2

// ============================

// №3
// Определите, не запуская код, что выведется в консоль:

function func() {
	console.log(num);
}

let num;

num = 1;
func(); //1

num = 2;
func(); //2
