"use strict";

// Lesson 162

// №1
// Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, округляющая дробь до трех знаков в дробной части:
// function sqrt(num) {
// 	return Math.sqrt(num);
// }
// function round(num) {
// 	return num.toFixed(3);
// }
// С помощью этих функций найдите квадратный корень из числа 2 и округлите его до трех знаков в дробной части.
// -----------------------------------------

let res1 = sqrt(2);

function sqrt(num) {
	return Math.sqrt(num);
  
}

let res2 = round(res1);

function round(num) {
	return num.toFixed(3);
}

console.log(res1); //1.4142135623730951
console.log(Number(res2)); //1.414

// -----------------------------------------

// №2
// Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, возвращающая сумму трех чисел:
// function sqrt(num) {
// 	return Math.sqrt(num);
// }
// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }
// С помощью этих функций найдите сумму корней чисел 2, 3 и

// -------------------------------------

num1 = sqrt(2);
num2 = sqrt(3);
num3 = sqrt(4);

function sqrt(num) {
	return Math.sqrt(num);
}

let res = sum(num1, num2, num3);
function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}


console.log(num1); // 1.4142135623730951
console.log(num2); // 1.7320508075688772
console.log(num3); // 2

console.log(res); // 5.146264369941973

// ---------------------------------------------------

// №3
// Пусть у вас есть функция, округляющая дробь до трех знаков в дробной части:

// function round(num) {
// 	return num.toFixed(3);
// }
// С помощью этой функции модифицируйте предыдущую задачу так, чтобы в переменную res записывалась дробь, округленная до 3-х знаков в дробной части.
// -----------------------------------------

num1 = sqrt(2);
num2 = sqrt(3);
num3 = sqrt(4);

function sqrt(num) {
	return Math.sqrt(num);
}

let res = sum(num1, num2, num3);
function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}

let result = round(res);
function round(num) {
	return Number(num.toFixed(3));
}

console.log(num1); // 1.4142135623730951
console.log(num2); // 1.7320508075688772
console.log(num3); // 2

console.log(res); // 5.146264369941973
console.log(result); //5.146