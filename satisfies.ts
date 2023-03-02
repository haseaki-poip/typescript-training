// satisfies使い道1
// JSON.stringifyの引数はanyであるため型チェックを行うために
// 一旦型注釈をする
type Foo = {
  id: number;
  name: string;
};
const foo: Foo = { id: 1, name: "foo" };
const json = JSON.stringify(foo);

// satisfiesを使用した場合
const hoge = { id: 2, name: "hoge" };
const json_sf = JSON.stringify(hoge satisfies Foo);

// satisfies使い道2
// 型注釈との違い
// 推論結果を保持できる
type ColorList = {
  // key in ~これらのものをkeyに含むことを意味する
  [key in "red" | "green" | "blue"]: unknown; // unknownはanyより安全な型。
};
// 型注釈の場合
const colorList: ColorList = {
  red: "#ffff",
  green: [199, 199, 199],
  blue: "#00ffff",
};
// colorList.green[0] = 255 <-これができない
// 型注釈によって型チェックした後は結果を保持せずnumber[]であるがunknownとしてみられる
// 一時的に型チェックを行なっているが、その後はその結果を保持せず、型注釈の型のままとなる

// satisfiesの場合
const colorList_sf = {
  red: "#ffff",
  green: [199, 199, 199],
  blue: "#00ffff",
} satisfies ColorList;

colorList_sf.green[0] = 255; // <-これができる
// 型チェック後、その結果を保持するため、型注釈通りのunknown型ではなく、
// {
//     red: string;
//     green: nnumber[]
//     blue: string
// }
// として結果を保持する
