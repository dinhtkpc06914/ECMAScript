let promise = new Promise (function(resolve, reject){
    resolve(1);
    setTimeout(()=> resolve(2), 1000);
});
promise.then(alert);

// kết quả khi chạy đoạn code này sẽ là một cửa sổ thông báo hiển thị số 1 sau một khoảng thời gian ngắn,
// không đợi đến khi giá trị resolve thứ hai là 2 được gọi.