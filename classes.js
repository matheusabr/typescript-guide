// Class
// use Camel-case
var Point = /** @class */ (function () {
    function Point() {
    }
    // Methods
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ' Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        // ...
    };
    return Point;
}());
// Custom type
// let point: Point;
// point.draw(); // TypeError: Cannot read property 'draw' of undefined
// we have to allocate memory
// creating a instance of a class (object)
var point = new Point();
point.draw(); // X: undefined Y: undefined
// so
point.x = 10;
point.y = 20;
point.draw(); // X: 10 Y: 20
