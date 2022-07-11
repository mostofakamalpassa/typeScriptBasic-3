"use strict";
// const x:never = 12;
// ~ Type '12' is not assignable to type 'never'
// OK, {"A", "B"} is a subset of {"A", "B"}:
const ab = Math.random() < 0.5 ? "A" : "B";
const ab12 = ab; // OK, {"A", "B"} is a subset of {"A", "B", 12}
// interface Vector1D { x: number; }
// interface Vector2D { x: number; y: number; }
// interface Vector3D { x: number; y: number; z: number; }
function getKey(val, key) {
    // ...
}
getKey({}, 'x'); // OK, 'x' extends string
getKey({}, Math.random() < 0.5 ? 'a' : 'b'); // OK, 'a'|'b' extends string
getKey({}, document.title); // OK, string extends string
function sortBy(vals, key) {
    return vals;
}
const pts = [{ x: 1, y: 1 }, { x: 2, y: 0 }];
sortBy(pts, 'x'); // OK, 'x' extends 'x'|'y' (aka keyof T)
sortBy(pts, 'y'); // OK, 'y' extends 'x'|'y'
sortBy(pts, Math.random() < 0.5 ? 'x' : 'y'); // OK, 'x'|'y' extends 'x'|'y'
// sortBy(pts, 'z');
// ~~~ Type '"z"' is not assignable to parameter of type '"x" | "y"
const list = [1, 2]; // Type is number[]
// const tuple: [number, number] = list;
// ~~~~~ Type 'number[]' is missing the following
// properties from type '[number, number]': 0, 1
const triple = [1, 2, 3];
// const double: [number, number] = triple;
// '[number, number, number]' is not assignable to '[number, number]'
// Types of property 'length' are incompatible
// Type '3' is not assignable to type '2'
