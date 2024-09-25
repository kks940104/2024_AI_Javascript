// | -> (union) : or의 의미로 둘다 쓸 수 있도록 만들어줌.
const b: string | number = "1";

// []이면서 name(문자열), age(문자 및 숫자)

const b1: { name: string; age: string | number }[] = [
  { name: "곽경섭", age: 31 },
  { name: "우현수", age: "23살" },
];

// &(intersection) : and의 의미.
// const b2 : string & number => never타입
const b2: { name: string } & { age: number } = {
  age: 31,
  name: "곽경섭",
};

// 어떤것이든간 다 들어갈 수 있다.
const b3: any = "어떤것이든";

const b4: (x: string) => string = (x) => `${x}맛 아이스크림~`;

const b5: (x: number) => number = (x) => x ** 2;
