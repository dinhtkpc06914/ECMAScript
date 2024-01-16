const  convertTemperature = (temperature, unit) =>{
if (unit ==='C'){
    return (temperature * 9/5)+32;
}
else if (unit==='F'){
    return (temperature - 32) * 5/9;
} else {
    return 'Nhiệt độ không hợp lệ';
}
}


const celsiusTemperature = 25;
const fahrenheitTemperature = 77;

console.log(convertTemperature(celsiusTemperature, 'C')); 
console.log(convertTemperature(fahrenheitTemperature, 'F'));