const API_URL = 'http://localhost:3000/';
let showProducts = () => {
    let html = "";
    let index = 1;
    fetch(API_URL + 'products')
        .then(response => response.json())
        .then(data => {
            const shows = document.getElementById('showProducts');
            data.forEach(element => {
                console.log(data);
                html += `
                <tr>
                <td class="cell">${index++}</td>
                <td class="cell"><span class="truncate">${element.name}</span></td>
                <td class="cell"> <img src="${element.image}" alt="Image" class="img-fluid" width="70px" height="30px"></td>
                <td class="cell text-danger">${element.price}</td>   
                <td class="cell text-primary">${element.detail}</td>            
                <td class="cell">
                    <a class="btn-sm app-btn-secondary bg-success text-white" href="#">fix</a>
                    <a class="btn-sm app-btn-secondary bg-danger text-white" href="#">del</a>
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

showProducts();