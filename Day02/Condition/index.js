//조건문! (조건에 맞으면 코드 실행)

// const num = Number(prompt("숫자 입력"));

// if (num > 0) {
//   console.log("입력한 값은 양수입니다.");
// } else if (num < 0) {
//   console.log("입력한 값은 음수입니다.");
// } else {
//   console.log("입력한 값은 0입니다.");
// }

// console.log("프로그램 종료.");

//수학 시험 점수 프로그램

// const math = Number(prompt("수학 점수 입력"));

// if (math >= 90) {
//   console.log("A입니다.");
// } else if (math >= 80) {
//   console.log("B입니다.");
// } else if (math >= 70) {
//   console.log("C입니다.");
// } else if (math >= 60) {
//   console.log("D입니다.");
// } else {
//   console.log("F입니다. 수강철회 하십시요.");
// }

// 숫자를 입력해서, 양의 홀수, 양의 짝수, 0, 음의 홀수, 음의 짝수 알려주기.

const num1 = Number(prompt("아무 숫자나 입력하세요."));
const isPositive = num1 > 0;
const isNegetive = num1 < 0;
const isOdd = num1 % 2 == 1;
const isEven = num1 % 2 == 0;

if (isPositive && isOdd) {
  console.log("양의 홀수입니다.");
} else if (isPositive && isEven) {
  console.log("양의 짝수입니다.");
} else if (isNegetive && isOdd) {
  console.log("음의 홀수입니다.");
} else if (isNegetive && isEven) {
  console.log("음의 짝수입니다.");
} else {
  console.log("0입니다.");
}
