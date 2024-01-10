let API_URL = "https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/";

function generaTableHeader(headrtTitles){
    let html = ``;
   
    headrtTitles.forEach(element => {
        html += `<th>${element}</th>`
    });
    return `<thead><tr>${html}</tr></thead>`;
}

function generateteTable (header, data){
    let html = ``;

    let headerRow =  generaTableHeader(header);

    data.forEach(element => {
        html += generaTableRowSvpoly(element);
    });

    return `<table>${headerRow} <tbody>${html}</tbody></table>`;
}
fetch(API_URL+'students')
.then(function(reponse){
console.log(reponse);
reponse.json().then(function(data){
    let dataFake = [
{
    id: 1,
    name: "Kiệt Lỵ",
    avata:"https://static-images.vnncdn.net/files/publish/2023/3/18/2-bat-cuop-1210.jpg",
    createAt: 'Thứ sáu, Ngày 13, Năm 2023, 08:16:14',
}
    ]
   let header = [
    "id",
    "ảnh đại diện",
    "tên",
    "ngày tạo"
   ];
   let app = document.getElementById('hien');
app.innerHTML = generateteTable(header, dataFake);
})

})
.catch(function(reponse){
    console.log("Error: \n" + reponse);
})

function generaTableRowSvpoly(data){
return `<tr>
<td>${data.id}</td>
<td><img width="150px" src="${data.avata}"/></td>
<td>${data.name}</td>
<td>${data.createAt}</td>
</tr>`
}
let object = {
    id: 1,
    name: "Kiệt Lỵ",
    avata:"https://static-images.vnncdn.net/files/publish/2023/3/18/2-bat-cuop-1210.jpg",
    createAt: 'Thứ sáu, Ngày 13, Năm 2023, 08:16:14',
}
console.log(document.write(generaTableRowSvpoly(object)));


// fetch(API_URL+'students')
// .then(function(reponse){
// console.log(reponse);
// reponse.json().then(function(data){
//     console.log(data);
// })
// })
// .catch(function(reponse){
//     console.log("Error: \n" + reponse);
// })
