document.addEventListener('DOMContentLoaded', function () {
    let API_URLr = 'http://localhost:3000/';

    let showCate = (filter) => {
        let html = "";
        let filterURL = filter ? API_URLr + 'categories/' + filter : API_URLr + 'categories';
        
        fetch(filterURL)
            .then(response => response.json())
            .then(data => {
                const shows = document.getElementById('Categories');
                data.forEach(element => {
                    html += `<a class="dropdown-item" data-filter=".${element.name}">${element.name}</a>`;
                });
                shows.innerHTML = html;

                // Lắng nghe sự kiện click trên nút loại sản phẩm
                document.querySelectorAll('.dropdown-item').forEach(item => {
                    item.addEventListener('click', () => {
                        let selectedCategory = item.dataset.filter.substring(1); // Lấy tên loại sản phẩm
                        showProductsByCategory(selectedCategory);
                    });
                });
            })
            .catch(error => {
                // Xử lý lỗi
            });
    }
    let showProductsByCategory = (category) => {
        let html = "";
        fetch(API_URLr + 'products')
            .then(response => response.json())
            .then(data => {
                const shows = document.getElementById('showProducts');
                data.forEach(element => {
                    if (!category || element.cate_id === getCategoryID(category)) {
                        html += `   <div id="1" class="item new col-md-4">
                        <a href="single-product.html">
                            <div class="featured-item">
                                <a href="single-product.html"><img src="${element.image}" alt="Image" class="img-fluid" width="200px" height="50px">
                                    <h4>${element.name}</h4>
                                    <h6>${element.price}$</h6>
                                    <p class="desc mb-4">${element.detail}</p>
                                </div>
                            </a>
                        </div>      `;
                    }
                });
                shows.innerHTML = html;
            })
            .catch(error => {
                // Xử lý lỗi
            });
    }
    let getCategoryID = (categoryName) => {
        let categories = {
            "T-shirt": 1,
            "Shirt": 2,
            "Jackets": 3,
            "Pants": 4,
            "Bags": 5
        };
        return categories[categoryName] || null;
    }
    showCate();
});
