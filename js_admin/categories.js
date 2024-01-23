const API_URL = 'http://localhost:3000/';
let showCategories = () => {
    let html = "";
    let index = 1;
    fetch(API_URL + 'categories')
        .then(response => response.json())
        .then(data => {
            const shows = document.getElementById('showCategories');
            data.forEach(element => {
                console.log(data);
                html += `
                <tr>
                <td class="cell">${index++}</td>
                <td class="cell"><span class="truncate">${element.name}</span></td>
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

showCategories();
