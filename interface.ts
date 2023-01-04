interface Point {
  x: number | string;
  y: number | string;
}

const printPoint = (point: Point) => {
  console.log(`x座標は{point.x}です。`);
  console.log(`y座標は{point.y}です。`);
  console.log(`z座標は{point.z}です。`);
};

// printPoint({ x: 3, y: 4 }); <- 下の記述によってエラーとなる。後ろで拡張されてもエラーとなる

interface Point {
  z: number | string;
}

printPoint({ x: 3, y: 4, z: 5 }); // OK

// extendsで他のinterfaceに拡張
interface Movement extends Point {
  x: number; // extendによって引き継ぐ時型の範囲を狭めることはできる。またanyにすることもできる
  y: number; // number | string -> numberはできるが
  z: number; // number -> stringなどはできない。
  dx: number | string;
  dy: number | string;
  dz: number | string;
}

const move: Movement = {
  x: 1,
  y: 2,
  z: 3,
  dx: 4,
  dy: 5,
  dz: 6,
};

// interface Movement extends Point {
//   dx: number;
//   dy: number;
//   dz: number;
// }
// ^^^ extendsされたあと、そのものに対して再び以上のようにextendsで範囲を狭めることはできない。
