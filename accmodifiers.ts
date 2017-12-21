// Access Modifiers
// public (default), private, protected
class AccPoint { 
    // Fields is not properties
    private x: number; 
    private y: number;

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

// creating a instance of a class (object)
let accPoint = new AccPoint(10, 20);
accPoint.draw(); // X: 10 Y: 20


// An alternative way to protect 
// by prefixing access modifiers
// public (default), private, protected
class AlternativeAccPoint {

    // an ? makes variable optional
    constructor(public x?: number, private y?: number) {
    }

    // Methods
    draw() {
        console.log('X: ' + this.x + ' Y: ' + this.y);
    } 
}

// creating a instance of a class (object)
let alternativeAccPoint = new AlternativeAccPoint(10, 20);
alternativeAccPoint.x = 15;
alternativeAccPoint.draw(); // X: 15 Y: 20
