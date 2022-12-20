"use strict";

// Имена переменных при деструктуризации объектов в JavaScript
// ====================================================

// №1 
// В следующем коде части объекта записываются в соответствующие переменные:

// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };

// let c = options.color;
// let w = options.width;
// let h = options.height;
// Переделайте этот код через деструктуризацию согласно изученной теории.
// ------------------------
let options = {
	color: 'red',
	width:  400,
	height: 500,
};

let {color: c, width: w, height: h} = options;

console.log(c);  // "red"
console.log(w);  // 400
console.log(h); // 500