"use strict";

// Function expression и Function declaration в JavaScript

// №1
// Определите, является ли представленная функция Function Declaration или Function Expression:

function func() {
	console.log('!');  // "!"
}

//  Функция обьявленая через function и дано имя функции - Function Declaration

// ======================================

// №2
// Определите, является ли представленная функция Function Declaration или Function Expression:

func(); 
function func() {
	console.log('Text'); // "Text"
};

// Безымянная функция записана в переменную - Function Expression
// ---------------------------------------
 
// Разница

// №3
// Создайте функцию как Function Declaration. Проверьте то, что она будет доступна выше места своего объявления.

func(); 

function func() {
	console.log('Text');
}
// =====================================

// №4
// Создайте функцию как Function Expression. Проверьте то, что она не будет доступна выше места своего объявления.

myfunc(); 

let myfunc = function() {
	console.log('Text'); //"error", func is not defined
};
// ======================================

// №5
// Расставьте точки с запятой во всех необходимых местах:
let func1 = function() {console.log('!')}
let func2 = function() {
	console.log('!')
}
function func3() {
	console.log('!')
}
// ----------------------

let func1 = function() {
    console.log('!'); // !
  };
  func1();
  
  let func2 = function() {
      console.log('!'); // !
  };
  func2();
  
  func3();
  function func3() {
      console.log('!'); // !
  }
