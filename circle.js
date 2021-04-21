// const Shape = require("./shape.js").default;
import Shape from "./shape.js";
class Circle extends Shape {
    constructor(radius) {
        super(radius);
        
       
    }
    calculatearea(){
        super.calculatearea();
        return this.calculatearea;
    }

  
    }
    var circle1 = new Circle(5);
    circle1.radius;
    circle1.calculatearea()