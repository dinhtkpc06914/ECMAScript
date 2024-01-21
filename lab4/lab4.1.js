// -------------bài 1--------------- 
let promise = new Promise(function (resolve, reject) {
    resolve(1);
    setTimeout(() => resolve(2), 1000);
});

promise.then(alert);

//promise.then(alert) được sử dụng để đăng ký một hàm callback thông báo (alert) khi Promise hoàn thành. 
//Do đó, khi Promise được giải quyết (với giá trị 1), hàm alert sẽ được gọi và hiển thị 1. 
// Điều quan trọng là cuộc gọi resolve(2) sau 1 giây sẽ không ảnh hưởng đến hàm then, vì Promise đã hoàn thành trước đó.