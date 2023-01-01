// タプル
let array1: [number, string] = [1, "a"];
// array1 = ["a", 1]  順番が違うとエラーが出る

// Union型
let array2: (number | string)[] = ["a", 1, "b"]; // 種類があっていれば順番や要素数の制約はない
