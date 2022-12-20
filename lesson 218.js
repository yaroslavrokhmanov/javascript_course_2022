"use strict";

// Значения по умолчанию при деструктуризации объектов в JavaScript
// ====================================================

// №1 
// В следующем коде части объекта записываются в соответствующие переменные:

// let options = {
// 	width:  400,
// 	height: 500,
// };

// let color;
// if (options.color !== undefined) {
// 	color = options.color;
// } else {
// 	color = 'black';
// }

// let width  = options.width;
// let height = options.height;
// Переделайте этот код через деструктуризацию согласно изученной теории.
// ---------------------
let options = {
	width:  400,
	height: 500,
};

let {color = 'black', width, height} = options;

console.log(color);  // "black"
console.log(width);  // 400
console.log(height); // 500