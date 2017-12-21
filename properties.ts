// Properties
class PropPoint {

    // an ? makes variable optional
    constructor(private _x?: number, private _y?: number) {
    }

    // Method
    draw() {
        console.log('X: ' + this._x + ' Y: ' + this._y);
    } 

    // Getter
    get x() {
        return this._x;
    }

    // Setter
    set x(value) {
        if (value < 0)
        throw new Error('Value must be greater than 0');
    }
}

// creating a instance of a class (object)
let propPoint = new PropPoint(10, 20);
let x = propPoint.x;
propPoint.x = 15;
propPoint.draw(); // X: 15 Y: 20
