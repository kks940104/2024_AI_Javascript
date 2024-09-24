// 1. [1,2,3,4,5,6,7,8,9,10] 중에 3의 배수만 filter를 이용하여 남기기.
// 2. [1,2,3,4,5,6,7,8,9,10] 중에 4 이상 8 이하만 남기기.
// 3. 알파벳 o가 들어가는 애들만 남기기.
// 4. 문자 길이가 6글자 이상만 남기기.
// 5. 문자 길이가 짝수인 애들만 남기고, 그 남은 것들 대문자화 시키기.

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const fruitArray = [
//   "watermelon",
//   "cherry",
//   "banana",
//   "avocado",
//   "apple",
//   "orange",
//   "pineapple",
//   "strawberry",
// ];

// //#region 전퀴즈 Filter

// //#region 1번문제

// const num1 = num.filter((x) => {
//   return x % 3 == 0;
// });

// console.log(num1);

// //#endregion

// //#region 2번문제

// const num2 = num.filter((x) => {
//   return x >= 4 && x <= 8;
// });

// console.log(num2);

// //#endregion

// //#region 3번문제

// const alpha1 = fruitArray.filter((x) => {
//   return x.includes("o");
// });

// console.log(alpha1);

// //#endregion

// //#region 4번문제

// const alpha2 = fruitArray.filter((x) => {
//   return x.length >= 6;
// });

// console.log(alpha2);

// //#endregion

// //#region 5번문제
// //함수 다음 바로 함수 쓰는것 - 메소드 체이닝(method chaining)
// const alpha3 = fruitArray
//   .filter((x) => {
//     return x.length % 2 == 0;
//   })
//   .map((x) => {
//     return x.toUpperCase();
//   });

// console.log(alpha3);

// //#endregion

// //#endregion

// 유저에게 정수 n,k를 입력 받기 n : 최대 숫자, k : 배수
// 입력값) n = 10, k = 3 출력값 : [3,6,9];
// 입력값) n = 15, k = 5 출력값 : [5,10,15];

// const test = (n, k) => {
//   return Array(n)
//     .fill(0)
//     .map((x, i) => {
//       return i + 1;
//     })
//     .filter((x) => {
//       return x % k == 0;
//     });
// };

// 두 배열 중 false만 남은것들만 짜기
// const todolist = ["점심먹기", "복습하기", "유튜브 보기", "카톡하기"];
// const finished = [false, false, true, true];

// // 함수화 [패턴화]
// const newToDoList = (todolist, finished) => {
//   return todolist.filter((x, i) => {
//     return !finished[i];
//   });
// };

// 찐막 x 기준으로 나눴을 때, 나눠진 문자열의 각각 길이를 배열화시킴.
// "oxooxoxxox" [1,2,1,0,1,0];
// "xabcxdefxghi" [0,3,3,3];

// const test = "xabcxdefxghi".split("x").map((x) => {
//   return x.length;
// });

// console.log(test);

// const test2 = (word) => word.split("x").map((x) => x.length);

// 모음 : 대문자로 변경 a,e,i,o,u

const vowels = ["a", "e", "i", "o", "u"];

const fruits = ["melon", "kiwi", "apple", "banana", "orange"].map((x) =>
  x.split("").map((y) => (vowels.some((z) => z == y) ? y.toUpperCase() : y))
);

console.log(fruits);

// 1 ~ 100 까지 만들고, 369 만들기.
// [1,2,"👏",...]
// 해당 타입에 방법이 없으면 다른 타입으로 변경.

const thrid = ["3", "6", "9"];

const test = Array(100)
  .fill(1)
  .map((x, i) => String(x + i))
  .map((y) => (thrid.some((a) => y.includes(a)) ? "👏" : y));

console.log(test);
