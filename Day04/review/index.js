// 1. [10,20,30,40,50]을 30이하면 +100, 아니면 +200
// 2. ["americano", "latte", "vanillna", "moca", "mint", "tea"]
// 2.1 5글자 이하면 대문자화, 아니면 '☕'로 바꾸기.

const num = [10, 20, 30, 40, 50];
const coffee = ["americano", "latte", "vanillna", "moca", "mint", "tea"];

const oddeven = num.map((x) => (x <= 30 ? x + 100 : x + 200));

const isCheck5Word = coffee.map((x) =>
  x.length <= 5 ? x.toUpperCase() : "☕"
);

console.log(oddeven);
console.log(isCheck5Word);

// return으로 한줄로 끝나게 된다는 가정이라면 return과 {}를 생략할 수 있다.
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mul = (x, y) => x * y;
