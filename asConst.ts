// name1の方推論の結果はstringであるため他のstringを代入可能
let name1 = "akito";
name1 = "hasegawa";

// name2はas constにより型推論の結果は"akito型"(リテラル型)となる
// そのためname2にはakito以外代入できない
// リテラル型とは特定の値に限定し示した型
let name2 = "akito" as const;
// name2 = "hasegawa" <- できない

// 配列などでも使用可能
const array = [1, 2, 3] as const;
// array[0] = 0 <- できない
// arrayの方推論の結果は[1, 2, 3]型

// as constを使うことでwideningの防止となる
