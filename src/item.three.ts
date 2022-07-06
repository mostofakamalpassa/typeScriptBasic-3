interface Square {
  width: number;
}

interface Rectangle extends Square {
  height: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  // if(shape instanceof Rectangle){
  //     //'Rectangle' only refers to a type,
  //     // but is being used as a value here
  //     return shape.width * shape.height;
  //     //  Property 'height' does not exist
  //     // on type 'Shape'
  // }
  return shape.width * shape.width;
}

function calculateArea2(shape: Shape) {
  if ("height" in shape) {
    shape; // Type is Rectangle
    return shape.width * shape.height;
  }
  return shape.width * shape.width;
}

console.log(calculateArea2({ height: 5, width: 10 }));

interface Square1 {
  kind: "square";
  width: number;
}

interface Rectangle1 {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape1 = Square1 | Rectangle1;
function calculateArea3(shape: Shape1) {
  if (shape.kind === "rectangle") {
    return shape.width * shape.height;
  } else if (shape.kind === "square") {
    return shape.width * shape.width;
  }
}
console.log(calculateArea3({ width: 10, height: 15, kind: "rectangle" }));

class Squares {
  constructor(public width: number) {}
}

class Rectangles extends Squares {
  constructor(public width: number, public height: number) {
    super(width);
  }
}

type Square2 = Squares | Rectangles;

function calculateArea4(shape: Square2) {
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

function asNumber(val: number | string): number {
  return typeof val == "string" ? Number(val) : val;
}

asNumber(10);

interface LightApiResponse {
  lightSwitchValue: boolean;
}

function setLightSwitch(value: boolean) {
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

async function setLight() {
  const response = await fetch("/light");
  const result: LightApiResponse = await response.json();
  setLightSwitch(result.lightSwitchValue);
}

function add(a: number, b: number): number;
function addss(a: string, b: string): string;

const three = add(1, 2); // Type is number
const twelve = addss("1", "2"); // Type is string
