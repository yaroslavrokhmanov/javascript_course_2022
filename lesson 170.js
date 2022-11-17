"use strict";

// Lesson 170

// №1
// Код должен найти сумму результатов работы двух функций:

// function func1() {
// 	console.log(3);
// }
// function func2() {
// 	console.log(5);
// }

// console.log( func1() + func2() );

function func1() {
	return 3;
}

function func2() {
	return 5;
}

console.log(func1() + func2()); //8

// =========================================

// №2
// Код должен найти сумму элементов массива:

// function sum(arr) {
// 	let res = 0;
	
// 	for (let elem of arr) {
// 		res += elem;
// 		return res;
// 	}
// }

// console.log(sum([1, 2, 3, 4, 5]));

function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
  return res;
}

console.log(sum([1, 2, 3, 4, 5])); //15

// ===============================================

// №3
// Код должен найти сумму элементов массива, однако, ничего не выводит в консоль:

// let arr = [1, 2, 3, 4, 5];

// function func(arr) {
// 	let res = 0;
	
// 	for (let elem of arr) {
// 		res += elem;
// 	}
	
// 	console.log(res);
// }

let arr = [1, 2, 3, 4, 5];

function func(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	return res;
}

console.log( func(arr)); //15

// ===============================================

// №4
// function func1() {
// 	return 3;
// }
// function func2() {
// 	return 5;
// }

// console.log( func1 + func2 );

function func1() {
	return 3;
}
function func2() {
	return 5;
}

console.log( func1() + func2() ); //8

// ========================================

// №5
// Код должен найти сумму элементов массива:

// let sum = sum([1, 2, 3, 4, 5]);
// console.log(sum);

// function sum(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
	
// 	return elem;
// }

let arr = [1, 2, 3, 4, 5];
function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	return res;
}
console.log(sum(arr));

// ===========================================

// №6
// let res = sum([1, 2, 3, 4, 5]);
// console.log(res);

// function sum(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
// }

let arr = [1, 2, 3, 4, 5];

function sumFunc(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
  return sum;
}

console.log(sumFunc(arr)); //15

// ==============================================

// №7

// Функция добавляет ноль к числу от 1 до 9, а числа больше 9 возвращает без изменений:

// function add(num) {
// 	if (num <= 9) {
// 		return '0' + num;
// 	}
// }

function add(num) {
	if (num <= 9) {
		return '0' + num;
	}else{
      return num;
    }
}

console.log(add(3)); //"03"
console.log(add(10)); //10

// ==============================================

// №8

// Код должен найти сумму элементов массива:

// let arr = [1, 2, 3, 4, 5];
// let sum = sum(arr);
// console.log(sum);

// function sum(arr) {
// 	let res = 0;
	
// 	for (let elem of arr) {
// 		res += elem;
// 	}
	
// 	return res;
// }


let arr = [1, 2, 3, 4, 5];

function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
return res;
}

console.log(sum(arr)); //15

// ===============================================

// №9

// Код должен найти сумму цифр числа:

// let num = 12345;
// let res = getDigitsSum(num);
// console.log(res);

// function getDigitsSum(num) {
// 	let arr = num.split('');
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
	
// 	return sum;
// }

let num = 123451;
num = String(num);
let arr = num.split('');

function getDigitsSum(arr){
  let sum = 0;
  
	for(let elem of arr){
	sum = sum + Number(elem);	
	}
  
	return sum;
}

console.log(getDigitsSum(num)); // 16

// ========================================

// №10

// Код должен проверить число на то, что оно является простым:

// console.log(isPrime(13)); // должен вывести true

// function isPrime(num) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i !== 0) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	}
// }
function isPrime(num) { 
	for(let i = 2; i < num; i++) { 
	if(num % i === 0){
	  return false; 
	}if(num > 1){
	return true ;
  }
  }
  }
  console.log(isPrime(13)); //true