"use strict";

// Lesson 156

// №1
// Сделайте функцию, выводящую в консоль ваше имя.
function name(){
  console.log('Yaroslav');
};

// ====================================

// №2
// Сделайте функцию, выводящую в консоль сумму чисел от 1 до 100.
let num = 0;
function func(){
  for(i = 0; i<10; i++){ 
    num +=i;
    console.log(i+1);
  } 
  }
func();
