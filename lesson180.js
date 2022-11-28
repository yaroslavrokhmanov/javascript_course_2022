"use strict";

// Функция как переменная в JavaScript

// №1
// Сделайте функцию func, которая будет возвращать через return какую-либо строку.

function func() {
	return 'Yaroslav';
}
// ==============================
// №2
// Выведите результат работы функции func в консоль.
function func() {
	return 'Yaroslav';
}

console.log(func()); // "Yaroslav"
// ==============================
// №3
// Выведите исходный код функции func в консоль.
function func() {
	return 'Yaroslav';
}

console.log(func); // function func() {return 'Yaroslav';}
// ==============================
// №4
// Запишите в переменную func число 123, тем самым затерев функцию из этой переменной. Выведите новое значение переменной func в консоль.

function func() {
	return 'Yaroslav';
}
func = 123;
console.log(func); // 123


// --------------------------------------------------
// Запись функции в другую переменную

// ==============================
// №5
// Сделайте функцию func1, которая будет возвращать через return число 3.
function func1() {
	return Number(3);
}

console.log(func1()); // 3
// ==============================
// №6
// Скопируйте исходный код функции func1, в переменную func2.
function func1() {
	return Number(3);
}
let func2 = func1;

console.log(func2()); // 3
// ==============================
// №7
// Выведите в консоль сумму результатов работы функций func1 и func2.
function func1() {
	return Number(3);
}
let func2 = func1;

console.log(func1()); // 3
console.log(func2()); // 3
// ===============================
// №8
// Сделайте безымянную функцию, которая будет возвращать через return число 1. Запишите эту функцию в переменную func1.
let func1 = function() {
	return Number(1);
};

console.log(func1()); // 1
// ================================
// №9
// Сделайте безымянную функцию, которая будет возвращать через return число 2. Запишите эту функцию в переменную func2.
let func2 = function() {
	return Number(2);
};

console.log(func2()); // 2
// ================================
// №10
// Найдите сумму значений функций func1 и func2. Выведите эту сумму алертом в консоль.
let func1 = function() {
	return Number(1);
};

console.log(func1()); //1

let func2 = function() {
	return Number(2);
};

console.log(func2()); //2

console.log(func1() + func2()); //3
alert(func1() + func2()); //3
