// Access Modifiers
// public (default), private, protected
var AccPoint = /** @class */ (function () {
    // an ? makes y optional
    function AccPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    // Methods
    AccPoint.prototype.draw = function () {
        console.log('X: ' + this.x + ' Y: ' + this.y);
    };
    return AccPoint;
}());
// creating a instance of a class (object)
var accPoint = new AccPoint(10, 20);
accPoint.draw(); // X: 10 Y: 20
// Alternative way to protect 
// by prefixing access
// public (default), private, protected
var AlternativeAccPoint = /** @class */ (function () {
    // an ? makes variable optional
    function AlternativeAccPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    // Methods
    AlternativeAccPoint.prototype.draw = function () {
        console.log('X: ' + this.x + ' Y: ' + this.y);
    };
    return AlternativeAccPoint;
}());
// creating a instance of a class (object)
var alternativeAccPoint = new AlternativeAccPoint(10, 20);
alternativeAccPoint.x = 15;
alternativeAccPoint.draw(); // X: 15 Y: 20
