'use strict';

function calcX(a, b){
	if(a > b){
		return a + b / 2 * 4;
	} else if (a < b){
		return a - b + 2 / b * 4;
	} else {
		return 400;
	}
}

let x = calcX(10, 15);
