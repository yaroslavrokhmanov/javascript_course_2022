"use strict";

// Практика на получение моментов времени в JavaScript

// ====================================================
// №1 
// Определите, сколько секунд прошло с начала дня до настоящего момента времени.
let now  = new Date();
let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate()-1, 0, 0);
let date2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes());
date = (date2 - date1)
alert(date1);
alert(date2);
console.log(Math.ceil(date / (1000 ))); // 166260 секунды

// ====================================================
// №2
// Определите, сколько секунд осталось до конца дня.
let now  = new Date();
let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());
let date2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24, 0, 0 );
date = (date2 - date1);

alert(date1);
alert(date2);
console.log(date / 1000 ); // 20021 sec

// ====================================================
// №3
// Определите, сколько дней осталось до нового года.
let now  = new Date();
let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());
let date2 = new Date(now.getFullYear(), now.getMonth(), 31 );
date = (date2 - date1);

alert(date1);
alert(date2);
console.log((date / (1000  * 60 * 60 *24 )).toFixed()); // 1 день

// ====================================================
// №4
// Определите, сколько пятниц 13-е в текущем году.
function func(year) {
    let result = [];
      
    for (let month = 0; month < 12; month++) {
        let day = new Date(year, month, 13);
        if(day.getDay() === 5){
          result.push(day);
     
       }
    }
    return result;                            
}
 
alert(func(2023)); // 13 января; 13 октября

// ====================================================
// №5
// Определите, какой год был 3 месяца назад.
let now  = new Date();
let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
let date2 = new Date(now.getFullYear(), now.getMonth()-3, now.getDate());
date = (date1 - date2);

alert(date1);
alert(date2);
console.log(date2.getFullYear()); // 2022
// ====================================================
// №6
// Определите, какой день недели будет в последнем дне текущего месяца.
let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), 0);
let day  = date.getDay();
let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

console.log(days[day]); // "Суббота"

// ====================================================
// №7
// Напишите код, который будет определять, високосный ли текущий год.
let month  = 1;
let year = 2023;
let date = new Date(year, 2, 0);
if(date.getDate() == 29){
  console.log('высокостный')
}else{
  console.log('не высокостный');
}

alert(date);
console.log(date.getDate()); // "не высокостный" , 28

// ====================================================
// №8
// Напишите код, который будет находить предыдущий високосный год.
let month  = 1;
let year = 2023;
let date = new Date(year-1, 2, 0);
if(date.getDate() == 29){
  console.log('высокостный')
}else{
  console.log('не высокостный');
}

alert(date);
console.log(date.getDate()); // "не высокостный" , 28

// ====================================================
// №9
// Напишите код, который будет находить следующий високосный год.

let month  = 1;
let year = 2023;
let date = new Date(year + 1, 2, 0);
if(date.getDate() == 29){
  console.log('высокостный')
}else{
  console.log('не высокостный');
}

alert(date);
console.log(date.getDate()); // "высокостный" , 29