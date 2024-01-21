
// -------------bài 1--------------- 
let promise = new Promise(function (resolve, reject) {
    resolve(1);
    setTimeout(() => resolve(2), 1000);
});

promise.then(alert);

//promise.then(alert) được sử dụng để đăng ký một hàm callback thông báo (alert) khi Promise hoàn thành. 
//Do đó, khi Promise được giải quyết (với giá trị 1), hàm alert sẽ được gọi và hiển thị 1. 
// Điều quan trọng là cuộc gọi resolve(2) sau 1 giây sẽ không ảnh hưởng đến hàm then, vì Promise đã hoàn thành trước đó.


// --------------bài 2--------------
const axios = require('axios');
// 1.
async function fetchUrls(urls) {
    const results = [];
    for (const url of urls) {
        const res = await axios.get(url);
        results.push(res);
    }
    return results;
}
// 2.
async function fetchUrlsParallel(urls) {
    const results = await Promise.all(
        urls.map(function (url) {
            return axios.get(url);
        })
    );
    return results;
};
//fetchUrls: Thực hiện các yêu cầu HTTP đồng bộ, chờ mỗi yêu cầu hoàn thành trước khi bắt đầu yêu cầu tiếp theo.

//fetchUrlsParallel: Sử dụng Promise.all để thực hiện các yêu cầu HTTP đồng thời,
// giúp tối ưu hiệu suất bằng cách chờ cho đến khi tất cả các yêu cầu hoàn thành, sau đó trả về một mảng kết quả. Điều này giúp giảm thời gian chờ đợi tổng cộng so với việc thực hiện các yêu cầu tuần tự.



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