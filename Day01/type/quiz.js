// prompt로 첫번째 숫자 입력
// prompt로 두번째 숫자 입력
// 두 수의 합은 ~~입니다.

// const first = prompt("첫번째 숫자");
// const second = prompt("두번째 숫자");

// const real_first = Number(first);
// const real_second = Number(second);

// console.log(`두 수의 합은 ${real_first + real_second}입니다.`);

const rectangle_legnth = prompt("정사각형의 한변의 길이는?");
const triangle_base = prompt("삼각형의 밑변은?");
const triangle_height = prompt("삼각형의 높이는?");
const radius = prompt("원의 반지름은?");
const year_of_birth = prompt("몇년생인가요?");
const japan_travel = prompt(
  "현재 가지고 있는 금액에서 엔화로 환전할 수 있는 금액은 얼마정도인가요?"
);

const japan_money = 9.31;
const current_year = 2024;

const _rectangle_legnth = Number(rectangle_legnth);
const _triangle_base = Number(triangle_base);
const _triangle_height = Number(triangle_height);
const _radius = Number(radius);
const _year_of_birth = Number(year_of_birth);
const _japan_travel = Number(japan_travel);

console.log(`정사각형의 넓이는 ${_rectangle_legnth * _rectangle_legnth} 이며,
정사각형의 둘레는 ${_rectangle_legnth * 4} 입니다.
정삼각형의 넓이는 ${((_triangle_base * _triangle_height) / 2).toFixed(
  2
)} 입니다.
원의 넓이는 ${(Math.PI * _radius ** 2).toFixed(2)} 이며,
원의 둘레는 ${(2 * Math.PI * _radius).toFixed(2)} 입니다.
당신의 나이는 ${current_year - _year_of_birth + 1} 이며,
일본여행 갈 당시 당신이 돈을 환전한다면 ${(_japan_travel / japan_money).toFixed(
  2
)} 엔을 환전할 수 있습니다.`);
