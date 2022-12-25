"use strict";

// Переменные и значения по умолчанию в JavaScript
// ====================================================

// №1 
// В следующем коде части объекта записываются в соответствующие переменные:



// let options = {

// 	width:  400,
// 	height: 500,
// };

// let с;
// if (options.с !== undefined) {
// 	с = options.color;
// } else {
// 	с = 'black';
// }

// let w = options.width;
// let h = options.height;
// Переделайте этот код через деструктуризацию согласно изученной теории.
// ------------------------

let options = {
	width:  400,
	height: 500,
};

let { color:c = 'black', width:w, height:h } = options;

console.log(c);  // "black"
console.log(w);  // 400
console.log(h); // 500