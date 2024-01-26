console.log('---------Giải thích giá trị của từ khóa this trong javascript----------------');

// Sử dụng this giúp xác định đối tượng mà một hàm hoạt động trên
//  làm cho mã nguồn linh hoạt và có thể tái sử dụng trong nhiều ngữ cảnh khác nhau.

// ví dụ
function ConCho(){
this.conChoCuaBan = "Mi lu";
}
const conChoCuaToi = new ConCho();
console.log(conChoCuaToi.conChoCuaBan);
// `this` trong constructor trỏ đến `conChoCuaToi`.

// vd2
const myObject = {
    myMethod: function(){
        console.log(this);
    }
}
myObject.myMethod();
// 'this' trỏ đến my object