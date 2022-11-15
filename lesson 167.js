"use strict";

// Lesson 167

// №1
// Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами.

function func(arr){
    for(let elem of arr){
      if(elem % 2!== 0){
        return false;
      }
    }
   return true;
  }
  console.log(func([2, 4, 6, 8, 10])); //true
  console.log(func([1, 2, 4, 6, 8, 10])); //false

 // №2
//  Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными.

function func(arr){
    for(let elem of arr){
      if(elem % 2 == 0){
        return false;
      }
    }
   return true;
  }
  console.log(func([2, 4, 6, 8, 10])); //false
  console.log(func([1, 3, 5, 9, 11])); //true

  // №3
//   Сделайте функцию, которая параметром будет принимать массив и проверять, есть ли в этом массиве два одинаковых элемента подряд.

function func(arr){
    for(let i = 0; i < arr.length; i++){
      if(arr[i-1] === arr[i]){
        return true;
      }
    }
   return false;
  }
  console.log(func([2, 4, 4])); //true
  console.log(func([1, 3, 5])); //false
  