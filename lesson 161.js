"use strict";

// Lesson 161
// №1
// Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа. С помощью этой функции найдите куб числа 3 и запишите его в переменную res.
let res = func(6);
function func(num){
  return num * num * num;
}

console.log(res);

// ------------------------
// №1
// Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их в консоль.

let res1 = func(3);
let res2 = func(4);
let sum = res1 + res2;

function func(num){
  return Math.sqrt(num);
}

console.log('Корень из числа 3'+ ' = ' + res1); // 1.7320508075688772
console.log('Корень из числа 4'+ ' = ' + res2); // 2
console.log('Сумма'+' = ' + sum); // 3.732050807568877