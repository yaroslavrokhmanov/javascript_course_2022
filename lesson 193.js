"use strict";

// Замыкания и вызов функции на месте в JavaScript

// ====================================================
// №1
// Не подсматривая в мой код, самостоятельно реализуйте такой же счетчик.

let func = (function(){
    let num = 1;
    return function(){
      console.log(num);
      num++;
    }
  }) ();
  
  func();
  func();
  func();
  func();
  func();

  // ====================================================
// №2
// Модифицируйте работу счетчика так, чтобы он считал до 5, а потом отсчет начинался сначала.

let func = (function(){
    let num = 1;
    return function(){
     console.log(num);
     num++;
      if(num >=6){
        num = 1;
        console.log(num);
        num++;
      }
    }
  }) ();
  
  func(); // 1
  func(); // 2
  func(); // 3
  func(); // 4
  func(); // 5
  func(); // 1
  func(); // 2
  func(); // 3
  func(); // 4
  func(); // 5
