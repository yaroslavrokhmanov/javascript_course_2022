"use strict";

// Практика на функции в JavaScript

// В приведенных ниже задачах вам необходимо будет написать функции. Давайте им правильные имена, отражающие их суть, а также при необходимости используйте вспомогательные функции, в том числе полученные в предыдущих задания

// Lesson 171

// №1
// Сделайте функцию, которая параметром будет принимать массив и возвращать сумму его элементов.

function sum_Arr(arr){ 
    let result = 0;
    for(let elem of arr){ 
      result += elem;
    }
     return result;
  }
  console.log(sum_Arr([1, 2, 3, 4, 5])); //15

// ====================================

// №2
//   Сделайте функцию, которая параметром будет принимать число и возвращать массив его делителей.

function func_Arr(num){ 
  let result = [];
  for (let i = 0; i <= num; i++){ 
    if(num % i == 0){
      result.push(i);
    }
  }
   return result;
}
console.log(func_Arr(50)); // [1, 2, 5, 10, 25, 50]

// =====================================

// №3
// Сделайте функцию, которая параметром будет принимать строку и возвращать массив ее символов.

  function func_Arr(str){ 
    let result = str.split('');
  return result;
      }
  console.log(func_Arr('Javascript')); //["J", "a", "v", "a", "s", "c", "r", "i", "p", "t"]

// ======================================

// №4
//  Сделайте функцию, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.

  function func_Arr(str){ 
    let result = str.split('').reverse('').join('');
 
  return result;
      }
  console.log(func_Arr('Javascript')); //"tpircsavaJ"

  // ====================================
// №5
//  Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву этой строки.

    function funcStr(str){ 
      let result = '';
        result = str[0].toUpperCase() + str.slice(1);
     
      return result;
          }
    
      console.log(funcStr('javascript')); //"Javascript"

      // =================================
// №6
//  Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву каждого слова этой строки.

function func(str) {
 let res = '';
 let leterUp
  = str.split(' ');
  for (let i = 0; i < leterUp
    .length; i++) {
    res += leterUp
    [i][0].toUpperCase() + leterUp
    [i].slice(1) + ' ';
  }
  return res.trim();
}
console.log(func('javascript the best')); //"Javascript The Best"

// ========================================

// №7
// Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.

function func(num) {
  let res = [];
 
   for (let i = 1; i <= num; i++) {
     res.push(i);
   }
   return res;
 }
 console.log(func(10)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  ========================================

 // №8

//  Сделайте функцию, которая будет возвращать случайный элемент из массива.
function Arr_elem(arr) {
  let res = Math.floor(Math.random() * arr.length);
   return res;
 }
 console.log(Arr_elem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//  ==========================================

// №9
// Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.
function func(num) { 
	for(let i = 2; i < num; i++) { 
	if(num % i === 0 ){
	  return false; 
	}
    }
	return true ;
  }
 
  console.log(func(4)); //false
console.log(func(5)); //true

// =============================================

// №10
// Сделайте функцию, которая будет проверять пару чисел на дружественность. Дружественные числа - два числа, для которых сумма всех собственных делителей первого числа равна второму числу и наоборот, сумма всех собственных делителей второго числа равна первому числу.

console.log(isFriendly(220, 284));

function isFriendly(num1, num2){
  
  return getDivisorsSum(num1) == num2 && getDivisorsSum(num2) == num1;
 
}

function getDivisorsSum(num){
  return getSum(getDivisors(num));
}

function getDivisors(num){
   let arr = [];
  for(let i = 1 ; i < num; i++){
    if(num % i == 0){
      arr.push(i);
    }
  }
  return arr;
}

function getSum(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i]; 
  }
    return sum;
  }

  // =======================================

  // №11
  // Используя созданную вами функцию из предыдущей задачи найдите все пары дружественных чисел в промежутке от 1 до 1000.

  function getDivisors1(num){
    let arr1 = [];
   for(let i = 1 ; i < num; i++){
     if(num % i == 0 && num<=1000){
       arr1.push(i);
     }
   }
   return arr1;
 }
 
 function getDivisors2(num){
    let arr2 = [];
   for(let i = 1 ; i < num; i++){
     if(num % i == 0 && num<=1000){
       arr2.push(i);
     }
   }
   return arr2;
 }
 
 console.log(getDivisors1(220));
 console.log(getDivisors2(284));
  