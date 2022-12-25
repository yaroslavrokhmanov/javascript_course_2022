
"use strict";

// Определение високосного года в JavaScript
// ====================================================
// №1 
let date = new Date(2016, 2, 0);

function  isLeap(date) {
  
  if (date.getDate() == 29) {
	return 'Высокосный';
} else {
	return 'Обычный';
}
}

console.log( isLeap(date)); // "Высокосный"
