const API_URL = "https://ecmascript-41ae3-default-rtdb.asia-southeast1.firebasedatabase.app/";

let getUser = async () => {
    const response = await fetch(API_URL+'products.json');
    let data = await response.json();
    return data;
}
console.log(getUser());

getUser().then((data)=>{
    let index = 1;
    let html = `<tr>
    <th>STT</th>
    <th>Tên sản phẩm</th>
    <th>Đơn giá</th>
    <th>Hình ảnh</th>
    <th>Mô tả</th>
    <th></th>
    <th></th>
</tr>
</thead>
<tbody>`

data.forEach(item => {
    html += ` <tr>
    <td>${index++}</td>
    <td>${item.name}</td>
    <td>${item.price}</td>
    <td><img width="50px" src="${item.image}" alt=""></td>
    <td>${item.detail}</td>
    <td><button class="btn btn-primary">cứu</button></td>
    <td><button class="btn btn-danger">hết cứu</button></td>
</tr>`
html += `</tbody>
</table>`;
document.getElementById('content').innerHTML=html;
});

    console.log(data);
}).catch((error)=>{
    console.log(error);
})
 

let createUser = (data1) => {
    event.preventDefault(); 
  
    let data = new FormData(data1)
    console.log(data.get('name'));
  
    axios({
      method: "post",
      url:  API_URL + 'products.json',
      data: {
        name: data.get('name'),
        price: data.get('price'),
      },
    }).then(function (response) {
      console.log(response);
    });
}