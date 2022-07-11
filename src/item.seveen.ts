// const x:never = 12;
// ~ Type '12' is not assignable to type 'never'

type A = "A";
type B = "B";
type C = "C";
type twelve = 12;

type AB = 'A' | 'B';
type AB12 = 'A' | 'B' | 12;