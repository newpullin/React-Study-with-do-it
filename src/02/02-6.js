class Shape {
    static create(x, y) { return new Shape(x, y); }
    constructor (x, y) {
        this.move(x,y);
    }
    move(x, y){
        this.x = x;
        this.y = y;
    }

    area() {
        return 0;
    }
}


var s = new Shape(0, 0);
console.log(s.area());

class Circle extends Shape {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }

    area() {
        if(this.radius === 0) return super.area();
        return this.radius*this.radius*Math.PI;
    }
}

var c = new Circle(0, 0, 10);
console.log(c.area())
