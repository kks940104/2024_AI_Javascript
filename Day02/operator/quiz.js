//#region 1번 문제

//1. 출생년도를 물어보고 2005년생 이하이면
//   성인입니다, 아니면 미성년자입니다.

const birth = Number(prompt("당신은 몇년생입니까?")) <= 2005 ? true : false;
console.log(birth ? "성인입니다." : "미성년자입니다.");

//#endregion

//#region 2번 문제

//2. 놀이기구를 탈려고 키를 물어봤을 때
//   150cm이하면 탈 수 없습니다. 이상이면 탈 수 있습니다.

const cm = Number(prompt("당신의 키는 몇cm입니까?")) >= 150 ? true : false;
console.log(cm ? "탈 수 있습니다." : "탈 수 없습니다.");

//#endregion

//#region 3번 문제

//3. 양의 정수를 입력받고, 분초를 바꾸는 프로그램
//   EX) 입력값 : 63
//       출력값 : 1분 3초
//       입력값 : 125
//       출력값 : 2분 5초

const time = Number(prompt("양의 정수를 입력하세요."));

// const minute = (time / 60).toFixed(0);
const minute = parseInt(time / 60);
const seconds = time % 60;

console.log(` ${minute}분 ${seconds}초`);

//#endregion
