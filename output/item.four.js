"use strict";
function calculateLength(v) {
    return Math.sqrt(v.x * v.x + v.y * v.y);
}
calculateLength({ x: 10, y: 15 });
const v = { x: 10, y: 20, name: "zero" };
calculateLength(v);
function normalize(v) {
    const length = calculateLength(v);
    return {
        x: v.x / length,
        y: v.y / length,
        z: v.z / length,
    };
}
function calculateLengthL1(v) {
    let length = 0;
    for (const axis of Object.keys(v)) {
        const coord = v[axis];
        // Element implicitly has an 'any' type because ...
        // 'string' can't be used to index type 'Vector3D'
        length += Math.abs(coord);
    }
    return length;
}
const vec3D = { x: 3, y: 4, z: 1, address: "123 Broadway" };
calculateLengthL1(vec3D); // OK, returns NaN
function calculateLengthL2(v) {
    return Math.abs(v.x) + Math.abs(v.y) + Math.abs(v.z);
}
class C {
    constructor(foo) {
        this.foo = foo;
    }
}
const c = new C("instance of C");
const d = { foo: "object literal" }; // OK!
