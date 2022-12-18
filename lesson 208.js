"use strict";

// Деструктуризация массивов в JavaScript
// Функция, находящая сумму чисел
// ====================================================
// №1
// В следующем коде части массива записываются в соответствующие переменные:

// let arr = ['John', 'Smit', 'development', 'programmer', 2000];

// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
// let position   = arr[3];
// let salary     = arr[4];
// Переделайте этот код через деструктуризацию согласно изученной теории.

let arr = ['John', 'Smit', 'development', 'programmer', 2000];
let [name, surname, department, positiv, salary] = arr;
console.log(name);       // "John"
console.log(surname);     // "Smit"
console.log(department); // "development"
console.log(positiv);    // "programmer"
console.log(salary);     //