const API_URL = 'http://localhost:3000/';
let currentPage = 1;
const itemsPerPage = 5; // sl sản phẩm hiện trên mỗi trang

let showProducts = () => {
    let html = "";
    let index = 1;
    let start = (currentPage - 1) * itemsPerPage;// vị trí bắt đầu của phần cần hiển thị trên trang hiện tại
    let end = start + itemsPerPage;// tính vị trí kết thúc của phần cần hiển thị trên trang hiện tại

    fetch(API_URL + 'products')
        .then(response => response.json())
        .then(data => {
            const shows = document.getElementById('showProducts');
            const paginatedData = data.slice(start, end); // slice tạo ra một bản sao

            paginatedData.forEach(element => {
                html += `
                <tr>
                    <td class="cell">${index++}</td>
                    <td class="cell"><span class="truncate">${element.name}</span></td>
                    <td class="cell"> <img src="${element.image}" alt="Image" class="img-fluid" width="70px" height="30px"></td>
                    <td class="cell text-danger">${element.price}</td>   
                    <td class="cell text-primary">${element.detail}</td>            
                    <td class="cell">
                        <a class="btn-sm app-btn-secondary bg-success text-white" href="#">edit</a>
                        <a class="btn-sm app-btn-secondary bg-danger text-white" href="#">del</a>
                    </td>
                </tr>
                `;
            });
            shows.innerHTML = html;
            renderPaginationButtons(data.length); // xác định số sản phẩm có sẳn
        })
        .catch(error => {
        
        });
}

// Hàm để chuyển đến trang khác
const changePage = (newPage) => {
    currentPage = newPage;
    showProducts();
}

showProducts();
const renderPaginationButtons = (totalItems) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage); // tính số trang cần thiết để hiển thị tất cả sp
    const paginationContainer = document.getElementById('paginationContainer');
    paginationContainer.innerHTML = ""; // Xóa nút phân trang cũ

    const soTrangHienThiToiDa = 3; // Số trang tối đa hiển thị trước khi sử dụng dấu "..."
    const nuaSoTrangHienThiToiDa = Math.floor(soTrangHienThiToiDa / 2);

    const previousButton = document.createElement('button');
    previousButton.textContent = 'Previous';
    previousButton.addEventListener('click', () => changePage(currentPage - 1));
    previousButton.disabled = currentPage === 1; // tắt nút previous khi ở trang đầu tiên
    paginationContainer.appendChild(previousButton);

    // Tính toán các trang cần hiển thị
    let startPage = Math.max(1, currentPage - nuaSoTrangHienThiToiDa);
    let endPage = Math.min(totalPages, startPage + soTrangHienThiToiDa - 1);

    for (let i = startPage; i <= endPage; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.addEventListener('click', () => changePage(i));
        if (i === currentPage) {
            button.classList.add('current-page'); // Đánh dấu trang hiện tại
        }
        paginationContainer.appendChild(button);
    }

    // Thêm dấu "..." nếu có các trang không được hiển thị
    if (startPage > 1) {
        const ellipsis = document.createElement('span');
        ellipsis.textContent = '...';
        paginationContainer.insertBefore(ellipsis, paginationContainer.childNodes[2]); // Chèn sau nút "Previous"
    }

    if (endPage < totalPages) {
        const ellipsis = document.createElement('span');
        ellipsis.textContent = '...';
        paginationContainer.appendChild(ellipsis);
    }

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.addEventListener('click', () => changePage(currentPage + 1));
    nextButton.disabled = currentPage === totalPages; // tắt nút next khi ở trang cuối cùng
    paginationContainer.appendChild(nextButton);
}