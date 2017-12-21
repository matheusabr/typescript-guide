// Class with Constructor
// use Camel-case
class AlternativePoint { 
    // Fields is not properties
    x: number; 
    y: number;

    // an ? makes y optional
    constructor(x: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    // Methods
    draw() {
        console.log('X: ' + this.x + ' Y: ' + this.y);
    } 
}

// Custom type
// let alternativePoint: AlternativePoint;
// alternativePoint.draw(); // TypeError: Cannot read property 'draw' of undefined


// we have to allocate memory
// creating a instance of a class (object)
let alternativePoint = new AlternativePoint(10, 20);
alternativePoint.draw(); // X: 10 Y: 20
