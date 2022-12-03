"use strict";

// Объект с анонимными функциями в JavaScript

// №1
// Сделайте объект с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3. С помощью созданных функций выведите в консоль сумму возвращаемых чисел.
let obj = {
	func1: function() {return 1},
	func2: function() {return 2},
	func3: function() {return 3},
};

console.log(obj.func1() + obj.func2() + obj.func3());

// ===================================
// №2
// Переберите созданный объект циклом и выведите результаты работы функций в консоль.

Не решено!!! Написал в телеграм

// ===================================
// №3
// Сделайте объект с тремя функциями, каждая из которых будет принимать параметром массив с числами. Сделайте так, чтобы первая функция возвращала сумму элементов массива, вторая функция - сумму квадратов, а третья - сумму кубов.

let obj = {
	func1: function(arr) { // сумму элементов массива
      let sum = 0;
      for (let i = 0; i< arr.length; i++){
        sum += arr[i];
      }
      return sum; //15
    },
  
	func2: function(arr) { //сумму квадратов
      var sumsquare = 0;
      for (let i = 0; i < arr.length; i++) {
        let res = arr[i] * arr[i];
        sumsquare += res;      
      }
      return sumsquare; // 55
    },
                     
	func3: function(arr) { //сумму кубов
    var sumcube = 0;
      for (let i = 0; i < arr.length; i++) {
    sumcube += arr[i] * arr[i] * arr[i];  
      }
      return sumcube; // 225
    },
};

console.log(obj.func1([1, 2, 3, 4, 5])); // 15
console.log(obj.func2([1, 2, 3, 4, 5])); // 55
console.log(obj.func3([1, 2, 3, 4, 5])); // 225