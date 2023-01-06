// クラスなどへ型を渡すことができる
class Queue<T> {
  // 型Tの配列を定義
  private array: T[] = [];

  push(item: T) {
    this.array.push(item);
  }

  // shiftすると配列がない場合undefinedとなる可能性があるため、返り値の型を以下のようにする
  pop(): T | undefined {
    return this.array.shift();
  }
}

const queue = new Queue<number>(); // 数値型を扱うキューを生成する。
console.log(queue.pop()); // 配列に何も入っていないためundefinedとなる
queue.push(111);
// queue.push("a"); // 型が合わないためエラーとなる
const stringQueue = new Queue<string>();
stringQueue.push("aaa");
