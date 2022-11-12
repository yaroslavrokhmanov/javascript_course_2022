"use strict";

// Lesson 160

// №1
// Расскажите, каким будет результат каждого из вызовов функции.
function func(num = 5){
    console.log(num * num);
  }
  func(2); //4
  func(3); //9
  func(); //25

  // №2
//   Расскажите, каким будет результат каждого из вызовов функции.
function func(num1 = 0, num2 = 0) {
	console.log(num1 + num2);
}

func(2, 3); //5
func(3); //3
func(); //0
