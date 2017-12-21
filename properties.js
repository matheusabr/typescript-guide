"use strict";
// Properties
var PropPoint = /** @class */ (function () {
    // an ? makes variable optional
    function PropPoint(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    // Method
    PropPoint.prototype.draw = function () {
        console.log('X: ' + this._x + ' Y: ' + this._y);
    };
    Object.defineProperty(PropPoint.prototype, "x", {
        // Getter
        get: function () {
            return this._x;
        },
        // Setter
        set: function (value) {
            if (value < 0)
                throw new Error('Value must be greater than 0');
        },
        enumerable: true,
        configurable: true
    });
    return PropPoint;
}());
// creating a instance of a class (object)
var propPoint = new PropPoint(10, 20);
var x = propPoint.x;
propPoint.x = 15;
propPoint.draw(); // X: 15 Y: 20
