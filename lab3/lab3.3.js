'use strict';
var Entity = function(name,delay){
    this.name = name;
    this.delay = delay;
}
Entity.prototype.greet = function(){
    setTimeout(()=>{
        console.log('Xin chào , tôi tên là : ', this.name);
    }, this.delay);
}
var java = new Entity('Java', 5000);
var cpp = new Entity('C++', 30);
java.greet();
cpp.greet();    