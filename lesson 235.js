"use strict";

// Получение моментов времени в JavaScript
// ====================================================
// №1 
// Определите, какой день недели будет 31 декабря текущего года.
// Вариант 1
let now  = new Date(); 
let date = new Date(now.getFullYear(), 11, 31); 
alert(date);
alert(date.getDay()); // 6 день недели

// Вариант 2
let now = new Date();
let date = new Date(now.getFullYear(), 11, 31);
function func(date){
  let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
   return days[date.getDay()];
}
alert(date);
console.log(func(date)); // "сб"

// ====================================================
// №2
// Определите, какой день недели будет 1 числа текущего месяца.

let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), 1);
function func(date){
  let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
   return days[date.getDay()];
}S
alert(date);
console.log(func(date)); // 'чт'

// ====================================================
// 3
// Определите, какой день недели будет 31 декабря следующего года.
let now = new Date();
let date = new Date(2023, 11, 31);
function func(date){
  let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
   return days[date.getDay()];
}
alert(date);
console.log(func(date)); // "вс"

// ====================================================
// №4 
// Определите, какой день недели будет через год в такую же дату, как сегодня.
let now = new Date();
let date = new Date(now.getFullYear()+1, now.getMonth(), now.getDate());
function func(date){
  let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
   return days[date.getDay()];
}
alert(date);
console.log(func(date)); // "ср"

// ====================================================
// №5 
// Определите, какой день недели был год назад в такую же дату, как сегодня.
let now = new Date();
let date = new Date(now.getFullYear()-1, now.getMonth(), now.getDate());
function func(date){
  let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
   return days[date.getDay()];
}
alert(date);
console.log(func(date)); // "пн"
// ====================================================
// №6 
// Вопрос: не будет ли проблемы, если текущий месяц январь? Ведь он имеет номер 0, и при вычитании из него единицы мы получим минус первый месяц.

Если от Января отнимим еденицу то получим декабрь(предыдущий месяц).

// ====================================================
// №7 
// Определите, какой день недели был месяц назад в такой же день месяца, как сегодня.
let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth()-1, now.getDate());
function func(date){
  let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
   return days[date.getDay()];
}
alert(date);
console.log(func(date)); // "вс"

// ====================================================
// №8 
// Определите, сколько дней между 1 января и 10 сентября текущего года.
let now = new Date();
let date1 = new Date(now.getFullYear(), 0, 1);
let date2 = new Date(now.getFullYear(), 8, 10);
date = (date2 - date1);

console.log(Math.ceil(date / (1000 * 60 * 60 * 24))); // 252 дней

// ====================================================
// №9 
// Определите, сколько дней между 20 числом текущего месяца и 10 числом следующего.
let now = new Date();
let date1 = new Date(now.getFullYear(), now.getMonth(), 20);
let date2 = new Date(now.getFullYear(), now.getMonth()+1, 10);
date = (date2 - date1);

console.log(Math.ceil(date / (1000 * 60 * 60 * 24))); // 21 день

// ====================================================
// №10 
// Определите, сколько часов прошло между вчерашним полднем и текущим моментом времени.
let now  = new Date();
let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate()-1, 12, 0);
let date2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes());
date = (date2 - date1);
alert(date1);
alert(date2);
console.log(Math.ceil(date / (1000 * 60 * 60))); // 32 часа

// ====================================================
// №11 
// Определите, сколько часов прошло между началом дня и текущим моментом времени.
let now  = new Date();
let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
let date2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds() );
date = (date2 - date1);

alert(date1);
alert(date2);
console.log(Math.ceil(date / (1000 * 60 * 60 ))); // 22 часа

// ====================================================
// №12 
// Определите, сколько часов осталось до конца дня.
let now  = new Date();
let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours());
let date2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24);
date = (date2 - date1);

alert(date1);
alert(date2);
console.log(Math.ceil(date / (1000 * 60 * 60 ))); // 3 часа


