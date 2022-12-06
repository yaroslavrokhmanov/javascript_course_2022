"use strict";

// Объект с анонимными функциями в JavaScript

// №1
// Сделайте функцию test, параметрами принимающую 3 функции. Передайте в нее первым параметром функцию, возвращающую 1, вторым - функцию, возвращающую 2, третьим - функцию, возвращающую 3. Выведите в консоль сумму результатов функций.

test(
function() {return 1;}, 
function() {return 2;}, 
function() {return 3; }
);

function test(func1, func2, func3) {
console.log( func1() + func2() + func3()); // 6
}
// ========================================

// №2
// Сделайте функцию test, параметрами принимающую 3 функции и возвращающую сумму результатов переданных функций.

test(
    function() {return 1;}, 
    function() {return 2;}, 
    function() {return 3; }
    );
    
    function test(func1, func2, func3) {
    console.log( func1() + func2() + func3()); // 6
    }
    // =====================================
    // №3
    // Сделайте 3 функции, объявив их как Function Declaration и дав им имена func1, func2 и func3. Пусть первая функция возвращает 1, вторая - 2, а третья - 3. Передайте эти функции параметром в функцию test из предыдущей задачи.

    test(
        function func1() {return 1;},
        function func2() {return 2;},
        function func3() {return 3;}
      );
      function test(func1, func2, func3) {
          console.log( func1() + func2() + func3() ); // 6
      }
//   ===================================
// №4
// Модифицируйте предыдущую задачу так, чтобы функции были объявлены как Function Expression с теми же именами.

let func1 = function() {return 1;} 
let func2 = function() {return 2;}
let func3 = function() {return 3;}

    test(func1, func2, func3);

        function test(func1, func2, func3) {

    console.log(func1() + func2()  + func3()); // 6
    }  
// ======================================
// №5
// Скопируйте код моей функции test. Вызовите эту функцию, передав ей параметром анонимную функцию, которая параметром будет принимать число и возвращать его куб.

test(function(num) {
	return num * num * num;
});

function test(func) {
	console.log(func(3)); // 27 (куб числа 3 = 27)
}
// ======================================
// №6
// Переделайте ваш код так, чтобы передаваемая функция была не анонимной, а была определена как Function Declaration с именем func.

function func() {
    return 3;
  }
  
  test(func);
  
  function test(func) {
      console.log(func() * func() * func()); // 27
  }

  // №7
//   Переделайте передаваемую функцию на Function Expression с тем же именем func.

let func = function() {
    return 3;
  }
  
  test(func);
  
  function test(func) {
      console.log(func() * func() * func()); // 27
  }
// ======================================
// №8
//   Пусть передаваемая функция теперь принимает два параметра и возвращает их сумму. При вызове передаваемой функции внутри test передайте в передаваемую функцию число 2 и число 3. Выведите алертом результат.

test(function(num1, num2) {
	return num1 + num2;
 });

 function test(func) {
	alert(func(2, 3)); //5
 }
// ======================================
 // №9
//  Пусть функция test первым параметром принимает число, а вторым и третьим параметрами - функции, также параметром принимающие числа.

//  Пусть функция test возвращает сумму результатов переданных функций:
 
//  function test(num, func1, func2) {
//      return func1(num) + func2(num);
//  }
//  Вызовите функцию test, первым параметром передав число 3, вторым параметром функцию, возводящую число в квадрат, а третьим - функцию, возводящую число в куб. Выведите результат работы в консоль.

 function test(num, func) {
	console.log(func(num));
   
}

test(3, function(num){
  return num * num; // 9
} );

test(3, function(num){
  return num * num * num; // 27
} );
// ======================================
 // №10
//  Не подсматривая в мой код реализуйте такую же функцию test самостоятельно.
function test(arr, func) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] = func(arr[i]);
	}
	
	return arr; 
  
}

let result = test([1, 2, 3], function(num){
  return num * num
});

console.log(result); //[1, 4, 9]

// ======================================
 // №11
// Вызовите созданную вами функцию test, передав ей параметром массив с числами. Сделайте так, чтобы функция вернула массив с кубами этих чисел.

function test(arr, func) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] = func(arr[i]);
	}
	
	return arr; 
  
}

let result = test([1, 2, 3, 4, 5], function(num){
  return num * num * num;
});

console.log(result); // [1, 8, 27, 64, 125]
