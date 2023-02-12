'use strict';

let i = 0;

const lychrel = (num) => {
    let iterations = 0;
    const origin = num;

    while (num !== getPalindrome(num)) {
        num = num + getPalindrome(num);

        iterations++;

        if (iterations === Math.pow(10, 5)) {
            console.log(origin + ' is infinite lychrel');
            break;
        }
    }

    return num;
}

const getPalindrome = (i) => {
    return +((i + '').split('').reverse().join(''))
}

while (i < Number.MAX_SAFE_INTEGER) {
    lychrel(i);
    i++;
}

