const API_URL = 'http://localhost:3000/';

let showProducts = () => {
    let html = "";
    fetch(API_URL + 'products')
        .then(response => response.json())
        .then(data => {
            const shows = document.getElementById('showProducts');
            data.forEach(element => {
                html += `
                    <div id="${element.id}" class="item new col-md-4">
                        <a href="#" onclick="showProductDetails(${element.id})">
                            <div class="featured-item">
                                <img src="${element.image}" alt="Image" class="img-fluid" width="200px" height="50px">
                                <h4>${element.name}</h4>
                                <h6>${element.price}</h6>
                                <p class="desc mb-4">${element.detail}</p>
                            </div>
                        </a>
                    </div>           
                `;
            });
            shows.innerHTML = html;
        })
        .catch(error => {
            // Xử lý lỗi
            console.error('Error fetching data:', error);
        });
}

let showProductDetails = (productId) => {
    // Chuyển hướng đến trang chi tiết sản phẩm
    window.location.href = `single-product.html?id=${productId}`;
}

showProducts();
