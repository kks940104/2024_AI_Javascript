// 함수만들기.

// 1. 매개변수 x를 넣으면 Hello X님!
// 2. 매개변수 x를 넣으면 x핑!
// 3. 매개변수 x를 넣으면 ~이라니 러키비키잖아!
// 4. 두 숫자를 주면 제곱을 돌려주는 함수.
// 5. 년도, 월, 일을 넣으면 오늘은 ~~년도, ~~월, ~~일.
// 6. mbti (ei,ns,tf,jp)를 넣으면 각 mbti에 맞게 출력. 외향적/내향적, 감각적/직관적, 이성적/감성적, 계획적/즉홍적.
// 7. zodiac 태어난 년도를 넣으면 띠돌려주기.

function Hello(x) {
  return `Hello ${x}님!`;
}

function ping(x) {
  return `${x}핑!`;
}
function jang_won_young(x) {
  return `${x}라니 러키비키잖아!`;
}
function square(x, y) {
  return x ** y;
}
function birth(x, y, z) {
  return `오늘은 ${x}년도, ${y}월, ${z}일.`;
}

function mbti(a, b, c, d) {
  const mbtiMap = {
    e: "외향적",
    i: "내향적",
    s: "감각적",
    n: "직관적",
    t: "이성적",
    f: "감성적",
    j: "계획적",
    p: "즉홍적",
  };
  return `${mbtiMap[a]}이며, ${mbtiMap[b]}이고, ${mbtiMap[c]}이며, ${mbtiMap[d]}입니다.`;
}
function zodiac(year) {
  const target = year % 12;
  const animal = {
    0: "원숭이",
    1: "닭",
    2: "개",
    3: "돼지",
    4: "쥐",
    5: "소",
    6: "호랑이",
    7: "토끼",
    8: "용",
    9: "뱀",
    10: "말",
    11: "양",
  };
  return `${animal[target]}띠 입니다.`;
}

const a = prompt("당신의 이름은?");
console.log(Hello(a));

const b = prompt("티니핑 이름은? 핑 빼고.");
console.log(ping(b));

const c = prompt("오늘 어때?");
console.log(jang_won_young(c));

const d = prompt("어떤 수를 제곱하고싶어?");
const e = prompt("지수는 어떤 숫자를 넣고싶어?");

console.log(square(d, e));

const f = prompt("오늘은 몇년도야?");
const g = prompt("오늘은 몇월이야?");
const h = prompt("오늘은 몇일이야?");

console.log(birth(f, g, h));

const i = prompt("당신의 MBTI중 맨 앞자리를 말해주세요.");
const j = prompt("당신의 MBTI중 맨 두번째를 말해주세요.");
const k = prompt("당신의 MBTI중 맨 세번째를 말해주세요.");
const l = prompt("당신의 MBTI중 맨 네번째를 말해주세요.");

console.log(mbti(i, j, k, l));

const m = prompt("당신은 몇년도에 태어나셨나요?");
console.log(zodiac(m));
