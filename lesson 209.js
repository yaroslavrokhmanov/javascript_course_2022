"use strict";

// Деструктуризация массива из функции в JavaScript
// Функция, находящая сумму чисел
// ====================================================
// №1
// В следующем коде части массива записываются в соответствующие переменные:

// function func() {
// 	return ['John', 'Smit', 'development', 'programmer', 2000];
// }

// let arr = func();

// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
// let position   = arr[3];
// let salary     = arr[4];
// Переделайте этот код через деструктуризацию согласно изученной теории.
// --------------------

let [name, surname, department, positiv, salary] = func();

function func() {
	return ['John', 'Smit', 'development', 'programmer', 2000];
}

console.log(name);       // "John"
console.log(surname);     // "Smit"
console.log(department); // "development"
console.log(positiv);    // "programmer"
console.log(salary);     // 2000