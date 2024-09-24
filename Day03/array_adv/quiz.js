//#region 전문제

// 1. [1,2,3,4,5] -> 두배해주기
// 2. [1,2,3,4,5] -> 홀수 2배, 짝수 3배
// 3. [1,2,3,4,5] -> 3 이하면 🍒 아니면 🍉

// const times2 = (x) => {
//   return x * 2;
// };

// const oddEven = (x) => {
//   return x % 2 == 0 ? x * 3 : x * 2;
// };

// const more_less = (x) => {
//   return x <= 3 ? "🍒" : "🍉";
// };

// const num = [1, 2, 3, 4, 5];

// const first = num.map(times2);
// const second = num.map(oddEven);
// const third = num.map(more_less);

// console.log(first);
// console.log(second);
// console.log(third);

//#endregion

// 1. 문자의 길이가 7글자 이상이면 대문자화, 아니면 소문자화
// 2. 알파벳 a가 들어가면 대문자화 아니면 소문자화
// 3. 단어 안에 있는 알파벳 a를 `🍒`로 바꾸기

const fruitArray = [
  "watermelon",
  "cherry",
  "banana",
  "avocado",
  "apple",
  "orange",
  "pineapple",
  "strawberry",
];

const firstArray = fruitArray.map((X) => {
  return X.length >= 7 ? X.toUpperCase() : X.toLowerCase();
});

const secondArray = fruitArray.map((x) => {
  return x.includes("a") ? x.toUpperCase() : x.toLowerCase();
});

const thridArray = fruitArray.map((x) => {
  return x.replaceAll("a", "🍒");
});

console.log(firstArray);
console.log(secondArray);
console.log(thridArray);

const starbucks = [
  { name: "americano", price: 4500, shots: 2, ingredients: ["water", "beans"] },
  { name: "latte", price: 6000, shots: 2, ingredients: ["milk", "beans"] },
  {
    name: "java chip",
    price: 6500,
    shots: 2,
    ingredients: ["milk", "wheat", "beans"],
  },
  {
    name: "honey black tea",
    price: 5700,
    shots: 1,
    ingredients: ["grapefruit ", "water", "source"],
  },
];

// 1번문제 가을시즌 이벤트 -> 모든 가격을 10% 할인한 가격으로 바꿔주셈
// 2번문제 두유시즌 이벤트 -> 성분에 두유 강제 추가
// 3번문제 스타벅스 아아 기념 -> 이름이 아메리카노면 2000원 할인된 가격으로 바꿔주고,샷 하나더 늘려주셈
// 4번문제 인플레이션시즌 이벤트 -> 모든 가격 20% 떡상한 가격으로 바꿔주셈
//{ name: "americano", price: 4500, shots: 2, ingredients: ["water", "beans"] }

const fallEvent = starbucks.map((x) => {
  x.price = x.price * 0.9; // 숫자
  return x;
});

const soyEvent = starbucks.map((x) => {
  x.ingredients.push("soybean"); // []
  return x;
});

const aaEvent = starbucks.map((x) => {
  if (x.name == "americano") {
    x.price = x.price * 0.8;
    x.shot = x.shot + 1;
    return x;
  } else {
    return x;
  }
});

const inplationEvent = starbucks.map((x) => {
  x.price = x.price * 1.2; // 숫자
  return x;
});
