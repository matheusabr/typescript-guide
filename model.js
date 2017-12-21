"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Models
var ModelPoint = /** @class */ (function () {
    // an ? makes variable optional
    function ModelPoint(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    // Method
    ModelPoint.prototype.draw = function () {
        console.log('X: ' + this._x + ' Y: ' + this._y);
    };
    return ModelPoint;
}());
exports.ModelPoint = ModelPoint;
