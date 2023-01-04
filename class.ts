class Point {
  x: number;
  y: number;

  // 引数がない場合は0
  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  moveX(n: number) {
    this.x += n;
  }

  moveY(n: number) {
    this.y += n;
  }
}

const point = new Point();
point.moveX(10);
console.log(`${point.x}, ${point.y}`);

// classの継承
class Point3D extends Point {
  z: number;

  constructor(x: number = 0, y: number = 0, z: number = 0) {
    super(x, y); //継承時は親クラスのconstructorを含める必要がある。
    // superは親要素のクラスを呼び出す関数
    this.z = z;
  }

  moveZ(n: number) {
    this.z += n;
  }
}

const point3D = new Point3D();
point3D.moveX(10);
point3D.moveZ(20);
console.log(`${point3D.x}, ${point3D.y}, ${point3D.z}`);

// interfaceとclass

// Iはinterfaceであることを示唆
interface IUser {
  name: string;
  age: number;
  sayHello: () => string;
}

// interfaceにimplementsを利用することでクラスの実装を強制
class User implements IUser {
  name: string;
  age: number;

  constructor() {
    this.name = "";
    this.age = 0;
  }
  sayHello() {
    return `こんにちは、私は${this.name}、${this.age}歳です。`;
  }
  // interfaceにあるものを実装しないとコンパイルエラーが起きる
  // interfaceのものに付け足すのはオッケー
  sayGoodbye() {
    return "goodbye";
  }
}

const user = new User();
user.name = "Akito";
user.age = 23;
console.log(user.sayHello());
console.log(user.sayGoodbye());

// public, private, protected
class BasePoint3D {
  public x: number;
  private y: number;
  protected z: number;

  constructor() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }
}
const basePoint = new BasePoint3D();
basePoint.x; // OK
// basePoint.y // privateのためアクセス不可
// basePoint.z // protectedのためアクセス不可

class ChildPoint extends BasePoint3D {
  constructor() {
    super();
    this.x; // OK
    // this.y // privateのためアクセス不可
    this.z; // protectの場合は継承したクラス内ではOK
  }
}
