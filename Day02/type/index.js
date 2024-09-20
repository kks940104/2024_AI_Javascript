//Boolean 형식으로 true / false의 값만 가짐.
//이 형식은 숫자도, 문자열도 아닌 참거짓 값만 가짐.
const isIce = true;
const hasItem = false;
const isAdult = true;
const isOld = true;
const isYoung = false;

//truthy -> 아래꺼 빼고 전부 다
//falsy -> 0, ""(빈문자열), null, undefined

const a = Boolean(10); // true
const b = Boolean(-3); // true
const c = Boolean("나이가 많다."); // true
const d = Boolean("스타벅스"); // true
const e = Boolean(""); // false
const f = Boolean(0); // false
const g = Boolean(null); // false
