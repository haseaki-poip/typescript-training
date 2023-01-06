// 何も値を代入をしないと0, 1, 2 と順番通り入れられる
enum Direction {
  UP,
  Down,
  Left,
  Right,
}

let direction: Direction = Direction.Right;
console.log(direction);
direction = 5; // number型は代入可能
console.log(direction);
// direction = "Left" // 文字列を入れようとするとエラーとなる

enum StringDirection {
  UP = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

const value = "DOWN";
// const enumValue: Direction = value // このままだとenumにある文字列でも代入することはできない
const enumValue = value as StringDirection; // 文字列をenum型に変換する

if (enumValue === StringDirection.Down) {
  console.log("Down is selected");
}

console.log("DOWN" == StringDirection.Down); // true
