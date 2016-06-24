'use strict';

let i = 1;

function lychrel (num) {
    let iterations = 0;
    const origin = num;

    while (num != getPalindrome(num)) {
        num = num + getPalindrome(num);

        iterations++;

        if (iterations == Math.pow(10, 6)) {
            console.log(origin + ' is infinite lychrel');
        }
    }

    return num;
}

function getPalindrome (i) {
    return +((i + '').split('').reverse().join(''))
}


while (i < Number.MAX_SAFE_INTEGER) {
    lychrel(i);
    i++;
}

