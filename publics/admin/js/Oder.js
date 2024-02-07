const API_URL = 'http://localhost:3000/';

// Hiển thị danh sách đơn hàng
function showOrders() {
    fetch(API_URL + 'orders')
        .then(response => response.json())
        .then(data => {
            const ordersContainer = document.getElementById('showOrders');
            let html = "";
            data.forEach(order => {
                html += `
                    <tr>
                        <td>${order.id}</td>
                        <td>${order.customer_name}</td>
                        <td>${order.customer_phone_number}</td>
                        <td>${order.customer_address}</td>
                        <td>${order.customer_email}</td>
                        <td>${order.created_date}</td>
                        <td>${order.status}</td>
                        <td>
                            <button class="btn-sm app-btn-secondary bg-success text-white view-order" data-order-id="${order.id}">View</button>
                        </td>
                    </tr>
                `;
            });
            ordersContainer.innerHTML = html;
        })
        .catch(error => {
            console.error('Error fetching orders:', error);
        });
}

// Hiển thị chi tiết đơn hàng khi bấm vào nút "view"
function viewOrderDetails(orderId) {
    fetch(API_URL + 'order_details?order_id=' + orderId)
        .then(response => response.json())
        .then(data => {
            // Hiển thị chi tiết đơn hàng
            displayOrderDetails(data);
        })
        .catch(error => {
            console.error('Error fetching order details:', error);
        });
}

// Hiển thị thông tin chi tiết đơn hàng
function displayOrderDetails(orderDetails) {
    const modalBody = document.getElementById('orderDetailsModalBody');
    let html = '';
    orderDetails.forEach(detail => {
        html += `  <div class="col-md-10 float-start">
        <h4 class="text-dark text-muted">Order_details</h4>
      </div>

           <tbody>
           <tr>
           <th class="cell">Product Id</th>
           <th class="cell">Quantity</th>
           <th class="cell">Price</th>																		
       </tr>
       <td>${detail.product_id}</td>
           <td>${detail.quantity}</td>
           <td>${detail.unit_price}</td>
           </tbody>
        `;
    });
    modalBody.innerHTML = html;
}

// Thêm sự kiện click vào nút "view"
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('view-order')) {
        const orderId = event.target.dataset.orderId;
        viewOrderDetails(orderId);
    }
});

// Gọi hàm hiển thị danh sách đơn hàng khi trang được tải
showOrders();
