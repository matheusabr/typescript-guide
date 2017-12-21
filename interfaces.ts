// Inline Annotation
let drawPoint = (point: { x: number, y: number }) => {
    console.log(point);
}
drawPoint({
    x: 10,
    y: 20
})

// Interface
// use Camel-case
interface MyPoint { 
    x: number, 
    y: number 
}
let alternativeDrawPoint = (point: MyPoint) => {
    console.log(point);
}
alternativeDrawPoint({
    x: 10,
    y: 20
})