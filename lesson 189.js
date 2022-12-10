"use strict";

// Функция, возвращающая функцию в JavaScript
// №1
// Сделайте функцию func1, которая будучи вызвана вот так: func1()(), вернет число 1. Сделайте аналогичную функцию func2, возвращающую число 2. Найдите сумму результатов этих функций.

function func1() {
	return function(){
      return 1;    
}
}   
  function func2() {  
      return function(){
      return 2;
};  
  }

console.log(func1()()); // 1
console.log(func2()()); // 2
console.log(func1()() + func2()()); // 3

// =======================================
// №2
// Сделайте функцию func, которая будучи вызвана вот так: func()()()()(), вернет '!'.

function test(){
      return function(){
        return function(){
          return function(){
            return '!';
          };
        };
      };
    }
    
    console.log(test()()()()); // "!"
// =======================================
// №3
// Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4), вернет сумму переданных в параметры чисел.

function func(num1){
      return function(num2){
        return function(num3){
          return num1 + num2 + num3;
        };
      };
    }
  
  
  console.log(func(2)(3)(4)); //9

  // =======================================
// №4
// Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел.

function func(num1){
      return function(num2){
        return function(num3){
         return function(num4){
           return function(){
            console.log (num1 + num2 + num3 + num4); // 14
            console.log ([num1, num2, num3, num4]); // [2, 3, 4, 5]
          };
           };
         };
        };
      }
  
  func(2)(3)(4)(5)();