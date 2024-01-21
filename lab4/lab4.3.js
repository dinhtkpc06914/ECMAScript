






// Bài 3


const fs = require('fs').promises;
const axios = require('axios');

const path = require('path');

const filePath = path.join(__dirname, 'data.json')

async function fetchData() {
    try {
        // Đọc dữ liệu từ file
        const fileData = await fs.readFile(filePath, { encoding: 'utf8' });
        console.log('Dữ liệu được tải từ ổ đĩa', fileData);

        // Gửi yêu cầu lấy dữ liệu từ URL
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log('Dữ liệu được tải từ URL', response.data);
    } catch (error) {
        console.error('Lỗi', error.message);
    }
}


fetchData();