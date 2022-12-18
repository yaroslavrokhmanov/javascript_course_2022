"use strict";

// Пропуск элементов массива при деструктуризации в JavaScript
// ====================================================
// №1
// В следующем коде части массива записываются в соответствующие переменные:

// let arr = ['John', 'Smit', 'development', 'programmer', 2000];

// let department = arr[2];
// let position   = arr[3];
// Переделайте этот код через деструктуризацию согласно изученной теории.

let arr = ['John', 'Smit', 'development', 'programmer', 2000];
let  [,,department, position ] = arr;

console.log (department); //"development"
console.log (position);   //"programmer"