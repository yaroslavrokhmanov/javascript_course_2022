"use strict";

// Замыкания в JavaScript

// Счетчик на замыканиях
// ========================================
// №1
function test(){
    let num = 1;
    return function(){
      console.log(num);
      num++;
      
    }
  }
  let result = test();
  
  result(); //1
  result(); //2
  result(); //3 
  result(); //4

// ========================================
// №2
// Пусть функция в замыкании хранит число 10. Сделайте так, чтобы каждый вызов функции уменьшал это число на 1 и выводил в консоль уменьшенное число.
function test(){
    let num = 10;
    return function(){
      num--;
         console.log(num);
    }
  }
  let result = test();
  
  result(); //9
  result(); //8
  result(); //7
  result(); //6
  result(); //5
  result(); //4

// ========================================
// №3
function test(){
    let num = 10;
    
    return function(){
      while (num >= 0) {
        num--;
        console.log(num);
        
        if(num <= 0){
          num++;
        console.log('отсчет окончен');
       
        }  
        break;
    }
    }
  }
  let result = test();
  
  
  result(); //9
  result(); //8
  result(); //7
  result(); //6
  result(); //5
  result(); //4
  result(); //3
  result(); //2
  result(); //1
  result(); //0
  result(); //"отсчет окончен"
  result(); //"отсчет окончен"
  result(); //"отсчет окончен"

  
// ========================================
// №4
// Определите, не запуская код, что выведется в консоль:

function func() {
	let num = 0;
	
	return function() {
		console.log(num);
		num++;
	};
}

func()(); // 0
func()(); // 0
func()(); // 0

// ========================================
// №5
// Определите, не запуская код, что выведется в консоль:

function func() {
	let num = 0;
	
	return function() {
		console.log(num);
		num++;
	};
}

let test = func;

test()(); //0
test()(); //0
test()(); //0

// ========================================
// №6
// Определите, не запуская код, что выведется в консоль:

let counter = 0;
		
function test() {
	return function() {
		console.log(counter);
		counter++;
	};
}

let func = test;

let func1 = func();
let func2 = func();

func1(); //0
func2(); //1
func1(); //2
func2(); //3

// ========================================
// №7
// Определите, не запуская код, что выведется в консоль:

function test() {
	let counter = 0;
	
	return function() {
		return function() {
			console.log(counter);
			counter++;
		};
	};
}

let func = test()();

let func1 = func;
let func2 = func;

func1(); // 0
func2(); // 1
func1(); // 2
func2(); // 3

// ========================================
// №8
// Определите, не запуская код, что выведется в консоль:

function test() {
	let counter = 0;
	
	return function() {
		return function() {
			console.log(counter);
			counter++;
		};
	};
}

let func = test();

let func1 = func();
let func2 = func();
func1(); // 0
func2(); // 1
func1(); // 2
func2(); // 3