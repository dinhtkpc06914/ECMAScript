const API_URL = 'http://localhost:3000/products';

// Lắng nghe sự kiện nhấn phím trên ô tìm kiếm
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchProducts(this.value.trim()); // Gọi hàm tìm kiếm với từ khóa được nhập
    }
});

// Hàm tìm kiếm sản phẩm theo tên
function searchProducts(keyword) {
    keyword = keyword.toLowerCase(); // Chuyển đổi từ khóa tìm kiếm thành chữ thường để so sánh không phân biệt hoa thường
    let searchResults = [];
    
    // Gửi yêu cầu GET đến API để lấy danh sách sản phẩm
    fetch(API_URL)
        .then(response => response.json()) // Chuyển đổi phản hồi thành đối tượng JSON
        .then(products => {
            // Duyệt qua danh sách sản phẩm và tìm kiếm các sản phẩm có tên chứa từ khóa tìm kiếm
            products.forEach(function(product) {
                if (product.name.toLowerCase().includes(keyword)) {
                    searchResults.push(product); // Nếu tìm thấy sản phẩm phù hợp, thêm vào kết quả tìm kiếm
                }
            });
            // Hiển thị kết quả tìm kiếm trên trang web
            displaySearchResults(searchResults);
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
}

// Hàm hiển thị kết quả tìm kiếm
function displaySearchResults(results) {
    const shows = document.getElementById('showProducts');
    let html = "";
    results.forEach(function(product) {
        html += `
            <div class="item new col-md-4">
                <a href="single-product.html">
                    <div class="featured-item">
                        <a href="single-product.html"><img src="${product.image}" alt="Image" class="img-fluid" width="200px" height="50px">
                            <h4>${product.name}</h4>
                            <h6>${product.price}</h6>
                            <p class="desc mb-4">${product.detail}</p>
                        </div>
                    </a>
                </div>           
        `;
    });
    shows.innerHTML = html;
}
displaySearchResults();