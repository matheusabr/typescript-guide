// Class with Constructor
// use Camel-case
var AlternativePoint = /** @class */ (function () {
    // an ? makes y optional
    function AlternativePoint(x, y) {
        this.x = x;
        this.y = y;
    }
    // Methods
    AlternativePoint.prototype.draw = function () {
        console.log('X: ' + this.x + ' Y: ' + this.y);
    };
    return AlternativePoint;
}());
// Custom type
// let alternativePoint: AlternativePoint;
// alternativePoint.draw(); // TypeError: Cannot read property 'draw' of undefined
// we have to allocate memory
// creating a instance of a class (object)
var alternativePoint = new AlternativePoint(10);
alternativePoint.draw(); // X: 10 Y: 20
