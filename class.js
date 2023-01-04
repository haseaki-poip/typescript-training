var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Point = /** @class */ (function () {
    // 引数がない場合は0
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Point.prototype.moveX = function (n) {
        this.x += n;
    };
    Point.prototype.moveY = function (n) {
        this.y += n;
    };
    return Point;
}());
var point = new Point();
point.moveX(10);
console.log("".concat(point.x, ", ").concat(point.y));
// classの継承
var Point3D = /** @class */ (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        var _this = _super.call(this, x, y) || this;
        // superは親要素のクラスを呼び出す関数
        _this.z = z;
        return _this;
    }
    Point3D.prototype.moveZ = function (n) {
        this.z += n;
    };
    return Point3D;
}(Point));
var point3D = new Point3D();
point3D.moveX(10);
point3D.moveZ(20);
console.log("".concat(point3D.x, ", ").concat(point3D.y, ", ").concat(point3D.z));
// interfaceにimplementsを利用することでクラスの実装を強制
var User = /** @class */ (function () {
    function User() {
        this.name = "";
        this.age = 0;
    }
    User.prototype.sayHello = function () {
        return "\u3053\u3093\u306B\u3061\u306F\u3001\u79C1\u306F".concat(this.name, "\u3001").concat(this.age, "\u6B73\u3067\u3059\u3002");
    };
    // interfaceにあるものを実装しないとコンパイルエラーが起きる
    // interfaceのものに付け足すのはオッケー
    User.prototype.sayGoodbye = function () {
        return "goodbye";
    };
    return User;
}());
var user = new User();
user.name = "Akito";
user.age = 23;
console.log(user.sayHello());
console.log(user.sayGoodbye());
// public, private, protected
var BasePoint3D = /** @class */ (function () {
    function BasePoint3D() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }
    return BasePoint3D;
}());
var basePoint = new BasePoint3D();
basePoint.x; // OK
// basePoint.y // privateのためアクセス不可
// basePoint.z // protectedのためアクセス不可
var ChildPoint = /** @class */ (function (_super) {
    __extends(ChildPoint, _super);
    function ChildPoint() {
        var _this = _super.call(this) || this;
        _this.x; // OK
        // this.y // privateのためアクセス不可
        _this.z; // protectの場合は継承したクラス内ではOK
        return _this;
    }
    return ChildPoint;
}(BasePoint3D));
