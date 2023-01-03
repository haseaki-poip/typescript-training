const genBirdsInfo = (name: string): string[] => {
  return name.split(",");
};

const singBirds = (birdInfo: (name: string) => string[]): string => {
  return birdInfo("hato, kiji")[0] + " piyo piyo";
};

console.log(singBirds(genBirdsInfo)); // この段階ではgenBirdsInfoの引数は入れれない。関数を渡すだけだから。
// console.log(singBirds(genBirdsInfo("hato, kiji"))); これはエラーとなる
// ^^^^ この場合singBirdsの引数にはgenBirdsInfoの返り血であるstring[]を渡していることになる
