// short circuit
// 변수를 만들고 대입할 때 || 및 &&를 사용할 수 있다.
// ex ||

const a = false || true; // -> true
const b = undefined || "자바스크립트"; // -> 자바스크립트

const username = prompt("유저 이름 입력");
alert(`${username || "Guest"}님 환영합니다.`); // -> 위에서 username 변수가 아무것도 들어오지 않았을 경우 Guest님 환영합니다가 뜸.

// ex &&

const c = true && "탕수육"; // -> 탕수육
const d = false && "탕수육"; // -> false

const isLoggin = prompt("당신의 비밀번호를 입력하세요.") == "1234";
isLoggin && alert("주인님 안녕하세요.");
