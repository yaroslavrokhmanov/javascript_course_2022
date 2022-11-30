"use strict";

// Нюансы функциональных выражений в JavaScript

// №1
// Определите, является ли представленная функция Function Declaration или Function Expression:

function func() {
	console.log('!'); //Function Declaration
}
// ==========================================
// №2
// Определите, является ли представленная функция Function Declaration или Function Expression:

let func = function() {
	console.log('!'); //Function Expression
};

// ==========================================
// №3
// Определите, является ли представленная функция Function Declaration или Function Expression:

+function() {
	console.log('!'); // Function Expression
}

// ==========================================
// №4
// Определите, является ли представленная функция Function Declaration или Function Expression:

!function func() {
	console.log('!'); // Function Expression
}
// ==========================================

// №5
// Определите, является ли представленная функция Function Declaration или Function Expression:

-function func() {
	console.log('!'); // Function Expression
}
// ==========================================

// №6
// Определите, является ли представленная функция Function Declaration или Function Expression:

1 + function func() {
	console.log('!'); // Function Expression
}
// ==========================================

// №7
// Определите, является ли представленная функция Function Declaration или Function Expression:

(function func() {
	console.log('!');// Function Expression
})
// ==========================================

// №8
console.log(
	function() {
		console.log('!'); //Function Expression
	}
);
// ==========================================

// Функция с именем, но Function Expression


// №9
// ==========================================
// Определите, является ли представленная функция Function Declaration или Function Expression:

let test = function func() {
	console.log('!'); // Function Expression
}

// ==========================================
// №10
// Определите, является ли представленная функция Function Declaration или Function Expression:

console.log(
	function func() {
		console.log('!'); //Function Expression
	}
);

// ==========================================
// №11
// Определите, является ли представленная функция Function Declaration или Function Expression:

+function func() {
	console.log('!'); // Function Expression
}
// ==========================================

// №12
// Определите, является ли представленная функция Function Declaration или Function Expression:

function func() {
	console.log('!'); // Function Declaration
}
// ==========================================

// №13
// Определите, является ли представленная функция Function Declaration или Function Expression:

-
function func() {
	console.log('!'); // Function Expression
}
// ==========================================

// №14
// Определите, является ли представленная функция Function Declaration или Function Expression:

-1;
function func() {
	console.log('!'); // Function Declaration
}
// ==========================================

// №15
// Определите, является ли представленная функция Function Declaration или Function Expression:

-1
function func() {
	console.log('!'); // Function Declaration
}
// ==========================================

// №16
// Определите, является ли представленная функция Function Declaration или Function Expression:

1
function func() {
	console.log('!'); // Function Declaration
}
// ==========================================

// №17
// Определите, является ли представленная функция Function Declaration или Function Expression:

-1-
function func() {
	console.log('!'); // Function Expression
}
// ==========================================

// №18
// Определите, является ли представленная функция Function Declaration или Function Expression:

function func() {
	console.log('!'); // Function Declaration
}
+1;
// ==========================================

// №19
// Определите, является ли представленная функция Function Declaration или Function Expression:

function func() {
	console.log('!'); // Function Declaration
} + 1;
// ==========================================

// №20
// Определите, является ли представленная функция Function Declaration или Function Expression:

+function func() {    //Function Expression
	console.log('!');
} + 1;
// ==========================================

// №21 
// Определите, является ли представленная функция Function Declaration или Function Expression:

+
function func() {       //Function Expression
	console.log('!');
} + 1;
// ==========================================

// №22
// Определите, является ли представленная функция Function Declaration или Function Expression:

+ 1
function func() {      // Function Declaration
	console.log('!');
} + 1;
// ==========================================

// №23
// Определите, является ли представленная функция Function Declaration или Function Expression:

function func() {      // Function Declaration
	console.log('!');
} + console.log('!');




