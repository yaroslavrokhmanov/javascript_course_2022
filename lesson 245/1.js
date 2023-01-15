"use strict";

let elem = document.querySelector('#elem');

elem = document.addEventListener('click', func1);
elem = document.addEventListener('click', func2);
elem = document.addEventListener('click', func3);

function func1() {
	console.log('1');
}

function func2() {
	console.log('2');
}

function func3() {
	console.log('3');
}