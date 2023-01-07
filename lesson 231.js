"use strict";

// Автоматическая корректировка дат в JavaScript
// ====================================================
// №1 
// Определите, в какую дату JavaScript преобразует следующий момент времени:

let date = new Date(2018, 1, 35);
console.log(date); // какая дата будет? 2018/3/7
// ====================================================
// №2
// Определите, в какую дату JavaScript преобразует следующий момент времени:

let date = new Date(2018, 15, 1);
console.log(date); // какая дата будет? 2019/4/1 
// ====================================================
// №3
// Определите, в какую дату JavaScript преобразует следующий момент времени:

let date = new Date(2018, 3, 31);
console.log(date); // какая дата будет? 2018/5/1
// ====================================================
// №4
// Определите, в какую дату JavaScript преобразует следующий момент времени:

let date = new Date(2018, 1, 31);
console.log(date); // какая дата будет? 2018/3/3
// ====================================================
// №5
// Определите, в какую дату JavaScript преобразует следующий момент времени:

let date = new Date(2018, 12, 33);
console.log(date); // какая дата будет? 2019/2/2
// ====================================================
// №6 
// Определите, в какую дату JavaScript преобразует следующий момент времени:

let date = new Date(2018, 33, 33); 
console.log(date); // какая дата будет? 2020/11/2
// ====================================================
// №7 
// Определите, в какую дату JavaScript преобразует следующий момент времени:

let date = new Date(2018, 5, 0);
console.log(date); // какая дата будет? 2018/5/31
// ====================================================
// №8 
// Определите, в какую дату JavaScript преобразует следующий момент времени:

let date = new Date(2018, 0, 0);
console.log(date); // какая дата будет? 2017/12/31
// ====================================================
// №9 
// Определите, в какую дату JavaScript преобразует следующий момент времени:

let date = new Date(2018, -12, -33);
console.log(date); // какая дата будет? 2016/11/28
// ====================================================
// №10 
// Определите, в какую дату JavaScript преобразует следующий момент времени:

let date = new Date(2018, 0, 1, 23, 0, 60);
console.log(date); // какая дата будет? 2018/1/1/23/1/0
// ====================================================
// №11
// Определите, в какую дату JavaScript преобразует следующий момент времени:

let date = new Date(2018, 0, 1, 23, 60, 0);
console.log(date); // какая дата будет? 2018/1/2//0/0/0
// ====================================================
// №12
// Определите, в какую дату JavaScript преобразует следующий момент времени:

let date = new Date(2018, 0, 1, 100, 100, 100);
console.log(date); // какая дата будет? 2018/1/5/5/41/40