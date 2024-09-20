// 기본 타입 : String, Number, Boolean, Null. Underfined
// 참조 타입 : Array

// Array(배열) : []
// 배열 시작은 0부터.
const paik = ["아메리카노", "라떼", "모카", "바닐라"];

console.log(paik); // Array로 다 나옴.

console.log(paik[2]); // 모카만 나옴.

// Quiz - 서브웨이 메뉴 중 빵 고르기 [플랫, 화이트, 위트]
//                        치즈 고르기[슈레드, 모짜렐라, 아메리칸 치즈]
//                        소스 고르기[머스타드, 핫칠리, 소금, 후추, 스언, 홀레]
//                        쿠키 고르기[화이트, 초콜릿, 아몬드]
//                        음료 고르기[콜라, 제로콜라, 스프라이트, 커피]
//        최종메뉴는 플랫-모짜렐라-소금-아몬드쿠키-콜라 나오게 하기.

const breads = ["플랫", "화이트", "위트"];
const cheese = ["슈레드", "모짜렐라", "아메리칸"];
const source = ["머스타드", "핫칠리", "소금", "후추", "스언", "홀레"];
const cookies = ["화이트", "초콜릿", "아몬드"];
const juice = ["콜라", "제로콜라", "스프라이트", "커피"];

const bread_index = Number(
  prompt(`${breads} 중 어떤 빵을 고르시겠습니까? 숫자로 입력해주세요.`)
);
const cheese_index = Number(
  prompt(`${cheese} 중 어떤 치즈를 고르시겠습니까? 숫자로 입력해주세요.`)
);
const source_index = Number(
  prompt(`${source} 중 어떤 소스를 고르시겠습니까? 숫자로 입력해주세요.`)
);
const cookies_index = Number(
  prompt(`${cookies} 중 어떤 쿠키를 고르시겠습니까? 숫자로 입력해주세요.`)
);
const juice_index = Number(
  prompt(`${juice} 중 어떤 음료를 고르시겠습니까? 숫자로 입력해주세요.`)
);

console.log(`${breads[bread_index]}빵과 ${cheese[cheese_index]}치즈 고르셨구요.
소스는 ${source[source_index]} 선택하셨습니다.
쿠키는 ${cookies[cookies_index]} 선택하셨구요.
마지막으로 음료는 ${juice[juice_index]} 선택 하셨네요.`);
