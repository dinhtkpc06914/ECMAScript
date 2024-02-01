const API_URL = 'http://localhost:3000/';

let getProductDetailsById = (productId) => {
    fetch(API_URL + `products/${productId}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const pd_details = productsDetails(data);
            const id_products = document.getElementById('produc_details');
            id_products.innerHTML = pd_details;
        })
        .catch(function (error) {
            console.error('Lỗi:', error);
        });
}

// Lấy ID sản phẩm từ URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Gọi hàm để lấy thông tin chi tiết sản phẩm dựa trên ID
getProductDetailsById(productId);

let productsDetails = (product) => {
    return `<div class="row">
    <div class="col-md-12">
      <div class="section-heading">
        <div class="line-dec"></div>
        <h1>Single Product</h1>
      </div>
    </div>
    <div class="col-md-6">
      <div class="product-slider">
        <div id="slider" class="flexslider">
          <ul class="slides">
            <li>
              <img src="${product.image}" alt="Image" class="img-fluid">
            </li>                                        
          </ul>
        </div>          
      </div>
    </div>
    <div class="col-md-6">
      <div class="right-content">
        <h4>${product.name}</h4>
        <h6>${product.price}$</h6>
        <p>${product.detail}</p>
        <span>7 left in stock</span>
        <form action="" method="get">
          <label for="quantity">Quantity:</label>
          <input name="quantity" type="quantity" class="quantity-text" id="quantity" 
              onfocus="if(this.value == '1') { this.value = ''; }" 
              onBlur="if(this.value == '') { this.value = '1';}"
              value="1">
          <input type="submit" class="button" value="Order Now!">
        </form>
        <div class="down-content">
          <div class="categories">
            <h6>Category: <span><a href="#">Pants</a>,<a href="#">Women</a>,<a href="#">Lifestyle</a></span></h6>
          </div>
          <div class="share">
            <h6>Share: <span><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-linkedin"></i></a><a href="#"><i class="fa fa-twitter"></i></a></span></h6>
          </div>
        </div>
      </div>
    </div>
    </div>`;
}
