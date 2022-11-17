"use strict";

// Lesson 169

// №1
// Напишите, какие недостатки у следующего кода, и исправьте их:

function sum(arr) {
	let res = 0;
    
	for (let elem of arr) {
		res += elem;
    }
 
  return res / arr.length;
  }

console.log(sum([5, 5, 10])); //6.666666666666667
// Для меня все понятно.

// ==================================================

// №2
// Напишите, какие недостатки у следующего кода, и исправьте их:

// function func(arr1, arr2) {
// 	let res1 = 0;
	
// 	for (let elem of arr) {
// 		res1 += elem;
// 	}
	
// 	let res2 = 0;
	
// 	for (let elem of arr) {
// 		res2 += elem;
// 	}
	
// 	return res1 / res2;
// }


function func(arr1, arr2) {
	let res1 = 0;
	
	for (let elem of arr1) {
		res1 += elem;
	}
	
	let res2 = 0;
	
	for (let elem of arr2) {
		res2 += elem;
	}
	
	return res1 / res2;
}

console.log(func([10, 20], [30, 40])); //0.42857142857142855

// ============================================

// №3
// Напишите, какие недостатки у следующего кода, и исправьте их:

// function getSum(arr) {
// 	let res = 0;
	
// 	for (let elem of arr) {
// 		res *= elem;
// 	}
	
// 	return res;
// }

function getSum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res = res + elem;
	}
	
	return res * arr.length;
}

console.log(getSum([1, 2, 3, 4, 5])); //75