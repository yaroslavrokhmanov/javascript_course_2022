"use strict";

// Lesson 165

// №1
// Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.

function func(num) {
    for (i = 0; num > 10; i++){
      num = num / 2;
    }
    return i;
  }
  
  result = func(100);
  console.log(result);