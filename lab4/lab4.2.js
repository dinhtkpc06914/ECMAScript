const axios = require ('axios');

// 1
async function fetchUrls(urls){
    const reSults = [];
    for (const url of urls){
        const res = await axios.get(url);
        reSults.push(res);
    }
    return reSults;
}
//  thực hiện yêu cầu HTTP một cách tuần tự bằng cách sử dụng vòng lặp 
//   await. Mỗi yêu cầu phải chờ cho đến khi yêu cầu trước đó hoàn thành.
// 2
async function fecthUrlsParallel(urls){
    const results = await Promise.all(
        urls.map(function(url){
            return axios.get(url);
        })
    );
}
return results;
// sử dụng Promise.all và map để thực hiện các yêu cầu HTTP 
//đồng thời giúp cải thiện hiệu suất bằng cách không chờ mỗi yêu cầu hoàn thành trước khi bắt đầu yêu cầu tiếp theo.

