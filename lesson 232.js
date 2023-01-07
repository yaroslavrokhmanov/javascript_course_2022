"use strict";

// Нахождение последнего дня месяца в JavaScript
// ====================================================
// №1 
// Оформите этот способ решения проблемы в виде функции, которая параметрами будет принимать месяц и год и возвращать номер последнего дня этого месяца.

function func(year, month){
    let res = new Date(year, month + 1,  0);
    return res.getDate();
  }
  console.log(func(2020, 3, 0));

// ====================================================
// №2
// Определите, какой день недели будет в последнем дне пятого месяца 2025 года.

let date = new Date(2025, 5, 0);
function func(date) {
let dayArr = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  return dayArr[date.getDay()]
}

alert(func(date)); // 'СБ'