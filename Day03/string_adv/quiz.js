//#region 예시

// 유저에게 비밀번호 설정을 물어보고
// 비밀번호가 it,IT를 포함하면 비밀번호 설정완료! 아니면 비밀번호 설정오류.

// const password = prompt("비밀번호를 설정하시오.");
// const isPass = password.includes("it") || password.includes("IT");
// const msg = isPass
//   ? alert("비밀번호 설정 완료!")
//   : alert("비밀번호 설정 오류!");

//#endregion

// 1. 유저에게 좋아하는 음식을 입력 받고 그 음식을 5번 출력하는 프로그램
// 2. 유저에게 좋아하는 음식과 횟수를 입력 받고 그 음식을 횟수번만큼 출력하는 프로그램
// 3. 유저에게 알파벳 단어를 입력 받고, 6글자보다 작으면 소문자화 하고, 크면 대문자화 출력.

//#region 첫번째 문제

// const userfood = prompt("좋아하는 음식을 입력하세요.");
// console.log(`${userfood.repeat(5)}`);

//#endregion

//#region 두번째 문제

// const userfood2 = prompt(
//   "좋아하는 음식과 그 음식을 얼마나 좋아하는지 숫자로 표현하세요. EX) 떡볶이 6"
// );
// const arrayfood = userfood2.split(" ");
// console.log(arrayfood[0].repeat(Number(arrayfood[1])));

//#endregion

//#region 세번째 문제

// const userword = prompt("아무 영어나 쓰셈.");
// console.log(
//   userword.length >= 6 ? userword.toUpperCase() : userword.toLowerCase()
// );

//#endregion

//#region 기사받기

// const news = `Left-leaning politician Anura Kumara Dissanayake has won Sri Lanka’s presidential election after a historic second round of counting.
// No candidate won more than 50% of the total votes in the first round, where Dissanayake got 42.31% while his closest rival, opposition leader Sajith Premadasa, got 32.76%.
// But Dissanayake, who promised voters good governance and tough anti-corruption measures, emerged as winner after the second count, which tallied voters' second and third choice candidates.
// The election on Saturday was the first to be held since mass protests unseated the country's leader, Gotabaya Rajapaksa, in 2022 after Sri Lanka suffered its worst economic crisis.`;

// alert(news.split(" "));

//#endregion

// 1. 유저에게 단어를 입력받고 소문자이며 대문자로, 대문자면 소문자로
// ex) happy -> HAPPY / SAD -> sad
// 2. 저에게 비밀번호 설정을 물어보자
// 2-1 길이가 8~20가 아니면 비밀번호 길이 오류.
// 2-2 시작이 it,IT로 시작되지 않으면 it, IT로 시작해야함 Display.
// 2-3 특수문자 &#@!중에 하나라도 없으면 비밀번호에 반드시 특수문자 넣어야함 Display.
// 2-4 위에 조건이 모두 통과되면 비밀번호 설정 완료.

//#region 첫번째 문제

//#region 내가한것

// const userword = prompt("영어단어를 입력하세요.");

// function isAllLowerCase(str) {
//   return str === str.toLowerCase();
// }
// const isCheck = isAllLowerCase(userword) ? true : false;
// console.log(isCheck ? userword.toUpperCase() : userword.toLowerCase());

//#endregion

const word = prompt("단어 입력");

console.log(
  word == word.toUpperCase() ? word.toLowerCase() : word.toUpperCase()
);

//#endregion

//#region 두번째 문제

//#region 내가한것. 못풀음

// const password = prompt("비밀번호를 입력하세요.");

// function isCheckPassword(psd) {
//   const isCheck = "비밀번호 설정 완료";
//   if (psd.length <= 8 && psd.length >= 20) {
//     return "비밀번호 길이 오류";
//   }
//   if (!String(psd).startsWith("it") || !String(psd).startsWith("IT")) {
//     return "IT나 it로 시작해야합니다";
//   }
//   if (
//     !String(psd).includes("@") ||
//     !String(psd).includes("#") ||
//     !String(psd).includes("&") ||
//     !String(psd).includes("!")
//   ) {
//     return "특수문자 @,#,!,& 중 하나를 넣어주세요.";
//   }
//   return isCheck;
// }

// console.log(isCheckPassword(password));

//#endregion

const pw = prompt("비밀번호 입력");

const isLengthValid = 8 <= pw.length && pw.length <= 20;
const isStartIT = pw.startsWith("it") || pw.startsWith("IT");
const hasSpacielChar =
  pw.includes("!") || pw.includes("@") || pw.includes("#") || pw.includes("&");

if (!isLengthValid) {
  console.log("비밀번호 길이 오류!");
} else if (!isStartIT) {
  console.log("비밀번호 시작은 it,IT로 시작해야합니다.");
} else if (!hasSpacielChar) {
  console.log("비밀번호에 특수문자 !,@,#,&를 넣어줘야 합니다.");
} else {
  console.log("비밀번호 설정 완료.");
}

//#endregion
