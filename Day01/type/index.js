// 문자열(String) - "", '', ``(backtick) 안에 문자를 사용하면 문자열

const number = "1";
const number1 = `1`;
const number2 = "1";

// 숫자열(Number) - 아무것도 없이 숫자를 사용하면 숫자열

const age = 100;
const age1 = 20;
console.log(age + age1);

// Covnert.
// Number로 변경하기.
const a = Number("100"); // "100" -> 100
const b = Number("200"); // "200" -> 200

console.log(a + b); // 300

// string으로 변경하기.
const c = String("100"); // 100 -> "100"
const d = String("4"); // 4 -> "4"

console.log(c + d); // 1004
