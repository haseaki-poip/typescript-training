// Conditional Types
// type MyCondition<T, U, X, Y> = T extends U ? X : Y;
// TがUに代入可能であればXを、そうでなければY

// Union typesの分配則: Union typesのConditional Typesは、それぞれのConditional TypesのUnionに展開される。
// すなわち、 (T1 | T2) extends U ? X : Y = (T1 extends U ? X : Y) | (T2 extends U ? X : Y)
// 例
type Diff<T, U> = T extends U ? never : T;
type Result = Diff<"hoge" | "foo" | "piyo", "foo">;
// Resultは"hoge" | never | "piyo" つまり"hoge" | "piyo"の型となる
