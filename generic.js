// クラスなどへ型を渡すことができる
var Queue = /** @class */ (function () {
    function Queue() {
        // 型Tの配列を定義
        this.array = [];
    }
    Queue.prototype.push = function (item) {
        this.array.push(item);
    };
    // shiftすると配列がない場合undefinedとなる可能性があるため、返り値の型を以下のようにする
    Queue.prototype.pop = function () {
        return this.array.shift();
    };
    return Queue;
}());
var queue = new Queue(); // 数値型を扱うキューを生成する。
console.log(queue.pop());
queue.push(111);
