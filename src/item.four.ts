interface Vactor2D {
  x: number;
  y: number;
}

function calculateLength(v: Vactor2D) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}

calculateLength({ x: 10, y: 15 });

interface NamedVector {
  name: string;
  x: number;
  y: number;
}

const v: NamedVector = { x: 10, y: 20, name: "zero" };

calculateLength(v);

interface Vector3D {
  x: number;
  y: number;
  z: number;
}

function normalize(v: Vector3D) {
  const length = calculateLength(v);
  return {
    x: v.x / length,
    y: v.y / length,
    z: v.z / length,
  };
}

function calculateLengthL1(v: Vector3D) {
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

function calculateLengthL2(v: Vector3D) {
  return Math.abs(v.x) + Math.abs(v.y) + Math.abs(v.z);
}

class C {
  foo: string;
  constructor(foo: string) {
    this.foo = foo;
  }
}
const c = new C("instance of C");
const d: C = { foo: "object literal" }; // OK!
