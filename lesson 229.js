"use strict";

// Разность между датами в формате timestamp в JavaScript
// ====================================================
// №1 
// Выведите на экран количество дней, прошедшее между 1 марта 1988 года и 10 января 2000 года.

let now = new Date(2000, 1, 10, 0, 0, 0);
let date = new Date(1988, 03, 1, 0, 0, 0);

let res = now.getTime() - date.getTime();

console.log(res / (1000 * 60 * 60 * 24)); // 4332

// ====================================================
// №1 
// Выведите на экран количество месяцев, прошедшее между вашим рождением и текущим моментом времени.
let now = new Date();
let date = new Date(1979, 11, 2, 0, 0, 0);

let res = now.getTime() - date.getTime();

console.log(res / (1000 * 60 * 60 * 24 * 30.41)); // 517