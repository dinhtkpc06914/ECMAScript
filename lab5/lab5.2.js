console.log('--------------Chuyển đổi code JS sang ES6----------------');

//  Name.prototype.move = function(x,y){
//     this.x = y;
//     this.y = y;
// };

class Name {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    move(x,y){
        this.x = x;
        this.y = y;
    }
}

const myName = new Name("Đình", "Chùa");
myName.move("Miếu", "Đền");
console.log(myName);