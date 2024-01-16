'use strict';

var arr =[1,2,3,4,5,6,7];

const sum = arr.reduce((i, value) => i + value, 0);
console.log(`Kết quả là ${sum}`);