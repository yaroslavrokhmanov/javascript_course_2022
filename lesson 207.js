"use strict";

// Применение операторов rest и spread в JavaScript
// Функция, находящая сумму чисел
// ====================================================
// №1
// Напишите функцию, которая будет принимать параметрами произвольное количество чисел и возвращать их среднее арифметическое.

let result = func(1, 2, 3, 4, 5, 6, 7, 8, 9);
function func(...nums){
  let sum = 0;
  for(let num of nums){
    sum += num / 9;
  }
      return sum ;
}
console.log(result); // 5