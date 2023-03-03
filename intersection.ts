// intersection type
// TでもありUでもある

type T = { foo: string };
const obj1 = {
  foo: "foo",
};

type U = { bar: number };
const ob2 = {
  foo: "foo", // Uで指定したものが入っていればあとは自由
};

type I = T & U;
// 代入できる
const obj: I = {
  foo: "foo",
  bar: 123,
};
