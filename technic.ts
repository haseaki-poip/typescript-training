// optional chaining
interface User {
  name: string;
  social?: {
    facebook: boolean;
    twitter: boolean;
  };
}

let user: User = {
  name: "Akito",
};

console.log(user.social?.facebook); // nullやundefinedでもエラーを出さず処理する
// 事前にnullやundefinedであるかifで分岐してチェックしなくてもよくなる
