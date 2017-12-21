// Basic Types
var n;
var b;
var s;
var a;
// Any
a = 1;
a = true;
a = 'a';
// Array
var arrn = [1, 2, 3];
var arra = [1, true, 'a'];
// Constants
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var background = Color.Red;
// Type Assertions
// message is type any
var message;
message = 'abc';
// so we have to set the type 
// to work with string methods
var indexOfC = message.indexOf('c');
console.log(indexOfC);
// or
var alternativeIndexOfC = message.indexOf('c');
console.log(alternativeIndexOfC);
