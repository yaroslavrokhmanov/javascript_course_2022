"use strict";

// Метод forEach для перебора массива в JavaScript

// ====================================================
// №1
// ан массив с числами. Используя метод forEach найдите сумму квадратов элементов этого массива.

let arr = [1, 2, 3, 4, 5];
let sum = 0;

arr.forEach(function(elem) {
	sum += elem * elem;
});

console.log(sum); // 55
