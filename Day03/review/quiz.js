// 1. 어떤 숫자를 넣으면 홀수인지 짝수인지 돌려주는 함수.(문자열)
// 2. 어떤 숫자를 넣으면 5배수인지 아닌지 돌려주는 함수.(문자열)
// 3. 어떤 숫자를 넣으면 1 - 일반 팝콘, 2 - 카라멜 팝콘, 3 - 치즈 팝콘, 그 외 그런거 없음 돌려주는 함수.(문자열)
// 4. 어떤 문자열을 3개 넣으면 배열로 돌려주는 함수.

//#region 첫번째 문제

//#region 내가한거

// function odd_even(x) {
//   if (x % 2 == 0) {
//     return "짝수";
//   } else {
//     return "홀수";
//   }
// }

// const first = Number(prompt("숫자를 넣어주세요"));
// console.log(odd_even(first));

//#endregion

function oddeven(x) {
  return x % 2 == 1 ? "홀수" : "짝수";
}

const first = Number(prompt("숫자를 넣어주세요"));
console.log(oddeven(first));

//#endregion

//#region 두번째 문제

//#region 내가한거

// function five_drainage(x) {
//   if (x % 5 == 0) {
//     return "5의 배수";
//   } else {
//     return "5의 배수가 아님";
//   }
// }

// const second = Number(prompt("숫자를 넣어주세요"));
// console.log(five_drainage(second));

//#endregion

function isFiveTime(x) {
  return x % 5 == 0 ? "5의 배수" : "5의 배수 아님";
}

const second = Number(prompt("숫자를 넣어주세요"));
console.log(isFiveTime(second));

//#endregion

//#region 세번째 문제

//#region 내가한거

// function popcorn(x) {
//   const shop = {
//     1: "일반 팝콘",
//     2: "카라멜 팝콘",
//     3: "치즈 팝콘",
//   };
//   return shop[x] || "그런거 없음";
// }

// const third = Number(
//   prompt(
//     "팝콘을 숫자로 골라주세요. 1 : 일반 팝콘, 2 : 카라멜 팝콘, 3: 치즈 팝콘"
//   )
// );
// console.log(popcorn(third));

//#endregion

// 무조건 Return을 통해 Output을 배출해야함. 나머지는 순수성을 위반.

function popcorn(x) {
  if (x == 1) {
    return "일반 팝콘";
  } else if (x == 3) {
    return "카라멜 팝콘";
  } else if (x == 2) {
    return "치즈 팝콘";
  } else {
    return "다른 팝콘은 없습니다.";
  }
}

const third = Number(
  prompt(
    "팝콘을 숫자로 골라주세요. 1 : 일반 팝콘, 2 : 카라멜 팝콘, 3: 치즈 팝콘"
  )
);
console.log(popcorn(third));

//#endregion

//#region 네번째 문제

//#region 내가한거

function String_Array(x) {
  const sArray = x.split(",");
  return sArray;
}

const force = prompt(",를 포함하여 문자를 만들어주세요. EX) 사탕,떡볶이,멜론");
console.log(String_Array(force));

//#endregion

//#endregion

//#region 다섯번째 문제

// 어떠한 과일 이름을 넣으면 ~~맛 아이스크림으로 돌려주는 함수 만들기

function icecream(x) {
  return `${x}맛 아이스크림`;
}

function fruitArray(a, b, c) {
  return [a, b, c];
}

const baskin = prompt("좋아하는 과일 이름을 적으시오");
console.log(icecream(baskin));

//#endregion
