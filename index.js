'use strict'
function solveEquation(a, b, c){
    const arr = [];
    const d = b ** 2 - 4 * a * c;

    if ( d == 0) {
        let answer = -b / (2 * a);
        arr.push(answer);
    }
    if (d > 0){
        let answer = (-b + Math.sqrt(d) )/(2*a)
        arr.push(answer);
        answer = (-b - Math.sqrt(d) )/(2*a)
        arr.push(answer);
    }
    return arr;
}

console.log(solveEquation(10,6,1));