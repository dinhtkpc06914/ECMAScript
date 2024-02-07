




const API_URL = 'http://localhost:3000/';
let showOders = () => {
    let html = "";
    let index = 1;
    fetch(API_URL + 'orders')
        .then(response => response.json())
        .then(data => {
            const shows = document.getElementById('showOders');
            data.forEach(element => {
                console.log(data);
                html += `
                <tr>
                <td class="cell">${index++}</td>
                <td class="cell"><span class="truncate">${element.customer_name}</span></td>
                <td class="cell"><span class="truncate">${element.customer_phone_number}</span></td>
                <td class="cell"><span class="truncate">${element.customer_address}</span></td>
                <td class="cell"><span class="truncate">${element.customer_email}</span></td>
                <td class="cell"><span class="truncate">${element.created_date}</span></td>
                <td class="cell"><span class="truncate">${element.status}</span></td>
                <td class="cell">
                    <a class="btn-sm app-btn-secondary bg-success text-white" href="#">view</a>
                   
                </td>
            </tr>
                `;
            });
            shows.innerHTML = html;
        })
        .catch(error => {
            // Handle error
        });
}

showOders();
















