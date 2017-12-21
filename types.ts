// Basic Types
let n: number;
let b: boolean;
let s: string;
let a: any;

// Any
a = 1;
a = true;
a = 'a';

// Array
let arrn: number[] = [1, 2, 3];
let arra: any[] = [1, true, 'a'];

// Constants
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

// Enum
enum Color { Red = 0, Green = 1, Blue = 2 };
let background = Color.Red;

// Type Assertions
// message is type any
let message;
message = 'abc';
// so we have to set the type 
// to work with string methods
let indexOfC = (<string>message).indexOf('c');
console.log(indexOfC);
// or
let alternativeIndexOfC = (message as string).indexOf('c');
console.log(alternativeIndexOfC);
