const API_URL = 'http://localhost:3000/';
let showCategories = () => {
    let html = "";
    let index = 1;
    fetch(API_URL + 'categories')
        .then(response => response.json())
        .then(data => {
            const shows = document.getElementById('showCategories');
            data.forEach(element => {
                html += `
                    <tr>
                        <td class="cell">${index++}</td>
                        <td class="cell"><span class="truncate">${element.name}</span></td>
                        <td class="cell">
                            <a class="btn-sm app-btn-secondary bg-success text-white" href="#">fix</a>
                            <a class="btn-sm app-btn-secondary bg-danger text-white" href="#" onclick="confirmXoaDanhMuc(${element.id})">del</a>
                        </td>
                    </tr>`;
            });
            shows.innerHTML = html;
        })
        .catch(error => {
            // Xử lý lỗi
        });
}

function confirmXoaDanhMuc(idDanhMuc) {
    const confirmed = confirm('Bạn có chắc chắn muốn xóa danh mục này không?');
    if (confirmed) {
        xoaDanhMuc(idDanhMuc);
    }
}

// Hàm xóa danh mục
function xoaDanhMuc(idDanhMuc) {
    fetch(API_URL + 'categories/' + idDanhMuc, {
        method: 'DELETE',
    })
    .then(response => {
        if (response.ok) {
            // Nếu xóa thành công, loại bỏ dòng tương ứng từ bảng HTML
            showCategories();
        } else {
            console.error('Xóa danh mục thất bại');
        }
    })
    .catch(error => {
        // Xử lý lỗi
        console.error('Lỗi trong quá trình xóa:', error);
    });
}



// Trong phần script.js hoặc nơi khác
function showAddCategoryForm() {
    document.getElementById('addCategoryForm').style.display = 'block';
}

function hideAddCategoryForm() {
    document.getElementById('addCategoryForm').style.display = 'none';
}

const API_CATEGORY = "http://localhost:3000/categories";
let addCategory = () => {
    const categoryName = document.getElementById('categoryName').value;
    if (!categoryName.trim()) {
        console.error('Category name rỗng');
        return;
    }
    fetch(API_CATEGORY, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: categoryName }),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Category added:', data);
            // Sau khi thêm mới danh mục, cập nhật lại bảng danh mục
            showCategories();
            hideAddCategoryForm();
           
        })
        .catch(error => console.error('Error adding category:', error));
}
// Gọi hàm ban đầu để điền bảng với danh mục
showCategories();
