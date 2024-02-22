const API_URL = 'http://localhost:3000/';

const productResource = 'products/';
const orderDetailsResource = 'order_details/';
const orderResource = 'orders/';

let showOrderDetails = (detail) => {
    const orderDiv = document.createElement('div');
    orderDiv.classList.add('row', 'bg-white', 'align-items-center', 'border', 'rounded', 'm-3');
    orderDiv.id = `order-${detail.id}`; // Sử dụng detail.id thay vì order.id vì detail là tham số được truyền vào
    orderDiv.innerHTML  = `<div class="row bg-white align-items-center border rounded m-4" id="order-${detail.id}">
    <div class="col-md-5">
    <div class="container mt-4">
        <div class="image-frame">
            <a href="#" data-toggle="modal" data-target="#productModal">
                <img class="img-fluid flex-shrink-0 rounded" width="150px" src="${detail.product_image}" alt="Product Image"/>
            </a>
        </div>
    </div>
</div>
    <div class="col-md-7">
        <div class="container mt-4">
            <div class="product-price mt-5">
                <h5>Customer name: ${detail.customer_name}</h5>
                <hr>
                <div>
                    <p><b>Product name:</b> ${detail.product_name}</p>
                    <hr>
                    <p><b>Total price:</b> ${detail.total_price}$</p>
                    <hr>
                    <p><b>Quantity:</b> ${detail.quantity}</p>
                    <hr>
                    <p><b>Phone number:</b> ${detail.phone_number}</p>
                    <hr>
                    <p><b>Email:</b> ${detail.email}</p>
                </div>
                <hr>
                <div class="d-flex justify-content-between">
                    <p><b>Created:</b> ${detail.order_time}</p>
                    <hr>
                    <p><b>Location:</b> ${detail.address}</p>
                </div>
            </div>
        </div>
    </div>
</div>
`;

    return orderDiv;
}

let xuLyHoadon = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const idOrder = urlParams.get('id');
    // Lấy dữ liệu của đơn hàng
    const apiOrders = await axios.get(`${API_URL}${orderResource}${idOrder}`);
    const order = apiOrders.data; // Sử dụng const thay vì let vì giá trị không thay đổi
    // Lấy dữ liệu của các chi tiết đơn hàng
    const apiOrderDetails = await axios.get(`${API_URL}${orderDetailsResource}?order_id=${idOrder}`);
    const orderDetails = apiOrderDetails.data; // Sử dụng const thay vì let vì giá trị không thay đổi

    // Lấy thông tin sản phẩm và tạo div cho mỗi sản phẩm
    const orderDivs = await Promise.all(orderDetails.map(async(detail) => {
        const productData = await axios.get(`${API_URL}${productResource}${detail.product_id}`);
        const product = productData.data;
        return showOrderDetails({
            id: detail.id,
            customer_name: order.customer_name,
            product_name: product.name,
            total_price: detail.unit_price * detail.quantity,
            quantity: detail.quantity,
            phone_number: order.customer_phone_number,
            email: order.customer_email,
            order_time: order.created_date,
            address: order.customer_address,
            product_image: product.image
        });
    }));
   
    // Thêm các div vào container
    const ordersContainer = document.getElementById('hienthi');
    orderDivs.forEach(orderDiv => ordersContainer.appendChild(orderDiv));
}

xuLyHoadon();
