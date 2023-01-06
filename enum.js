// 何も値を代入をしないと0, 1, 2 と順番通り入れられる
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var direction = Direction.Right;
console.log(direction);
direction = 5; // number型は代入可能
console.log(direction);
// direction = "Left" // 文字列を入れようとするとエラーとなる
var StringDirection;
(function (StringDirection) {
    StringDirection["UP"] = "UP";
    StringDirection["Down"] = "DOWN";
    StringDirection["Left"] = "LEFT";
    StringDirection["Right"] = "RIGHT";
})(StringDirection || (StringDirection = {}));
var value = "DOWN";
// const enumValue: Direction = value // このままだとenumにある文字列でも代入することはできない
var enumValue = value; // 文字列をenum型に変換する
if (enumValue === StringDirection.Down) {
    console.log("Down is selected");
}
console.log("DOWN" == StringDirection.Down);
