
class Car{
    constructor(){
        this.so="SO";
        this.type="details";
    }
    whatever(){
        console.log("class console wokring!!!!!");
    }
}

class ford extends Car{
    constructor(){
        super();
    }
}
const fobj = new ford();
const objcar = new Car();

// objcar.whatever();
// console.log(fobj.so);