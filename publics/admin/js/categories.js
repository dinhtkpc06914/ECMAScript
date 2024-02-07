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
                            <a class="btn-sm app-btn-secondary bg-success text-white" href="#" onclick="showEditCategoryModal(${element.id}, '${element.name}')">edit</a>
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





function showEditCategoryModal(categoryId, categoryName) {
    document.getElementById('editCategoryModal').style.display = 'block';
    document.getElementById('editCategoryName').value = categoryName;

    // Lưu thông tin danh mục cần sửa vào biến toàn cục để sử dụng trong hàm saveEditedCategory
    window.editingCategoryId = categoryId;
}

// Hàm để đóng form sửa danh mục
function closeEditCategoryModal() {
    document.getElementById('editCategoryModal').style.display = 'none';
    // Xóa thông tin danh mục đã lưu khi đóng form
    window.editingCategoryId = null;
}

// Hàm để lưu danh mục đã sửa
function saveEditedCategory() {
    const editedCategoryName = document.getElementById('editCategoryName').value.trim();

    if (!editedCategoryName) {
        console.error('Tên danh mục rỗng');
        return;
    }

    // Gọi API để cập nhật danh mục bằng phương thức PATCH
    fetch(API_URL + 'categories/' + window.editingCategoryId, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: editedCategoryName }),
    })
    .then(response => {
        if (response.ok) {
            console.log('Danh mục đã được sửa thành công!');
            // Đóng form sửa danh mục sau khi lưu thành công
            closeEditCategoryModal();
            // Hiển thị lại danh sách danh mục
            showCategories();
        } else {
            console.error('Lỗi khi sửa danh mục');
        }
    })
    .catch(error => {
        console.error('Lỗi trong quá trình sửa danh mục:', error);
    });
}
// hàm hủy 
function exitEditedCategory() {
    closeEditCategoryModal();
}
// Gọi hàm để hiển thị danh sách danh mục ban đầu
showCategories();
