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
console.log(reSults);
// 2
async function fecthUrlsParallel(urls){
    const results = await Promise.all(
        urls.map(function(url){
            return axios.get(url);
        })
    );
}
return results;