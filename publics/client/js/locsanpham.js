function locSanPham() {
    const minPrice = document.getElementById('minPrice').value;
    const maxPrice = document.getElementById('maxPrice').value;
    fetch(API_URL + 'products')
        .then(response => response.json())
        .then(products => {
            const displayedProducts = products.filter(product =>
                (!minPrice || product.price >= minPrice) &&
                (!maxPrice || product.price <= maxPrice)
            );
            const showProducts = document.getElementById('showProducts');
            let html = '';
            displayedProducts.forEach(element => {
                html +=
                    `<div id="${element.id}" class="item new col-md-4">
                    <a href="#" onclick="showProductDetails(${element.id})">
                        <div class="featured-item">
                            <img src="${element.image}" alt="Image" class="img-fluid" width="200px" height="50px">
                            <h4>${element.name}</h4>
                            <h6>${element.price}$</h6>
                            <p class="desc mb-4">${element.detail}</p>
                        </div>
                    </a>
                </div> `;
            });
            showProducts.innerHTML = html;
        })
        .catch(error => {
            console.error('Error:', error);
        });
  }
  