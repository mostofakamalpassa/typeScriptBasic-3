"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    if ("height" in shape) {
        shape; // Type is Rectangle
        return shape.width * shape.height;
    }
    return shape.width * shape.width;
}
console.log(calculateArea2({ height: 5, width: 10 }));
function calculateArea3(shape) {
    if (shape.kind === "rectangle") {
        return shape.width * shape.height;
    }
    else if (shape.kind === "square") {
        return shape.width * shape.width;
    }
}
console.log(calculateArea3({ width: 10, height: 15, kind: "rectangle" }));
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
    return typeof val == "string" ? Number(val) : val;
}
asNumber(10);
function setLightSwitch(value) {
    switch (value) {
        case true:
            turnLightOn();
            break;
        case false:
            turnLightOff();
            break;
        default:
            console.log(`I'm afraid I can't do that.`);
    }
}
function turnLightOn() {
    return "light On";
}
function turnLightOff() {
    return "light off";
}
console.log(setLightSwitch(true));
function setLight() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("/light");
        const result = yield response.json();
        setLightSwitch(result.lightSwitchValue);
    });
}
const three = add(1, 2); // Type is number
const twelve = add("1", "2"); // Type is string
