"use strict";

// Lesson 164

// №1
// Что выведется в консоль в результате выполнения следующего кода:

// function func(num) {
// 	let sum = 0;
	
// 	for (let i = 1; i <= num; i++) {
// 		sum += i;
// 		return sum;
// 	}
// }

// console.log( func(5) );
// Объясните почему. Что хотел сделать автор данного кода? Исправьте ошибку автора.

// --------------------------------------

function func(num) {
	let sum = 0;
	
	for (let i = 1; i <= num; i++) {
		sum += i;
	}
  return sum;
}

console.log( func(5) ); //15 Автор хотел найти сумму чисел от 0 до 5