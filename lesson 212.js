"use strict";

// Остаток массива при деструктуризации в JavaScript
// ====================================================
// №1
// В следующем коде части массива записываются в соответствующие переменные:

// let arr = ['John', 'Smit', 'development', 'programmer', 2000];

// let name    = arr[0];
// let surname = arr[1];

// let info = arr.slice(2); // все элементы со второго до конца массива
// Переделайте этот код через деструктуризацию согласно изученной теории.

let arr = ['John', 'Smit', 'development', 'programmer', 2000];
let [name, surname, ...IT] = arr;


console.log(IT); //["development", "programmer", 2000]