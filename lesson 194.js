"use strict";

// // Функции-коллбэки в JavaScript

// ====================================================
// №1
// Дан массив с числами. С помощью созданной нами функции each увеличьте каждый элемент в два раза.

function each(arr, callback) {
	let result = [];
	
	for (let elem of arr) {
		result.push( callback(elem) ); // вызываем функцию-коллбэк
	}
	
	return result;
}

let result = each([1, 2, 3, 4, 5], function(num) {
	return num * 2;
});

console.log(result); // [2, 4, 6, 8, 10]

// ====================================================
// №2
// Дан массив со строками. С помощью созданной нами функции each переверните символы каждой строки в обратном порядке.

function each(arr, callback) {
	let result = [];
	
	for (let elem of arr) {
		result.push( callback(elem) ); // вызываем функцию-коллбэк
	}
	
	return result;
}

let result = each(['United State', 'Poland', 'Afrika', 'Mexika', 'Britain'].reverse(), function(str) {
	return str;
});

console.log(result); // ["Britain", "Mexika", "Afrika", "Poland", "United State"]

// ====================================================
// №3
// Дан массив со строками. С помощью созданной нами функции each сделайте заглавным первый символ каждой строки.

function each(arr, callback) {
	let result = [];
	
	for (let elem of arr) {
		result.push( callback(elem) ); // вызываем функцию-коллбэк
	}
	
	return result;
}

let result = each(['united State', 'poland', 'afrika', 'mexika', 'britain'], function(str) {
	return str[0].toUpperCase() + str.slice(1);
});

console.log(result); // ["Britain", "Mexika", "Afrika", "Poland", "United State"]

// ====================================================
// №4
// С помощью следующей функции возведите все элементы массива в куб:

// function cube(num) {
// 	return num ** 3;
// }

function cube(arr, callback){
    let result = [];
  
    for (elem of arr){
      result.push(callback(elem));
    }
    return result;
  }
  
  let result = cube([1, 2, 3, 4, 5], function cube(num){
    return num ** 3;
  });
  
  
  console.log(result); // [1, 8, 27, 64, 125]