'use strict';
function multiply (num1, num2){
    return num1 * num2;
} 

const multiply = (num1, num2) => num1 * num2;


function toCelsius(fahrenheit){
    return (5 / 9) * (fahrenheit - 32);
}

const toCelsius = fahrenheit =>(5/9) * (fahrenheit - 32);

function padZeros (num, totalLen){
    var numStr = num.toString();
    var numZeros = totalLen - numStr.length;
    for (var i = 1; i< numZeros; i++){
        numStr = "0"+ numStr;
    }
    return numStr;
}

const padZeros = (num, totalLen) => {
    var numStr = num.toString();
    var numZeros = totalLen - numStr.length;
    for (var i = 1; i< numZeros; i++){
        numStr = "0"+ numStr;
    }
    return numStr;
}  

function power (base, exponent){
    var result = 1;
    for (var i = 0; i< exponent; i++){
        result *=base;
    }
    return result;
}

const power = (base, exponent) => {
    var result = 1;
    for (var i = 0; i< exponent; i++){
        result *=base;
    }
    return result;
};

function greet(who){
    console.log("Hello" + who);
}

const greet = (who) =>{
    console.log("Hello" + who);
}