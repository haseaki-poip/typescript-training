type User1 = {
  id: number;
  username: string;
  age: number;
};

const isUser = (params: unknown): params is User1 => {
  const user = params as User1;

  return (
    typeof user?.id === "number" &&
    typeof user?.username === "string" &&
    typeof user?.age === "number"
  );
};

const test = (params: unknown) => {
  // params is User1を関数の返り値宣言部分に書くことで
  // 条件分岐によるisUser(params)の判定後paramsはUser1として断定して絞り込まれる
  if (!isUser(params)) {
    console.log("NG");
    return;
  }

  // params is User1の記述がないと条件分岐によってisUserを行ったあとでも
  // その後は型はunknownとして進んでしまう
  console.log(`OK: ${params.username}`);
};

test({ id: 1, username: "tanaka", age: 21 }); // OK: tanaka
test({ id: 1, username: "tanaka", xxx: 21 }); // NG
