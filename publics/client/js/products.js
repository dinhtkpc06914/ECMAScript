const API_URL = 'http://localhost:3000/';
let currentPage = 1;
const itemsPerPage = 6; // sl sản phẩm hiện trên mỗi trang

let showProducts = () => {
    let html = "";
    let start = (currentPage - 1) * itemsPerPage;// vị trí bắt đầu của phần cần hiển thị trên trang hiện tại
    let end = start + itemsPerPage;// tính vị trí kết thúc của phần cần hiển thị trên trang hiện tại
    fetch(API_URL + 'products')
        .then(response => response.json())
        .then(data => {
            const shows = document.getElementById('showProducts');
            const paginatedData = data.slice(start, end); // slice tạo ra một bản sao
            paginatedData.forEach(element => {
                html += `
                    <div id="${element.id}" class="item new col-md-4">
                        <a href="#" onclick="showProductDetails(${element.id})">
                            <div class="featured-item">
                                <img src="${element.image}" alt="Image" class="img-fluid" width="200px" height="50px">
                                <h4>${element.name}</h4>
                                <h6>${element.price}$</h6>
                                <p class="desc mb-4">${element.detail}</p>
                            </div>
                        </a>
                    </div>           
                `;
            });
            shows.innerHTML = html;
            renderPaginationButtons(data.length); // xác định số sản phẩm có sẳn
        })
        .catch(error => {         
            console.error('Error fetching data:', error);
        });
}
let showProductDetails = (productId) => {
    window.location.href = `single-product.html?id=${productId}`;
}
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


