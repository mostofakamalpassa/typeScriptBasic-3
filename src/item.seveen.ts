// const x:never = 12;
// ~ Type '12' is not assignable to type 'never'

type A = "A";
type B = "B";

type twelve = 12;

type AB = "A" | "B";
type AB12 = "A" | "B" | 12;

// OK, {"A", "B"} is a subset of {"A", "B"}:
const ab: AB = Math.random() < 0.5 ? "A" : "B";
const ab12: AB12 = ab; // OK, {"A", "B"} is a subset of {"A", "B", 12}
declare let twelves: AB12;
interface Person {
  name: string;
}
interface Lifespan {
  birth: Date;
  death?: Date;
}
type PersonSpan = Person & Lifespan;
interface PersonSpans extends Person {
  birth: Date;
  death: Date;
}

type K = keyof (Person | Lifespan); // Type is never
interface AA {
  name: string;
}

// Vector1D -> subset -> Vector2D -> subset -> Vector3D -> subset
interface Vector1D {
  x: number;
}
interface Vector2D extends Vector1D {
  y: number;
}
interface Vector3D extends Vector2D {
  z: number;
}

// interface Vector1D { x: number; }
// interface Vector2D { x: number; y: number; }
// interface Vector3D { x: number; y: number; z: number; }

function getKey<K extends string>(val: any, key: K) {
  // ...
}

getKey({}, 'x'); // OK, 'x' extends string
getKey({}, Math.random() < 0.5 ? 'a' : 'b'); // OK, 'a'|'b' extends string
getKey({}, document.title); // OK, string extends string
// getKey({}, 12);
// ~~ Type '12' is not assignable to parameter of type 'string'


interface Point{
    x:number;
    y:number;
}

type PointKeys = keyof Point; // Type is "x" | "y";

function sortBy<K extends keyof T, T>(vals: T[], key:|K):T[]{
    return vals;
}

const pts: Point[] = [{x: 1, y: 1}, {x: 2, y: 0}];
sortBy(pts, 'x'); // OK, 'x' extends 'x'|'y' (aka keyof T)
sortBy(pts, 'y'); // OK, 'y' extends 'x'|'y'
sortBy(pts, Math.random() < 0.5 ? 'x' : 'y'); // OK, 'x'|'y' extends 'x'|'y'
// sortBy(pts, 'z');
// ~~~ Type '"z"' is not assignable to parameter of type '"x" | "y"

const list = [1, 2]; // Type is number[]
// const tuple: [number, number] = list;
// ~~~~~ Type 'number[]' is missing the following
// properties from type '[number, number]': 0, 1



const triple: [number, number, number] = [1, 2, 3];
// const double: [number, number] = triple;

// '[number, number, number]' is not assignable to '[number, number]'
// Types of property 'length' are incompatible
// Type '3' is not assignable to type '2'

type T = Exclude<string|Date, string|number>; // Type is Date
type NonZeroNums = Exclude<number, 0>; // Type is still just number