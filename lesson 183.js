"use strict";

// Массив с анонимными функциями в JavaScript

// №1
// Сделайте массив arr с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3.
let arr = [
    function(){
    return 1;
    },
    function(){
    return 2;
    },
    function(){
    return 3;
    }  
  ];
// ====================================
// №2
// Используя созданный вами массив arr выведите в консоль число 3, вызвав соответствующую функцию.
let arr = [
    function(){
    return 1;
    },
    function(){
    return 2;
    },
    function(){
    return 3;
    }  
  ];
 
 console.log(arr[2]()); //3
// =====================================
// №3
// Используя созданный вами массив arr найдите сумму результатов функций (без цикла).
let arr = [
    function(){
    return 1;
    },
    function(){
    return 2;
    },
    function(){
    return 3;
    }  
  ];
 
 console.log(arr[0]() + arr[1]() + arr[2]());
// ======================================

// №4
// Переберите созданный вами массив arr циклом и выведите результаты работы всех функций в консоль.
let arr = [
  function(){
  return 1;
  },
  function(){
  return 2;
  },
  function(){
  return 3;
  }  
];

for (let func of arr) {
 console.log(func()); // 1 2 3
}