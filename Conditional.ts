// Conditional Types
// type MyCondition<T, U, X, Y> = T extends U ? X : Y;
// 型Tが型Uを満たす場合はXを、そうでなければY

// Union typesの分配則: Union typesのConditional Typesは、それぞれのConditional TypesのUnionに展開される。
// すなわち、 (T1 | T2) extends U ? X : Y = (T1 extends U ? X : Y) | (T2 extends U ? X : Y)
// 例
type Diff<T, U> = T extends U ? never : T;
type Result = Diff<"hoge" | "foo" | "piyo", "foo">;
// Resultは"hoge" | never | "piyo" つまり"hoge" | "piyo"の型となる

type Any<T> = T extends any ? T : any;
type Hoge = Any<string | number>;
