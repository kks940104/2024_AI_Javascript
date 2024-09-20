//#region 산술 연산자

// Operator [토큰(상징적)] 일반적으로 연산자라고 함.
// 산술 operator (+, -, *, **, /, %)

// Ex
const a = 1 + 1; // + 연산자 값 : 2
const a1 = 10 - 1; // - 연산자 값 : 9
const a2 = 1 * 2; // * 연산자 값 : 2
const a3 = 2 ** 3; // 제곱 연산자 값 : 8
const a4 = 6 / 2; // 나누기 연산자 값 : 3
const a5 = 8 % 3; // 나머지 연산자 값 : 2
const a6 = -10; // 부호 반대 연산자

const a7 = "치즈" + "떡볶이"; // 문자열 연결 연산자
const a8 = 10 + "인분"; // 10 숫자열 -> 암묵적 타입변환으로 문자열로 변경. 결과로 10인분이 나오는 문자열 연결 연산자로 변경.

//#endregion

//#region 대입 연산자

// 대입 연산자 (=)
const b = "롤";
const b1 = b + "망겜";

//#endregion

//#region 비교 연산자

// 비교 연산자 (<, >, <=, >=, ==, !=, ===) -> boolean타입 귀결
// > 초과 / < 미만 / >= 이상 / <= 이하 / == 같음 / != 다름 / === 타입까지 같음
const c = 5 > 3; // true 초과
const c1 = 5 < 3; // false 미만
const c2 = 5 >= 3; // true 이상
const c3 = 5 <= 3; // false 이하
const c4 = 1 == 1; // ture 같음
const c5 = 1 != 1; // false 다름
const c6 = 1 === 1; // true 타입까지 같음

//#endregion

//#region 논리 연산자

// 논리 연산자(&&,||,!)
// && and / || or / ! not

// &&[and] 연산자는 모두 true여야 true가 됨.
const d1 = 5 > 1 && 3 > 1; // true
const d2 = 5 > 1 && 5 < 1; // false

// ||[or] 연산자는 하나만 true면 true가 됨.
const d3 = 5 < 1 || 3 < 1 || 1 == 1; // true

// ![not] 연산자는 부정의 의미를 가지고 있음.
const d4 = !false; // true
const d5 = !!false; // false
const d6 = !"장원영"; // false -> "문자열"이 들어갔기에 true이고, !가 붙어있기에 부정의 의미로 false가 됨. 암묵적 불리언화.
const d7 = !(5 > 3 && 3 > 1); // false

//#endregion

//#region 삼항 연산자

// 삼항 연산자(?)
// 앞의 내용(참 거짓) ? 참 : 거짓;
const e1 = 10 > 5 ? "아이유" : "윤하"; // 아이유
const e2 = 3 < 10 ? "혜리" : "덕선"; // 덕선

//#endregion
