let name = "Trần Khải Đình";
const birthday = 2003;
const newyear = 2024;
// arrow funcion
let sayHello = () => {
console.log(`Toi la sv ${name}, ${birthday}`);

}
let sayHelo2 = () =>{
    console.log(`toi la  ${name}, tuoi ${newyear-birthday}`);
}
sayHelo2();
// sayHello();
// lab 1.3
fetch ("https://www.boredapi.com/api/activity")
.then(function(response){
response.json().then(function(data){
    let app = document.getElementById('pc123456');
    let html = `<ul>
    <li>${data.accessibility}</li>
    <li>${data.activity}</li>
    <li>${data.key}</li>
    <li>${data.link}</li>
    <li>${data.participants}</li>
    <li>${data.price}</li>
    <li>${data.type}</li>
    </ul>`;
    app.innerHTML = html;
    console.log(data);
})
}
)
.catch(function(error){

})

