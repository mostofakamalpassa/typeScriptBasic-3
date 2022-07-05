"use strict";
function calculateArea(shape) {
    // if(shape instanceof Rectangle){
    //     //'Rectangle' only refers to a type,
    //     // but is being used as a value here
    //     return shape.width * shape.height;
    //     //  Property 'height' does not exist
    //     // on type 'Shape'
    // }
    return shape.width * shape.width;
}
function calculateArea2(shape) {
    if ('height' in shape) {
        shape; // Type is Rectangle
        return shape.width * shape.height;
    }
    return shape.width * shape.width;
}
console.log(calculateArea2({ height: 5, width: 10 }));
function calculateArea3(shape) {
    if (shape.kind === 'rectangle') {
        return shape.width * shape.height;
    }
    else if (shape.kind === 'square') {
        return shape.width * shape.width;
    }
}
console.log(calculateArea3({ width: 10, height: 15, kind: 'rectangle' }));
class Squares {
    constructor(width) {
        this.width = width;
    }
}
class Rectangles extends Squares {
    constructor(width, height) {
        super(width);
        this.width = width;
        this.height = height;
    }
}
function calculateArea4(shape) {
    if (shape instanceof Rectangles) {
        return shape.width * shape.height;
    }
    return shape.width * shape.width;
}
console.log(calculateArea4({ width: 10 }));
/* function asNumber(val: number | string): number{
    return val * val;
} */
// function asNumber(val: number): number{
//     return val * val;
// }
// asNumber(10);
function asNumber(val) {
    return typeof (val) == 'string' ? Number(val) : val;
}
asNumber(10);
