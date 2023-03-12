'use strict'
//Task1

// Boolean(Number(’10’)) + 1;       //2
// ‘sub ’ + Number(false);          //sub0
// 16  *  ‘      91    ‘            //1456
// true-70                          //-69
// Number(1 + String(1)) + 1        //12

//Task# 2
function secondInHour(hour) {
    const second = hour * 3600;
    return second;
}
const hour = +prompt('Enter the number of hours to count:')
const result = secondInHour(hour);
alert(`${hour} hours contains  ${result} seconds.`)











