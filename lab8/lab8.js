let API_URL = "https://ecmascript-41ae3-default-rtdb.asia-southeast1.firebasedatabase.app/";
let getUsers = async () => {
    const response = await fetch(API_URL + 'products.json');
    let data = await response.json();
    return data;
}
console.log(getUsers());
getUsers().then((data) => {
    let html = `
    <table class="table table-hover">
        <thead>
            <tr>
                <th>STT</th>
                <th>Tên</th>
                <th>Giá</th>
                <th></th>
                <td></td>
            </tr>
        </thead>
        <tbody>
    `;
    Object.entries(data).forEach(([id, value], index) => {
        console.log(value);
        if (value) {
            html += `
            <tr>
                <td>${index + 1}</td>
                <td>${value.name}</td>
                <td>${value.price} VNĐ</td>
                <td><button class="btn btn-success" onclick="suaSp('${id}')">Sửa</button></td>
                <td><button class="btn btn-danger" onclick="xoaSp('${id}')">xóa</button></td>
            </tr>
        `;
        } else {
            console.log("");
        }
    });
    html += `
        </tbody>
        </table>
    `;
    document.getElementById('hienThi').innerHTML = html;
}).catch((error) => {
    console.log(error);
})

// thêm sản phẩm
let themSp = (data1) => {
    event.preventDefault();
    let data = new FormData(data1);
    console.log(data.get('name'));
    axios({
        method: "post",
        url: API_URL + 'products.json',
        data: {
            name: data.get('name'), 
            price: data.get('price'),
        },
    }).then(function (response) { 
        console.log(response); 
        window.location.reload();
    });
}

document.getElementById('form').addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(this);
})
// xóa sản phẩm
let xoaSp = (cate_id) => {
    fetch(API_URL + 'products/' + cate_id + ".json", {
        method: 'delete',
    }).then(response => {
        if (response.ok) {
            
            alert("Đã xóa sản phẩm thành công");
            window.location.reload()
        } else {         
            console.error("Lỗi khi xóa sản phẩm");
        }
    })
        .catch(error => {
            console.error('error:', error);
        });
};
let layIdSp = async (cate_id) => {
    const response = await fetch(API_URL + 'products/' + cate_id + '.json');
    let data = await response.json();
    return data;
}
// sửa sản phẩm
let suaSp = (cate_id) => {
    let user = layIdSp(cate_id);
    let form = document.getElementById("form");
    user.then((data) => {
        form.querySelector('input[name="name"]').value = data.name;
        form.querySelector('input[name="price"]').value = data.price;
    })
    let edit = document.getElementById("edit");
    edit.addEventListener('click', async () => {
        event.preventDefault();

        axios(API_URL + 'products/' + cate_id + '.json', {
            method: 'put',
            data: {
                name: form.querySelector('input[name="name"]').value,
                price: form.querySelector('input[name="price"]').value
            }
        }).then(function (response) {
            console.log(response);
            window.location.reload()
        });
    });
}


