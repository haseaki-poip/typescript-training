// mapped type
type userAttributes = "firstName" | "lastName";

type userObjType = {
  [key in userAttributes]: string;
};
// 以下と同じ
// type userObjType = {
//     [key in "firstName" | "lastName"]: string;
// };

const obj_mp: userObjType = {
  firstName: "hasegawa",
  lastName: "akito",
  // middeleName: "akiwo" 指定のもの以外は入れることができない
};

type Person1 = {
  firstName: string;
  lasttName: string;
};

type PersonType = keyof Person1;
// "firstName" | "lastName"
// keyofによって型から指定するプロアパティを作成する

type userObjType2 = {
  [key in PersonType]: string;
  // 以下のように直接keyofを利用してもOK
  //[key in keyof Person]: string;
};

////////////////////////////////////////////////////////////////////////////////////////////////////
// Utility Typesの使用
// Requiredの原理
// Required<T>の型定義はtype Required<T> = { [P in keyof T]-?: T[P]; }です。-?は型定義から?を取り除く演算子
// Utility Typesの型定義にはMapped Typesが利用されている。そのため直接Mapped Typesを記述する必要がなくなる
type Person2 = {
  firstName: string;
  lastName: string;
  age: number;
};

// ここでいうPerson型がRequire<T>の型Tになる
// ここでいうkeyof Person、つまり firstName | lastName | age が P になる
const taro: Required<Person2> = {
  firstName: "Taro", // T[P] = Person[firstName]の型 = string型
  lastName: "Suzuki", // T[P] = Person[lastName]の型 = string型
  age: 20, // T[P] = Person[age]の型 = number型
};

// NG
// 値の型が違う
//   const saburo: Required<Person2> = {
//     firstName: "Saburo",
//     lastName: 123,
//     age: 20, // T[P] = Person[age]の型 = number型
//   };

// NG
// 指定のもの以外が入っている
//   const saburo: Required<Person2> = {
//     firstName: "Saburo",
//     lastName: "Suzuki",
//     age: 20,
//     sex: "man", // 指定していない
//   };

// Requiredはoptionalのある方をすべて必須のプロパティに変換したい時に使う

// 逆にPartialはすべてoptionalにしたい時に使う
