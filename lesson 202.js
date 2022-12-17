"use strict";

// Метод some для проверки массива в JavaScript

// ====================================================
// №1
// Дан массив с числами. Проверьте то, что в массиве есть хотя бы одно число больше нуля.

let arr = [2, 4, 6, 8, 9, 10];
let result = arr.some(elem => elem > 0);
console.log(result);

// ====================================================
// №2
// Дан массив с числами. Проверьте то, что хотя бы для одного элемента произведение его значения на порядковый номер больше 30.
let arr = [1, 2, 3, 4, 5, 6];
let result = arr.some((elem, index) => index * elem > 30); 
console.log(result); // false