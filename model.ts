// Models
export class ModelPoint {

    // an ? makes variable optional
    constructor(private _x?: number, private _y?: number) {
    }

    // Method
    draw() {
        console.log('X: ' + this._x + ' Y: ' + this._y);
    }
    
}
