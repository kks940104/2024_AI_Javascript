//첫번째 문제.
const work_out1 = prompt("첫번째 운동은?");
const work_out2 = prompt("두번째 운동은?");
const work_out3 = prompt("세번째 운동은?");

console.log(`운동 순서 : ${work_out1} → ${work_out2} → ${work_out3}`);

//두번째 문제.
const coffee_price = Number(prompt("아메리카노의 가격은?"));
const coffee_quantity = Number(prompt("몇개 시킬건가요?"));

console.log(`총 가격 : ${coffee_price * coffee_quantity}`);

//세번째 문제.
const birthday = Number(prompt("당신의 태어난 년도는?"));
const current_year = 2024;

console.log(`${current_year - birthday + 1}살이시군요.`);
