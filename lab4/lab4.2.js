
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