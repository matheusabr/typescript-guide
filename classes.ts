// Class
// use Camel-case
class Point { 
    // Fields is not properties
    x: number; 
    y: number;

    // Methods
    draw() {
        console.log('X: ' + this.x + ' Y: ' + this.y);
    } 

    getDistance(another: Point) {
        // ...
    }
}

// Custom type
// let point: Point;
// point.draw(); // TypeError: Cannot read property 'draw' of undefined


// we have to allocate memory
// creating a instance of a class (object)
let point = new Point();
point.draw(); // X: undefined Y: undefined
// so
point.x = 10;
point.y = 20;
point.draw(); // X: 10 Y: 20
